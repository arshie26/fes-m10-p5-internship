"use client"
import React, { useEffect, useState } from "react";
import PlayerBar from '../../../components/PlayerBar/PlayerBar'

function BookPlayer({params}){
    
    const {id} = React.use(params);
    const [book, setBook] = useState({});
    const [summary, setSummary] = useState([]);

    async function getBook(){
        let bookRequest = await fetch(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`)
        let bookJSON = await bookRequest.json();
        console.log(bookJSON);
        setBook(bookJSON);
        let rawSummary = bookJSON.summary.split("\n\n")
        setSummary(rawSummary);

    }


    

    useEffect(() => {
        getBook();
    }, [id])



    return (

        <section>
            {Object.keys(book).length?
                <div className="w-[800px] m-auto flex max-lg:flex-col-reverse max-lg:w-9/10 max-lg:items-center">
                    <div className="row w-90/100 mr-5">
                        <h1 className="font-bold mb-5 text-3xl max-sm:my-5 max-lg:text-2xl">{book?.title}</h1>
                        <hr className="mb-10" />
                        {
                            summary.map((para) => {
                                console.log(para);
                                return (
                                    <>
                                        <p>{para}</p>
                                        <br/>
                                    </>
                                )
                            })
                        }
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
            <PlayerBar book={book} />
            
        </section>
    )
}

export default BookPlayer