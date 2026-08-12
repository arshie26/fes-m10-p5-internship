"use client"
import './Modal.css'

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setEmail, setPassword, toggleReg, toggleLogin } from "@/app/redux/features/viewModalSlice";
import { deactivate } from "@/app/redux/features/viewModalSlice"

function Modal(props){

    const dispatch = useDispatch();
    const errorMessage = useSelector(state => state.viewModal.error);
    const email = useSelector(state => state.viewModal.email);
    const password = useSelector(state => state.viewModal.password);
    const registrationToggle = useSelector(state => state.viewModal.registrationToggle)

    function getPassword(event){
        console.log(event.target.value);
        dispatch(setPassword(event.target.value))
    }

    function getEmail(event){
        console.log(event.target.value);
        dispatch(setEmail(event.target.value))
    }

    return (
        <div>
            {registrationToggle?
                <div className='modal'>
                    
                    <h1 className="text-xl font-bold my-10" >Sign up to Summarist</h1>
                    <div>
                        <input className="border w-9/10 rounded-md px-3 py-2 my-2" placeholder='Email Address' type="email" value={email} onChange={(event) => {getEmail(event)}} />
                    </div>
                    
                    <div>
                        <input className="border w-9/10 rounded-md px-3 py-2 my-2" placeholder='Password' type="text" value={password} onChange={(event) => {getPassword(event)}} />
                    </div>
                    
                    <button className='btn py-6 mt-4 mb-8' onClick={() => {dispatch(toggleLogin())}}>Sign up</button>
                    
                    <div className="bg-blue-100 p-3">
                        <button onClick={() => {dispatch(toggleLogin())}}>Already have an account?</button>
                    </div>
                </div>
                :
                <div className="modal">
                    <button onClick={() => {dispatch(deactivate())}}>Close</button>
                    <p>Login to Summarist</p>
                    {errorMessage?
                        <p>Email and/or password is wrong</p>
                        :
                        <></>
                    }
                    <button onClick={props.loginAsGuest}>Login as a Guest</button>
                    <div>
                        <input className="border w-9/10 rounded-md px-3 py-2 my-2" placeholder='Email Address' type="email" value={email} onChange={(event) => {getEmail(event)}} />
                    </div>
                    <div>
                        <input className="border w-9/10 rounded-md px-3 py-2 my-2" placeholder='Password' type="text" value={password} onChange={(event) => {getPassword(event)}} />
                    </div>
                    <div>
                        <button className='btn py-6 mt-4 mb-8' onClick={() => {props.login()}}>Submit</button>
                    </div>
                    <div>
                        <button onClick={() => {dispatch(toggleReg())}}>Register</button>
                    </div>
                </div>
            }
            <div className="backdrop"></div>
        </div>
    )
}

export default Modal
