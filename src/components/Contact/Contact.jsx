import { useDispatch, useSelector } from "react-redux";
import { getIsLoading } from "redux/selectors";
import { Loader } from "components/Loader/Loader";
import { deleteContact } from "redux/operations";
import Button from '@mui/material/Button';


import { MdOutlineDeleteOutline } from "react-icons/md";

export const Contact = ({contact}) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading)
    const handleDelete = () => dispatch(deleteContact(contact.id));
    return (
        <>
            {contact.name}: <br /> {contact.number}
            <Button 
            type="button" 
            size="medium" 
            variant="contained"
            onClick={handleDelete} >
            {isLoading && <Loader size={5}/>  }
                <MdOutlineDeleteOutline size="23px"/>
                </Button>
        </>    
    )
}