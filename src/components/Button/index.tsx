import React, { ButtonHTMLAttributes } from 'react'; // This interface is a Type cuz there's no elements beeing added or changed on it

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
