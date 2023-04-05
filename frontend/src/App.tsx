import { GlobalContext } from "./contexts/GlobalContext";
import { Router } from "./routes";

export function App() {
  return (
    <GlobalContext>
      <Router />
    </GlobalContext>
  );
}
