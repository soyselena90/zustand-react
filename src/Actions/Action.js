import http from "../http/Http";
import * as actionTypes from "./ActionType";

export const fetchUsers = () => async (dispatch, getState) => {
   dispatch({ type: FETCH_USERS_REQUEST });
   try {
      const response = await http.get("/users");
      dispatch({ type: FETCH_USERS_SUCCESS, payload: respond.data });
   } catch (error) {
      dispatch({ type: FETCH_USERS_FAILURE, error: error });
   }
};
