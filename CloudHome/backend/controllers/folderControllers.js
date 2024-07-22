const FileFolderModel = require("../model/fileSchema");

const createFolder = async (req, res) => {

    try {

    const { name } = req.body;
    const { _id } = req.user;
    
    const isFileNameExists = await FileFolderModel.findOne({ name, userId: _id });

    if (isFileNameExists) {
        return res.status(400).json({ status: "fail", message: "Folder name already exists" });
        return;
    }

    const newFolder = await FileFolderModel.create({ name, userId: _id, type: "folder" });

    res.status(201).json({ status: "success", message: "Folder created successfully"});

        
    } catch (error) {
        console.log("---------------------")
        console.log(error);
        console.log("---------------------")
        res.status(500).json({status: "fail", message: "Internal Server Error" });
    }   
};

module.exports = { createFolder, }