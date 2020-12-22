import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../components/Button/Button.component';
import ControlGroup from '../../components/ControlGroup/ControlGroup.component';
import Form from '../../components/Form/Form.component';
import Heading from '../../components/Heading/Heading.component';
import Input from '../../components/Input/Input.component';
import Spacer from '../../components/Spacer/Spacer.component';
import EmphasisLayout from '../../layouts/Emphasis/Emphasis.layout';

export interface VerificationData {
  code?: string;
}

export interface VerificationScreenProps {
  handleVerification: (data: VerificationData) => void;
  message?: string;
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

const MessageContainer = styled.div`
  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};

  color: ${(props) => props.theme.colours.defaultFont};
`;

const VerificationScreen = ({ message, loading, error, handleVerification }: VerificationScreenProps) => {
  const [value, setValue] = useState<VerificationData>({ code: '' });

  return (
    <EmphasisLayout>
      <Heading>Verification</Heading>
      <Spacer size='1x' />
      <MessageContainer>{message}</MessageContainer>

      <Spacer size='2x' />

      <Form value={value} onChange={setValue} onSubmit={() => handleVerification(value)}>
        <ControlGroup>
          <ErrorText>{error}</ErrorText>
          <Input name='code' placeholder='code' type='text' />
          <ControlGroup.Spacer />
          <Button type='submit' loading={loading}>
            Verify
          </Button>
        </ControlGroup>
      </Form>
    </EmphasisLayout>
  );
};

export default VerificationScreen;
