const express = require('express')
const mongoose = require('mongoose')
const envi = require('dotenv')
const cors = require('cors')
MONGO_URI = "mongodb+srv://tahirafatimah27:kinnaird276@leaderboardcluster.axd6pbc.mongodb.net/LeaderBoard-collection?retryWrites=true&w=majority&appName=LeaderBoardCluster"
PORT = 3000
const LeaderBoard = require('./models/LeaderBoard')
const getLeaderBoardData = require('./controllers/teams')

const dataToInsert = [
    { rank: 3, teamName: 'Team A', totalGamesPlayed: 10, score: 1050, profileImage: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" },
    { rank: 4, teamName: 'Team B', totalGamesPlayed: 8, score: 820, profileImage: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" },
    { rank: 1, teamName: 'Team C', totalGamesPlayed: 12, score: 1180, profileImage: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" },
    { rank: 5, teamName: 'Team D', totalGamesPlayed: 9, score: 950, profileImage: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" },
    { rank: 2, teamName: 'Team E', totalGamesPlayed: 11, score: 1100, profileImage: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" }
    // Add more documents as needed
];


const app = express()

app.use(cors())
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("connected to DBBB")
        app.listen(PORT)
    })
    .catch((error) => {
        console.log(error)
    })



// app.get('/insert', async (req, res) => {
//     try {
//         const result = await LeaderBoard.insertMany(dataToInsert);
//         console.log("Data inserted successfully");
//         res.status(200).json({ success: true, data: result });
//     } catch (err) {
//         console.error("Error inserting data:", err);
//         res.status(500).json({ success: false, error: err.message });
//     }
    
// });

app.use('/display', async (req, res) => {
    try {
        const result = await LeaderBoard.find({}).sort({ score: -1 })
        console.log("data fetched successfully\n")
        res.status(200).json(result)
    }
    catch (err) {
        console.log(err)
        res.status(400).json({ success: false, msg: "no data found" })
    }
})