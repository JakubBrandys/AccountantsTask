import { Link, Outlet } from 'react-router-dom';
import { RouteEnum } from '../enums/RouteEnum.ts';
import { styled } from '@mui/system';
import inFaktIcon from 'assets/infaktImage.png'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  padding: 10px 20px;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;
const GlobalPage = () => {
  return (
    <>
        <img src={inFaktIcon} alt="icon" />
      <StyledLink to={RouteEnum.ACCOUNTANTS_PAGE}>Accountants</StyledLink>
      <Outlet />
    </>
  );
};

export default GlobalPage;
