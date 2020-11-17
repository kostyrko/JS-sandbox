import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const ReactHookForm = () => {
  const {
    register,
    errors,
    handleSubmit,
    getValues,
    formState,
    reset,
  } = useForm({ validateCiteriaMode: "all", mode: "onChange" });

  const onSubmit = (data, e) => {
    e.target.reset();
    console.log(data);
  };

  return (
    <div>
      <h5>React Hook Form</h5>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        {/* User name */}
        <div className="form-group">
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            className="form-control"
            name="userName"
            ref={register({
              required: "Username is required",
              maxLength: {
                value: 15,
                message: "Username should be between 6 and 15 characters",
              },
              minLength: {
                value: 6,
                message: "Username should be between 6 and 15 characters",
              },
            })}
          />
          <ErrorMessage errors={errors} name="userName">
            {({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p className="help-block text-danger" key={type}>
                  {message}
                </p>
              ))
            }
          </ErrorMessage>
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            ref={register({
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
          />
          <ErrorMessage errors={errors} name="email">
            {({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p className="help-block text-danger" key={type}>
                  {message}
                </p>
              ))
            }
          </ErrorMessage>
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            ref={register({
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password should be at least 8 characters",
              },
            })}
          />
          <ErrorMessage errors={errors} name="password">
            {({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p className="help-block text-danger" key={type}>
                  {message}
                </p>
              ))
            }
          </ErrorMessage>
        </div>

        {/* Confirm Password */}
        <div className="form-group">
          <label htmlFor="confirmPassword"> Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            ref={register({
              required: "Please confirm your password",
              validate: (value) => {
                if (value === getValues()["password"]) {
                  return true;
                } else {
                  return "Passwords do not match";
                }
              },
            })}
          />
          <ErrorMessage errors={errors} name="confirmPassword">
            {({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p className="help-block text-danger" key={type}>
                  {message}
                </p>
              ))
            }
          </ErrorMessage>
        </div>
        <div className="btn-group">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={!formState.isValid}
          >
            Submit
          </button>
          <button
            className="btn btn-danger"
            type="button"
            onClick={() => reset()}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReactHookForm;
