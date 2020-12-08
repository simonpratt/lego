import React from 'react';
import styled from 'styled-components';
import { ControlGroup } from '../..';

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
  error: string;
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

const ContentContainer = styled.div`
  background-color: ${(props) => props.theme.colours.background};

  width: 600px;
  padding: 48px;

  ${responsive.useStylesFor('mobile').andSmaller(`
    width: 100%;
    height: 100%;
    padding: 16px;
  `)};
`;

const LoginScreen = ({ loading, handleLogin, handleRegister, error }: LoginScreenProps) => {
  const { values, handleChange, handleSubmit } = useForm<LoginData>(handleLogin, {});
  const value = {
    email: values.email || '',
    password: values.password || '',
  };

  return (
    <Container>
      <ContentContainer>
        <form onSubmit={handleSubmit}>
          <ControlGroup>
            <Input name='email' placeholder='Email' type='text' value={value.email} onChange={handleChange} />
            <Input
              name='password'
              placeholder='Password'
              type='password'
              value={value.password}
              onChange={handleChange}
            />
            <Button type='submit' loading={loading}>
              Login
            </Button>
          </ControlGroup>
        </form>
      </ContentContainer>
    </Container>
  );
};

export default LoginScreen;
