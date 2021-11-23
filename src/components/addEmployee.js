import React, { Component } from "react";
import { AC_ADD_EMPLOYEE, AC_LIST_EMPLOYEE } from "./actions/employeeAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

export class addEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeName: "",
      employeeSalary: "",
      employeeAge: "",
      nameEmptyError: false,
      nameLenError: false,
      salaryEmptyError: false,
      salaryLenError: false,
      ageEmptyError: false,
      ageLenError: false,
    };
    this.nameValidation = this.nameValidation.bind(this);
    this.SalaryValidation = this.SalaryValidation.bind(this);
    this.AgeValidation = this.AgeValidation.bind(this);
    this.validate = this.validate.bind(this);
    // this.employeeData = this.employeeData.bind(this);
  }

  componentDidMount() {
    this.props.listEmployee();
  }

  nameValidation(event) {
    const fieldValue = event.target.value;
    const fieldId = event.target.id;
    if (fieldId === "name") {
      this.setState({ employeeName: fieldValue });
      const name = this.state.employeeName;
      if (name) {
        if (name.length < 2) {
          this.setState({
            nameLenError: true,
            nameEmptyError: false,
          });
        } else {
          this.setState({ nameLenError: false });
        }
      } else {
        this.setState({
          nameEmptyError: true,
          nameLenError: false,
        });
      }
    }
  }

  SalaryValidation(event) {
    const fieldValue = event.target.value;
    const fieldId = event.target.id;
    if (fieldId === "salary") {
      this.setState({ employeeSalary: fieldValue });
      const salary = this.state.employeeSalary;
      if (salary) {
        if (salary.length < 5) {
          this.setState({
            salaryLenError: true,
            salaryEmptyError: false,
          });
        } else {
          this.setState({ salaryLenError: false });
        }
      } else {
        this.setState({
          salaryEmptyError: true,
          salaryLenError: false,
        });
      }
    }
  }

  AgeValidation(event) {
    const fieldValue = event.target.value;
    const fieldId = event.target.id;

    if (fieldId === "age") {
      this.setState({ employeeAge: fieldValue });
      const age = this.state.employeeAge;

      if (age) {
        if (age.length < 3) {
          this.setState({
            ageLenError: false,
            ageEmptyError: false,
          });
        } else {
          this.setState({ ageLenError: true });
        }
      } else {
        this.setState({
          ageEmptyError: true,
          ageLenError: false,
        });
      }
    }
  }

  validate(event) {
    event.preventDefault();
    const name = this.state.employeeName;
    const salary = this.state.employeeSalary;
    const age = this.state.employeeAge;
    let noErrors = false;
    if (!name) {
      this.setState({ nameEmptyError: true });
    } else {
      this.setState({ nameEmptyError: false });
      noErrors = true;
    }
    if (!salary) {
      this.setState({ salaryEmptyError: true });
    } else {
      this.setState({ salaryEmptyError: false });
      noErrors = true;
    }
    if (!age) {
      this.setState({ ageEmptyError: true });
    } else {
      this.setState({ ageEmptyError: false });
      noErrors = true;
    }

    if (noErrors) {
      const employeeData = {
        id: 25,
        employee_name: this.state.employeeName,
        employee_salary: parseInt(this.state.employeeSalary),
        employee_age: parseInt(this.state.employeeAge),
      };
      console.log("-=-=-=employeeData-=-=--=", employeeData);
      this.props.addEmployee(employeeData);
      var employeeList = this.props.EmployeeReducer.employeeList;
      console.log("-=-=-=employeeList-=-=--=", employeeList);
    }
  }

  render() {
    return (
      <div style={{ marginLeft: "22%" }}>
        <div style={{ margin: "8% 20%" }} class="card card-primary">
          <div class="card-header">
            <h1 style={{ textAlign: "center", padding: "1%" }}>Add Employee</h1>
          </div>
          <form>
            <div class="card-body">
              <div class="form-group">
                <label>Employee Name</label>
                <input
                  type="text"
                  value={this.state.employeeName}
                  class="form-control"
                  id="name"
                  placeHolder="Employee Name"
                  onChange={this.nameValidation}
                />
              </div>
              {this.state.nameEmptyError ? (
                <label style={{ color: "red" }}>* This Field is Required</label>
              ) : (
                " "
              )}
              {this.state.nameLenError ? (
                <label style={{ color: "red" }}>
                  * Enter More then 3 Characters
                </label>
              ) : (
                " "
              )}
              <div class="form-group">
                <label>Employee Salary</label>
                <input
                  type="number"
                  value={this.state.employeeSalary}
                  class="form-control"
                  id="salary"
                  placeholder="Employee Salary"
                  onChange={this.SalaryValidation}
                />
              </div>
              {this.state.salaryEmptyError ? (
                <label style={{ color: "red" }}>* This Field is Required</label>
              ) : (
                " "
              )}
              {this.state.salaryLenError ? (
                <label style={{ color: "red" }}>* Enter your LPA</label>
              ) : (
                " "
              )}
              <div class="form-group">
                <label>Employee Age</label>
                <input
                  type="number"
                  value={this.state.employeeAge}
                  class="form-control"
                  id="age"
                  placeholder="Employee Age"
                  onChange={this.AgeValidation}
                />
              </div>
              {this.state.ageEmptyError ? (
                <label style={{ color: "red" }}>* This Field is Required</label>
              ) : (
                " "
              )}
              {this.state.ageLenError ? (
                <label style={{ color: "red" }}>* Enter valide age</label>
              ) : (
                " "
              )}
            </div>
            <div class="card-footer">
              <button
                type="submit"
                onClick={(event) => this.validate(event)}
                class="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
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
  return bindActionCreators(
    { listEmployee: AC_LIST_EMPLOYEE, addEmployee: AC_ADD_EMPLOYEE },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(addEmployee);
