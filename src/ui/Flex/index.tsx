import { styled } from 'styled-components';

interface FlexProps {
    justify?: 'flex-start'
}
const Flex = styled('div')<FlexProps>`
  display: flex;
  flex-wrap: nowrap;
  justify-content: ${(props) => props.justify || 'space-between'};
  padding-left: 84px;
  padding-right: 84px;
  margin-top: 48px;
`;
export default Flex;
