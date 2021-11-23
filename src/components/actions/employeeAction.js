import axios from "axios";
const LIST_EMPLOYEE = "LIST_EMPLOYEE";
const ADD_EMPLOYEE = "ADD_EMPLOYEE";

export function AC_LIST_EMPLOYEE() {
  return function (dispatch) {
    return axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then(({ data }) => {
        dispatch({ type: LIST_EMPLOYEE, payload: data });
      });
  };
}

export function AC_ADD_EMPLOYEE(employeeData) {
  console.log({ employeeData });
  return function (dispatch) {
    return axios
      .post("http://dummy.restapiexample.com/api/v1/create", employeeData)
      .then(({ employeeData }) => {
        console.log("=--==----data-=-==-=", employeeData);
        console.log("success");
        dispatch({ type: ADD_EMPLOYEE, payload: employeeData });
      })
      .catch((error) => {
        console.log({ error });
      });
  };
}
