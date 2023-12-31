import db from "../config/Supabase.js"

function insertCourses({ title, link, image, organizer, category, instructor, level, rating, fee, description }) {
    return db
        .from('courses')
        .insert([{ title: title, link: link, image: image, organizer: organizer, category: category, instructor: instructor, level: level, rating: rating, fee: fee, description: description }])
}

function getCourses() {
    return db
        .from('courses')
        .select('*')
}


function getCourseById(id) {
    return db
        .from('courses')
        .select('*')
        .eq('id', id)
}

function getCourseByCategory(category) {
    return db
        .from('courses')
        .select('*')
        .eq('category', category)
}


function getListDistinctCategory() {
    return db
        .from('distinct_category')
        .select('category')
}

const CourseModel = {
    insertCourses,
    getCourses,
    getCourseByCategory,
    getCourseById,
    getListDistinctCategory
}

export default CourseModel;
