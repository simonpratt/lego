import React, { useContext, useRef } from 'react';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';

import FileContext from '../../contexts/File.context';
import useFormNode from '../Form/useFormNode.hook';

export type ImageUploadMode = 'fill' | 'form';

interface ImageUploadProps {
  name: string;
  value?: string;
  mode: ImageUploadMode;
  onChange?: (value: string) => void;
  uploadFn?: (file: File) => Promise<string>;
}

const UploadContainer = styled.div<Pick<ImageUploadProps, 'mode'>>`
  position: relative;
  height: 100%;
  min-height: 144px;
  width: 100%;
  background-color: ${(props) => props.theme.colours.controlBackground};

  ${(props) =>
    props.mode === 'fill' &&
    css`
      height: 100%;
      width: 100%;
    `}

  ${(props) =>
    props.mode === 'form' &&
    css`
      height: 144px;
      width: 144px;
    `}

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  font-size: 72px;
  color: lightgreen;
  color: ${(props) => props.theme.colours.controlFont};
  border: solid thin ${(props) => props.theme.colours.controlBorder};

  &:hover {
    border-color: ${(props) => props.theme.colours.controlBorderHover};
  }

  &:focus {
    border-color: ${(props) => props.theme.colours.controlBorderFocus};
  }
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

const ImageUpload = ({ name, value, mode = 'form', onChange }: ImageUploadProps) => {
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
      <UploadContainer mode={mode} onClick={handleUploadClicked}>
        <FontAwesomeIcon icon={faCloudUploadAlt} />
        <HiddenInput value='' ref={inputRef} type='file' onChange={handleUpload} />
      </UploadContainer>
    );
  }

  return <Image src={getUrl(internalValue)} />;
};

export default ImageUpload;
