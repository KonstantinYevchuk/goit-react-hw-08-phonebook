import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoading } from "redux/selectors";
import { Loader } from "components/Loader/Loader";
import { deleteContact } from "redux/operations";
import { Modal } from "../Modal/Modal";
import Button from '@mui/material/Button';


import { MdOutlineDeleteOutline } from "react-icons/md";

export const Contact = ({contact}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
      setIsOpen(isOpen => !isOpen);
    };

    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading)
    const handleDelete = () => dispatch(deleteContact(contact.id));
    return (
        <>
            {contact.name}: <br /> {contact.number}
            <button onClick={toggleModal}>Edit</button>
            <Button 
            type="button" 
            size="medium" 
            variant="contained"
            onClick={handleDelete} >
            {isLoading && <Loader size={5}/>  }
                <MdOutlineDeleteOutline size="23px"/>
                </Button>

            {isOpen && (
            <Modal
            onClose={toggleModal}
            />
            )}    
        </>    
    )
}