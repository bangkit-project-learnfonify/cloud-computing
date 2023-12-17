import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.json({ error: "Access denied" });
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.userId = decoded.userId;
        req.name = decoded.name;
        req.email = decoded.email;
        next();
    } catch (err) {
        console.error(err.message);
        res.json({ error: "Access denied" });
    }

}
