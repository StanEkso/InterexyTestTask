import React, { useCallback } from "react";
import { Form } from "react-router-dom";
import { useAuthContext } from "../../components/AuthProvider/AuthContext";
import useForm from "../../hooks/useForm";

const SignUpPage = () => {
  const { payload, changeHandler } = useForm();
  const { signup } = useAuthContext();
  const submitHandler = useCallback(() => {
    const { email = "", password = "", bio = "" } = payload;
    signup({ email, password, bio });
  }, [signup, payload]);
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
        <textarea
          name="bio"
          className="rounded-sm border-2 py-1 px-2"
          onChange={changeHandler}
        ></textarea>
        <button type="submit" className="bg-blue-500 py-1 px-2 text-white">
          Sign up
        </button>
      </Form>
    </>
  );
};
export default SignUpPage;
