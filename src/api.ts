import { Tasks } from "./types";

export const getTasks = () => {
  return JSON.parse(localStorage.getItem("tasks") || "[]");
};

export const putTasks = (tasks: Tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
