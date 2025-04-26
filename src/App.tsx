import { BasicLayout } from "./layout/BasicLayout";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { PlanetProvider } from "./context/PlanetProvider";
import { Home } from "./pages";
import { RouteProvider } from "./context/RouteProvider";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        //other query settings
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <PlanetProvider>
        <RouteProvider>
          <BasicLayout>
            <Home />
          </BasicLayout>
        </RouteProvider>
      </PlanetProvider>
    </QueryClientProvider>
  );
}

export default App;
