"use client"

import React from "react";
import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { activate } from "@/app/redux/features/viewModalSlice"

function ModalButton(props){

    const dispatch = useDispatch();
    const viewModal = useSelector(state => state.viewModal.viewModal)

    return (
        <div>
            <button onClick={() => {console.log("Registering"); dispatch(activate())}}>{props.buttonName}</button>
            {
                viewModal?
                <Modal  />
                :
                <></>
            }
            
        </div>
    )


}

export default ModalButton