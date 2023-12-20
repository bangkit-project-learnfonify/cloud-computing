import db from "../config/Supabase.js"

function insertUsers({ fullname, email, password }) {
    return db
        .from('users')
        .insert([{ fullname: fullname, email: email, password: password }])
}

function updateMajoringAndAge({ id, majoring, age }) {
    return db
        .from('users')
        .update({ majoring: majoring, age: age })
        .eq('id', id)
}

function getUserById(id) {
    return db
        .from('users')
        .select('*')
        .eq('id', id)
}

function getUsers() {
    return db
        .from('users')
        .select('*')
}

function getUserByEmail(email) {
    return db
        .from('users')
        .select('*')
        .eq('email', email)
}

function updateUserToken({ id, refreshToken }) {
    return db
        .from('users')
        .update({ refresh_token: refreshToken })
        .eq('id', id)
}


function getUserByRefreshToken(refreshToken) {
    return db
        .from('users')
        .select('*')
        .eq('refresh_token', refreshToken)
}

function insertUserRating({ user_id, course_id, user_rating }) {
    return db
        .from('user_rating')
        .insert([{ user_id: user_id, course_id: course_id, user_rating: user_rating }])

}

function getUserRating() {
    return db
        .from('user_rating')
        .select('*')
}

const UserModel = {
    insertUsers,
    getUsers,
    getUserByEmail,
    getUserByRefreshToken,
    updateUserToken,
    getUserById,
    updateMajoringAndAge,
    insertUserRating,
    getUserRating
}


export default UserModel;
