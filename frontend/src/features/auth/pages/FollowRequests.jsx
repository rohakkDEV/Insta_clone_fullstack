import React, { useEffect } from 'react'
import { useUser } from '../hooks/useUser'
import Nav from '../../shared/components/Nav'

const FollowRequests = () => {
    const { pendingRequests, handleGetPendingRequests, handleAcceptRequest, handleRejectRequest, loading } = useUser()

    useEffect(() => {
        handleGetPendingRequests()
    }, [])

    return (
        <main className='follow-requests-page'>
            <Nav />
            <div className="requests-container">
                <h2>Follow Requests</h2>
                {loading && <p>Loading...</p>}
                {!loading && pendingRequests.length === 0 && (
                    <p className="empty">No pending requests</p>
                )}
                {pendingRequests.map(request => (
                    <div className="request-card" key={request._id}>
                        <p className="username">@{request.follower}</p>
                        <div className="actions">
                            <button
                                className="btn-accept"
                                onClick={() => handleAcceptRequest(request.follower)}>
                                Accept
                            </button>
                            <button
                                className="btn-reject"
                                onClick={() => handleRejectRequest(request.follower)}>
                                Decline
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default FollowRequests