import React, { useCallback } from "react";
import { Form } from "react-router-dom";
import { useAuthContext } from "../../components/AuthProvider/AuthContext";
import useForm from "../../hooks/useForm";

const SignInPage = () => {
  const { payload, changeHandler } = useForm();
  const { signin } = useAuthContext();
  const submitHandler = useCallback(() => {
    const { email = "", password = "" } = payload;
    signin({ email, password });
  }, [signin, payload]);
  return (
    <>
      <h3>Sign Up</h3>
      <Form className="flex flex-col gap-2 max-w-xs" onSubmit={submitHandler}>
        <input
          type="email"
          className="rounded-sm border-2 py-1 px-2"
          placeholder="Email"
          name="email"
          onChange={changeHandler}
        />
        <input
          type="password"
          className="rounded-sm border-2 py-1 px-2"
          onChange={changeHandler}
          placeholder="Password"
          name="password"
        />
        <button type="submit" className="bg-blue-500 py-1 px-2 text-white">
          Sign In
        </button>
      </Form>
    </>
  );
};
export default SignInPage;
