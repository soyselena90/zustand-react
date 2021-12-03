import axios from "axios";
import fetchAPI from "../API/API";

// instance 생성
const httpUser = axios.create({
   baseURL: process.env.REACT_APP_API_DOMAIN,
   // params: {key : process.env.REACT_APP_~~}
});

const fetchData = new fetchAPI(httpUser); // 객체생성

export default fetchData;
