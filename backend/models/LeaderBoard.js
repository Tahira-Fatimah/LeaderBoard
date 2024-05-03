const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LeaderBoardSchema = new Schema({
    rank: {
        type: Number,
        required: true
    },
    teamName: {
        type: String,
        required: true
    },
    totalGamesPlayed: {
        type: Number,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    profileImage: {
        type: String,
        required: true
    }
}, { timestamps: true });

const LeaderBoard = mongoose.model('leaderboard', LeaderBoardSchema)
module.exports = LeaderBoard