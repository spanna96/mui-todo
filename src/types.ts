export type Task = {
  color: string;
  title: string;
  description?: string;
  date: string;
  completed: boolean;
  id: number;
};

export type Tasks = Array<Task>;

export type DateWithTasks = {
  date: string;
  tasks: Tasks;
};

export type GroupedTasks = Array<DateWithTasks>;
