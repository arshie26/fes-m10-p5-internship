"use client"

import React from "react";
import './Backdrop.css'

function Backdrop(){

    function togglePane(){
        document.body.classList.remove("menu")
    }

    return (
        <div className="pane__backdrop" onClick={() => {togglePane()}}>

        </div>
    )
}

export default Backdrop