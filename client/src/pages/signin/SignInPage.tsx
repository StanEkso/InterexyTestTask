import React, { useCallback } from "react";
import { Form, Link } from "react-router-dom";
import { useAuthContext } from "../../components/AuthProvider/AuthContext";
import useForm from "../../hooks/useForm";
import useRemember from "../../hooks/useRemember";

const SignInPage = () => {
  const {
    remember,
    rememberedValue,
    handleSetRememberedValue,
    toggleRemembrance,
  } = useRemember("email");
  const { payload, changeHandler, setError } = useForm({
    email: rememberedValue,
  });
  const { signin } = useAuthContext();
  const submitHandler = useCallback(() => {
    const { email = "", password = "" } = payload;
    signin({ email, password })
      .then(() => {
        handleSetRememberedValue(email);
      })
      .catch((e) => {
        setError(e.message);
      });
  }, [payload, signin, setError, handleSetRememberedValue]);
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-3xl text-center font-bold">Sign In</h3>
      <Form
        className="flex flex-col gap-2 max-w-xs mx-auto"
        onSubmit={submitHandler}
      >
        {payload.error && <p className="text-red-500">{payload.error} </p>}
        <input
          type="email"
          className="rounded-sm border-2 py-1 px-2"
          placeholder="Email"
          name="email"
          value={payload.email}
          required
          onChange={changeHandler}
        />
        <input
          type="password"
          className="rounded-sm border-2 py-1 px-2"
          onChange={changeHandler}
          value={payload.password}
          placeholder="Password"
          required
          name="password"
        />
        <div className="flex gap-1 items-center">
          <input
            type="checkbox"
            id="rememberMe"
            className="hidden input+label"
            onChange={toggleRemembrance}
          />
          <label
            htmlFor="rememberMe"
            className={
              (remember ? "bg-blue-500" : "") + " border rounded-sm w-4 h-4"
            }
          ></label>
          <label htmlFor="rememberMe">Remember me </label>
        </div>
        <button type="submit" className="bg-blue-500 py-1 px-2 text-white">
          Sign In
        </button>
      </Form>
      <p className="text-center">
        Don't have an account?{" "}
        <Link to={"../signup"} className="text-blue-500">
          Register here
        </Link>
      </p>
    </div>
  );
};
export default SignInPage;
