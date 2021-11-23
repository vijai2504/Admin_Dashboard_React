import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

export class listEmployee extends Component {
  render() {
    var employeeList = this.props.EmployeeReducer.employeeList;
    console.log("=-=--==-=-=-==-=-emp-=-=-==-=", employeeList);
    var empList = [];
    if (employeeList) {
      employeeList.forEach((employee, i) => {
        empList.push(
          <tr key={i}>
            <td>{employee.id}</td>
            <td>{employee.employee_name}</td>
            <td>{employee.employee_salary}</td>
            <td>{employee.employee_age}</td>
          </tr>
        );
      });
    }
    return (
      <div style={{ overflowY: "scroll", maxHeight: "90vh" }}>
        <div style={{ marginLeft: "20%" }} className="container">
          <h1 style={{ textAlign: "center", padding: "1%" }}>List Employee</h1>
          <table
            style={{ textAlign: "center", padding: "1%" }}
            className="table table-striped table-bordered"
          >
            <thead>
              <tr>
                <th>Id</th>
                <th>Employee Name</th>
                <th>Salary</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>{empList}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("=-=--==-=-=-==-=-emp-=-=-==-=", state);
  return {
    EmployeeReducer: state.Employee_Reducer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(listEmployee);
