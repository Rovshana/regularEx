import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ListGroup } from "react-bootstrap";

class Phone extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      phone: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(items) {
    console.log(items);
    this.setState({
      email: items.email,
      phone: items.phone,
      password: items.password,
    });
  }

  render() {
    return (
      <div>
        <ListGroup as="ul" style={{listStyle: 'none'}}>
         
          <ListGroup.Item as="li" >Mail:{this.state.email}</ListGroup.Item>
          <ListGroup.Item as="li">Password:{this.state.password}</ListGroup.Item>
          <ListGroup.Item as="li">
          Phone:{this.state.phone}
          </ListGroup.Item>
        </ListGroup>
        <Formik
          initialValues={{ email: "", password: "", phone: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.phone) {
              errors.phone = "Please enter phone num!!!";
            } else if (
              !/^\+994+\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/i.test(values.phone)
            ) {
              errors.phone =
                "Please enter Valid phone Number :) +994 77 321 21 19";
            }
            return errors;
          }}
          onSubmit={this.handleSubmit}
        >
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <br />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <br />

            <Field type="text" name="phone" />
            <ErrorMessage name="phone" component="div" />
            <br />
            <button type="submit" onClick={this.handleSubmit}>
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    );
  }
}

export default Phone;
