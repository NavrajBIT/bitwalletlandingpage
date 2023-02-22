import React from 'react'
import Navbar from "../Components/Navbar/Navbar"
import Body from "../Components/body/body"
import Footer from '../Components/Footer/Footer'
const Home = () => {
    return (
        <>
            <div className="w-full mx-auto bg-purple-900">
                <Navbar />
                <Body />
                <Footer />
            </div>
        </>
    )
}

export default Home