const followModel = require("../models/follow.model")
const userModel = require("../models/user.model")



async function followUserController(req,res){

    const followerUsername = req.user.username
    const followeeUsername = req.params.username


    if(followeeUsername== followerUsername){
        return res.status(400).json({
            message: "You cannnot follow yourself"
        })
    }

    const isFolloweeExists = await userModel.findOne({
        username: followeeUsername,
    })

    if(!isFolloweeExists){
        return res.status(404).json({
            message: "User you are trying to follow does not exist"
        })
    }

    const existingFollow = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername,
    })

    if(existingFollow){
        if(existingFollow.status === "accepted"){
            return res.status(200).json({
                message: "You are already following this user",
                follow: existingFollow,
            })
        }

        if(existingFollow.status === "pending"){
            return res.status(200).json({
                message: "Follow request already sent and pending approval",
                follow: existingFollow,
            })
        }

        if(existingFollow.status === "rejected"){
            existingFollow.status = "pending"
            await existingFollow.save()

            return res.status(200).json({
                message: `Follow request sent to ${followeeUsername}`,
                follow: existingFollow,
            })
        }
    }

    const followRecord = await followModel.create({
        follower: followerUsername,
        followee: followeeUsername,
    })

    res.status(201).json({
        message: `Follow request sent to ${followeeUsername}`,
        follow: followRecord,
    })

}

async function unfollowUserController(req,res){
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    const isUserFollowing = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername,
    })

    if(!isUserFollowing){
        return res.status(200).json({
            message: `You are not following ${followeeUsername} `
        })
    }

    await followModel.findByIdAndDelete(isUserFollowing._id)

    res.status(200).json({
        message: `You have unfollowed ${followeeUsername}`
    })
}

async function acceptFollowRequestController(req, res) {
    const followeeUsername = req.user.username
    const followerUsername = req.params.username

    const followRequest = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername,
        status: "pending"
    })

    if (!followRequest) {
        return res.status(404).json({
            message: "No pending follow request found from this user"
        })
    }

    followRequest.status = "accepted"
    await followRequest.save()

    res.status(200).json({
        message: `You have accepted the follow request from ${followerUsername}`,
        follow: followRequest
    })
}

async function rejectFollowRequestController(req, res) {
    const followeeUsername = req.user.username
    const followerUsername = req.params.username

    const followRequest = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername,
        status: "pending"
    })

    if (!followRequest) {
        return res.status(404).json({
            message: "No pending follow request found from this user"
        })
    }

    followRequest.status = "rejected"
    await followRequest.save()

    res.status(200).json({
        message: `You have rejected the follow request from ${followerUsername}`,
        follow: followRequest
    })
}

async function getFollowRequestsController(req, res) {
    const followeeUsername = req.user.username

    const requests = await followModel.find({
        followee: followeeUsername,
        status: "pending"
    })

    res.status(200).json({
        message: "Pending follow requests fetched",
        requests
    })
}

async function getFollowersController(req, res) {
    const { username } = req.params

    const followers = await followModel.find({
        followee: username,
        status: "accepted"
    })

    res.status(200).json({
        message: "Followers fetched",
        followers
    })
}

async function getFollowingController(req, res) {
    const { username } = req.params

    const following = await followModel.find({
        follower: username,
        status: "accepted"
    })

    res.status(200).json({
        message: "Following fetched",
        following
    })
}



module.exports = {
    followUserController,
    unfollowUserController,
    acceptFollowRequestController,
    rejectFollowRequestController,
    getFollowRequestsController,
    getFollowingController,
    getFollowersController,
}