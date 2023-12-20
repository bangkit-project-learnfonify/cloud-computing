import Users from "../models/UserModel.js"
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {

    try {
        const users = await Users.getUsers();
        res.json(users);
    } catch (err) {
        console.error(err.message);
    }
}

export const Register = async (req, res) => {
    const { fullname, email, password, confirmPassword } = req.body;
    // console.log(req.body)
    try {
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.json({ error: "Invalid email format" });
        }

        if (password !== confirmPassword) {
            return res.json({ error: "Passwords do not match" });
        }

        const salt = await bycrypt.genSalt();
        const hashedPassword = await bycrypt.hash(password, salt);

        const newUser = await Users.insertUsers({
            fullname,
            email,
            password: hashedPassword,
        });
        res.json(newUser);
    } catch (err) {
        console.error(err.message);
        res.json({ error: "Internal Server Error" });
    }
};

export const Login = async (req, res) => {
    try {
        const user = await Users.getUserByEmail(req.body.email);
        if (!user) {
            return res.json({ error: "Invalid email or password" });
        }

        const isPasswordCorrect = await bycrypt.compare(req.body.password, user.data[0].password);

        if (!isPasswordCorrect) {
            return res.json({ error: "Invalid email or password" });
        }
        const userId = user.data[0].id;
        const name = user.data[0].fullname;
        const email = user.data[0].email;
        const majoring = user.data[0].majoring;
        const age = user.data[0].age;
        const accessToken = jwt.sign(
            { userId, name, email },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1d" }
        );

        const refreshToken = jwt.sign(
            { userId, name, email },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: "1y" }
        );

        try {
            await Users.updateUserToken({ id: userId, refreshToken });
        } catch (err) {
            console.error(err.message);
            res.json({ error: "Internal Server Error" });
        }

        console.log(refreshToken);

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 365 * 24 * 60 * 60 * 1000 
        });

        
        res.json({ userId, email, name, accessToken, refreshToken, majoring, age });

    } catch (err) {
        console.error(err.message);
        res.json({ error: "Internal Server Error" });
    }
};

export const Logout = async (req, res) => {
    try {
        await Users.updateUserToken({ id: req.body.userId, refreshToken: null });
        res.clearCookie("refreshToken");
        res.json({ message: "Logged out" });
    } catch (err) {
        console.error(err.message);
        res.json({ error: "Internal Server Error" });
    }
}

export const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const users = await Users.getUserById(id);
        res.json(users);
    } catch (err) {
        console.error(err.message);
    }
}

export const updateMajoringAndAge = async (req, res) => {
    const { id } = req.params;
    const { majoring, age } = req.body;
    try {
        const users = await Users.updateMajoringAndAge({ id, majoring, age });
        res.json(users);
    } catch (err) {
        console.error(err.message);
    }
}

export const insertUserRating = async (req, res) => {
    const { id } = req.params;
    const { rating } = req.body;
    try {
        const users = await Users.insertUserRating({ id, rating });
        res.json(users);
    } catch (err) {
        console.error(err.message);
    }
}

export const getUserRating = async (req, res) => {
    try {
        const users = await Users.getUserRating();
        res.json(users);
    } catch (err) {
        console.error(err.message);
    }
}
