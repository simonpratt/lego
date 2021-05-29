import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

interface QrCodeProps {
  value: string;
}

const QrCode = ({ value }: QrCodeProps) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      QRCode.toCanvas(ref.current, value);
    }
  }, [value]);

  return <canvas ref={ref} />;
};

export default QrCode;
