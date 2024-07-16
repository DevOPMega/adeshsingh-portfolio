"use client";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { User } from "@/context/context";
import { loginUser } from "@/utils/login";
import Toast from "./Toast";

const loginURI: string = process.env.NEXT_PUBLIC_API_LOGIN || "";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();
  const router = useRouter();
  const {user, setUser} = useContext(User);

  const onSubmit = async (data: FieldValues) => {
    const response = await loginUser(data);
    const parseResponse = await response.json();
    if (response.status === 200) {      
      toast.success(parseResponse.message);
      setUser({
        ...user,
        email: parseResponse.userCredential.user.email,
        uid: parseResponse.userCredential.user.uid
      });
      setTimeout(() => {
        console.log(user);
        router.push("/user");
      }, 5000);
    }
    else if (response.status === 422) {
      toast.error(`${parseResponse.email} ${parseResponse.password}`);
    }
    else if (response.status === 500) {
      toast.error(`${parseResponse.error}: Try after some time.`)
    } 
    else {
      toast.error("There is some problem in server. Try again later");
    }
    reset();
  };
  
  return (
    <>
      <Toast />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mt-10 space-y-4"
      >
        <input
          {...register("email", {
            required: "Email is required",
          })}
          type="email"
          className={`w-full p-2 text-lg text-black outline-none rounded-md focus:outline-4 ${errors.email ? 'focus:outline-red-500':'focus:outline-blue-500'} placeholder:text-slate-500`}
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
          className={`w-full p-2 text-lg text-black outline-none rounded-md focus:outline-4 ${errors.email ? 'focus:outline-red-500':'focus:outline-blue-500'} placeholder:text-slate-500`}
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
          className={`w-full p-2 text-lg text-black outline-none rounded-md focus:outline-4 ${errors.email ? 'focus:outline-red-500':'focus:outline-blue-500'} placeholder:text-slate-500`}
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
    </>
  );
}
