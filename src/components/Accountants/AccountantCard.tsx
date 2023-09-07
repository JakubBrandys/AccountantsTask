import { AccountantType } from '../../services/AccountantService.ts';
import {
  AccountantIcon,
  Box,
  Container,
  MoreInfoBtn,
  StyledParagraph,
} from './AccountantCardStyles.ts';

interface AccountantCardProps {
  accountant: AccountantType;
}
const AccountantCard = ({ accountant }: AccountantCardProps) => {
  return (
    <Container>
      <div style={{ display: 'flex' }}>
        <AccountantIcon src={accountant.picture.medium} alt="thumbnail" />
        <Box margin="0 0 0 16px">
          <StyledParagraph color="#54585C">Twoja księgowa</StyledParagraph>
          <StyledParagraph
            fontSize="1.5rem"
            fontWeight={700}
            lineheight="32px"
            style={{ width: '172px' }}
          >{`${accountant.name.first} ${accountant.name.last}`}</StyledParagraph>
        </Box>
      </div>
      <Box margin="24px 0 0 0">
        <StyledParagraph fontSize="14px" lineheight="20px" color="#54585C">
          E-mail
        </StyledParagraph>
        <StyledParagraph textDecoration="underline">{accountant.email}</StyledParagraph>
      </Box>
      <Box margin="24px 0 0 0">
        <StyledParagraph fontSize="14px" lineheight="20px" color="#54585C">
          Telefon
        </StyledParagraph>
        <StyledParagraph>{accountant.cell}</StyledParagraph>
      </Box>
      <Box margin="24px 0 0 0">
        <StyledParagraph color="#54585C" fontSize="14px" lineheight="20px">
          Średnia cena netto usługi / m-c
        </StyledParagraph>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <StyledParagraph>350,00</StyledParagraph>
          <StyledParagraph
            fontSize="12px"
            lineheight="16px"
            style={{ alignSelf: 'center' }}
            marginleft="4px"
          >
            PLN
          </StyledParagraph>
        </div>
      </Box>
      <Box margin="24px 0 0 0" style={{ alignItems: 'flex-start' }}>
        <MoreInfoBtn>Dowiedz się więcej</MoreInfoBtn>
      </Box>
    </Container>
  );
};

export default AccountantCard;
