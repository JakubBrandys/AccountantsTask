import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import infaktImage from '../../public/infaktImage.png';
import Text from '../ui/Text';
import { Image } from '../ui/Image';
import { StyledLink } from '../ui/StyledLink';
import { RouteEnum } from '../enums/RouteEnum.ts';
const GlobalPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div style={{ margin: '48px 50px 0' }}>
      <nav>
        <Image
          onClick={() => navigate(RouteEnum.GLOBAL_PAGE)}
          src={infaktImage}
          alt="icon"
        />
      </nav>
      <main>
        {pathname === RouteEnum.GLOBAL_PAGE && (
          <div>
            <Text>If you want to fetch accountants press button</Text>
            <StyledLink to={RouteEnum.ACCOUNTANTS_PAGE}>Accountants</StyledLink>
          </div>
        )}
        <Outlet />
      </main>
    </div>
  );
};

export default GlobalPage;
