import { Sidebar } from "./components/sidebar";
import { Workflows } from "./components/workflows/Workflows";

function App() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="min-h-screen w-full">
        <Workflows />
      </div>
    </div>
  );
}

export default App;
