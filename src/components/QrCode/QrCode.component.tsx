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

  pointer-events: none;
  touch-action: none;
`;

const Toast = styled.div`
  background-color: ${(props) => props.theme.colours.secondary.main};
  padding: 2px 8px;
  border-radius: 4px;
`;

const StyledText = styled(Text)`
  color: ${(props) => props.theme.colours.secondary.contrastText};
`;

const CopyInput = styled.input`
  opacity: 0;
  position: absolute;
  left: -9999px;
  top: -9999px;
`;

const QrCode = ({ value }: QrCodeProps) => {
  const ref = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const hintTimeoutRef = useRef<any>();
  const [copiedHint, setCopiedHint] = useState(false);

  const showHint = async () => {
    if (hintTimeoutRef.current) {
      window.clearTimeout(hintTimeoutRef.current);
    }

    if (inputRef?.current) {
      inputRef.current.select();
      document.execCommand('copy');
    }

    setCopiedHint(true);
    hintTimeoutRef.current = setTimeout(() => {
      setCopiedHint(false);
    }, 2000);
  };

  useEffect(() => {
    if (ref.current) {
      QRCode.toCanvas(ref.current, value, {
        width: 132,
      });
    }
  }, [value]);

  return (
    <Container onClick={() => showHint()}>
      {copiedHint && (
        <ToastContainer>
          <Toast>
            <StyledText>Copied!</StyledText>
          </Toast>
        </ToastContainer>
      )}
      <CopyInput readOnly ref={inputRef} value={value} />
      <StyledCanvas ref={ref} />
    </Container>
  );
};

export default QrCode;
