import React, { useContext } from "react";

import { TasksByDateList, TodayTasks } from "../index";
import Context from "../../context";
import { DateWithTasks } from "../../types";
import { groupTasksByDate, getDateLabel } from "../../helpers";

function TasksList() {
  const context = useContext(Context);

  const tasks = React.useMemo(
    () => groupTasksByDate(context.tasks),
    [context.tasks]
  );

  const isTodayTasks = (date: DateWithTasks) =>
    getDateLabel(date.date) === "Today";

  const todayTasks = tasks.find((date) => isTodayTasks(date)) as DateWithTasks;

  return (
    <>
      {todayTasks && <TodayTasks {...todayTasks} />}

      {tasks.map(
        (date) =>
          !isTodayTasks(date) && <TasksByDateList {...date} key={date.date} />
      )}
    </>
  );
}

export default TasksList;
