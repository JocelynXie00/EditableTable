import "./App.css";
import { EditableTableProvider } from "./context/EmployeeContext";
import Table from "./components/Table";
function App() {
  return (
    <div className="App">
      <EditableTableProvider>
        <Table />
      </EditableTableProvider>
    </div>
  );
}

export default App;
