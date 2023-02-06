import moment from "moment";
import { Task, Tasks } from "./types";

export const getRandomColor = () => {
  return "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");
};

export const getRandomNumber = () => {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min) + min);
};

export const groupTasksByDate = (tasks: Tasks) => {
  const map = new Map();

  tasks.forEach((item) => {
    const { date } = item;
    const collection = map.get(date);

    if (!collection) {
      map.set(date, [item]);
    } else {
      collection.push(item);
    }
  });

  return (
    Array.from(map)
      .map((el) => ({ date: el[0], tasks: el[1] }))
      //@ts-ignore moment with TS error
      .sort((a, b) => moment(a.date, "DD.MM.YY") - moment(b.date, "DD.MM.YY"))
  );
};

export const getDateLabel = (date: string) => {
  const today = moment();
  const tomorrow = moment().add(1, "days");
  const yesterday = moment().add(-1, "days");
  const currentDate = moment(date, "DD/MM/YYYY");

  let label = currentDate.format("DD/MM");

  switch (true) {
    case today.isSame(currentDate, "day"):
      label = "Today";
      break;

    case tomorrow.isSame(currentDate, "day"):
      label = "Tomorrow";
      break;

    case yesterday.isSame(currentDate, "day"):
      label = "Yesterday";
      break;
  }

  return label;
};
