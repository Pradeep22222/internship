import React from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../system-slice/systemSlice";
import { EditUserForm } from "./EditUserForm";

export const CustomModal = () => {
  const { modal } = useSelector((state) => state.system);
  const dispatch = useDispatch();
  const onHide = () => {
    dispatch(setModal());
  };

  return (
    <div>
      <Modal
        show={modal}
        onHide={onHide}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Edit User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm></EditUserForm>
        </Modal.Body>
      </Modal>
    </div>
  );
};
