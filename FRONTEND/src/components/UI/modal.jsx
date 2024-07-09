function Modal(props) {
    
    return(
    <div className="overlay" onClick={props.closeModal}>
        <div className="modal leaderboard" onClick={(e) => e.stopPropagation()}>
            <label className="modalLabel">{props.label}</label>
            
            {props.children}
        </div>
    </div>)
}
export default Modal;
