const EventModel = require("../../../models/event");
const UserModel = require("../../../models/user");

module.exports = {
  createEvent: async (args) => {
    try {
      const event = new EventModel({
        title: args.input.title,
        description: args.input.description,
        price: +args.input.price,
        date: new Date(args.input.date).toISOString(),
        creator: "6364a9049f514d62bcacdbab",
      });
      const user = await UserModel.findOne({ _id: "6364a9049f514d62bcacdbab" });
      user.createdEvents.push(event);
      await user.save();
      const result = await event.save();
      return result;
    } catch (error) {
      throw error;
    }
  },
};
