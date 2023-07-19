import axios from "axios";
const url = process.env.REACT_APP_API_ENDPOINT + "users";
const apiProcessor = async ({ method, url, data }) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {}
};
export const getAllUsers = () => {
  const options = {
    method: "get",
    url,
  };
  return apiProcessor(options);
};
export const addUser = (user) => {
  const options = {
    method: "post",
    url,
    data: user,
  };
  return apiProcessor(options);
};

export const deleteUser = (_id) => {
  const options = {
    method: "delete",
    url: url + "/" + _id,
  };
  return apiProcessor(options);
};
export const updateUser = (data) => {
  const options = {
    method: "put",
    url: url,
    data,
  };
  return apiProcessor(options);
};
