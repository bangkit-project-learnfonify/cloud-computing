import Users from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        
    console.log(refreshToken);
        if (!refreshToken) {
            return res.json({ error: "Access denied" });
        }
        const user = await Users.getUserByRefreshToken(refreshToken);

        if (!user) {
            return res.json({ error: "Access denied" });
        }

        const userId = user.data[0].id;
        const name = user.data[0].fullname;
        const email = user.data[0].email;
        const payload = { userId, name, email };
        
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.json({ error: "Access denied" });
            }
            const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: "1d",
            });
            res.json({ accessToken });
        });

    } catch (err) {
        console.error(err.message);
        res.json({ error: "Internal Server Error" });
    }
}