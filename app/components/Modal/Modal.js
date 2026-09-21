"use client"
import './Modal.css'

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setEmail, setPassword, toggleReg, toggleLogin, showReset, hideReset } from "../../redux/features/viewModalSlice";
import { deactivate } from "../../redux/features/viewModalSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Modal(props){

    const dispatch = useDispatch();
    const errorMessage = useSelector(state => state.viewModal.error);
    const email = useSelector(state => state.viewModal.email);
    const password = useSelector(state => state.viewModal.password);
    const registrationToggle = useSelector(state => state.viewModal.registrationToggle)
    const resetToggle = useSelector(state => state.viewModal.resetToggle)

    function getPassword(event){
        
        dispatch(setPassword(event.target.value))
    }

    function getEmail(event){
        
        dispatch(setEmail(event.target.value))
    }

    return (
        <div>
        <div className='modal relative'>
            <button className='closeButton' onClick={() => {dispatch(hideReset()); dispatch(deactivate());}}><FontAwesomeIcon icon={faTimes} /></button>
            {
            resetToggle?
                <>
                    <div className='w-9/10'>
                        <h1 className="text-xl font-bold my-10" >Reset Password</h1>
                        <div>
                            <input className="border w-full rounded-md px-3 py-2 my-2" placeholder='Email Address' type="email" value={email} onChange={(event) => {getEmail(event)}} />
                        </div>
                        
                        <div>
                            <input className="border w-full rounded-md px-3 py-2 my-2" placeholder='Password' type="text" value={password} onChange={(event) => {getPassword(event)}} />
                        </div>
                        
                        <button className='btn py-6 mt-4 mb-8' onClick={() => {props.register()}}>Sign up</button>
                        
                        <div className="bg-blue-100 p-3">
                            <button onClick={() => {dispatch(hideReset());}}>Back to Login</button>
                        </div>
                    </div>
                </>
                :
                registrationToggle?
                    <>
                        <div className='w-8/10'>
                            <h1 className="text-xl font-bold my-7" >Sign up to Summarist</h1>
                            <div className='bg-blue-400 py-2'>
                                <button onClick={props.googleLogin}>Sign up with Google</button>
                            </div>
                            <div className='auth__separator'>
                                <div className='auth__separator--text'>or</div>
                            </div>
                            <div>
                                <input className="border w-full rounded-md px-3 py-2 my-2" placeholder='Email Address' type="email" value={email} onChange={(event) => {getEmail(event)}} />
                            </div>
                            
                            <div>
                                <input className="border w-full rounded-md px-3 py-2 my-2" placeholder='Password' type="text" value={password} onChange={(event) => {getPassword(event)}} />
                            </div>
                            
                            <button className='btn py-6 mt-4 mb-8' onClick={() => {props.register()}}>Sign up</button>
                        </div>
                        <div className="bg-blue-100 p-3 w-full">
                            <button onClick={() => {dispatch(toggleLogin())}}>Already have an account?</button>
                        </div>
                    </>
                    :
                    <>
                        <p className='font-bold text-xl my-10'>Log in to Summarist</p>
                        {errorMessage?
                            <p>Email and/or password is wrong</p>
                            :
                            <></>
                        }
                        <div className='w-9/10'>
                            <div className='bg-blue-400 py-2'>
                                <button onClick={props.loginAsGuest} >Login as a Guest</button>
                            </div>
                            <div className='auth__separator'>
                                <div className='auth__separator--text'>or</div>
                            </div>
                            <div className='relative bg-blue-400'>
                                <figure className='google__login'>
                                    <img src="/google.png" />
                                </figure>
                                <button className='text-center google__login--button h-[40px]' onClick={props.googleLogin}>Login with Google</button>
                            </div>
                            <div className='auth__separator'>
                                <div className='auth__separator--text'>or</div>
                            </div>
                            <div>
                                <input className="border w-full rounded-md px-3 py-2 my-2" placeholder='Email Address' type="email" value={email} onChange={(event) => {getEmail(event)}} />
                            </div>
                            <div>
                                <input className="border w-full rounded-md px-3 py-2 my-2" placeholder='Password' type="text" value={password} onChange={(event) => {getPassword(event)}} />
                            </div>
                            <div>
                                <button className='btn py-6 mt-4 mb-4' onClick={() => {props.login()}}>Submit</button>
                            </div>
                            <div className='p-3'>
                                <button onClick={() => {dispatch(showReset())}}>Forgot password?</button>
                            </div>
                        </div>
                        <div className="bg-blue-100 p-3 w-full">
                            <button onClick={() => {dispatch(toggleReg())}}>Don't have an account?</button>
                        </div>
                    </>
                }
            </div>
            <div className="backdrop" onClick={() => {dispatch(deactivate())}}></div>
        </div>
    )
}

export default Modal
