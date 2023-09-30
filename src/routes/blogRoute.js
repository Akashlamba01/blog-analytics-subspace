const express = require("express");
const { getBlog, searchByQuery } = require("../controller/blogController");
const { Joi, celebrate } = require("celebrate");
const { getBlogMiddleware } = require("../middleware/middleware");

const router = express.Router();

router.get("/blog-stats", getBlogMiddleware, getBlog);

router.get(
  "/blog-search",
  celebrate({
    query: Joi.object().keys({
      query: Joi.string().lowercase().required(),
    }),
  }),
  getBlogMiddleware,
  searchByQuery
);

module.exports = router;
