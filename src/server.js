require("./db/connection");
const express = require("express");
const cors = require("cors");
const { listRouter } = require("./routes/list");

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(listRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});