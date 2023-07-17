import { useContext } from "react";
import EditableTableContext from "../context/EmployeeContext";
import TableRow from "./TableRow";
const Table = () => {
  const { employees } = useContext(EditableTableContext);
  const newEmployee = {
    id: -1,
    name: "",
    position: "",
    salary: "",
  };

  return (
    <div className="App">
      <table data-testid="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Posistion</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <TableRow employee={employee} isEditable={false} />
          ))}
          <TableRow employee={newEmployee} isEditable={true} />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
