// Import the model
const Todo = require("../models/Todo");


exports.deleteTodo = async (req, res) => {
    try {
        const {id} = req.params;
        
        await Todo.findByIdAndDelete(id);
        res.json({
            success: true,
            message: "Deletd Successfully",
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
