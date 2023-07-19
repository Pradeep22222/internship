import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../system-slice/systemSlice";
import {
  deleteUserAction,
  getAllUsersAction,
} from "../pages/home-page/userActions";
import { setselectedUser } from "../pages/home-page/userSlice";
export const UserTable = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  const handleOnEdit = (user) => {
    const { createdAt, updatedAt, __v, ...rest } = user;
    dispatch(setselectedUser(rest));
    dispatch(setModal());
  };
  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete the user?")) {
      dispatch(deleteUserAction(_id));
    }
  };
  useEffect(() => {
    !users.length  && dispatch(getAllUsersAction());
  }, [users.length, dispatch]);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date of Birth</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length &&
            users.map((user, i) => {
              const { firstName, lastName, email, phone, dob, _id } = user;
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>{new Date(dob).toLocaleDateString()}</td>
                  <td>
                    <Button
                      className="action_button"
                      onClick={() => handleOnEdit(user)}
                    >
                      Edit
                    </Button>
                    <Button
                      className="action_button"
                      variant="danger"
                      onClick={() => handleOnDelete(_id)}
                    >
                      delete
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};
