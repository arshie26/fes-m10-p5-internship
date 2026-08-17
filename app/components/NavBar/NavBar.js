"use client"
import React, { useState } from "react";
import BookSearch from "../BookSearch/BookSearch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass, faTimes } from "@fortawesome/free-solid-svg-icons";

function NavBar(){
    const [book, setBook] = useState("");
    const [booksList, setBooksList] = useState([]);
    const [search, setSearch] = useState(false);
    const [pane, setPane] = useState(false);

    async function getBook(event){
        setBook(event.target.value);
        if(event.target.value === ""){
            setBooksList([]);
        }
        else{
            setSearch(true);
            let booksFetch = await fetch(`https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${event.target.value}`);
            let booksSearch = await booksFetch.json();
            setBooksList(booksSearch);
        }
    }

    function toggleSearch(){
        if(search){
            setSearch(false);
            setBook("");
            setBooksList([]);
        }
        else{
            setSearch(true);
        }
    }

    function togglePane(){
        document.body.classList += " menu "
    }

    return (
        <div className="relative">

            <div className="flex justify-between w-55/100 m-auto max-lg:w-9/10 p-6">
                <div>

                </div>
                <div className="flex">
                    <div className="w-full max-w-[340px] relative bg-gray-100">
                        <div>
                            <input type="text" placeholder="Search for books" className="border px-5 py-2 w-full" value={book} onChange={(event) => { return getBook(event)}} />
                            <div className="absolute right-3 border-l-2 pl-2 h-full top-0 flex items-center" >
                                {
                                    search?
                                    <FontAwesomeIcon icon={faTimes} onClick={toggleSearch} />
                                    :
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                }
                                
                            </div>
                        </div>
                    </div>
                    <div className="ml-3 flex md:hidden items-center">
                        <FontAwesomeIcon icon={faBars} onClick={togglePane} />
                    </div>
                </div>
            </div>
            {
                booksList.length > 0?
                    <BookSearch books = {booksList} />
                    :
                    <></>
            }

        </div>
    )
}

export default NavBar