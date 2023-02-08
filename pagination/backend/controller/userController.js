const Users1Model = require("../helper/userModel");

exports.createUser1 = async (request, response, next) => {
  console.log(request.body);
  try {
    const createUser = await Users1Model.create({ ...request.body });
    response
      .status(201)
      .json({ message: `New user is created.`, data: createUser });
  } catch (error) {
    return response.status(400).json({ message: error });
  }
};

exports.getUsers1 = async (request, response, next) => {
  try {
    const users1 = await Users1Model.find({}).skip(request.query.skip).limit(3);
    response.status(200).json({
      message: true,
      data: users1,
    });
  } catch (error) {
    return response.status(400), json({ message: error, data: null });
  }
};
