import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../text/themes';

interface ButtonProps {
  title: string;
  variant: 'primario' | 'secundario' | 'terciario';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 36px;
  border-radius: 24px;
  transition: 1s;
  background-color: ${({ theme, variant }) =>
    variant === 'primario'
      ? theme.colors.yellow
      : variant === 'secundario'
      ? theme.colors.green
      : variant === 'terciario'
      ? theme.colors.white
      : theme.colors.green};
  border: 2px solid
    ${({ theme, variant }) =>
      variant === 'secundario' || variant === 'terciario'
        ? theme.colors.green
        : 'transparent'};
  color: ${({ theme, variant }) =>
    variant === 'primario' 
      ? theme.colors.white
      : variant === 'terciario'
      ? theme.colors.black
      : theme.colors.white};
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.primary};
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};

  &:hover {
    background-color: ${({ theme, variant }) =>
      variant === 'secundario'
        ? theme.colors.white
        : variant === 'primario' || variant === 'terciario'
        ? theme.colors.white
        : theme.colors.green};
    color: ${({ theme, variant }) =>
      variant === 'secundario'
        ? theme.colors.green
        : variant === 'primario' || variant === 'terciario'
        ? theme.colors.yellow
        : theme.colors.white};
    border-color: ${({ theme, variant }) =>
      variant === 'secundario'
        ? theme.colors.green
        : variant === 'primario' || variant === 'terciario'
        ? theme.colors.yellow
        : theme.colors.green};
  }
`;

const Button: React.FC<ButtonProps> = ({ title, variant, onClick, type }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledButton variant={variant} onClick={onClick} title={title} type={type}>
        {title}
      </StyledButton>
    </ThemeProvider>
  );
};

export default Button;
