import React from 'react';
import styled from 'styled-components';
import IdenticonObj from 'identicon.js';
import colours from '../../colours/colours';
import SparkMD5 from 'spark-md5';

export interface ProfileImageProps {
  name?: string;
  image?: string;
}

const ImageContainer = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 4px;

  border: thin solid ${(props) => props.theme.colours.defaultBorder};
`;

const Image = styled.img`
  height: 34px;
  width: 34px;
  border-radius: 4px;
  object-fit: cover;
`;

interface IdenticonProps {
  value?: string;
}

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

const Identicon = ({ value }: IdenticonProps) => {
  const hexColours = [colours.red, colours.green, colours.blue, colours.yellow];
  const convertedColours = hexColours.map((hex) => {
    const rgb = hexToRgb(hex);
    return [rgb?.r, rgb?.g, rgb?.b, 255];
  });

  const hash = SparkMD5.hash(value || 'unknown user');
  const colourIndex = Math.floor(Math.random() * 4);

  const data = new IdenticonObj(hash, {
    foreground: (convertedColours[colourIndex] as any) || [0, 0, 0, 255],
    background: [255, 255, 255, 255], // rgba white
    margin: 0,
    size: 34,
  }).toString();

  return <Image src={`data:image/png;base64,${data}`} />;
};

const ProfileImage = ({ name, image }: ProfileImageProps) => {
  if (image) {
    return (
      <ImageContainer data-cy='profile-image'>
        <Image src={image} />
      </ImageContainer>
    );
  }

  return (
    <ImageContainer data-cy='profile-image'>
      <Identicon value={name} />
    </ImageContainer>
  );
};

export default ProfileImage;
