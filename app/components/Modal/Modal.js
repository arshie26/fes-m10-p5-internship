"use client"
import './Modal.css'

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setEmail, setPassword, toggleReg, toggleLogin, showReset, hideReset } from "../../redux/features/viewModalSlice";
import { activate, deactivate, displayError, resolveError } from "../../redux/features/viewModalSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { setUser } from "../../redux/features/userSlice"
import { useRouter } from "next/navigation";
import { useEffect } from 'react';

import db, { initFirebase } from "../../init/init";

import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'



function Modal(props){

    const dispatch = useDispatch();
    const errorMessage = useSelector(state => state.viewModal.error);
    const email = useSelector(state => state.viewModal.email);
    const password = useSelector(state => state.viewModal.password);
    const registrationToggle = useSelector(state => state.viewModal.registrationToggle)
    const resetToggle = useSelector(state => state.viewModal.resetToggle)
    const nextPage = useSelector(state => state.viewModal.nextPage);
    const viewModal = useSelector(state => state.viewModal.viewModal)
    const user = useSelector(state => state.user.user)
    const router = useRouter();
    const provider = new GoogleAuthProvider();
    const app = initFirebase();
    const auth = getAuth(app);

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            console.log("App auth has changed", user);
            console.log("In Modal Next page is ", nextPage);
            if(user){
              dispatch(setUser(user.email));
              if(typeof(nextPage) === "string"){
                if(nextPage === "/for-you"){
                    completeRouting();
                }
              }
            }
        })
    }, [nextPage])


    function getPassword(event){
        
        dispatch(setPassword(event.target.value))
    }

    function getEmail(event){
        
        dispatch(setEmail(event.target.value))
    }



    function completeRouting(){
        if(nextPage){
            if(typeof(nextPage) === "string"){
                router.push(nextPage);
            }
            else{
                nextPage();
            }
        }
    }

    async function loginAsGuest(){
        try{
            let { user } = await signInWithEmailAndPassword(auth, "guest@gmail.com", "guest123");
            console.log("login user is now ", user);
            dispatch(setUser({email: user.email}))
            dispatch(deactivate());
            completeRouting();
        }
        catch(error){
            console.log("error is ", error);
            dispatch(displayError());
        }
        
    }

    const googleLogin = async () => {
        console.log(app);
        console.log(auth);
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        if(user){
            console.log("User found", user);
            dispatch(setUser({email: user.email}));
            dispatch(resolveError());
            completeRouting();
            dispatch(deactivate());
        }
        else{
            dispatch(displayError());
        }
    }

    async function register(){
        try{
            let { user } = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User sign up is now ", user);
            if(user){
                setUser({email: user.email})
                dispatch(deactivate());
            }
        }catch(error){
            console.log(error);
        }
    }

    async function login(){
        try{
            let { user } = await signInWithEmailAndPassword(auth, email, password);
            console.log("login user is now ", user);
            dispatch(setUser({email: user.email}))
            dispatch(deactivate());
            completeRouting();
        }
        catch(error){
            console.log("error is ", error);
            dispatch(displayError());
        }
    }

    return (
        <div>
        
            {
            viewModal?
            <>
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
                            
                            <button className='btn py-6 mt-4 mb-8' onClick={() => {register()}}>Sign up</button>
                            
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
                                    <button onClick={googleLogin}>Sign up with Google</button>
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
                                
                                <button className='btn py-6 mt-4 mb-8' onClick={() => {register()}}>Sign up</button>
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
                                    <button onClick={loginAsGuest} >Login as a Guest</button>
                                </div>
                                <div className='auth__separator'>
                                    <div className='auth__separator--text'>or</div>
                                </div>
                                <div className='relative bg-blue-400'>
                                    <figure className='google__login'>
                                        <img src="/google.png" />
                                    </figure>
                                    <button className='text-center google__login--button h-[40px]' onClick={googleLogin}>Login with Google</button>
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
                                    <button className='btn py-6 mt-4 mb-4' onClick={() => {login()}}>Submit</button>
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
                    </>
                    :
                    <></>
                }
            
        </div>
    )
}

export default Modal
