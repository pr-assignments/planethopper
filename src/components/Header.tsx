import { usePlanet } from "@/context/PlanetProvider";
import { Button } from "./ui/button";
import { RotateCcwIcon } from "lucide-react";
import { toast } from "sonner";
import { useRoute } from "@/context/RouteProvider";

export function Header() {
  const { reset } = usePlanet();
  const { clear } = useRoute();
  const handleClick = () => {
    reset();
    clear();
    toast.success("Hopper just restarted!!!");
  };

  return (
    <div className="flex-none sticky top-0 bg-white z-20">
      <div className=" pb-10 w-full justify-between flex flex-row-reverse sm:flex-col items-center">
        <div className="w-full h-full flex justify-end items-center align-center">
          <Button
            onClick={handleClick}
            variant="ghost"
            className="flex flex-row gap-2 justify-center items-center"
          >
            <RotateCcwIcon className="w-4 h-4  sm:w-6 sm:h-6 text-black" />
            <span className="text-xl">Restart</span>
          </Button>
        </div>
        <div className="flex w-full h-full sm:justify-center align-center items-center">
          <h1>Planet Hopper</h1>
        </div>
      </div>
    </div>
  );
}
