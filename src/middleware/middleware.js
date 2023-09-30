const axios = require("axios");

const getBlogMiddleware = async (req, res, next) => {
  let blogs = await axios.get(
    "https://intent-kit-16.hasura.app/api/rest/blogs",
    {
      headers: {
        "x-hasura-admin-secret":
          "32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6",
      },
    }
  );

  req.blogs = blogs.data;
  next();
};

module.exports = {
  getBlogMiddleware,
};
