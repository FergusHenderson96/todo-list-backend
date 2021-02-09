const { List }=require('../models/List');

exports.addList = async (req, res) => {
    try {
      const list = new List(req.body);
      const returnedpost = await list.save();
    //   list.author = req.user._id;
      res.status(201).send(returnedpost);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  exports.deleteList = async (req, res) => {
    try {
      const list = await Post.findByIdAndDelete(req.params.id);
      res.status(200).send(list);
    } catch (error) {
      res.status(404).send({ message: "list not found" });
    }
  };