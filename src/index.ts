import dayjs from "dayjs";

const main = () => {
  const now = dayjs();
  Logger.log(now.format());
};
