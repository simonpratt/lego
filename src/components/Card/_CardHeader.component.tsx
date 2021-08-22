import React from 'react';
import styled from 'styled-components';
import { Text } from '../..';

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  margin-bottom: 8px;

  border-bottom: thin solid ${(props) => props.theme.colours.defaultBorder};
`;

const LeftContainer = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  width: 36px;
  height: 36px;
`;

const Image = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 50%;
`;

const TextContainer = styled.div`
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const MetaContainer = styled.div`
  display: flex;
  align-items: center;
`;

export interface CardHeaderProps {
  image: string;
  heading: string;
  subHeading: string;
  meta?: React.ReactNode;
}

const CardHeader = ({ image, heading, subHeading, meta }: CardHeaderProps) => {
  return (
    <HeaderRow>
      <LeftContainer>
        <ImageContainer>
          <Image src={image} />
        </ImageContainer>
        <TextContainer>
          <div>
            <Text>{heading}</Text>
          </div>
          <div>
            <Text variant='secondary'>{subHeading}</Text>
          </div>
        </TextContainer>
      </LeftContainer>
      {meta && <MetaContainer>{meta}</MetaContainer>}
    </HeaderRow>
  );
};

export default CardHeader;
