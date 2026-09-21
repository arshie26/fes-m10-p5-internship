"use client"
import './Modal.css'

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setEmail, setPassword, toggleReg, toggleLogin, showReset, hideReset } from "../../redux/features/viewModalSlice";
import { deactivate } from "../../redux/features/viewModalSlice"

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
            {
            resetToggle?
                <div className='modal'>
                    <div className='w-9/10'>
                        <button onClick={() => {dispatch(hideReset()); dispatch(deactivate());}}>Close</button>
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
                </div>
                :
                registrationToggle?
                    <div className='modal'>
                        <div className='w-9/10'>
                            <h1 className="text-xl font-bold my-10" >Sign up to Summarist</h1>
                            <div className='bg-blue-400 py-2'>
                                <button onClick={props.googleLogin}>Login with Google</button>
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
                            
                            <div className="bg-blue-100 p-3">
                                <button onClick={() => {dispatch(toggleLogin())}}>Already have an account?</button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="modal">
                        <button onClick={() => {dispatch(deactivate())}}>Close</button>
                        <p className='font-bold text-xl my-4'>Log in to Summarist</p>
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
                            <div className='bg-blue-400 py-2'>
                                <button onClick={props.googleLogin}>Login with Google</button>
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
                                <button className='btn py-6 mt-4 mb-8' onClick={() => {props.login()}}>Submit</button>
                            </div>
                            <div>
                                <button onClick={() => {dispatch(showReset())}}>Forgot password?</button>
                            </div>
                            <div>
                                <button onClick={() => {dispatch(toggleReg())}}>Don't have an account?</button>
                            </div>
                        </div>
                    </div>
                }
            <div className="backdrop" onClick={() => {dispatch(deactivate())}}></div>
        </div>
    )
}

export default Modal
