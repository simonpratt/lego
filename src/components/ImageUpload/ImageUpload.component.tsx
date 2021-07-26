import React, { useContext, useRef } from 'react';
import { faCloudUploadAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import FileContext from '../../contexts/File.context';
import useFormNode from '../Form/useFormNode.hook';

export type ImageUploadMode = 'fill' | 'form';

interface ImageUploadProps {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: () => void;
  uploadFn?: (file: File) => Promise<string>;
}

const UploadContainer = styled.div`
  position: relative;
  min-height: 144px;
  background-color: ${(props) => props.theme.colours.uploadBackground};

  height: 100%;
  width: 100%;

  font-size: 48px;
  color: ${(props) => props.theme.colours.uploadIcon};
`;

const UploadInnerContainer = styled.div`
  height: 100%;
  min-height: 144px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const IconContainer = styled(motion.div)`
  flex-grow: 1;
  margin: 8px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
`;

const UploadVerticalDivider = styled.div`
  margin: 8px 0;
  width: 2px;
  height: calc(100% - 16px);
  top: 10%;
  background-color: ${(props) => props.theme.colours.uploadIcon};
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

const ImageUpload = ({ name, value, onChange, onSearch }: ImageUploadProps) => {
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
        <UploadInnerContainer>
          <IconContainer whileHover={{ scale: 1.05 }}>
            <FontAwesomeIcon icon={faCloudUploadAlt} />
          </IconContainer>
          {onSearch && (
            <>
              <UploadVerticalDivider />
              <IconContainer whileHover={{ scale: 1.05 }}>
                <FontAwesomeIcon icon={faSearch} />
              </IconContainer>
            </>
          )}
        </UploadInnerContainer>
        <HiddenInput value='' ref={inputRef} type='file' onChange={handleUpload} />
      </UploadContainer>
    );
  }

  return <Image src={getUrl(internalValue)} />;
};

export default ImageUpload;
