import { useRoute } from "@/context/RouteProvider";
import { XIcon } from "lucide-react";
import { MAX_ROUTE_PLANETS } from "@/constants";

export function PlanetRoute() {
  const { routedPlanets, clear } = useRoute();

  const handleClick = () => {
    clear();
  };
  return (
    <div className="relative bg-brand-green-light h-full w-full rounded-md">
      <div className=" flex flex-col justify-center items-center gap-4 mt-4 p-4">
        <h3>{"Your Planetary Route"}</h3>
        {routedPlanets.length === 0 && (
          <h4>{"You have not selected any planets"}</h4>
        )}
        {routedPlanets.length !== 0 && (
          <>
            {routedPlanets.map((planet) => (
              <div key={planet} className="px-2 w-full bg-white">
                <span className="text-lg sm:text-[22px]">{planet}</span>
              </div>
            ))}
            <button
              onClick={handleClick}
              className="flex flex-row gap-2 justify-center items-center text-brand-red-medium w-full hover:text-brand-gray-medium"
            >
              <XIcon className="w-4 h-4  sm:w-6 sm:h-6" />
              <span className="text-lg sm:text-[22px]">{"clear list"}</span>
            </button>
          </>
        )}
      </div>
      <div className="absolute top-4 right-4 text-lg text-brand-gray-DEFAULT">{`${routedPlanets.length}/${MAX_ROUTE_PLANETS}`}</div>
    </div>
  );
}
