import React from "react";
import Table from "./Table.js";
import employees from "../data/employees.json";

function EmployeeTable() {
  return <Table data={employees} />;
}

export default EmployeeTable;
