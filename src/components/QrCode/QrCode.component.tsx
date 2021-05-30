import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import styled from 'styled-components';
import Text from '../Text/Text.component';

interface QrCodeProps {
  value: string;
}

const StyledCanvas = styled.canvas`
  cursor: pointer;
`;

const Container = styled.div`
  position: relative;
  height: 132px;
  width: 132px;
`;

const ToastContainer = styled.div`
  position: absolute;
  bottom: -12px;

  width: 100%;

  display: flex;
  justify-content: center;
`;

const Toast = styled.div`
  background-color: ${(props) => props.theme.colours.secondary.main};
  padding: 2px 8px;
  border-radius: 4px;
`;

const StyledText = styled(Text)`
  color: ${(props) => props.theme.colours.secondary.contrastText};
`;

const QrCode = ({ value }: QrCodeProps) => {
  const ref = useRef(null);
  const hintTimeoutRef = useRef<any>();
  const [copiedHint, setCopiedHint] = useState(false);

  const showHint = async () => {
    if (hintTimeoutRef.current) {
      window.clearTimeout(hintTimeoutRef.current);
    }

    const result = await navigator.permissions.query({ name: 'clipboard-write' });
    if (!(result.state === 'granted' || result.state === 'prompt')) {
      return;
    }

    navigator.clipboard.writeText(value);

    setCopiedHint(true);
    hintTimeoutRef.current = setTimeout(() => {
      setCopiedHint(false);
    }, 2000);
  };

  useEffect(() => {
    if (ref.current) {
      QRCode.toCanvas(ref.current, value);
    }
  }, [value]);

  return (
    <Container>
      {copiedHint && (
        <ToastContainer>
          <Toast>
            <StyledText>Copied!</StyledText>
          </Toast>
        </ToastContainer>
      )}
      <StyledCanvas onClick={() => showHint()} ref={ref} />
    </Container>
  );
};

export default QrCode;
