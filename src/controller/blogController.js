const axios = require("axios");
const _ = require("lodash");

const getBlog = async (req, res) => {
  try {
    const { blogs } = req.blogs;

    if (!blogs) {
      return res.status(404).json({
        message: "Data Not Found!",
        success: false,
      });
    }

    const totalBlog = blogs.length;
    const LongTitleBlog = _.maxBy(blogs, "title");
    const totalPrivacyBlogs = _.filter(blogs, (item) =>
      _.includes(_.toLower(item.title), "privacy")
    );
    const uniqueBlogTitlesArray = _.uniqBy(blogs, "title");

    const data = {
      totalBlog,
      longestTitle: LongTitleBlog.title,
      privacyBlogs: totalPrivacyBlogs.length,
      uniqueBlogTitlesArray: uniqueBlogTitlesArray.map((item) => item.title),
    };

    return res.status(200).json({
      message: "Get Data Successfully!",
      success: true,
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

const searchByQuery = async (req, res) => {
  try {
    const { blogs } = req.blogs;

    const data = _.filter(blogs, (item) =>
      _.includes(_.toLower(item.title), req.query.query)
    );

    if (!data) {
      return res.status(404).json({
        message: "DAta not Found!",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Get filter Data Successfully!",
      success: true,
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

module.exports = {
  getBlog,
  searchByQuery,
};
