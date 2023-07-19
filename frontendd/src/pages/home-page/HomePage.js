import React, { useEffect } from "react";
import { UserTable } from "../../components/UserTable";
import { AddUserForm } from "../../components/AddUserForm";
import { CustomModal } from "../../components/CustomModal";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAction } from "./userActions";

const HomePage = () => {
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    !users.length && dispatch(getAllUsersAction());
  }, [users.length, dispatch]);
  return (
    <div>
      <h4 className="text-center mt-3">User Management</h4>
      <AddUserForm></AddUserForm>
      {users.length > 0 && <UserTable users={users}></UserTable>}
      <CustomModal></CustomModal>
      {users.length ? (
        <div className="mt-5">
          No of users: <span className="text-bold">{users.length}</span>
        </div>
      ) : (
        <div className="mt-5">No users yet.</div>
      )}
    </div>
  );
};

export default HomePage;
