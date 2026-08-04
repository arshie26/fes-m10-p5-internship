import React from "react";
import Link from "next/link";
import './Pane.css'

function Pane(){
    return (
        <div className="pane__container fixed top-0 left-0 z-1">
            <div className="flex flex-col justify-between h-screen">
                <ul>
                    <Link href="/for-you"><li className="pane__item hover:bg-gray-100 active:bg-gray-100">For you</li></Link>
                    <li className="pane__item hover:bg-gray-100">My Library</li>
                    <li className="pane__item hover:bg-gray-100">Highlights</li>
                    <li className="pane__item hover:bg-gray-100">Search</li>
                </ul>
                <ul>
                    <li className="pane__item">Settings</li>
                    <li className="pane__item">Help & Support</li>
                    <li className="pane__item">Login</li>
                </ul>
            </div>
        </div>
    )
}

export default Pane