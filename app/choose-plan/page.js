import React from "react";
import '../style.css'
import PlanSelector from "../components/PlanSelector/PlanSelector";
import FAQs from "../components/FAQs/FAQs";

function ChoosePlan(){
    

    return (
        
        <div className="w-55/100 mx-auto  max-lg:w-9/10 items-center">
            <section className="flex flex-col items-center">
                <h1>Get unlimited access to many amazing books to read</h1>
                <p>Turn ordinary moments into amazing opportunities</p>
                <img className="w-5/10" src='/pricing-top.png' />
            </section>

            <section className="flex max-sm:flex-col max-sm:items-center">
                <div className="w-1/3 max-sm:w-9/10 max-sm:my-5">
                    <p className="text-center">Key ideas in few min with many books to read</p>
                </div>
                <div className="w-1/3 max-sm:w-9/10 max-sm:my-5">
                    <p className="text-center">3 million people growing with Summarist everyday</p>
                </div>
                <div className="w-1/3 max-sm:w-9/10 max-sm:my-5">
                    <p className="text-center">Precise recommendations collections curated by experts</p>
                </div>

            </section>
            <section>
                <h1 className="text-center my-5">Choose the plan that fits you</h1>
                <PlanSelector />
            </section>

            <section>
                <FAQs />
            </section>
        </div>
    )
}

export default ChoosePlan