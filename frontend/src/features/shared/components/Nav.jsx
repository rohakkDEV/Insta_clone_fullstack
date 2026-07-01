import React from 'react'
import "../nav.scss"
import { useNavigate } from 'react-router'
import axios from 'axios'

const Nav = () => {
    const navigate = useNavigate()

    async function handleLogout() {
        await axios.post("http://localhost:3000/api/auth/logout", {}, {
            withCredentials: true
        })
        navigate('/login')
    }

    return (
        <nav className='nav-bar'>
            <p>Insta</p>
            <div className="nav-actions">
                <button
                    onClick={() => navigate("/create-post")}
                    className='button primary-button'>
                    New Post
                </button>
                <button
                    onClick={() => navigate("/follow-requests")}
                    className='nav-icon-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 17H22V19H2V17H4V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V17ZM18 17V10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10V17H18ZM9 21H15V23H9V21Z"></path>
                    </svg>
                </button>
                <button
                    onClick={handleLogout}
                    className='button secondary-button'>
                    Logout
                </button>
            </div>
        </nav>
    )
}

export default Nav
