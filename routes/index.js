import express from "express"
import {
    getUsers,
    Register,
    updateMajoringAndAge ,
    Login,
    Logout,
    insertUserRating,
    getUserById,
    getUserRating
} from "../controllers/Users.js"

import {
    AddCourse,
    getCourses,
    getCourseByCategory,
    getCourseById,
    getListDistinctCategory
} from "../controllers/Courses.js"

import { verifyToken } from "../middleware/VerifyToken.js"
import { refreshToken } from "../controllers/RefreshToken.js"


var router = express.Router()
router.get("/users", verifyToken, getUsers)
router.post("/register", Register)
router.post("/login", Login)
router.post("/add-course", verifyToken, AddCourse)
router.post("/update-major-age", verifyToken, updateMajoringAndAge)
router.get("/course-id/:id", verifyToken, getCourseById)
router.get("/courses", verifyToken, getCourses)
router.get("/ml/courses", getCourses)
router.get("/ml/users", getUsers)
router.get("/ml/user-rating", getUserRating)
router.post("/insert-rating", insertUserRating)
router.get("/courses/:category", verifyToken, getCourseByCategory)
router.get("/list-category", verifyToken, getListDistinctCategory)
router.get("/refresh-token", refreshToken)
router.delete("/logout", verifyToken, Logout)
export default router;