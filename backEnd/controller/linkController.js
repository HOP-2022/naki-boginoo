const LinkModel = require("../helper/linkModel");
const isUrlHttp = require("is-url-http");

// exports.createLink = async (request, response, next) => {
//   try {
//     const createLink = await LinkModel.create({ ...request.body });
//     await LinkModel.findByIdAndUpdate(createLink.id, {
//       shortLink: `localhost:3000/${createLink.id}`,
//     });
//     response
//       .status(201)
//       .json({ message: `New Link is created.`, data: createLink });
//   } catch (error) {
//     response.status(400).json({ message: "ERROR" });
//   }
// };

exports.createLink = async (request, response, next) => {
  const ITSLink = await LinkModel.findOne({ link: request.body.link });
  if (isUrlHttp(request.body.link) === true) {
    if (ITSLink) {
      return response.status(201).json({ data: ITSLink });
    }
    const createLink = await LinkModel.create({ ...request.body });
    await LinkModel.findByIdAndUpdate(createLink.id, {
      shortLink: `localhost:3000/${createLink.id}`,
    });
    response
      .status(201)
      .json({ message: `New Link is created.`, data: createLink });
  } else {
    console.log("url bishen");
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
    response.status(200).json({
      message: true,
      data: links,
    });
  } catch (error) {
    return response.status(400).json({ message: error, data: null });
  }
};

exports.deleteLink = async (request, response, next) => {
  try {
    const links = await LinkModel.deleteMany();
  } catch (error) {
    return response.status(400).json({ message: error, data: links });
  }
};
