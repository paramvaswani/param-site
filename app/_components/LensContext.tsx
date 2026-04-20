"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getLens, type Lens, type LensId } from "@/lib/lenses";

const STORAGE_KEY = "param-site:lens";
const FORK_KEY = "param-site:lens-fork";

type LensState = {
  primary: Lens;
  fork: Lens | null;
  // which one is currently applied to the page
  active: Lens;
  hasChosen: boolean;
};

type LensApi = LensState & {
  choose: (id: LensId) => void;
  forkTo: (id: LensId) => void;
  swapActive: () => void;
  reset: () => void;
};

const Ctx = createContext<LensApi | null>(null);

export function LensProvider({ children }: { children: React.ReactNode }) {
  const [primaryId, setPrimaryId] = useState<LensId | null>(null);
  const [forkId, setForkId] = useState<LensId | null>(null);
  const [activeKey, setActiveKey] = useState<"primary" | "fork">("primary");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Reading localStorage is only possible client-side after mount.
    try {
      const p = window.localStorage.getItem(STORAGE_KEY) as LensId | null;
      const f = window.localStorage.getItem(FORK_KEY) as LensId | null;
      if (p) setPrimaryId(p); // eslint-disable-line react-hooks/set-state-in-effect
      if (f) setForkId(f);
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  const choose = useCallback((id: LensId) => {
    setPrimaryId(id);
    setActiveKey("primary");
    try {
      window.localStorage.setItem(STORAGE_KEY, id);
    } catch {}
  }, []);

  const forkTo = useCallback((id: LensId) => {
    setForkId(id);
    setActiveKey("fork");
    try {
      window.localStorage.setItem(FORK_KEY, id);
    } catch {}
  }, []);

  const swapActive = useCallback(() => {
    setActiveKey((k) => (k === "primary" ? "fork" : "primary"));
  }, []);

  const reset = useCallback(() => {
    setPrimaryId(null);
    setForkId(null);
    setActiveKey("primary");
    try {
      window.localStorage.removeItem(STORAGE_KEY);
      window.localStorage.removeItem(FORK_KEY);
    } catch {}
  }, []);

  const value = useMemo<LensApi>(() => {
    const primary = getLens(primaryId);
    const fork = forkId ? getLens(forkId) : null;
    const active = activeKey === "fork" && fork ? fork : primary;
    return {
      primary,
      fork,
      active,
      hasChosen: hydrated && !!primaryId,
      choose,
      forkTo,
      swapActive,
      reset,
    };
  }, [
    primaryId,
    forkId,
    activeKey,
    hydrated,
    choose,
    forkTo,
    swapActive,
    reset,
  ]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLens(): LensApi {
  const v = useContext(Ctx);
  if (!v) throw new Error("useLens must be used inside LensProvider");
  return v;
}
