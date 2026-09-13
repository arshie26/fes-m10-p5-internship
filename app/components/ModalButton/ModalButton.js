"use client"

import React, { useEffect } from "react";
import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { activate, deactivate, displayError, resolveError } from "../../redux/features/viewModalSlice"
import { setUser } from "../../redux/features/userSlice"
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import db, { initFirebase } from "../../init/init";
import { collection, getDocs } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'

function ModalButton(props){

    const dispatch = useDispatch();
    const viewModal = useSelector(state => state.viewModal.viewModal)
    const user = useSelector(state => state.user.user)
    const email = useSelector(state => state.viewModal.email);
    const password = useSelector(state => state.viewModal.password);
    const router = useRouter();
    const provider = new GoogleAuthProvider();
    const app = initFirebase();
    const auth = getAuth(app);
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log("App auth has changed", user);
            if(user){
              dispatch(setUser(user.email));
              if(typeof(props.nextPage) === "string"){
                if(props.nextPage === "/for-you"){
                    completeRouting();
                }
              }
            }
        })
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

    async function loginAsGuest(){
        dispatch(setUser({email: "guest@gmail.com", password: "guest123"}));
        //router.push(props.nextPage);
        completeRouting();
        dispatch(deactivate());
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
        <>
            <button className={props.classes}  onClick={() => {console.log("Registering"); checkUser()}}>{Object.keys(user).length > 0? props.toggle:props.buttonName}</button>
            {
                viewModal?
                <Modal login={login} register={register} googleLogin = {googleLogin} loginAsGuest={loginAsGuest} />
                :
                <></>
            }
            
        </>
    )


}

export default ModalButton