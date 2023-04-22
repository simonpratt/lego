import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import styled from 'styled-components';
import { Text } from '../..';
import darkTheme from '../theme/dark.theme';

// function to get all keys from an object recursively and return them as an array of strings
const getRecursiveKeys = (object: Record<string, any>, prefix = ''): { key: string; value: string }[] => {
  const keys = Object.keys(object);
  const result: { key: string; value: string }[] = [];

  keys.forEach((key) => {
    const value = object[key];
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'object') {
      result.push(...getRecursiveKeys(value, fullKey));
    } else {
      result.push({ key: fullKey, value: object[key] });
    }
  });

  return result;
};

const PaddedColourLine = styled.div`
  padding: 8px;
`;

interface ColourBlockProps {
  colour: string;
}

const ColourBlock = styled.div<ColourBlockProps>`
  height: 48px;
  width: 200px;
  margin-top: 4px;
  background-color: ${(props) => props.colour};
`;

export const Colours = () => {
  const allThemePairs = getRecursiveKeys(darkTheme.colours);
  const colourPairs = allThemePairs.filter((pair) => /#[0123456789abcdefABCDEF]{6}/g.test(pair.value));

  return (
    <div>
      {colourPairs.map((pair) => (
        <PaddedColourLine key={pair.key}>
          <Text>{pair.key}</Text>
          <ColourBlock colour={pair.value} />
        </PaddedColourLine>
      ))}
    </div>
  );
};

export default {
  title: 'Theme/Colours',
  // component: ActionMenu,
} as Meta;
