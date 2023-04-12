import { FilterContainer } from "./Filter.styled";
import { Label, Input } from "components/Form/Form.styled";
import { useDispatch } from "react-redux";
import { setStatusFilter } from "redux/contactsFilter";

export const Filter = () => {

    const dispatch = useDispatch(); 
    const filterInput = e => {
      const { value } = e.currentTarget;
      dispatch(setStatusFilter(value))
    }
    return (
        <FilterContainer>
        <Label>Find Contacts By Name
        <Input type="text" onChange={filterInput}/>
        </Label>
        </FilterContainer>
    )
}