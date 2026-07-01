import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})

export async function followUser(username) {
    const response = await api.post(`/api/users/follow/${username}`)
    return response.data
}

export async function unfollowUser(username) {
    const response = await api.post(`/api/users/unfollow/${username}`)
    return response.data
}

export async function acceptFollowRequest(username) {
    const response = await api.post(`/api/users/follow-requests/${username}/accept`)
    return response.data
}

export async function rejectFollowRequest(username) {
    const response = await api.post(`/api/users/follow-requests/${username}/reject`)
    return response.data
}

export async function getPendingRequests() {
    const response = await api.get(`/api/users/follow-requests/pending`)
    return response.data
}

export async function getFollowers(username) {
    const response = await api.get(`/api/users/${username}/followers`)
    return response.data
}

export async function getFollowing(username) {
    const response = await api.get(`/api/users/${username}/following`)
    return response.data
}