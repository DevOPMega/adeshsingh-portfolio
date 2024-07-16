"use client";

import { useReducer, useEffect } from "react";

type RoleObject = {
  role: string;
  index: number;
};

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
];

const reducer = (state: RoleObject, action: { type: string }): RoleObject => {
  switch (action.type) {
    case "roleIncrement":
      return { ...state, role: roles[state.index] };
    case "indIncrement":
      return { ...state, index: state.index == 2 ? 0 : state.index + 1 };
  }
  return state;
};

export default function Role() {
  const [state, dispatch] = useReducer(reducer, {
    role: "Frontend Developer",
    index: 1,
  });

  useEffect(() => {
    const intervalID = setInterval(() => {
      dispatch({ type: "roleIncrement" });
      dispatch({ type: "indIncrement" });
    }, 3000);

    return () => clearInterval(intervalID);
  }, [state]);

  return <h3 className="text-2xl font-medium ">{state.role}</h3>;
}
