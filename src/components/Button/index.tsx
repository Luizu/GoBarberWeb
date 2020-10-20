import React, { ButtonHTMLAttributes } from 'react'; // This interface is a Type cuz there's no elements beeing added or changed on it

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? 'Carregando' : children}
  </Container>
);

export default Button;
