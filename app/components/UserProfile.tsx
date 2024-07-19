"use client";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import Toast from "./Toast";
import { User } from "@/context/context";
import { updateUserProfile, userProfile } from "@/utils/user";

export default function UserProfile() {
  const [disabled, setDisabled] = useState(true); // Disabled input
  const [edit, setEdit] = useState(false); // Enabled edit option
  const [update, setUpdate] = useState(true); // Update state trigger useEffect
  const { user, setUser } = useContext(User); // Context

  // useForm hook
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({ values: user });

  useEffect(() => {
    const getUserInfo = async () => {
      const response = await userProfile();
      const parseResponse = await response.json();
      setUser({
        ...user,
        email: parseResponse.email,
        name: parseResponse.name,
        phoneNo: parseResponse.phoneNo,
      });
    };
    getUserInfo();
  }, [update]);

  // useForm handleSubmit function
  const onSubmit = async (data: FieldValues) => {
    console.log("submitting");
    const response = await updateUserProfile(data);
    const parseResponse = await response.json();
    if (response.status === 202) {
      toast.success(parseResponse.message);
      setDisabled(true);
      setEdit(false);
      setUpdate(true);
    }
  };

  // handle function for setEdit and setDisabled
  const handleOnClick = () => {
    setEdit(true);
    setDisabled(false);
  };

  return (
    <>
      <Toast />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mt-10 space-y-8 text-lg"
      >
        <div className="flex flex-col">
          <span className="text-slate-200">Email ID</span>
          <span className="mt-2 text-slate-300 text-base border-b">
            {user.email}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-slate-200">Name</span>
          <input
            type="text"
            className={`mt-2 px-2 py-2 text-slate-300 text-base outline-none bg-transparent border-b focus:border-b-blue-500 ${!disabled && "text-slate-900 bg-white border-b-[3px] rounded-md"}`}
            disabled={disabled}
            {...register("name")}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-slate-200">Phone No</span>
          <input
            type="text"
            className={`mt-2 px-2 py-2 text-slate-300 text-base outline-none bg-transparent border-b focus:border-b-blue-500 ${!disabled && "text-slate-900 bg-white border-b-[3px] rounded-md"}`}
            disabled={disabled}
            {...register("phoneNo")}
          />
        </div>
        <button
          type="button"
          className={`p-2 font-bold text-lg rounded-lg bg-red-600 transition-opacity hover:opacity-90 ${
            edit ? "hidden" : "block"
          }`}
          onClick={handleOnClick}
        >
          Edit
        </button>
        <button
          type="submit"
          className={`p-2 font-bold text-lg rounded-lg bg-blue-600 transition-opacity hover:opacity-90 ${
            isSubmitting && "opacity-80"
          } ${edit ? "block" : "hidden"}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save"}
        </button>
      </form>
    </>
  );
}
