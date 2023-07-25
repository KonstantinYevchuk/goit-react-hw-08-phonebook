import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoading } from "redux/selectors";
import { Loader } from "components/Loader/Loader";
import { deleteContact } from "redux/operations";
import { Modal } from "../Modal/Modal";
import { Title, ButtonContainer } from "./Contact.styled";
import Button from '@mui/material/Button';

import { AiFillEdit } from "react-icons/ai";
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
            <div>
            <Title>{contact.name}:</Title>
            <p>{contact.number}</p>
            </div> 
            <ButtonContainer>
            <Button
            type="button" 
            size="medium" 
            variant="contained" 
            onClick={toggleModal}
            >
            <AiFillEdit size="23px"/>
            </Button>
            <Button 
            type="button" 
            size="medium" 
            variant="contained"
            onClick={handleDelete} >
            {isLoading && <Loader size={5}/>  }
                <MdOutlineDeleteOutline size="23px"/>
                </Button>
            </ButtonContainer>
            {isOpen && (
            <Modal
            onClose={toggleModal}
            />
            )}    
        </>    
    )
}