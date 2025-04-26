import { PlanetList, PlanetRoute } from "@/components";

export function Home() {
  return (
    <div className={"flex flex-col-reverse sm:flex-row justify-between gap-10"}>
      <div className="w-full sm:w-3/5">
        <PlanetList />
      </div>
      <div className="w-full sm:w-2/5">
        <PlanetRoute />
      </div>
    </div>
  );
}
