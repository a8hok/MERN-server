import { detailPageModel } from "../../Schema/detailpageSchema.js"

export const detailpage = (req, res) => {
    detailPageModel.find((err, data) => {
        if (err) {
            return res.send(err)
        } else {
            return res.status(200).send({
                message: "language is found",
                data: data,
            })
        }
    })
}
