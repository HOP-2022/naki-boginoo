const LinkModel = require("../helper/linkModel");

exports.createLink = async (request, response, next) => {
  try {
    const createLink = await LinkModel.create({ ...request.body });
    await LinkModel.findByIdAndUpdate(createLink.id, {
      shortLink: `localhost:3001/links/${createLink.id}`,
    });
    response
      .status(201)
      .json({ message: `New Link is created.`, data: createLink });
  } catch (error) {
    response.status(400).json({ message: "ERROR" });
  }
};

exports.getLinks = async (request, response, next) => {
  try {
    const links = await LinkModel.find();
    response.status(200).json({
      message: true,
      data: links,
    });
  } catch (error) {
    return response.status(400).json({ message: error, data: null });
  }
};

exports.getLink = async (request, response, next) => {
  const { id } = request.params;
  try {
    const links = await LinkModel.findById(id);
    response.redirect(links.link);
  } catch (error) {
    return response.status(400).json({ message: error, data: null });
  }
};

