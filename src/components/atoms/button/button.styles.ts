import styled, { css } from "styled-components";

interface IContainer {
  xs?: boolean;
  variant: "primario" | "secundario" | "terciario" | "quartenario" | "quinto" ;
  icon?: React.ReactNode;
}

export const Container = styled.button<IContainer>`
  display: flex;

  align-items: center;
  justify-content: center;

  padding: 12px 24px;
  border-radius: 15px;
  background-color: ${({ theme, variant }) =>
    variant === "primario" ? theme.Colors.green
    : variant === "secundario" ? theme.Colors.green 
    : variant === "terciario" ? "transparent" 
    : variant === "quartenario" ? theme.Colors.green
    : theme.Colors.green };
  border: 2px solid
    ${({ theme, variant }) =>
      variant === "secundario"
        ? theme.Colors.yellow
        : variant === "terciario"
        ? theme.Colors.yellow
        : "transparent"};

  ${({ xs }) =>
    xs &&
    css`
      width: 100%;
    `}

  &.noClick {
    cursor: default !important;
  }

  &:hover {
    ${({ theme, variant }) =>
      variant === "primario" &&
      css`
        background-color: ${theme.Colors.white};
        border-color: ${theme.Colors.yellow};
        transition: 1s;

        ${TitleButton} {
          /* Adicione essa parte para aplicar o estilo no TitleButton */
          color: ${theme.Colors.yellow};
        }

        > *:nth-child(2) {
          /* Seleciona o segundo filho do Container (o ícone) */
          color: ${theme.Colors.yellow};
        }
      `}

    ${({ theme, variant }) =>
      variant === "secundario" &&
      css`
      background-color: ${theme.Colors.white};
          border-color: ${theme.Colors.yellow};
          transition: 1s;
          

          ${TitleButton} { /* Adicione essa parte para aplicar o estilo no TitleButton */
          color: ${theme.Colors.yellow};
        }
        }
      `}
      

      ${({ theme, variant }) =>
      variant === "terciario" &&
      css`
        background-color: ${theme.Colors.yellow};
        border-color: ${theme.Colors.yellow};
        transition: 1s;

        ${TitleButton} {
          /* Adicione essa parte para aplicar o estilo no TitleButton */
          color: ${theme.Colors.white};
        }
      `}}
`;

export const TitleButton = styled.span<IContainer>`
  font-weight: 700;
  font-family: ${({ theme }) => theme.Font.font};
  color: ${({ theme, variant }) =>
    variant === "primario"
      ? theme.Colors.white
      : variant === "secundario"
      ? theme.Colors.yellow
      : variant === "terciario"
      ? theme.Colors.yellow
      : theme.Colors.white};

  ${({ icon }) =>
    icon &&
    css`
      margin-right: 16px;
    `}
`;
