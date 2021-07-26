import React from 'react';
import styled from 'styled-components';
import { Meta } from '@storybook/react/types-6-0';
import {
  Button,
  Card,
  CardGroup,
  ControlGroup,
  FocusLayout,
  Heading,
  ImageUpload,
  LiveInput,
  Spacer,
  Text,
} from '../..';
import colours from '../../colours/colours';
import FileContext from '../../contexts/File.context';

const CentreContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 200px;
  height: 200px;
`;

export const FillMode = () => (
  <>
    <div style={{ width: '600px', height: '300px', padding: '30px', backgroundColor: colours.grey20 }}>
      <ImageUpload name='profile' />
    </div>
  </>
);

export const WithAnImage = () => (
  <>
    <div style={{ width: '600px', height: '300px', padding: '30px', backgroundColor: colours.grey20 }}>
      <FileContext.Provider value={{ upload: async () => 'done', getUrl: (url) => url }}>
        <ImageUpload
          name='profile'
          value='https://www.jotform.com/blog/wp-content/uploads/2012/07/mario-luigi-yoschi-figures-163036.jpeg'
        />
      </FileContext.Provider>
    </div>
  </>
);

export const InALayout = () => (
  <FocusLayout>
    <Heading>Lets get setup..</Heading>
    <Spacer size='4x' />
    <ControlGroup variation='submission'>
      <Text>
        Lets upload your profile image. This will be the first thing that people see when connecting with you.
      </Text>
      <ControlGroup.Spacer />
      <CentreContainer>
        <InnerContainer>
          <ImageUpload name='profile' />
        </InnerContainer>
      </CentreContainer>
      <ControlGroup.Spacer />
      <Button>Next</Button>
    </ControlGroup>
  </FocusLayout>
);

export const InACard = () => (
  <CardGroup>
    <Card size='sm'>
      <Card.Media>
        <ImageUpload name='profile' />
      </Card.Media>
      <Card.Content>
        <LiveInput name='name' placeholder='Name' />
      </Card.Content>
    </Card>
    <Card size='sm'>
      <Card.Media>
        <ImageUpload
          name='profile'
          onSearch={() => {
            console.log('search');
          }}
        />
      </Card.Media>
      <Card.Content>
        <LiveInput name='name' placeholder='Name' />
      </Card.Content>
    </Card>
  </CardGroup>
);

export default {
  title: 'Components/ImageUpload',
  component: ImageUpload,
} as Meta;
