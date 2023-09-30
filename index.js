const { errors } = require("celebrate");
const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", require("./src/routes/blogRoute"));
app.use(errors());

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
