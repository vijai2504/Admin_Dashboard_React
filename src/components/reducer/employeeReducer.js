const initialstate = {
  employeeList: [],
};

function Employee_Reducer(state = initialstate, action) {
  switch (action.type) {
    case "LIST_EMPLOYEE":
      return {
        ...state,
        employeeList: action.payload.data,
      };
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employeeList: action.payload.data,
      };
    default:
      return state;
  }
}

export default Employee_Reducer;
