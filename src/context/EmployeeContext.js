import React, { useState, createContext } from "react";

const EditableTableContext = createContext();

export const EditableTableProvider = ({ children }) => {
  const initialData = [
    {
      id: 0,
      name: "David Irvine",
      position: "senior SDE",
      salary: 1000,
      isEditable: false,
    },
  ];
  const [employees, setEmployees] = useState(initialData);

  const updateEmployee = (updatedEmployee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
      )
    );
  };

  const addEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [
      ...prevEmployees,
      { ...newEmployee, id: prevEmployees.length },
    ]);
  };

  const contextValue = {
    employees,
    updateEmployee,
    addEmployee,
  };

  return (
    <EditableTableContext.Provider value={contextValue}>
      {children}
    </EditableTableContext.Provider>
  );
};

export default EditableTableContext;
