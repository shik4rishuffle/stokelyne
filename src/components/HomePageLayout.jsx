import React from "react"
import Navbar from './Navbar'
import '../styles/global.css'
import Footer from "./Footer"

export default function Layout({children}) {
    return (
        <div className="home-page-layout">
            <Navbar />
            <div className="home-page-content">
                {children}
            </div>
            <Footer />
        </div>
    )
}
