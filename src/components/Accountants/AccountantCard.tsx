import Flex from 'ui/Flex';
import { theme } from 'config/theme.ts';
import { AccountantCardProps } from 'components/Accountants/types.ts';

import {
  AccountantIcon,
  Box,
  Container,
  MoreInfoBtn,
  StyledParagraph,
} from './AccountantCardStyles.ts';

const AccountantCard = ({ accountant }: AccountantCardProps) => {
  return (
    <Container>
      <Flex>
        <AccountantIcon src={accountant.picture.medium} alt="thumbnail" />
        <Box $margin="0 0 0 16px">
          <StyledParagraph color={theme.colors.gray}>Twoja księgowa</StyledParagraph>
          <StyledParagraph
            fontSize={theme.fontSize.lg}
            fontWeight={700}
            $lineheight="32px"
            style={{ width: '172px' }}
          >{`${accountant.name.first} ${accountant.name.last}`}</StyledParagraph>
        </Box>
      </Flex>
      <Box $margin="24px 0 0 0">
        <StyledParagraph
          fontSize={theme.fontSize.sm}
          $lineheight="20px"
          color={theme.colors.gray}
        >
          E-mail
        </StyledParagraph>
        <StyledParagraph textDecoration="underline">{accountant.email}</StyledParagraph>
      </Box>
      <Box $margin="24px 0 0 0">
        <StyledParagraph
          fontSize={theme.fontSize.sm}
          $lineheight="20px"
          color={theme.colors.gray}
        >
          Telefon
        </StyledParagraph>
        <StyledParagraph>{accountant.cell}</StyledParagraph>
      </Box>
      <Box $margin="24px 0 0 0">
        <StyledParagraph color={theme.colors.gray} fontSize="14px" $lineheight="20px">
          Średnia cena netto usługi / m-c
        </StyledParagraph>
        <Flex>
          <StyledParagraph>350,00</StyledParagraph>
          <StyledParagraph
            fontSize={theme.fontSize.xs}
            $lineheight="16px"
            style={{ alignSelf: 'center' }}
            $marginleft="4px"
          >
            PLN
          </StyledParagraph>
        </Flex>
      </Box>
      <Box $margin="24px 0 0 0" style={{ alignItems: 'flex-start' }}>
        <MoreInfoBtn>Dowiedz się więcej</MoreInfoBtn>
      </Box>
    </Container>
  );
};

export default AccountantCard;
