"use client"

import React from "react";
import Link from "next/link";

function Book(props){

    return (

        <div>
        {props.book? 
            <Link href={`/book/${props.book.id}`}>
            <div className="book__container w-55 h-120 mx-2 px-5 relative pt-13 hover:bg-green-100">
                
                    {props.book.subscriptionRequired?
                        <div className="pillbox text-right bg-black text-white rounded-2xl absolute px-3 py-1 right-0 top-0">Premium</div>
                        :
                        <></>
                    }
                    
                    <div className="image__container w-40" >
                        <img src={props.book.imageLink} />
                    </div>
                    <h1 className="font-bold my-2">{props.book.title}</h1>
                    <p className="font-light">{props.book.author}</p>
                    <p className="my-2">{props.book.subTitle}</p>
                    <p>{props.book.averageRating}</p>
                
            </div>
            </Link>
            :
            <div className="book__container w-50 mx-2 px-5 relative pt-13 hover:bg-green-100">
                <div className="image__container w-50 bg-gray-200 h-70" >
                    
                </div>
                <h1 className="font-bold my-2 bg-gray-200 w-50 h-6"></h1>
                <p className="font-light bg-gray-200 w-40 h-4"></p>
                <p className="my-2 bg-gray-200 w-30 h-10"></p>
                <p className="bg-gray-200 w-40 h-4"></p>
            </div>
        }
        </div>
    )
}

export default Book