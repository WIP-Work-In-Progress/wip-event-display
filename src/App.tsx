import { RouterProvider, createRouter } from "@tanstack/react-router";
import "./App.css";
import { routeTree } from "./routeTree.gen";
import GlobalLayout from "./layout";
import PresentationModeContextProvider from "./features/presentation-mode/presentation-mode.context";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <PresentationModeContextProvider>
      <GlobalLayout>
        <RouterProvider router={router} />
      </GlobalLayout>
    </PresentationModeContextProvider>
  );
}

export default App;
