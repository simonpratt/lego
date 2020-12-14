import React from 'react';
import styled from 'styled-components';

import Button from '../../components/Button/Button.component';
import ControlGroup from '../../components/ControlGroup/ControlGroup.component';
import Heading from '../../components/Heading/Heading.component';
import Input from '../../components/Input/Input.component';
import Spacer from '../../components/Spacer/Spacer.component';
import useForm from '../../hooks/useForm';
import EmphasisLayout from '../../layouts/Emphasis/Emphasis.layout';

export interface LoginData {
  email?: string;
  password?: string;
}

export interface LoginScreenProps {
  handleLogin: (data: LoginData) => void;
  onRegisterClicked: () => void;
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

const CreateAccountMessage = styled.div`
  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};

  color: ${(props) => props.theme.colours.defaultFont};
`;

const CreateAccountButton = styled.button`
  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
  color: ${(props) => props.theme.colours.defaultFont};

  outline: none;
  border: none;
  padding: 0;
  margin: 0;
  background-color: transparent;

  font-weight: normal;

  box-shadow: none;
  text-decoration: underline;
  cursor: pointer;
`;

const LoginScreen = ({ loading, error, handleLogin, onRegisterClicked }: LoginScreenProps) => {
  const { values, handleChange, handleSubmit } = useForm<LoginData>(handleLogin, {});
  const value = {
    email: values.email || '',
    password: values.password || '',
  };

  return (
    <EmphasisLayout>
      <Heading>Welcome</Heading>

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
          Login
        </Button>
      </form>

      <Spacer size='6x' />

      <CreateAccountMessage>
        {`Don't have an account?`} <CreateAccountButton onClick={onRegisterClicked}>sign up now</CreateAccountButton>
      </CreateAccountMessage>
    </EmphasisLayout>
  );
};

export default LoginScreen;
