import React from 'react'
import {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
const AddMovie = ({addMovie}) => {
    const [show, setShow] = useState(false);
    const [newtitle,setTitle] = useState("");
    const [newyear,setYear] = useState(0);
    const [newposter,setPoster] = useState("");
    const[newrating,setRating] = useState();

    const handleSave=()=>{
        let newmovie={
            title : newtitle,
            year : newyear,
            url : newposter,
            rating : newrating
        }
        addMovie(newmovie);
        setTitle("");
        setYear(0);
        setPoster('');
        setRating(0)
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Add Movie
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add movie</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <input type="text" placeholder="Add title..."/><br/>
                    <input type="text" placeholder="Year of release..."/><br/>
                    <input type="text" placeholder="Poster url..."/><br/>
                    <input type="text" placeholder="rating..."/>
                </Modal.Body>
        
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleSave}>Save changes</Button>
                </Modal.Footer>
            </Modal>        
        </div>
    )
}

export default AddMovie
