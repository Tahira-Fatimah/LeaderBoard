const getLeaderBoardData = async (req, res) => {
    try {
        const result = await LeaderBoard.find({}).sort({ rank: 1 })
        console.log("data fetched successfully\n")
        res.status(200).json(result)
    }
    catch (err) {
        console.log(err)
        res.status(400).json({ success: false, msg: "no data found" })
    }
}
module.exports = getLeaderBoardData