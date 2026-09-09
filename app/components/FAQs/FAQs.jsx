"use client"

import React, { useEffect } from "react";
import '../../style.css'

function FAQs(){
    useEffect(() => {
        var coll = document.getElementsByClassName("collapsible");
        var i;
        console.log(coll);
        
        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                content.style.display = "none";
                } else {
                content.style.display = "block";
                }
            });
        }
    }, [])

    return (
        <div>
            <div>
                <button type="button" class="collapsible">How does the free 7-day trial work?</button>
                <div class="content">
                    <p>Begin your complimentary 7-day trial with a Summarist annual membership. You are under no obligation to continue your subscription, and you will only be billed when the trial period expires. With Premium access, you can learn at your own pace and as frequently as you desire, and you may terminate your subscription prior to the conclusion of the 7-day free trial.</p>
                </div>
            </div>
            <div>
                <button type="button" class="collapsible">Can I switch subscriptions from monthly to yearly, or yearly to monthly?</button>
                <div class="content">
                    <p>While an annual plan is active, it is not feasible to switch to a monthly plan. However, once the current month ends, transitioning from a monthly plan to an annual plan is an option.</p>
                </div>
            </div>
            <div>
                <button type="button" class="collapsible">What's included in the Premium plan?</button>
                <div class="content">
                    <p>Premium membership provides you with the ultimate Summarist experience, including unrestricted entry to many best-selling books high-quality audio, the ability to download titles for offline reading, and the option to send your reads to your Kindle.</p>
                </div>
            </div>
            <div>
                <button type="button" class="collapsible">Can I cancel during my trial or subscription?</button>
                <div class="content">
                    <p>You will not be charged if you cancel your trial before its conclusion. While you will not have complete access to the entire Summarist library, you can still expand your knowledge with one curated book per day.</p>
                </div>
            </div>
        </div>
    )
}

export default FAQs