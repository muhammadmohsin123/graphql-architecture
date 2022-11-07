const EventModel = require("../../../models/event");

module.exports = {
  events: async () => {
    try {
      const events = await EventModel.find().populate("creator");
      return events.map((el) => ({
        ...el._doc,
        date: new Date(el._doc.date).toISOString(),
      }));
    } catch (error) {
      throw error;
    }
  },
};
