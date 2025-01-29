import styled from "styled-components";

interface ButtonProps {
  category: string;
}

const variantStyles: Record<
  string,
  { backgroundColor: string; color?: string }
> = {
  hotpink: { backgroundColor: "#ed798d" },
  blue: { backgroundColor: "#87b9ce" },
};

const defaultStyle = {
  color: "#fff",
  backgroundColor: "#ed798d",
};

export const Button = styled.button<ButtonProps>`
  border: none;
  cursor: pointer;
  border-radius: 15px;
  padding: 8px;
  font-size: 11px;

  color: ${({ category }) =>
    variantStyles[category]?.color || defaultStyle.color};
  background-color: ${({ category }) =>
    variantStyles[category]?.backgroundColor || defaultStyle.backgroundColor};

  &:hover {
    opacity: 0.9;
  }
`;

export default Button;
