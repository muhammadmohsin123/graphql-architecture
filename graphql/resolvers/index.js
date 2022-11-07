const { userQueries, userMutations } = require("./users/index");
const { bookingQueries, bookingMutations } = require("./booking/index");
const { eventQueries, eventMutations } = require("./events/index");

module.exports = {
  ...userQueries,
  ...bookingQueries,
  ...eventQueries,
  ...eventMutations,
  ...userMutations,
  ...bookingMutations,
};
