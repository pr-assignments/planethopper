import NoImage from "@/assets/icons/NoImage";
import { useRoute } from "@/context/RouteProvider";
import { Planet } from "@/types";
import { useState } from "react";

const PLANET_IMAGES = [
  "https://images.ferryhopper.com/locations/Skiathos.jpg",
  "https://images.ferryhopper.com/locations/Santorini.jpg",
  "https://images.ferryhopper.com/locations/Naxos.jpg",
  "https://images.ferryhopper.com/locations/Ios.JPG",
];

export function PlanetItem({ planet }: Readonly<{ planet: Planet }>) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { addPlanet } = useRoute();
  const imageIndex = planet.name.length % 4;
  const imageUrl = PLANET_IMAGES[imageIndex];

  const handleClick = (planetName: string) => {
    addPlanet(planetName);
  };

  return (
    <button
      onClick={() => handleClick(planet.name)}
      className="border-2 p-2 border-brand-gray-light hover:border-green-400 rounded-md flex flex-row  gap-4 text-start"
    >
      {(isLoading || hasError) && <NoImage />}
      {!hasError && (
        <img
          src={imageUrl}
          alt={planet.name}
          className="object-cover w-[86px] h-[86px]"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          style={{ display: isLoading ? "none" : "block" }}
        />
      )}
      <div className="flex flex-col justify-between">
        <h2>{planet.name}</h2>
        <div className="flex flex-col ">
          <span className="info">{planet.terrain}</span>
          <span className="info">{planet.population}</span>
        </div>
      </div>
    </button>
  );
}
