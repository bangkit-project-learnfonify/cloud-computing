import url_top_course from "../config/MachineLearning.js"
import db from "../config/Supabase.js"
import CCourses from "../models/CourseModel.js"

export const getTopCourse = async (req, res) => {
    try {
        const userId = req.params.id;
        // make REST API call to machine learning
        const response = await fetch(url_top_course + '/' + userId);
        const apiData = await response.json();

        // Mengambil hanya bagian "predictions" dari data API
        const predictions = apiData.data.predictions;

        // Membuat array untuk menampung semua courses
        const coursesArray = [];

        // Mengambil courses untuk setiap prediction
        for (let i = 0; i < predictions.length; i++) {
            try {
                const courseResponse = await CCourses.getCourseById(predictions[i]);
                // Check if the response has a 'data' property and it is an array
                if (courseResponse.data && Array.isArray(courseResponse.data)) {
                    // Add the course data to the array
                    coursesArray.push(...courseResponse.data);
                }
            } catch (err) {
                console.error(err.message);
                // You might want to handle errors here, depending on your use case
            }
        }

        // Mengirim semua courses sebagai respons setelah loop selesai
        res.send(coursesArray);

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
