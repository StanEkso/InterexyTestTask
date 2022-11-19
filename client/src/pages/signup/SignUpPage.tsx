import React, { useCallback } from "react";
import { Form, Link } from "react-router-dom";
import { useAuthContext } from "../../components/AuthProvider/AuthContext";
import useForm from "../../hooks/useForm";

const SignUpPage = () => {
  const { payload, changeHandler, setError } = useForm();
  const { signup } = useAuthContext();
  const submitHandler = useCallback(() => {
    const { email = "", password = "", bio = "", repeatPassword } = payload;
    if (password !== repeatPassword) return setError("Passwords should match!");
    signup({ email, password, bio }).catch((e) => {
      setError(e.message);
    });
  }, [payload, signup, setError]);
  return (
    <>
      <h3>Sign Up</h3>
      <Form className="flex flex-col gap-2 max-w-xs" onSubmit={submitHandler}>
        {payload.error && <p className="text-red-500">{payload.error} </p>}

        <input
          type="email"
          className="rounded-sm border-2 py-1 px-2"
          placeholder="Email"
          name="email"
          onChange={changeHandler}
          required
        />
        <input
          type="password"
          className="rounded-sm border-2 py-1 px-2"
          onChange={changeHandler}
          placeholder="Password"
          required
          name="password"
        />
        <input
          type="repeatPassword"
          className="rounded-sm border-2 py-1 px-2"
          onChange={changeHandler}
          placeholder="Repeat your password"
          required
          name="password"
        />
        <textarea
          name="bio"
          className="rounded-sm border-2 py-1 px-2"
          required
          onChange={changeHandler}
        />
        <button type="submit" className="bg-blue-500 py-1 px-2 text-white">
          Sign up
        </button>
      </Form>
      <p>
        Already have an account?{" "}
        <Link to={"../signin"} className="text-blue-500">
          Login here
        </Link>
      </p>
    </>
  );
};
export default SignUpPage;
