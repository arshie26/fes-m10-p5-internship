import React from "react";

function PlayerBar(props){
    return (
        <div className="fixed z-2 bottom-0 left-0 right-0 bg-blue-400 h-20">
            <div className="bookInfo flex p-2">
                <div className="bookCover w-[65px]">
                <img src={props.book.imageLink} />
                </div>
                <div>
                    <p>{props.book.title}</p>
                    <p>{props.book.author}</p>
                </div>
            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    )
}

export default PlayerBar