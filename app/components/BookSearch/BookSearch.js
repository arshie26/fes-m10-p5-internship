import React from "react";
import Link from "next/link";

function BookSearch(props){
    return (
        <div className="absolute z-2 min-xl:right-100 max-w-[400px] max-h-[500px] bg-white overflow-y-scroll p-3 shadow-[0_0_10px_-2px]">
            {props.books.map((book, index) => {
                
                return (
                    
                    <Link key={index} className="flex p-5 w-full book__search--link" onClick={() => {props.toggleSearch()}} href={`/book/${book.id}`}>
                        <div className="w-2/10">
                            <img src={book.imageLink} />
                        </div>
                        <div className="w-full pl-5">
                            <p>{book.title}</p>
                            <p>{book.author}</p>
                            <p></p>
                        </div>
                    </Link>
                    
                )
            })

            }
        </div>
    )
}

export default BookSearch