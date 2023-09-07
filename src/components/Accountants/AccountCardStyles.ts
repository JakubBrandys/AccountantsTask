import { styled } from 'styled-components';
interface BoxProps {
  margin?: string;
}

interface ParagraphProps {
  textColor?: string;
  fontSize?: string;
  fontWeight?: number;
  textDecoration?: string;
  marginLeft?: string
  marginTop?: string
  lineHeight?: string
}
export const Container = styled('div')`
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  width: 300px;
  min-width: 300px;
  height: 376px;
  padding: 24px;
  box-sizing: border-box;
`;

export const Box = styled('div')<BoxProps>`
  margin: ${(props) => props.margin || '0'};
`;

export const AccountantIcon = styled('img')`
  border-radius: 8px;
  width: 64px;
  height: 64px;
`;

export const MoreInfoBtn = styled('button')`
  border-radius: 8px;
  opacity: 1;
  background-color: rgba(227, 242, 253, 1);
  color: rgba(30, 136, 229, 1);
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0;
  text-align: left;
  line-height: 20px;
`;

export const StyledParagraph = styled('p')<ParagraphProps>`
  font-size: ${(props) => props.fontSize || '1rem'};
  line-height: ${(props) => props.lineHeight || '1.5rem'};
  color: ${(props) => props.textColor || '#000'};
  margin: 0;
  font-family: Roboto,serif;
  margin-top: ${(props) => props.marginTop || 0};
  margin-left: ${(props) => props.marginLeft || 0};
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || 400};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  letter-spacing: 0;
`;
