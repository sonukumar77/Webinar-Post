import { COLORS } from "../constants/data";

export const formatDate = (dateTime) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const year = dateTime?.slice(0, 4);
  const month = dateTime?.slice(5, 7);
  const completeMonth = months[Number(month) - 1];
  const date = dateTime?.slice(8, 10);

  return `${date} ${completeMonth} ${year}`;
};

export const generateRandomColor = (max, min = 0) => {
  const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
  return COLORS[randomValue];
};

export const debounce = (cb, delay) => {
  let timerId = null;
  return function (...args) {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => cb(...args), delay);
  };
};
