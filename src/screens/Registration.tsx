import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Registration: React.FC = () => {
  const initialValues = {
    username: "",
    email: "",
    userType: "customer", // Default type
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "User name must be at least 3 characters")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    userType: Yup.string()
      .oneOf(["customer", "admin"], "Invalid user type")
      .required("User type is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    // Handle registration logic here
    console.log("Registration Data:", values);
  };

  return (
    <div className="max-w-md mx-auto m-24 justify-center items-center h-screen">
      <div className="p-5 border border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-5">Register</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleBlur }) => (
            <Form>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="username"
                >
                  User name
                </label>
                <Field
                  type="text"
                  id="username"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="userType"
                >
                  Type
                </label>
                <Field
                  as="select"
                  id="userType"
                  name="userType"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                >
                  <option value="customer">Customer</option>
                  <option value="admin">Admin</option>
                </Field>
                <ErrorMessage
                  name="userType"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Registration;
