import { MAX_ROUTE_PLANETS } from "@/constants";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useMemo,
  useCallback,
} from "react";

/**
 * Defines the shape of the RouteContext.
 * - `routedPlanets`: A list of planet names or IDs that have been routed.
 * - `addPlanet`: A function to add a new planet name/ID to the list.
 * - `clear`: A function to reset the routed planets list.
 */
type RouteContextType = {
  routedPlanets: string[];
  addPlanet: (planet: string) => void;
  clear: () => void;
};

// Create the React context with an undefined default value
const RouteContext = createContext<RouteContextType | undefined>(undefined);

/**
 * Provides `RouteContext` to child components.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The children that will have access to the context.
 * @returns The provider component for the route context.
 */
export const RouteProvider = ({ children }: { children: ReactNode }) => {
  const [routedPlanets, setRoutedPlanets] = useState<string[]>([]);

  /**
   * Adds a planet to the routed planets list if it does not exist
   * or routed planets list is not full.
   *
   * @param {string} planet - The planet name to add.
   */
  const addPlanet = useCallback((planet: string) => {
    setRoutedPlanets((prev) => {
      if (prev.includes(planet) || prev.length === MAX_ROUTE_PLANETS)
        return prev;
      return [...prev, planet];
    });
  }, []);

  /**
   * Clears the list of routed planets.
   */
  const clear = useCallback(() => {
    setRoutedPlanets([]);
  }, []);

  // Memoized context value to avoid unnecessary re-renders
  const value = useMemo(
    () => ({
      routedPlanets,
      addPlanet,
      clear,
    }),
    [routedPlanets, addPlanet, clear]
  );

  return (
    <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
  );
};

/**
 * Hook to access the RouteContext.
 *
 * @throws Will throw an error if used outside of a `RouteProvider`.
 * @returns The current context value including `routedPlanets`, `addPlanet`, and `clear`.
 */
export const useRoute = (): RouteContextType => {
  const context = useContext(RouteContext);
  if (context === undefined) {
    throw new Error("useRoute must be used within a RouteProvider");
  }
  return context;
};
