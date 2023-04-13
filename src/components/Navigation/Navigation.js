// import { NavLink } from 'react-router-dom';
// import { useAuth } from 'hooks';
import { StyledLink } from "./Navigation.styled";


export const Navigation = () => {
//   const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledLink to="/">
        Home
      </StyledLink>
      {/* {isLoggedIn && (
        <NavLink className={css.link} to="/tasks">
          Tasks
        </NavLink>
      )} */}
    </nav>
  );
};