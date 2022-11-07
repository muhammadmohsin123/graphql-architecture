const EventModel = require("../../../models/event");
const BookingModel = require("../../../models/booking");

module.exports = {
  bookEvent: async (args) => {
    try {
      const fetchedEvent = await EventModel.findOne({
        _id: args.eventId,
      });
      const booking = await new BookingModel({
        user: "6364a6e1afcd68e01e80dcc2",
        event: fetchedEvent,
      });
      const result = await booking.save();
      console.log(result._doc);
      return {
        ...result._doc,
        _id: result.id,
        createdAt: new Date(result._doc.createdAt).toISOString(),
        updatedAt: new Date(result._doc.updatedAt).toISOString(),
      };
    } catch (error) {
      throw error;
    }
  },
  cancelBooking: async (args) => {
    try {
      const booking = await BookingModel.findById(args.bookingId)
        .populate("event")
        .populate("user");

      const event = {
        ...booking.event._doc,
        _id: booking.event.id,
        creator: booking.user._doc,
      };

      await BookingModel.deleteOne({ _id: args.bookingId });
      return event;
    } catch (error) {
      throw error;
    }
  },
};
