import React from 'react';
import styled from 'styled-components';

import Button from '../../components/Button/Button.component';
import ControlGroup from '../../components/ControlGroup/ControlGroup.component';
import Heading from '../../components/Heading/Heading.component';
import Input from '../../components/Input/Input.component';
import Spacer from '../../components/Spacer/Spacer.component';
import useForm from '../../hooks/useForm';
import EmphasisLayout from '../../layouts/Emphasis/Emphasis.layout';

export interface RegisterData {
  email?: string;
  password?: string;
}

export interface RegisterScreenProps {
  handleRegister: (data: RegisterData) => void;
  loading?: boolean;
  error?: string;
}

const ErrorText = styled.div`
  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};

  line-height: ${(props) => props.theme.fonts.default.size};
  min-height: ${(props) => props.theme.fonts.default.size};

  color: ${(props) => props.theme.colours.statusDanger.main};
`;

const RegisterScreen = ({ loading, error, handleRegister }: RegisterScreenProps) => {
  const { values, handleChange, handleSubmit } = useForm<RegisterData>(handleRegister, {});
  const value = {
    email: values.email || '',
    password: values.password || '',
  };

  return (
    <EmphasisLayout>
      <Heading>Register</Heading>

      <Spacer size='4x' />

      <form onSubmit={handleSubmit}>
        <ControlGroup>
          <ErrorText>{error}</ErrorText>
          <Input name='email' placeholder='Email' type='text' value={value.email} onChange={handleChange} />
          <Input
            name='password'
            placeholder='Password'
            type='password'
            value={value.password}
            onChange={handleChange}
          />
        </ControlGroup>

        <Spacer size='2x' />

        <Button type='submit' loading={loading}>
          Create Account
        </Button>
      </form>
    </EmphasisLayout>
  );
};

export default RegisterScreen;
