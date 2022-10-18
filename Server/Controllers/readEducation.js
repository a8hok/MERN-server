import { excelToJsonModel } from "../Schema/excelToJson.js";

export const getExcelofEducation = async(req, res) => {
    const page = req.query.page || 1

    const limit = req.query.limit || 10

    const startIndex = (page - 1) * limit

    const endIndex = page * limit

    const data = await excelToJsonModel.find()
    res.send({
        status: 200,
        message: "data is collected",
        data: data.slice(startIndex, endIndex)
    })
};


