import type { FieldValues } from "react-hook-form";

// API URI
const updateUserProfileURI = process.env.NEXT_PUBLIC_API_UPDATE_USER_PROFILE || "";
const userProfileURI = process.env.NEXT_PUBLIC_API_USERINFO || "";

// PATCH: update user profile 
export const updateUserProfile = async (data: FieldValues) => {
  const response = await fetch(updateUserProfileURI, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });
  return response;
};

// GET: get user profile
export const userProfile = async () => {
  const response = await fetch(userProfileURI, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  return response;
};
