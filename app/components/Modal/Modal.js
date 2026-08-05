"use client"
import './Modal.css'

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { viewModalSlice } from "@/app/redux/features/viewModalSlice";
import { deactivate } from "@/app/redux/features/viewModalSlice"

function Modal(){

    const dispatch = useDispatch();
    const viewModal = useSelector(state => state.viewModal.viewModal)

    return (
        <>
            <div className="modal">
                <button onClick={() => {dispatch(deactivate())}}>Close</button>
                Registration
                
                <div>
                    <input placeholder='Email Address' type="email" />
                </div>
                    
            </div>
            
            <div className="backdrop"></div>
        </>
    )
}

export default Modal
