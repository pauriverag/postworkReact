import ReactDOM from 'react-dom';
import "./Modal.css";

const Backdrop = (props) =>{
    return <div className='backdrop' onClick={props.onClick}/>;
    
}
const ModalOverlay = (props) => {
    return(
        <div className="modal">
            <header className="header">
                <h2>{props.title}</h2>
            </header>
            <div className="content">
                <p>{props.message}</p>
            </div>
            <footer className="actions">
                <button className='btn-cerrar' onClick={props.onClick}>Cerrar</button>
                <button className='btn-ordenar' onClick={props.onClick}>Ordenar</button>
            </footer>
        </div>
    )
}

function Modal(props){
    return(
        <>
        {
             ReactDOM.createPortal(
                <Backdrop onClick={props.onClick}/>,
                document.getElementById("backdrop-root")

            )
        }
        {
           
            ReactDOM.createPortal(
                <ModalOverlay 
                    title={props.title}
                    message={props.message}
                    onClick={props.onClick}
                />,
                document.getElementById("modal-root")
            )
        }
        </>

    ) 
}

export default Modal;