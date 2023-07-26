import { useDispatch } from "react-redux";
import { editContact } from "redux/operations";
import { Formik, ErrorMessage } from 'formik';
import { Title, Field, Form } from './EditForm.styled';
import Button from '@mui/material/Button';
import * as Yup from 'yup';

const editSchema = Yup.object().shape({
    name: Yup.string().required('Please, enter your email'),
    number: Yup.string().matches("[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}").required('Please, enter your number'),
  });

  export const EditForm = ({onClose, contact}) => {
    const dispatch = useDispatch();
    const { id } = contact;

    function handleSubmit(value) {
        const { name, number } = value;
        dispatch(editContact({ name, number, id }))
        onClose()
      }
    return (
        <>
        <Title>Edit your contact</Title>
        <Formik
        initialValues={{ name: '', number: '' }}
          validationSchema={editSchema}
          onSubmit={(value, { resetForm }) => {
            handleSubmit(value);
            resetForm();
          }}>
            <Form>
            <Field type="text" name="name" placeholder="Enter name" />
            <ErrorMessage
                name="name"
                component="div"
                style={{
                  color: 'red',
                  fontSize: 14,
                }}
              />
              <Field type="tel" name="number" placeholder="Enter number" />
              <ErrorMessage
                name="number"
                component="div"
                style={{
                  color: 'red',
                  fontSize: 14,
                }}
              />
              <Button 
              type="submit"
              size="small" 
              variant="contained"
              > Send </Button>
            </Form>
        </Formik>
        </>
    )

}