import { Link, Outlet, useLocation } from 'react-router-dom';
import { RouteEnum } from '../enums/RouteEnum.ts';
import { styled } from 'styled-components';
import infaktImage from '../assets/infaktImage.png';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  padding: 10px 20px;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  margin-left: 50px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Image = styled('img')`
  margin-top: 48px;
  margin-left: 84px;
  width: 146px;
  height: 38px;
`;

const GlobalPage = () => {
  const location = useLocation();
  return (
    <>
      <Image src={infaktImage} alt="icon" />
      {location.pathname === RouteEnum.GLOBAL_PAGE && (
        <StyledLink to={RouteEnum.ACCOUNTANTS_PAGE}>Accountants</StyledLink>
      )}
      <Outlet />
    </>
  );
};

export default GlobalPage;
