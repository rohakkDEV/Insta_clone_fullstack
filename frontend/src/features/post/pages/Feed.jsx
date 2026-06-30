import React from 'react'
import "../style/feed.scss"

const Feed = () => {
  return (
      <main className='feed-page' >
          <div className="feed">
              <div className="posts">
                  <div className="post">
                      <div className="user">
                        <div className="img-wrapper">
                            <img src="https://images.unsplash.com/photo-1640951613773-54706e06851d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        </div>
                          <p>Username</p>
                      </div>
                      <img src="https://plus.unsplash.com/premium_photo-1661306510847-c1abc605a7b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9vbXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                      <div className="icons">
                        <div className="left">
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                        <div className="right"></div>
                      </div>
                      <div className="bottom">
                          <p className="caption">caption caption</p>
                      </div>
                  </div>
              </div>
          </div>
      </main>
  )
}

export default Feed

