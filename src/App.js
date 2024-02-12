import "bootstrap/dist/css/bootstrap.min.css";
import DamyMovie from "./pages/DamyMovie";
import AddMovie from "./pages/AddMovie";
function App() {
  return (
    <div className="d-flex flex-column mt-2">
      <AddMovie />
      <DamyMovie />
    </div>
  );
}

export default App;
