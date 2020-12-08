import React from 'react';
import styled from 'styled-components';

import Button from '../../components/Button/Button.component';
import Input from '../../components/Input/Input.component';
import useForm from '../../hooks/useForm';
import responsive from '../../responsive/responsive';

export interface LoginData {
  email?: string;
  password?: string;
}

export interface LoginScreenProps {
  handleLogin: (data: LoginData) => void;
  handleRegister: () => void;
  loading: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  background-color: ${(props) => props.theme.colours.overlayBackground};
`;

const StyledForm = styled.form`
  width: 600px;
  padding: 48px;

  background-color: ${(props) => props.theme.colours.background};

  ${responsive.useStylesFor('mobile').andSmaller(`
    width: 90vw;
    padding: 24px;
  `)};

  & > * {
    padding-bottom: 8px;
  }
`;

const RegisterContainer = styled.div`
  width: 600px;
  padding-top: 24px;

  ${responsive.useStylesFor('mobile').andSmaller(`
    padding: 24px;
  `)};
`;

const LoginScreen = ({ loading, handleLogin, handleRegister }: LoginScreenProps) => {
  const { values, handleChange, handleSubmit } = useForm<LoginData>(handleLogin, {});
  const value = {
    email: values.email || '',
    password: values.password || '',
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <Input name='email' placeholder='Email' type='text' value={value.email} onChange={handleChange} />
        <Input name='password' placeholder='Password' type='password' value={value.password} onChange={handleChange} />

        <div>
          <Button type='submit' loading={loading}>
            Login
          </Button>
        </div>
      </StyledForm>
      <RegisterContainer>
        <Button onClick={handleRegister}>Register</Button>
      </RegisterContainer>
    </Container>
  );
};

export default LoginScreen;
