const Interviewer = require('../models/interview/interviewer');

const getInterviewer =async(req , res)=>{
    const{ interviewerID }= req.params;
    try{        const interviewer = await Interviewer.findById(interviewerID);
        if (!interviewer) {
            return res.status(404).json({ message: "Interviewer not found." });
        }
        res.status(200).json(interviewer);

    }catch(err){
        console.error("Error fetching Interviewer:", err);
        res.status(500).json({ message: "Failed to fetch interviewer." });

    }   
}
module.exports = { 
    getInterviewer

};
