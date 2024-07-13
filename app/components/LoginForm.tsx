"use client";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(data)
    });
    console.log(response.json());
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col mt-10 space-y-4"
    >
      <input
        {...register("email", {
          required: "Email is required",
        })}
        type="email"
        className="w-full p-2 text-lg text-black outline-none rounded-md focus:outline-4 focus:outline-blue-500 placeholder:text-slate-500"
        placeholder="john12@gmail.com"
      />
      {errors.email && (
        <p className="text-base text-yellow-400">{`${errors.email.message}`}</p>
      )}
      <input
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 10,
            message: "Password must be at least 10 characters",
          },
        })}
        type="password"
        className="w-full p-2 text-lg text-black outline-none rounded-md focus:outline-4 focus:outline-blue-500  placeholder:text-slate-500"
        placeholder="password"
      />
      {errors.password && (
        <p className="text-base text-yellow-400">{`${errors.password.message}`}</p>
      )}
      <input
        {...register("confirmPassword", {
          required: "Confirm Password is required",
          validate: (value) =>
            value === getValues("password") || "Password must match",
        })}
        type="password"
        className="w-full p-2 text-lg text-black outline-none rounded-md focus:outline-4 focus:outline-blue-500 placeholder:text-slate-500"
        placeholder="confirm password"
      />
      {errors.confirmPassword && (
        <p className="text-base text-yellow-400">{`${errors.confirmPassword.message}`}</p>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="p-2 font-bold text-lg rounded-md bg-blue-600"
      >
        Login
      </button>
    </form>
  );
}
