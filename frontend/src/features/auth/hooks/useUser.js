import { useState } from "react"
import {
    followUser, unfollowUser,
    acceptFollowRequest, rejectFollowRequest,
    getPendingRequests, getFollowers, getFollowing
} from "../services/user.api"

export const useUser = () => {
    const [loading, setLoading] = useState(false)
    const [followers, setFollowers] = useState([])
    const [following, setFollowing] = useState([])
    const [pendingRequests, setPendingRequests] = useState([])

    const handleFollow = async (username) => {
        console.log("handleFollow called with:", username)
        setLoading(true)
        try {
            const data = await followUser(username)
            console.log("follow response:", data)
            return data
        } catch (err) {
            console.error("Follow failed:", err)
        } finally {
            setLoading(false)
        }
    }

    const handleUnfollow = async (username) => {
        setLoading(true)
        try {
            const data = await unfollowUser(username)
            return data
        } catch (err) {
            console.error("Unfollow failed:", err)
        } finally {
            setLoading(false)
        }
    }

    const handleAcceptRequest = async (username) => {
        setLoading(true)
        try {
            await acceptFollowRequest(username)
            setPendingRequests(prev => prev.filter(r => r.follower !== username))
        } catch (err) {
            console.error("Accept failed:", err)
        } finally {
            setLoading(false)
        }
    }

    const handleRejectRequest = async (username) => {
        setLoading(true)
        try {
            await rejectFollowRequest(username)
            setPendingRequests(prev => prev.filter(r => r.follower !== username))
        } catch (err) {
            console.error("Reject failed:", err)
        } finally {
            setLoading(false)
        }
    }

    const handleGetPendingRequests = async () => {
        setLoading(true)
        try {
            const data = await getPendingRequests()
            setPendingRequests(data.requests)
        } catch (err) {
            console.error("Failed to fetch requests:", err)
        } finally {
            setLoading(false)
        }
    }

    const handleGetFollowers = async (username) => {
        setLoading(true)
        try {
            const data = await getFollowers(username)
            setFollowers(data.followers)
        } catch (err) {
            console.error("Failed to fetch followers:", err)
        } finally {
            setLoading(false)
        }
    }

    const handleGetFollowing = async (username) => {
        setLoading(true)
        try {
            const data = await getFollowing(username)
            setFollowing(data.following)
        } catch (err) {
            console.error("Failed to fetch following:", err)
        } finally {
            setLoading(false)
        }
    }

    return {
        loading, followers, following, pendingRequests,
        handleFollow, handleUnfollow,
        handleAcceptRequest, handleRejectRequest,
        handleGetPendingRequests,
        handleGetFollowers, handleGetFollowing
    }
}