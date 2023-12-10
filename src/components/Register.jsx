import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { createUser, updateUsername } = useContext(AuthContext);
  const handleRegister = (e) => {
    setError("");
    setSuccess("");
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(createUser);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User Created SuccessFully");
        updateUsername(username)
          .then(() => {
            console.log("username updated");
          })
          .catch((err) => {
            setError(err.message);
          });
        e.target.reset();
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Username
            </label>
            <input
              type="username"
              id="username"
              name="username"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="">
            {error ? (
              <p className="text-red-700 text-left mb-3">{error}</p>
            ) : (
              ""
            )}
            {success ? (
              <p className="text-success text-left mb-3">{success}</p>
            ) : (
              ""
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
