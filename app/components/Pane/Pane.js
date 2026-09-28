import React from "react";
import Link from "next/link";
import './Pane.css'
import ModalButton from "../ModalButton/ModalButton";
import Backdrop from "../Backdrop/Backdrop";
import logo from '../../../public/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBookmark, faPenClip, faGear, faCircleQuestion, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass, faTimes } from "@fortawesome/free-solid-svg-icons";

function Pane(){

    return (
        <div>
            <div className="pane__container fixed top-0 left-0 z-5 bg-white">
                <div className="flex flex-col justify-between z-10 h-screen">
                    <ul className="w-[200px]">
                        <div className="w-9/10 p-3" >
                            <img src="/logo.png" />
                        </div>
                        <Link href="/for-you">
                            <li className="pane__item hover:bg-gray-100 active:bg-gray-100">
                                <FontAwesomeIcon icon={faHouse} className="mr-2" />
                                For you
                            </li>
                        </Link>
                        
                        <li className="pane__item hover:bg-gray-100">
                            <FontAwesomeIcon icon={faBookmark} className="mr-2" />
                            My Library
                        </li>
                        <li className="pane__item hover:bg-gray-100">
                            <FontAwesomeIcon icon={faPenClip} className="mr-2" />
                            Highlights
                        </li>
                        <li className="pane__item hover:bg-gray-100">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2" />
                            Search
                        </li>
                    </ul>
                    <ul>
                        <Link href="/settings"><li className="pane__item hover:bg-gray-100">
                            <FontAwesomeIcon icon={faGear} className="mr-2" />
                            Settings
                        </li></Link>
                        <li className="pane__item">
                            <FontAwesomeIcon icon={faCircleQuestion} className="mr-2" />
                            Help & Support
                        </li>
                        <li className="pane__item hover:bg-gray-100">
                            <FontAwesomeIcon icon={faRightFromBracket} className="mr-2" />
                            <ModalButton className="pane__item" toggle="Logout" buttonName="Login" />
                        </li>
                    </ul>
                </div>
            </div>
            <Backdrop />
        </div>
    )
}

export default Pane