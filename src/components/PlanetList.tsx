import { usePlanet } from "@/context/PlanetProvider";
import { Button } from "./ui/button";
import { Loader } from "lucide-react";
import { PlanetItem } from "./PlanetItem";
import { ErrorDisplay } from "./ErrorDisplay";

export function PlanetList() {
  const { planets, isLoading, isLastPage, error, setPage } = usePlanet();

  const handleClick = () => {
    setPage((prev) => prev + 1);
  };

  if (error)
    return <ErrorDisplay message={"Oups something went really wrong!"} />;

  return (
    <div className="flex flex-col gap-4">
      {planets.map((planet) => {
        return <PlanetItem key={planet.name} planet={planet} />;
      })}
      {isLoading ? (
        <div className="flex gap-2 items-center text-2xl ">
          <Loader className="size-6 text-brand-gray-dark animate-spin h-12" />
          <span className=" text-brand-gray-dark ">{"Loading"}</span>
        </div>
      ) : (
        <Button
          onClick={handleClick}
          className="border-brand-gray-dark text-2xl w-fit h-12"
          variant={"outline"}
          disabled={isLoading || isLastPage}
        >
          <span className=" text-brand-gray-dark ">{"Fetch planets"}</span>
        </Button>
      )}
    </div>
  );
}
