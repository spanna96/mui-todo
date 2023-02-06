import { createContext, useState, useEffect } from "react";
import { Task, Tasks } from "./types";
import { getTasks, putTasks } from "./api";

interface TasksContextType {
  tasks: Tasks;
  addTask: (task: Task) => void;
  deleteTask: (id: number) => void;
  completeTask: (id: number) => void;
  showRandomNews: boolean;
  toggleRandomNews: () => void;
}

const Context = createContext<TasksContextType>({} as TasksContextType);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Tasks>([]);
  const [showRandomNews, setShowRandomNews] = useState(true);

  const addTask = (task: Task) => {
    const updatedTasks = [...tasks, task];

    setTasks(updatedTasks);
    putTasks(updatedTasks);
  };

  useEffect(() => {
    const currentTasks = getTasks();
    setTasks(currentTasks);
  }, []);

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    putTasks(updatedTasks);
  };

  const completeTask = (id: number) => {
    const updatedTasks = [...tasks];
    const index = updatedTasks.findIndex((task) => task.id === id);

    updatedTasks[index].completed = !updatedTasks[index].completed;

    setTasks(updatedTasks);
    putTasks(updatedTasks);
  };

  const toggleRandomNews = () => {
    setShowRandomNews(!showRandomNews);
  };

  return (
    <Context.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        completeTask,
        showRandomNews,
        toggleRandomNews,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
