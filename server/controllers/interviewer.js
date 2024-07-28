<<<<<<< HEAD

=======
>>>>>>> 4e9d85ea80d8015bb8c11972268b8e20d8f4da62
const Interviewer = require('../models/interview/interviewer');

const getInterviewer =async(req , res)=>{
    const{ interviewerID }= req.params;
<<<<<<< HEAD
    try{        
        const interviewer = await Interviewer.findById(interviewerID);
=======
    try{        const interviewer = await Interviewer.findById(interviewerID);
>>>>>>> 4e9d85ea80d8015bb8c11972268b8e20d8f4da62
        if (!interviewer) {
            return res.status(404).json({ message: "Interviewer not found." });
        }
        res.status(200).json(interviewer);

    }catch(err){
        console.error("Error fetching Interviewer:", err);
        res.status(500).json({ message: "Failed to fetch interviewer." });

    }   
}


<<<<<<< HEAD
=======


>>>>>>> 4e9d85ea80d8015bb8c11972268b8e20d8f4da62
// Function to add an interviewer 
const addInterviewer = async (req, res) => {
    const {
        name,
        age,
        avatar,
        gender,
        exHistory,
        personality,
        bio,
        experienceYears
    } = req.body; 
    const { interviewerID } = req.body; 

    try {
        // Check if an interviewer with the provided ID already exists
        const existingInterviewer = await Interviewer.findById(interviewerID);
        if (existingInterviewer) {
            return res.status(400).json({ message: "Interviewer with this ID already exists." });
        }

        const newInterviewer = new Interviewer({
            _id: interviewerID, 
            name,
            age,
            avatar,
            gender,
            exHistory,
            personality,
            bio,
            experienceYears
        });

 
        const savedInterviewer = await newInterviewer.save();
        res.status(201).json(savedInterviewer);
    } catch (err) {
        console.error("Error adding Interviewer:", err);
        res.status(500).json({ message: "Failed to add interviewer." });
    }
}

<<<<<<< HEAD
=======




>>>>>>> 4e9d85ea80d8015bb8c11972268b8e20d8f4da62
// Function to delete an interviewer by interviewerID
const deleteInterviewer = async (req, res) => {
    const { interviewerID } = req.params;
    try {
        const deletedInterviewer = await Interviewer.findByIdAndDelete(interviewerID);
        if (!deletedInterviewer) {
            return res.status(404).json({ message: "Interviewer not found." });
        }
        res.status(200).json({ message: "Interviewer deleted successfully." });
    } catch (err) {
        console.error("Error deleting Interviewer:", err);
        res.status(500).json({ message: "Failed to delete interviewer." });
    }
}

module.exports = { 
    getInterviewer,
    addInterviewer,
    deleteInterviewer
<<<<<<< HEAD
};
=======
};
>>>>>>> 4e9d85ea80d8015bb8c11972268b8e20d8f4da62
