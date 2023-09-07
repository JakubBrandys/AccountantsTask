import styled from 'styled-components';

interface VariantType {
  variant?: 'h1' | 'h2' | 'h3' | 'p';
}
const getVariantStyles = ({ variant }: VariantType) => {
  switch (variant) {
    case 'h1':
      return `
        font-size: 2rem;
        font-weight: bold;
      `;
    case 'h2':
      return `
        font-size: 1.5rem;
        font-weight: bold;
      `;
    case 'h3':
      return `
        font-size: 1.2rem;
        font-weight: bold;
      `;
    case 'p':
    default:
      return `
        font-size: 1rem;
      `;
  }
};

const Text = styled.div<VariantType>`
  ${(props) => getVariantStyles(props)}
`;

export default Text;
