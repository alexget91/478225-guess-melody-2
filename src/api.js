import axios from "axios";

const configureAPI = () => {
  return axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/guess-melody`,
    timeout: 5000,
    withCredentials: true,
  });
};

export default configureAPI;
