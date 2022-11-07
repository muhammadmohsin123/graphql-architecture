const bycript = require("bcryptjs");
const UserModel = require("../../../models/user");
module.exports = {
  createUser: async (args) => {
    try {
      const existedUser = await UserModel.findOne({
        email: args.input.email,
      });
      console.log(existedUser);
      if (existedUser) {
        throw new Error("User already exists with this email");
      }
      const hashedPassword = await bycript.hash(args.input.password, 12);
      const user = new UserModel({
        email: args.input.email,
        password: hashedPassword,
      });
      const result = await user.save();
      return result;
    } catch (error) {
      throw error;
    }
  },
};
