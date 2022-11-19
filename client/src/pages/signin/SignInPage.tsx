import React, { useCallback } from "react";
import { Form, Link } from "react-router-dom";
import { useAuthContext } from "../../components/AuthProvider/AuthContext";
import useForm from "../../hooks/useForm";

const SignInPage = () => {
  const { payload, changeHandler, setError } = useForm();
  const { signin } = useAuthContext();
  const submitHandler = useCallback(() => {
    const { email = "", password = "" } = payload;
    signin({ email, password }).catch((e) => {
      setError(e.message);
    });
  }, [payload, signin, setError]);
  return (
    <>
      <h3>Sign In</h3>
      <Form className="flex flex-col gap-2 max-w-xs" onSubmit={submitHandler}>
        {payload.error && <p className="text-red-500">{payload.error} </p>}
        <input
          type="email"
          className="rounded-sm border-2 py-1 px-2"
          placeholder="Email"
          name="email"
          required
          onChange={changeHandler}
        />
        <input
          type="password"
          className="rounded-sm border-2 py-1 px-2"
          onChange={changeHandler}
          placeholder="Password"
          required
          name="password"
        />
        <button type="submit" className="bg-blue-500 py-1 px-2 text-white">
          Sign In
        </button>
      </Form>
      <p>
        Don't have an account?{" "}
        <Link to={"../signup"} className="text-blue-500">
          Register here
        </Link>
      </p>
    </>
  );
};
export default SignInPage;
