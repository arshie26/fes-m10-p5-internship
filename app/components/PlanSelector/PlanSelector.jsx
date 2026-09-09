"use client"

import React, {useState} from "react"
import ModalButton from "../ModalButton/ModalButton";
import '../../style.css'
import { getCheckoutUrl } from '../../redux/stripePayment'
import { useRouter } from "next/navigation"; 
import { initFirebase } from "../../init/init";
import { getAuth } from "firebase/auth";

function PlanSelector(){

    const [plan, setPlan] = useState("yearly")
    const app = initFirebase();
    const auth = getAuth;
    
    const buttonText = [{button: "Start your free 7-day trial", detail: "Cancel your trial at any time before it ends, and you won’t be charged."}, 
        {button: "Start your first month", detail: "30-day money back guarantee, no questions asked."}];
    const [button, setButton] = useState(buttonText[0].button);
    const [detail, setDetail] = useState(buttonText[0].detail);
    
    

    function selectPlan(chosen){
        setPlan(chosen);
        if(chosen === "yearly"){
            setButton(buttonText[0].button);
        }
        else{
            setButton(buttonText[1].button);
        }
    }

    const upgrade = async () => {
        const priceId = "price_1UD4E4ARYTsqMftisUQfiEkM"
        const checkoutUrl = await getCheckoutUrl(app, priceId);
        router.push(checkoutUrl);

    }

    return (
        <div>
            <div className={plan === "yearly"? "border-2 border-black-200":"border-2 border-gray-200"} onClick={() => {selectPlan("yearly")}}>
                <div className="flex p-5 bg-gray-200">
                    <div>
                        <p className="mb-2">Premium Plus Yearly</p>
                        <p className="mb-2">$99.99/year</p>
                        <p className="mb-2">7-day free trial included</p>
                    </div>
                </div>
            </div>
            <div>
                <div>or</div>
            </div>
            <div className={plan === "monthly"? "border-2 border-black-200":"border-2 border-gray-200"} onClick={() => {selectPlan("monthly")}}>
                <div className="flex p-5 bg-gray-200">
                    <div>
                        <p className="mb-2">Premium Plus Monthly</p>
                        <p className="mb-2">$9.99/month</p>
                        <p className="mb-2">No trial included</p>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col items-center my-10">
                <ModalButton nextPage={upgrade} buttonName={button} classes={"btn home__cta--btn"} />
                <p className="text-xs my-5">{detail}</p>
            </div>
        </div>
    )

}

export default PlanSelector