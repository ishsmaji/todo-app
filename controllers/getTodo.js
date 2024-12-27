// Import the model
const Todo = require("../models/Todo");


exports.getTodo = async (req,res) => {
    try {
       const todo = await Todo.find({});
       console.log(todo)
        // Send a JSON response with a success flag
        res.status(200).json({
            success: true,
            data: todo,
            message: "Data Fetchd Successfully",
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: null,
            message: err.message || "Internal server error",
        });
    }
};

exports.getTodoById = async (req,res) => {
    try {
        const id = req.params.id;
        const todobyid = await Todo.findById({ _id: id });
        console.log("Hii",todobyid)
    
        if (!todobyid) {
          return res.status(404).json({
            success: false,
            message: "No Data Found with Given Id",
          });
        }
     
      res.status(200).json({
        success: true,
        data: todobyid,
        message: `Data ${id} Fetchd Successfully`,
    });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: null,
            message: err.message || "Internal server error",
        });
    }
};
