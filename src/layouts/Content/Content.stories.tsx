import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ContentLayout, Heading } from '../..';
import CardGroup from '../../components/Card/CardGroup.component';
import Card from '../../components/Card/Card.component';

export const Standard = () => (
  <ContentLayout>
    <ContentLayout.Header>
      <Heading>Some content...</Heading>
    </ContentLayout.Header>
    <ContentLayout.Content>
      <CardGroup>
        <Card>
          <Card.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </Card.Content>
        </Card>
      </CardGroup>
    </ContentLayout.Content>
  </ContentLayout>
);

export default {
  title: 'Layouts/Content',
  component: ContentLayout,
} as Meta;
