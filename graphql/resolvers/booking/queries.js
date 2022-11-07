const BookingModel = require("../../../models/booking");

module.exports = {
  bookings: async () => {
    try {
      const bookings = await BookingModel.find()
        .populate("event")
        .populate("user");
      return bookings.map((el) => ({
        ...el._doc,
        _id: el.id,
        createdAt: new Date(el._doc.createdAt).toISOString(),
        updatedAt: new Date(el._doc.updatedAt).toISOString(),
      }));
    } catch (error) {
      throw error;
    }
  },
};
