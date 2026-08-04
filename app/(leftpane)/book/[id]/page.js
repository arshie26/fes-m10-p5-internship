"use client"
import React, { useEffect, useState } from "react";

function aboutBook({params}){
    
    const {id} = React.use(params);
    const [book, setBook] = useState({});

    async function getBook(){

        let bookRequest = await fetch(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`)
        let bookJSON = await bookRequest.json();
        console.log(bookJSON);
        setBook(bookJSON);
    }


    

    useEffect(() => {
        getBook();
    }, [id])



    return (

        <section>
            {Object.keys(book).length?
                <div className="w-50/100 m-auto flex max-lg:flex-col-reverse max-lg:w-9/10 max-lg:items-center">
                    <div className="row w-90/100 mr-5">
                        <h1 className="font-bold mb-5 text-3xl max-sm:my-5 max-lg:text-2xl">{book?.title}</h1>
                        <p className="font-bold mb-5">{book?.author}</p>
                        <p className="mb-4 text-xl max-lg:text-lg">{book?.subTitle}</p>
                        <hr className="mb-4" />
                        <div className="flex">
                            <div className="font-bold mr-10">
                                <p className="mb-4">{book?.averageRating} ({book?.totalRating}) ratings</p>
                                <p className="mb-4">{book?.type}</p>
                            </div>
                            <div className="flex font-bold">
                                
                                <p>{book?.keyIdeas} Key Ideas</p>
                            </div>
                        </div>
                        <hr className="mb-6" />
                        <div className="mb-5">
                            <button className="bg-[#032b41] text-white p-3 px-12 mr-3">Read</button>
                            <button className="bg-[#032b41] text-white p-3 px-12 ml-3">Listen</button>
                        </div>
                        <p className="font-bold mb-4">What's it about?</p>
                        <div className="flex mb-4 font-bold max-sm:flex-col">
                            {book?.tags?.map((tag) => {
                                return (
                                    <p className="p-4 bg-gray-100 mx-3 max-lg:mb-4">{tag}</p>
                                )
                            })
                            }
                        </div>
                        <p className="mb-4">{book?.bookDescription}</p>
                        <p className="font-bold mb-4">About the author</p>
                        <p>{book?.authorDescription}</p>
                    </div>
                    <div className="w-80">
                        <img src={book.imageLink} />
                    </div>
                </div>
                :
                <div className="w-50/100 m-auto flex max-lg:flex-col-reverse max-lg:w-9/10 max-lg:items-center">
                    <div className="row w-70/100 mr-10">
                        <h1 className="mb-5 bg-gray-200 w-150 h-10 max-sm:w-75"></h1>
                        <p className="mb-5 bg-gray-200 w-50 h-10 max-sm:w-25"></p>
                        <p className="mb-4 bg-gray-200 w-150 h-10 max-sm:w-75"></p>
                        <div className="bg-gray-200 mb-4 w-100 h-20 max-sm:w-50"></div>
                        <div className="bg-gray-200 mb-4 w-120 h-10 max-sm:w-60"></div>
                        <p className="bg-gray-200 mb-4 w-50 h-10 max-sm:w-25"></p>
                        <div className="mb-4 bg-gray-200 mb-4 w-100 h-20 max-sm:w-50"></div>
                        <p className="mb-4 bg-gray-200 mb-4 w-150 h-40 max-sm:w-75"></p>
                        <p className="mb-4 bg-gray-200 mb-4 w-150 h-70 max-sm:w-75"></p>
                        <p>{book?.authorDescription}</p>
                    </div>
                    <div className="bg-gray-200 mb-4 w-100 h-70">
                        
                    </div>
                </div>
            }
        </section>
    )
}

export default aboutBook