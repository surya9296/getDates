const addDays = require("date-fns/addDays");

const getDateAfterDays = (days) => {
  const newDate = addDays(new Date(2020, 7, 22), days);
  return `${newDate.getDate()}-${
    newDate.getFullMonth() + 1
  }-${newDate.getFullYear()}`;
};

module.exports = getDateAfterDays;
