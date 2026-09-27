"use client"

import React, { useEffect } from "react";
import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { activate, deactivate, displayError, resolveError, setNextPage } from "../../redux/features/viewModalSlice"
import { setUser } from "../../redux/features/userSlice"
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import db, { initFirebase } from "../../init/init";
import { collection, getDocs } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'

function ModalButton(props){

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user)
    const router = useRouter();
    const app = initFirebase();
    const auth = getAuth(app);
    
    useEffect(() => {
        dispatch(setNextPage(props.nextPage));
    }, [])

    //click -> if logged in, direct to page. if not logged in, display modal
    //Login
    //Listen -> 
    //Read
    function checkUser(){

        if(Object.keys(user).length > 0){
            if(props.toggle === "Logout"){
                signOut(auth);
                dispatch(setUser({}));
            }
            else{
                completeRouting();
            }
        }
        else{
            dispatch(activate());
        }

    }


    function completeRouting(){
        if(props.nextPage){
            if(typeof(props.nextPage) === "string"){
                router.push(props.nextPage);
            }
            else{
                props.nextPage();
            }
        }
    }

    

    return (
        <>
            <button className={props.classes}  onClick={() => {console.log("Registering"); checkUser()}}>{Object.keys(user).length > 0? props.toggle:props.buttonName}</button>
            {/*
                viewModal?
                <Modal login={login} register={register} googleLogin = {googleLogin} loginAsGuest={loginAsGuest} />
                :
                <></>
            */}
            
        </>
    )


}

export default ModalButton