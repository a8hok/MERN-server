import { ImgSchema } from "../Schema/images.js";

export const getuserimg = (req, res) => {
    ImgSchema.find((err, data) => {
        if (err) {
            res.send({
                status: 400,
                message: "Img cannot be retrived",
            })
        }
        else {
            return res.send({
                status: 200,
                message: "Img retrived",
                data: data
            })
        }
    })
}
