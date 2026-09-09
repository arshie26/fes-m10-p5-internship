import React from "react";
import Link from "next/link";
import './PlayerPane.css'
import ModalButton from "../ModalButton/ModalButton";

function PlayerPane(){
    return (

        <div className="pane__container fixed top-0 left-0 z-1 flex flex-col justify-between h-92/100">
            <ul>
                <Link href="/for-you"><li className="pane__item hover:bg-gray-100 active:bg-gray-100">For you</li></Link>
                <li className="pane__item hover:bg-gray-100">My Library</li>
                <li className="pane__item hover:bg-gray-100">Highlights</li>
                <li className="pane__item hover:bg-gray-100">Search</li>
            </ul>
            <ul>
                <li className="pane__item">Settings</li>
                <li className="pane__item">Help & Support</li>
                <li className="pane__item hover:bg-gray-100"><ModalButton className="pane__item" toggle="Logout" buttonName="Login" /></li>
            </ul>
        </div>

    )
}

export default PlayerPane