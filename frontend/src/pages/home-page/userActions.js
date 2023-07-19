import {
  addUser,
  deleteUser,
  getAllUsers,
  updateUser,
} from "../../helpers/axiosHelper";
import { setModal } from "../../system-slice/systemSlice";
import { setUsers } from "./userSlice";
import { toast } from "react-toastify";

export const getAllUsersAction = () => async (dispatch) => {
  const { status, users } = await getAllUsers();
  status === "success" && dispatch(setUsers(users));
};

export const addUserAction = (user) => async (dispatch) => {
  const promisePending = addUser(user);
  toast.promise(promisePending, { pending: "Please wait" });
  const { status, message } = await promisePending;
  toast[status](message);
  status === "success" && dispatch(getAllUsersAction());
};
export const deleteUserAction = (_id) => async (dispatch) => {
  const promisePending = deleteUser(_id);
  toast.promise(promisePending, { pending: "Please wait" });
  const { status, message } = await promisePending;
  toast[status](message);
  status === "success" && dispatch(getAllUsersAction());
};
export const updateUserAction = (obj) => async (dispatch) => {
  const promisePending = updateUser(obj);
  toast.promise(promisePending, { pending: "Please wait" });
  const { status, message } = await promisePending;
  toast[status](message);
  status === "success" && dispatch(getAllUsersAction()) && dispatch(setModal());
};
