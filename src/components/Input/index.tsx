import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

// This interface allows the Input component to work as a regular HTML input
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string; // The name parameter isn't required ny default, so we are making it be
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <Container>
    {Icon && <Icon size={20} />}
    <input {...rest} />
  </Container>
);

export default Input;
