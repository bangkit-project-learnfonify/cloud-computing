import Courses from "../models/CourseModel.js"

export const AddCourse = async (req, res) => {
    const { title, link, image, organizer, category, instructor, level, rating, fee, description } = req.body;
    console.log(req.body)
    try {
        const newCourse = await Courses.insertCourses({
            title,
            link,
            image,
            organizer,
            category,
            instructor,
            level,
            rating,
            fee,
            description,
        });
        res.json(newCourse);
    } catch (err) {
        console.error(err.message);
        res.json({ error: "Internal Server Error" });
    }
}

export const getCourses = async (req, res) => {

    try {
        const courses = await Courses.getCourses();
        res.json(courses);
    } catch (err) {
        console.error(err.message);
    }
}

export const getCourseByCategory = async (req, res) => {
    const { category } = req.params;
    try {
        const courses = await Courses.getCourseByCategory(category);
        res.json(courses);
    } catch (err) {
        console.error(err.message);
    }
}

export const getListDistinctCategory = async (req, res) => {
    try {
        const courses = await Courses.getListDistinctCategory();
        res.json(courses);
    } catch (err) {
        console.error(err.message);
    }
}


export const getCourseById = async (req, res) => {
    const { id } = req.params
    try {
        const courses = await Courses.getCourseById(id);
        res.json(courses);
    } catch (err) {
        console.error(err.message);
    }
}





