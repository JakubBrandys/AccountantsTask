import { styled } from 'styled-components';

const Grid = styled('div')`
  padding-left: 84px;
  padding-right: 84px;
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(4, 300px);
  grid-gap: 24px;
`;
export default Grid;
