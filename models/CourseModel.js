import db from "../config/Supabase.js"

function insertCourses({ title, link, organizer, category, instructor, level, rating, fee, description }) {
    return db
        .from('course')
        .insert([{ title: title, link: link, organizer: organizer, category: category, instructor: instructor, level: level, rating: rating, fee: fee, description: description }])
}

function getCourses() {
    return db
        .from('course')
        .select('*')
}

function getCourseById(id) {
    return db
        .from('course')
        .select('*')
        .eq('id', id)
}

const CourseModel = {
    insertCourses,
    getCourses
}

export default CourseModel;
