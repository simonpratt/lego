import React, { useContext, useRef, useState } from 'react';
import { faCloudUploadAlt, faExclamationCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import FileContext from '../../contexts/File.context';
import useFormNode from '../Form/useFormNode.hook';
import Loader from '../Loader/Loader.component';

export type ImageUploadMode = 'fill' | 'form';

interface ImageUploadProps {
  'name': string;
  'value'?: string;
  'error'?: string;
  'uploading'?: boolean;
  'onChange'?: (value: string) => void;
  'onSearch'?: () => void;
  'uploadFn'?: (file: File) => Promise<string>;
  'data-cy'?: string;
}

const UploadContainer = styled.div`
  position: relative;
  min-height: 144px;
  background-color: ${(props) => props.theme.colours.uploadBackground};
  border: 1px solid #565656;

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

const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  min-height: calc(144px - 16px);
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

const ErrorMessage = styled.div`
  padding-left: 6px;

  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
  color: ${(props) => props.theme.colours.statusDanger.main};
`;

const ErrorContainer = styled(motion.div)`
  position: absolute;
  left: 10px;
  top: 10px;
  width: 100%;
  display: flex;
  align-items: center;

  font-size: ${(props) => props.theme.fonts.default.size};
  color: ${(props) => props.theme.colours.statusDanger.main};
`;

const ErrorInner = styled.div`
  width: 24px;
  height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const errorVariants = {
  show: { opacity: 1 },
};

const ImageUpload = ({
  name,
  value,
  'error': propsError,
  'uploading': uploadingProp,
  onChange,
  onSearch,
  'data-cy': dataCy,
}: ImageUploadProps) => {
  const { upload, getUrl } = useContext(FileContext);
  const [uploading, setUploading] = useState(false);
  const { value: contextValue, error: contextError, onChange: contextOnChange } = useFormNode(name);
  const inputRef = useRef<any>();

  const error = contextError || propsError;

  const handleUploadClicked = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && upload) {
      const file = event.target.files[0];
      setUploading(true);

      try {
        const url = await upload(file);

        if (onChange) {
          onChange(url);
        }

        if (contextOnChange) {
          contextOnChange(url);
        }
      } finally {
        setUploading(false);
      }
    }
  };

  const internalValue = value ? value : contextValue;

  if (uploading || uploadingProp) {
    return (
      <UploadContainer data-cy={dataCy}>
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      </UploadContainer>
    );
  }

  if (!internalValue) {
    return (
      <UploadContainer data-cy={dataCy}>
        <UploadInnerContainer>
          <IconContainer whileHover={{ scale: 1.05 }} onClick={handleUploadClicked} data-cy='button-image-upload'>
            <FontAwesomeIcon icon={faCloudUploadAlt} />
          </IconContainer>
          {onSearch && (
            <>
              <UploadVerticalDivider />
              <IconContainer whileHover={{ scale: 1.05 }} onClick={onSearch} data-cy='button-image-search'>
                <FontAwesomeIcon icon={faSearch} />
              </IconContainer>
            </>
          )}
        </UploadInnerContainer>
        <HiddenInput value='' ref={inputRef} type='file' onChange={handleUpload} data-cy='input-image-hidden' />
        {error && (
          <ErrorContainer
            animate={error ? 'show' : undefined}
            style={{ opacity: 0 }}
            variants={errorVariants}
            transition={{ type: 'spring', duration: 0.3 }}
            data-cy='error-indicator'
          >
            <ErrorInner>
              <FontAwesomeIcon icon={faExclamationCircle} />
            </ErrorInner>
            <ErrorMessage data-cy='error-message'>{error}</ErrorMessage>
          </ErrorContainer>
        )}
      </UploadContainer>
    );
  }

  return (
    <div data-cy={dataCy}>
      <Image data-cy='uploaded-image' src={getUrl(internalValue)} />
    </div>
  );
};

export default ImageUpload;
