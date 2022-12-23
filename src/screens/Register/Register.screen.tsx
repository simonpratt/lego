import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button/Button.component';
import ControlGroup from '../../components/ControlGroup/ControlGroup.component';
import Form from '../../components/Form/Form.component';
import Heading from '../../components/Heading/Heading.component';
import Input from '../../components/Input/Input.component';
import Spacer from '../../components/Spacer/Spacer.component';
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
  const [value, setValue] = useState<RegisterData>({ email: '', password: '' });

  return (
    <EmphasisLayout>
      <Heading>Register</Heading>

      <Spacer size='4x' />

      <Form value={value} onChange={setValue} onSubmit={() => handleRegister(value)}>
        <ControlGroup>
          <ErrorText>{error}</ErrorText>
          <Input name='email' placeholder='Email' type='text' data-cy='input-email' />
          <Input name='password' placeholder='Password' type='password' data-cy='input-password' />
          <ControlGroup.Spacer />
          <Button type='submit' loading={loading} data-cy='button-register'>
            Create Account
          </Button>
        </ControlGroup>
      </Form>
    </EmphasisLayout>
  );
};

export default RegisterScreen;
