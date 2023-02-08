const Users1Model = require("../helper/linkModel");

exports.createUser1 = async (request, response, next) => {
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
    const users1 = await Users1Model.find({}).limit(3);
    response.status(200).json({
      message: true,
      data: users1,
    });
  } catch (error) {
    return response.status(400), json({ message: error, data: null });
  }
};
