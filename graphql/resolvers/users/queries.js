const UserModel = require("../../../models/user");
module.exports = {
  users: async () => {
    try {
      return await UserModel.find().populate("createdEvents");
    } catch (error) {
      throw error;
    }
  },
};
