import { PlanetList, PlanetRoute } from "@/components";

export function Home() {
  return (
    <div
      className={
        "flex flex-col-reverse sm:flex-row justify-between sm:gap-10  overflow-hidden"
      }
    >
      <div className="w-full flex-1 pt-4 sm:pt-0 sm:w-3/5 overflow-y-auto  [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <PlanetList />
      </div>
      <div className="w-full flex h-auto sm:w-2/5 overflow-hidden ">
        <PlanetRoute />
      </div>
    </div>
  );
}
