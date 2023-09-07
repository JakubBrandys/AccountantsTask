import {Link, Outlet, useLocation} from 'react-router-dom';
import { RouteEnum } from '../enums/RouteEnum.ts';
import { styled } from 'styled-components';
import infaktImage from '../assets/infaktImage.png';

const StyledLink = styled(Link)`
  position: absolute;
  right: 25px;
  top: 25px;
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

const Image = styled('img')`
  margin-top: 48px;
  margin-left: 84px;
  width: 146px;
  height: 38px;
`;
const GlobalPage = () => {
    const location = useLocation()

 console.log(location.pathname)
  return (
    <div style={{ width: '100%'}}>
      <Image src={infaktImage} alt="icon" />
      <StyledLink to={RouteEnum.ACCOUNTANTS_PAGE}>Accountants</StyledLink>
      <Outlet />
    </div>
  );
};

export default GlobalPage;
