import { Calculator } from "./components/Calculator";

import { HandleProvider } from "./hooks/HandleContext";

import "./styles/global.scss";

export function App() {
  return (
    <HandleProvider>
      <Calculator />
    </HandleProvider>
  );
}

