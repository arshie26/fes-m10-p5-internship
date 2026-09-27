import React from "react";
import '../style.css'
import PlanSelector from "../components/PlanSelector/PlanSelector";
import FAQs from "../components/FAQs/FAQs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling, faHandshake, faFile } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass, faTimes } from "@fortawesome/free-solid-svg-icons";

function ChoosePlan(){
    

    return (
        <div>
            <div>
                <section className="flex flex-col items-center rounded-b-[200px] bg-[#032b41] max-sm:rounded-none">
                    <h1 className="text-white text-5xl text-center font-bold my-10 max-sm:text-2xl">Get unlimited access to many amazing books to read</h1>
                    <p className="text-white text-xl text-center my-5">Turn ordinary moments into amazing opportunities</p>
                    <img className="w-2/10 rounded-t-full max-sm:w-8/10" src='/pricing-top.png' />
                </section>
            </div>
            <div className="w-55/100 mx-auto  max-lg:w-9/10 items-center my-10">
                <section className="flex max-sm:flex-col max-sm:items-center">
                    <div className="w-1/3 max-sm:w-9/10 max-sm:my-5 flex flex-col items-center">
                        <FontAwesomeIcon icon={faFile} className="chooseplan__feature" />
                        <p className="text-center my-5">Key ideas in few min with many books to read</p>
                    </div>
                    <div className="w-1/3 max-sm:w-9/10 max-sm:my-5 flex flex-col items-center">
                        <FontAwesomeIcon icon={faSeedling} className="chooseplan__feature" />
                        <p className="text-center my-5">3 million people growing with Summarist everyday</p>
                    </div>
                    <div className="w-1/3 max-sm:w-9/10 max-sm:my-5 flex flex-col items-center">
                        <FontAwesomeIcon icon={faHandshake} className="chooseplan__feature" />
                        <p className="text-center my-5">Precise recommendations collections curated by experts</p>
                    </div>
                </section>
                <section>
                    <h1 className="text-center text-3xl my-5">Choose the plan that fits you</h1>
                    <PlanSelector />
                </section>

                <section>
                    <FAQs />
                </section>
                
            </div>
            <div className="bg-[#f1f6f4]">
                <section className="w-55/100 mx-auto max-lg:w-9/10 text-s py-15">
                    <div className="flex justify-between max-lg:flex-col">
                        <div>
                            <h2 className="my-3 max-lg:mt-10 text-lg font-bold">Actions</h2>
                            <ul>
                                <li className="my-2">Summarist Magazine</li>
                                <li className="my-2">Cancel subscription</li>
                                <li className="my-2">Help</li>
                                <li className="my-2">Contact Us</li>
                            </ul>
                        </div>
                        <div >
                            <h2 className="my-3 max-lg:mt-10 text-lg font-bold">Useful Links</h2>
                            <ul>
                                <li className="my-2">Pricing</li>
                                <li className="my-2">Summarist Business</li>
                                <li className="my-2">Gift Cards</li>
                                <li className="my-2">Authors & Publishers</li>
                            </ul>
                        </div>
                        <div >
                            <h2 className="my-3 max-lg:mt-10 text-lg font-bold">Company</h2>
                            <ul>
                                <li className="my-2">About</li>
                                <li className="my-2">Careers</li>
                                <li className="my-2">Partners</li>
                                <li className="my-2">Code of Conduct</li>
                            </ul>
                        </div>
                        <div >
                            <h2 className="my-3 max-lg:mt-10 text-lg font-bold">Other</h2>
                            <ul>
                                <li className="my-2">Sitemap</li>
                                <li className="my-2">Legal Notice</li>
                                <li className="my-2">Terms of Service</li>
                                <li className="my-2">Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center text-lg font-bold mt-15">
                        <p>Copyright &copy; 2023 Summarist</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ChoosePlan