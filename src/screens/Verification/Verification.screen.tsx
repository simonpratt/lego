import React from 'react';
import styled from 'styled-components';
import { ControlGroup } from '../..';

import Button from '../../components/Button/Button.component';
import Input from '../../components/Input/Input.component';
import Spacer from '../../components/Spacer/Spacer.component';
import useForm from '../../hooks/useForm';
import responsive from '../../responsive/responsive';

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

const VerificationHeading = styled.div`
  font-family: ${(props) => props.theme.fonts.heading.family};
  font-size: ${(props) => props.theme.fonts.heading.size};

  color: ${(props) => props.theme.colours.defaultFont};
`;

const MessageContainer = styled.div`
  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};

  color: ${(props) => props.theme.colours.defaultFont};
`;

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

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 128px;
  `)};
`;

const VerificationScreen = ({ message, loading, error, handleVerification }: VerificationScreenProps) => {
  const { values, handleChange, handleSubmit } = useForm<VerificationData>(handleVerification, {});
  const value = {
    code: values.code || '',
  };

  return (
    <Container>
      <ContentContainer>
        <VerificationHeading>Verification</VerificationHeading>
        <Spacer size='1x' />
        <MessageContainer>{message}</MessageContainer>

        <Spacer size='2x' />

        <form onSubmit={handleSubmit}>
          <ControlGroup>
            <ErrorText>{error}</ErrorText>
            <Input name='code' placeholder='code' type='text' value={value.code} onChange={handleChange} />
          </ControlGroup>

          <Spacer size='2x' />

          <Button type='submit' loading={loading}>
            Verify
          </Button>
        </form>
      </ContentContainer>
    </Container>
  );
};

export default VerificationScreen;
