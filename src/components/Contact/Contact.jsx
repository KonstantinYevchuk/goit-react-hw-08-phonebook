import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoading } from "redux/selectors";
import { Loader } from "components/Loader/Loader";
import { deleteContact } from "redux/operations";
import { Modal } from "../Modal/Modal";
import { EditForm } from "../EditForm/EditForm";
import { Title, Number, ButtonContainer } from "./Contact.styled";
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
            <Number>{contact.number}</Number>
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
            children={<EditForm onClose={toggleModal} contact={contact}/>}
            />
            )}    
        </>    
    )
}