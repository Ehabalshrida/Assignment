import React, { useState } from "react";
import { useFormik } from "formik";
import swal from "sweetalert";
export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      nationality: "",
    },
    validate: (data) => {
      let errors = {};
      if (!data.email) {
        errors.email = "This Field Is required";
      } else if (data.email) {
        if (
          !/^(^[\w.-]{1,30}@[A-Za-z0-9.-]{1,26}\.[A-Za-z]{2,3})$/g.test(
            data.email
          )
        ) {
          errors.email = "Invalid Email format";
        }
      }
      if (!data.firstName) {
        errors.firstName = "This Field Is required";
      }
      if (!data.lasttName) {
        errors.lasttName = "This Field Is required";
      }
      if (!data.nationality) {
        errors.nationality = "This Field Is required";
      }
      if (!data.password) {
        errors.password = "This Field Is required";
      } else if (data.password.length < 6) {
        errors.password = "Please Enter at least 6 digits";
      }
      return errors;
    },
    onSubmit: (data) => {
      console.log("hello submit");
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setEmail(data.email);
      setPassword(data.password);
      setNationality(data.nationality);
      console.log({
        firstName: firstName,
        lastname: lastName,
        password: password,
        email: email,
        nationality: nationality,
      });
      swal("Thanks For Your Registration");

      formik.resetForm();
    },
  });

  const isFormFieldValid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return (
      isFormFieldValid(name) && (
        <small className="p-error">{formik.errors[name]}</small>
      )
    );
  };

  return (
    <>
      <form className="form" onSubmit={formik.handleSubmit}>
        <legend>Registration Form</legend>
        <>
          <input
            required
            value={formik.values.firstName}
            placeholder="First Name"
            onChange={formik.handleChange}
            type="text"
            id="firstName"
            name="firstName"
          />
          <br />
          {getFormErrorMessage("firstName")}
        </>
        <>
          <input
            required
            value={formik.values.lastName}
            placeholder="Last Name"
            onChange={formik.handleChange}
            type="text"
            id="lastName"
            name="lastName"
          />
          <br />
          {getFormErrorMessage("lastName")}
        </>
        <>
          <input
            required
            value={formik.values.email}
            placeholder="Email"
            onChange={formik.handleChange}
            type="text"
            id="email"
            name="email"
          />{" "}
          <br />
          {getFormErrorMessage("email")}
        </>
        <>
          <input
            required
            value={formik.values.password}
            placeholder="Password"
            onChange={formik.handleChange}
            type="password"
            id="password"
            name="password"
          />
          <br />
          {getFormErrorMessage("password")}
        </>
        <>
          <select
            required
            value={formik.values.nationality}
            placeholder="Nationality"
            id="nationality"
            name="nationality"
            onChange={formik.handleChange}
          >
            <option value="1">KSA</option>
            <option value="2">Jordan</option>
            <option value="3">Egypt</option>
            <option value="4">Palestine</option>
          </select>{" "}
          <br />
          {getFormErrorMessage("nationality")}
        </>
        <>
          <button type="submit">Register</button>

        </>
      </form>
    </>
  );
}
