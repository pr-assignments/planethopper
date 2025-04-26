/**
 * PlanetProvider.tsx
 *
 * This file contains the `PlanetProvider` React context used to manage and provide
 * paginated data from the Star Wars API (SWAPI) for planets. It supports loading data
 * incrementally and provides a reset function to reset the list back to the first page.
 */

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useMemo,
  Dispatch,
  SetStateAction,
  useCallback,
} from "react";
import { Planet, Result } from "../types";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const BASE_URL = import.meta.env.VITE_REACT_APP_API_BASE_URL;

/**
 * Type for the shape of the Planet Context.
 */
type PlanetContextType = {
  planets: Planet[];
  isLoading: boolean;
  error: unknown;
  page: number;
  isLastPage: boolean;
  setPage: Dispatch<SetStateAction<number>>;
  reset: () => void;
};

/**
 * React Context used to provide planet data throughout the app.
 */
const PlanetContext = createContext<PlanetContextType | undefined>(undefined);

/**
 * Provider component that fetches and manages the list of planets.
 * @param {ReactNode} props.children - The children that will consume the context.
 */
export const PlanetProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState<number>(1);
  const [planets, setPlanets] = useState<Planet[]>([]);

  /**
   * Async function to fetch planet data from the SWAPI API.
   * Appends data if page > 1, otherwise resets planet list.
   * @returns {Promise<Result>} The fetched planet data.
   */
  async function fetchPlanets() {
    const res = await axios.get<Result>(BASE_URL + `/planets/?page=${page}`);

    if (page === 1) {
      setPlanets(res.data?.results ?? []);
    } else {
      setPlanets((prevPlanets) => [
        ...prevPlanets,
        ...(res.data?.results ?? []),
      ]);
    }
    return res.data;
  }

  /**
   * Fetches planets on page change using react-query.
   */
  const { data, isLoading, error } = useQuery<Result>({
    queryKey: ["planets", page],
    queryFn: fetchPlanets,
  });

  /**
   * Resets the pagination back to page 1.
   */
  const reset = useCallback(() => {
    setPage(1);
  }, []);

  /**
   * Memoized value for the context to prevent unnecessary re-renders.
   */
  const value = useMemo(
    () => ({
      planets,
      isLoading,
      isLastPage: data?.next === null,
      error,
      page,
      setPage,
      reset,
    }),
    [planets, isLoading, error, page, data?.next, setPage, reset]
  );

  return (
    <PlanetContext.Provider value={value}>{children}</PlanetContext.Provider>
  );
};

/**
 * Custom hook to access the PlanetContext.
 * @throws Error if used outside of PlanetProvider.
 * @returns {PlanetContextType} The planet context.
 */
export const usePlanet = (): PlanetContextType => {
  const context = useContext(PlanetContext);
  if (context === undefined) {
    throw new Error("usePlanet must be used within a PlanetProvider");
  }
  return context;
};
