import React, { useContext, useRef } from 'react';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import FileContext from '../../contexts/File.context';
import useFormNode from '../Form/useFormNode.hook';

export type ImageUploadMode = 'fill' | 'form';

interface ImageUploadProps {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  uploadFn?: (file: File) => Promise<string>;
}

const UploadContainer = styled.div`
  position: relative;
  height: 100%;
  min-height: 144px;
  width: 100%;
  background-color: ${(props) => props.theme.colours.uploadBackground};

  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  font-size: 48px;
  color: ${(props) => props.theme.colours.uploadIcon};
`;

const HiddenInput = styled.input`
  width: 0;
  height: 0;
  visibility: none;

  position: fixed;
  left: -99999;
  top: -99999;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageUpload = ({ name, value, onChange }: ImageUploadProps) => {
  const { upload, getUrl } = useContext(FileContext);
  const { value: contextValue, onChange: contextOnChange } = useFormNode(name);
  const inputRef = useRef<any>();

  const handleUploadClicked = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && upload) {
      const file = event.target.files[0];
      const url = await upload(file);

      if (onChange) {
        onChange(url);
      }

      if (contextOnChange) {
        contextOnChange({ target: { value: url } } as any);
      }
    }
  };

  const internalValue = value ? value : contextValue;

  if (!internalValue) {
    return (
      <UploadContainer onClick={handleUploadClicked}>
        <FontAwesomeIcon icon={faCloudUploadAlt} />
        <HiddenInput value='' ref={inputRef} type='file' onChange={handleUpload} />
      </UploadContainer>
    );
  }

  return <Image src={getUrl(internalValue)} />;
};

export default ImageUpload;
