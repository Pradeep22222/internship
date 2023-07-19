import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "../pages/home-page/userActions";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: null,
  dob: null,
};
export const EditUserForm = () => {
  const { selectedUser } = useSelector((state) => state.user);
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  function convertToISODate(dateString) {
    const parts = dateString.split("/");
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];
    return `${year}-${month}-${day}`;
  }
  const handleOnChange = (e) => {
    let { name, value } = e.target;
    if (name === "email") {
      value = value.toLowerCase();
    }
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserAction({ ...form }));
  };
  useEffect(() => {
    setForm(selectedUser);
  }, [selectedUser]);
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col md={4} className="mb-3">
            <Form.Control
              placeholder="First name"
              type="text"
              required
              value={form.firstName}
              name="firstName"
              onChange={handleOnChange}
            />
          </Col>
          <Col md={4} className="mb-3">
            <Form.Control
              placeholder="Last name"
              type="text"
              required
              value={form.lastName}
              name="lastName"
              onChange={handleOnChange}
            />
          </Col>
          <Col md={4} className="mb-3">
            <Form.Control
              placeholder="Email"
              type="email"
              required
              value={form.email}
              name="email"
              onChange={handleOnChange}
            />
          </Col>
          <Col md={4} className="mb-3">
            <Form.Control
              placeholder="Phone"
              type="number"
              required
              value={form.phone}
              name="phone"
              onChange={handleOnChange}
            />
          </Col>
          <Col md={4} className="mb-3">
            <Form.Control
              placeholder="dd/mm/yy"
              type="date"
              required
              value={convertToISODate(new Date(form.dob).toLocaleDateString())}
              name="dob"
              onChange={handleOnChange}
            />
          </Col>
        </Row>
        <Button type="submit">Update User</Button>
      </Form>
    </div>
  );
};
