const { Router } = require("express");
const { addList, deleteList } = require("../controllers/lists");
const listRouter = Router();

listRouter.post("/lists/", addList);
listRouter.delete("/lists", deleteList) 

module.exports = {
  listRouter,
};