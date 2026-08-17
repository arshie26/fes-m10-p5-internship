import React from "react";

function BookSearch(props){
    return (
        <div className="absolute z-2 min-xl:right-100 max-w-[400px] max-h-[500px] bg-white overflow-y-scroll p-3 shadow-[0_0_10px_-2px]">
            {props.books.map((book) => {
                return (
                    <div className="flex p-5 w-full">
                        <div className="w-2/10">
                            <img src={book.imageLink} />
                        </div>
                        <div className="w-full pl-5">
                            <p>{book.title}</p>
                            <p>{book.author}</p>
                            <p></p>
                        </div>
                    </div>
                )
            })

            }
        </div>
    )
}

export default BookSearch