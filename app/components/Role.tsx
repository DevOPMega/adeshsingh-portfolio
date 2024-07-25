"use client";
import { useReducer, useEffect } from "react";
import { motion } from "framer-motion";
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

const roleVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.4,
    },
  },
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

  return (
    <motion.h3
      variants={roleVariants}
      initial="hidden"
      animate="visible"
      className="text-2xl font-medium "
    >
      {state.role}
    </motion.h3>
  );
}
