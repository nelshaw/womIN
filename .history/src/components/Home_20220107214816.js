import React from 'react'

function Home(){
    return (
        <div>
            <h1>This is the Home page</h1>
            <Link className="home-link" to="/login" >See into the stars!</Link>
        </div>
    )
}

export default Home