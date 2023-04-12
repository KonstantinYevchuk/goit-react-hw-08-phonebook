
import { useDispatch, useSelector } from "react-redux";
import { getIsLoading } from "redux/selectors";
import { Loader } from "components/Loader/Loader";
// import { deleteContact } from 'redux/contactsSlice';
import { deleteContact } from "redux/operations";
import { Button } from './Contact.styled';

export const Contact = ({contact}) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading)
    const handleDelete = () => dispatch(deleteContact(contact.id));
    return (
        <>
            {contact.name}: {contact.number}
            <Button type="button" onClick={handleDelete} >
            {isLoading && <Loader size={5}/>  }
                Delete
                </Button>
        </>    
    )
}