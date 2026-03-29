import style from "./style.module.scss";

const EmployeeList = ({ employee, handleShowSingleEmployee }) => {
  return (
    <main
      className={style.container}
      onClick={(e) => handleShowSingleEmployee(e, employee)}
      data-id={employee.id}
    >
      <div className={style.title}>{employee.firstName}</div>
      <div data-close="close">❌</div>
    </main>
  );
};

export default EmployeeList;
