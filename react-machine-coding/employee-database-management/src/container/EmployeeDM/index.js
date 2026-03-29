/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import EmployeeList from "../../components/EmployeeList";
import style from "./style.module.scss";
import data from "../../data/employee.json";
import Modal from "../../components/Modal";

const SingleEmployee = ({ employee }) => {
  return (
    <main
      style={{
        width: "60%",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "10px",
      }}
    >
      <img
        src={employee.imageUrl}
        alt="image src"
        style={{ width: "156px", height: "130px" }}
      />
      <div>{`${employee.firstName} ${employee.lastName}`}</div>
      <div>{employee.email}</div>
      <div>{employee.contactNumber}</div>
      <div>{employee.address}</div>
      <div>{employee.dob}</div>
    </main>
  );
};

const EmployeeDM = () => {
  const [employees, setEmployees] = useState(data);
  const [employee, setEmployee] = useState(data[0]);
  const [showModal, setShowModal] = useState(false);

  function deleteEmployee(id) {
    const filterData = employees.filter((employee) => employee.id !== id);
    setEmployees(filterData);
    setEmployee(filterData[0]);
  }

  const handleShowSingleEmployee = (event, employee) => {
    if (event.target.hasAttribute("data-close")) {
      deleteEmployee(employee.id);
    } else {
      const id = event.target.getAttribute("data-id");
      for (let i = 0; i < employees.length; ++i) {
        const emp = employees[i];
        if (emp.id === +id) {
          setEmployee(emp);
        }
      }
    }
  };

  return (
    <main>
      <div id={style.app}>
        <header className={style.header}>
          <h1>Employee Database Management</h1>
          <button className={style.createEmployee}>Add Employee</button>
        </header>
      </div>
      <div className={style.employees}>
        <div className={style.employees__names}>
          <span className={style["employees__names--title"]}>
            Employee List
          </span>
          <div className={style["employees_names--list"]}>
            {employees.map((employee) => {
              return (
                <EmployeeList
                  employee={employee}
                  key={employee.id}
                  handleShowSingleEmployee={handleShowSingleEmployee}
                />
              );
            })}
          </div>
        </div>

        <div className={style.employees__single}>
          <span className={style["employees__single--title"]}>
            Employee Information
          </span>
          <div className={style["employees_names--info"]}>
            {employee && <SingleEmployee employee={employee} />}
          </div>
        </div>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </main>
  );
};

export default EmployeeDM;
