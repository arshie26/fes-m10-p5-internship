"use client"

import React from "react";
import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { activate, deactivate, displayError, resolveError } from "@/app/redux/features/viewModalSlice"
import { setUser } from "@/app/redux/features/userSlice"
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import db from "@/app/init/init";
import { collection, getDocs } from "firebase/firestore";

function ModalButton(props){

    const dispatch = useDispatch();
    const viewModal = useSelector(state => state.viewModal.viewModal)
    const user = useSelector(state => state.user.user)
    const email = useSelector(state => state.viewModal.email);
    const password = useSelector(state => state.viewModal.password);
    const router = useRouter();

    //click -> if logged in, direct to page. if not logged in, display modal
    //Login
    //Listen -> 
    //Read
    function checkUser(){

        if(Object.keys(user).length > 0){
            if(props.toggle === "Logout"){
                dispatch(setUser({}));
            }
            else{
                router.push(props.nextPage);
            }
        }
        else{
            dispatch(activate());
        }

    }

    async function loginAsGuest(){
        dispatch(setUser({email: "guest@gmail.com", password: "guest123"}));
        router.push(props.nextPage);
        dispatch(deactivate());
    }

    async function login(){
        const data = await getDocs(collection(db, "users"));
        const posts = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
        const userFound = posts.filter((user) => {console.log(user); return user.email === email && user.password === password});
        if(userFound.length === 1){
            console.log("User found");
            dispatch(setUser(userFound[0]));
            dispatch(resolveError());
            router.push(props.nextPage);
        }
        else{
            dispatch(displayError());
        }
    }

    return (
        <>
            <button className={props.classes}  onClick={() => {console.log("Registering"); checkUser()}}>{Object.keys(user).length > 0? props.toggle:props.buttonName}</button>
            {
                viewModal?
                <Modal login={login} loginAsGuest={loginAsGuest} />
                :
                <></>
            }
            
        </>
    )


}

export default ModalButton