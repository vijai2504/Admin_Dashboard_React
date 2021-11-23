import React, { Component } from "react";
import { AC_LIST_EMPLOYEE } from "./actions/employeeAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

export class Dashboard extends Component {
  componentDidMount() {
    this.props.listEmployee();
  }
  render() {
    var employeeList = this.props.EmployeeReducer.employeeList;
    var totalEmployee = employeeList.length;
    let activeEmployee = 0;
    var inActiveEmployee = 0;
    var newEmployee = 0;
    console.log("=-=-==-=-=employeeList=-==-==-", employeeList);
    if (employeeList) {
      activeEmployee = employeeList.filter(
        (emp) => emp.employee_age < 30
      ).length;
      inActiveEmployee = employeeList.filter(
        (emp) => emp.employee_age >= 30
      ).length;
      newEmployee = employeeList.filter(
        (emp) => emp.employee_salary >= 500000
      ).length;
    }
    return (
      <div>
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Dashboard</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Dashboard v1</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3 col-6">
                  <div className="small-box bg-info">
                    <div className="inner">
                      <h3>{totalEmployee}</h3>
                      <p>Total Employees</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag"></i>
                    </div>
                    <a to="Dashboard" className="small-box-footer">
                      More info <i className="fas fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="small-box bg-success">
                    <div className="inner">
                      <h3>{activeEmployee}</h3>
                      <p>Active Employees</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-stats-bars"></i>
                    </div>
                    <a to="Dashboard" className="small-box-footer">
                      More info <i className="fas fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="small-box bg-warning">
                    <div className="inner">
                      <h3>{inActiveEmployee}</h3>
                      <p>Inactive Employees</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-person-add"></i>
                    </div>
                    <a className="small-box-footer">
                      More info <i className="fas fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="small-box bg-danger">
                    <div className="inner">
                      <h3>{newEmployee}</h3>
                      <p>New Employees</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-pie-graph"></i>
                    </div>
                    <a to="Dashboard" className="small-box-footer">
                      More info <i className="fas fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    EmployeeReducer: state.Employee_Reducer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ listEmployee: AC_LIST_EMPLOYEE }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
