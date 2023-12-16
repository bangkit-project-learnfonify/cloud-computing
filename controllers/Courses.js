import Courses from "../models/CourseModel.js"
import dotenv from "dotenv";
dotenv.config();

export const AddCourse = async (req, res) => {
    try {
        const newCourse = await Courses.insertCourses();
        res.json(newCourse);
    } catch (err) {
        console.error(err.message);
        res.json({ error: "Internal Server Error" });
    }
}

