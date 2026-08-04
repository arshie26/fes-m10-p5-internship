import React from "react"
import Book from "../../components/Book/book";


async function forYou(){
    
    const recommended = [];
    const suggested = [];
    const selected = [];

    async function getBooks(){
        
        let recRequest = await fetch("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended");
        let recJSON = await recRequest.json();
        
        let suggestedRequest = await fetch("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested");
        let sugJSON = await suggestedRequest.json();

        let selRequest = await fetch("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected")
        let selJSON = await selRequest.json();

        
        recJSON.map((book) => {
            recommended.push(book);
        });

        sugJSON.map((book) => {
            suggested.push(book);
        })

        selJSON.map((book) => {
            selected.push(book);
        })

    }

    await getBooks();
    
    return (
        <div>
            <section className="selected mb-20">
                    
                    <div className="m-auto 2xl:w-60/100 w-90/100">
                        <h1 className="font-bold my-5">Selected just for you</h1>
                        <div>
                            <div>
                                {selected.length > 0?
                                    <div className="selected__box flex p-10 w-8/10 max-sm:w-full max-md:w-full bg-yellow-100">
                                        <div className="w-50">
                                            <p>{selected[0].subTitle}</p>
                                        </div>
                                        <div>
                                            <div className="w-35 mx-5">
                                                <img src={selected[0].imageLink} />
                                            </div>
                                            
                                        </div>
                                        <div>
                                            <h1>{selected[0].title}</h1>
                                            <p>{selected[0].author}</p>
                                        </div>
                                    </div>
                                    :
                                    <div className="flex p-6 w-5/10 h-50 bg-gray-100">
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    
            </section>
            <section className="recommended mb-20">
                    <div className="row">
                        <div className="m-auto w-full">
                            <h1 className="recommended__title font-bold mb-5">Recommended For You</h1>
                            <p className="recommended__subtitle mb-5">We think you'll like these</p>
                            <div className="book__carousel flex overflow-x-scroll">
                                {recommended? 
                                
                                    recommended
                                        .slice(0,5)
                                        .map((book) => {
                                        return (
                                            <Book key={book.id} book={book} />
                                        )
                                    })

                                : 
                                <>
                                </>
                                }
                            </div>
                    </div>
                    </div>
            </section>
            <section className="suggested mb-20">
            <div className="row">
            <div className="m-auto w-full">
                        <h1 className="suggested__title font-bold mb-5">Suggested For You</h1>
                        <p className="suggested__subtitle mb-5">Browse these books</p>
                        <div className="book__carousel flex overflow-x-scroll">
                        {suggested? 
                                
                                suggested
                                    .slice(0,5)
                                    .map((book) => {
                                    return (
                                        <Book key={book.id} book={book} />
                                    )
                                })

                            : 
                            <>
                            </>
                        }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default forYou