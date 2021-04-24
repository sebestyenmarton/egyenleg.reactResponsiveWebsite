import { Link } from 'react-scroll';
import styled from 'styled-components';

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#e03b09' : '#010606')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#fff' : '#010606' )};
  font-sieze: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#e03b09')};
    color: ${({dark}) => (dark ? '#010606' : '#fff' )};
  }
`;