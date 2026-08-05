"use client"

import React from "react";
import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { viewModalSlice } from "@/app/redux/viewModalSlice";
import { activate } from "@/app/redux/viewModalSlice"

function ModalButton(props){

    const dispatch = useDispatch();
    const viewModal = useSelector(state => state.viewModal.viewModal)

    return (
        <div>
            <button onClick={() => {dispatch(activate)}}>{props.buttonName}</button>
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