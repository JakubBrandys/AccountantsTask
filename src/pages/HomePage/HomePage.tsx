import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import infaktImage from 'assets/infaktImage.png';
import { Image } from 'ui/Image';
import { StyledLink } from 'ui/StyledLink';
import { RouteEnum } from 'enums/RouteEnum.ts';
import { Container } from 'pages/HomePage/HomePageStyles.ts';
const HomePage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Container>
      <nav>
        <Image
          onClick={() => navigate(RouteEnum.GLOBAL_PAGE)}
          src={infaktImage}
          alt="icon"
        />
      </nav>
      <main>
        {pathname === RouteEnum.GLOBAL_PAGE && (
          <StyledLink to={RouteEnum.ACCOUNTANTS_PAGE}>Go to accountants</StyledLink>
        )}
        <Outlet />
      </main>
    </Container>
  );
};

export default HomePage;
