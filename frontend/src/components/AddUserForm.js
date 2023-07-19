import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addUserAction } from "../pages/home-page/userActions";
export const AddUserForm = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    let { name, value } = e.target;
    if (name === "email") {
      value = value.toLowerCase();
    }
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addUserAction(form));
  };
  return (
    <div className="add_form">
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col md={4} className="mb-3">
            <Form.Control
              placeholder="First name"
              type="text"
              name="firstName"
              required
              onChange={handleOnChange}
            />
          </Col>
          <Col md={4} className="mb-3">
            <Form.Control
              placeholder="Last name"
              type="text"
              name="lastName"
              required
              onChange={handleOnChange}
            />
          </Col>
          <Col md={4} className="mb-3">
            <Form.Control
              placeholder="Email"
              type="email"
              name="email"
              required
              onChange={handleOnChange}
            />
          </Col>
          <Col md={4} className="mb-3">
            <Form.Control
              placeholder="Phone"
              type="number"
              name="phone"
              required
              onChange={handleOnChange}
            />
          </Col>
          <Col md={4} className="mb-3">
            <Form.Control
              placeholder="dd/mm/yy"
              type="date"
              name="dob"
              required
              onChange={handleOnChange}
            />
          </Col>
        </Row>
        <Button type="submit">Add User</Button>
      </Form>
    </div>
  );
};
