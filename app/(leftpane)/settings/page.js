"use client"

import React, { useEffect, useState } from "react";
import { getPremiumStatus } from "../../redux/stripePayment";
import { initFirebase } from "../../init/init";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ModalButton from "../../components/ModalButton/ModalButton";
import { useSelector } from "react-redux";

const Settings = () => {

    const app = initFirebase();
    const auth = getAuth(app);
    const [isPremium, setIsPremium] = useState(false);
    const [email, setEmail] = useState("");
    const user = useSelector(state => state.user.user)


    useEffect(() => {
        const checkPremium = async () => {
            const newPremiumStatus = auth.currentUser? await getPremiumStatus(app): false;
            setIsPremium(newPremiumStatus);
        }
        checkPremium();
        onAuthStateChanged(auth, (user) => {
            console.log("Settings auth has changed", user);
            if(user){
              setEmail(user.email)

            }
            else{
              setEmail("");
            }
        })
    }, [])

    return (
        
        <section className="border-t-1 pt-10 border-gray-300">
            <div className="w-55/100 m-auto flex flex-col max-lg:w-9/10">
                <h1 className="text-3xl font-bold">Settings</h1>
                <hr className="my-7 border-gray-300" />
        {Object.keys(user).length > 0?
            <div>
                <p className="font-bold text-lg">    
                    Your Subscription Plan
                </p>
                
                    {isPremium? 
                        <p>
                            Premium
                        </p>
                        :
                        <div>
                            Basic
                            <ModalButton buttonName="Upgrade" toggle="Upgrade" nextPage={"/choose-plan"} classes={"btn home__cta--btn"} />
                        </div>
                    }
                <hr className="my-7 border-gray-300" />
                <p className="font-bold text-lg">
                    Email 
                </p>
                <p>
                {email}
                </p>    
                
            </div>
            :
            <div className="w-55/100 m-auto flex flex-col max-lg:w-9/10 items-center">
                <img src="/login.png" />
                <h1 className="font-bold text-2xl mb-5">Log in to your account to see your details</h1>    
                <ModalButton buttonName={"Login"} classes={"btn home__cta--btn"} />
            </div>
            
        }
        </div>
        </section>
    )
}

export default Settings