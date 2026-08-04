import './Modal.css'


function Modal(){
    return (
        <>
            <div className="modal">
                Registration
                <div>
                    <input placeholder='Email Address' type="email" />
                </div>    
            </div>
            
            <div className="backdrop"></div>
        </>
    )
}

export default Modal
