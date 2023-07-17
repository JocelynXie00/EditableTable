import { useContext, useState } from "react";
import EditableTableContext from "../context/EmployeeContext";

const TableRow = ({ employee, isEditable }) => {
  const { updateEmployee, addEmployee } = useContext(EditableTableContext);
  const [isEditing, setIsEditing] = useState(isEditable);
  const [editedEmployee, setEditedEmployee] = useState(employee);
  const { id, name, position, salary } = editedEmployee;

  const handleEdit = () => setIsEditing(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSave = () => {
    updateEmployee(editedEmployee);
    setIsEditing(false);
  };

  const handleAdd = () => {
    addEmployee(editedEmployee);
    setEditedEmployee(employee);
  };
  return (
    <tr>
      <td
        data-testid={
          isEditable ? `new-employee-name-input` : `employee-name-div-${id}`
        }
      >
        <input
          type="text"
          disabled={!isEditable}
          name="name"
          value={name}
          onChange={handleChange}
        />
      </td>
      <td
        data-testid={
          isEditable
            ? `new-employee-position-input`
            : `employee-position-div-${id}`
        }
      >
        <input
          type="text"
          name="position"
          disabled={!isEditable}
          value={position}
          onChange={handleChange}
        />
      </td>
      <td
        onClick={handleEdit}
        data-testid={
          isEditing
            ? `employee-salary-input-${id}`
            : `employee-salary-div-${id}`
        }
      >
        <input
          type="number"
          disabled={!isEditing}
          name="salary"
          value={salary}
          onChange={handleChange}
        />
      </td>
      <td>
        {isEditable ? (
          <button
            disabled={!isEditing || !name || !position || !salary}
            onClick={handleAdd}
            data-testid={`new-employee-add-button`}
          >
            Add
          </button>
        ) : (
          <button
            disabled={!isEditing || !salary || employee.salary === salary}
            onClick={handleSave}
            data-testid={`employee-save-button-${id}`}
          >
            Save
          </button>
        )}
      </td>
    </tr>
  );
};

export default TableRow;
