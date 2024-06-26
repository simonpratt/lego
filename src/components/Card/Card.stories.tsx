import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Card, CardGroup, LiveInput, Badge, ActionMenu } from '../..';

const actionMenuItems = [
  {
    label: 'Angry Lama',
    onClick: () => {
      console.log('Item 1 clicked');
    },
  },
  {
    label: 'Frightened Frog',
    onClick: () => {
      console.log('Item 2 clicked');
    },
  },
  {
    label: 'Hungry Bear',
    onClick: () => {
      console.log('Item 3 clicked');
    },
  },
  {
    label: 'Crazy Koala',
    onClick: () => {
      console.log('Item 4 clicked');
    },
  },
  {
    label: 'Dizzy Snake',
    onClick: () => {
      console.log('Item 5 clicked');
    },
  },
];

export const Standard = () => (
  <CardGroup>
    <Card size='sm'>
      <Card.Content>Some content</Card.Content>
      <Card.Spacer />
      <Card.Content>Some more content...</Card.Content>
      <Card.Spacer />
      <Card.SubContent>Some sub content...</Card.SubContent>
    </Card>
    <Card size='sm'>
      <Card.Media>
        <img src='https://www.jotform.com/blog/wp-content/uploads/2012/07/mario-luigi-yoschi-figures-163036.jpeg' />
      </Card.Media>

      <Card.Content>
        <LiveInput name='test' placeholder='Name of characters' />
      </Card.Content>
    </Card>
  </CardGroup>
);

export const Sizes = () => (
  <CardGroup>
    <Card size='xs'>
      <Card.Media>
        <img src='https://www.jotform.com/blog/wp-content/uploads/2012/07/mario-luigi-yoschi-figures-163036.jpeg' />
      </Card.Media>
      <Card.Content>An extra small card!</Card.Content>
    </Card>
    <Card size='sm'>
      <Card.Media>
        <img src='https://www.jotform.com/blog/wp-content/uploads/2012/07/mario-luigi-yoschi-figures-163036.jpeg' />
      </Card.Media>
      <Card.Content>A small card!</Card.Content>
    </Card>
    <Card size='md'>
      <Card.Media>
        <img src='https://www.jotform.com/blog/wp-content/uploads/2012/07/mario-luigi-yoschi-figures-163036.jpeg' />
      </Card.Media>
      <Card.Content>A medium card..</Card.Content>
    </Card>
    <Card size='lg'>
      <Card.Media>
        <img src='https://www.jotform.com/blog/wp-content/uploads/2012/07/mario-luigi-yoschi-figures-163036.jpeg' />
      </Card.Media>
      <Card.Content>A large card.</Card.Content>
    </Card>
  </CardGroup>
);

export const CardHeader = () => (
  <CardGroup>
    <Card size='sm'>
      <Card.Header
        image='https://www.jotform.com/blog/wp-content/uploads/2012/07/mario-luigi-yoschi-figures-163036.jpeg'
        heading='Mario & Luigi'
        subHeading='mario@gmail.com'
        meta={<Badge variant='success'>approved</Badge>}
      />
      <Card.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </Card.Content>
      <Card.Content>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Card.Content>
    </Card>
    <Card size='sm'>
      <Card.Header
        heading='Mario & Luigi'
        subHeading='mario@gmail.com'
        meta={<Badge variant='success'>approved</Badge>}
      />
      <Card.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </Card.Content>
      <Card.Content>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Card.Content>
    </Card>
    <Card size='sm'>
      <Card.Header
        heading='Mario & Luigi'
        meta={
          <ActionMenu variant='tertiary'>
            {actionMenuItems.map((item, index) => (
              <ActionMenu.Item key={index} onClick={item.onClick}>
                {item.label}
              </ActionMenu.Item>
            ))}
          </ActionMenu>
        }
      />
      <Card.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </Card.Content>
      <Card.Content>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Card.Content>
    </Card>
  </CardGroup>
);

export const Clickable = () => (
  <CardGroup>
    <Card size='sm' onClick={() => console.log('test')}>
      <Card.Content>Some content</Card.Content>
      <Card.Spacer />
      <Card.Content>Some more content...</Card.Content>
      <Card.Spacer />
      <Card.SubContent>Some sub content...</Card.SubContent>
    </Card>
  </CardGroup>
);

export const WithActions = () => (
  <>
    <br />
    <br />
    <CardGroup>
      <Card size='sm' onClick={() => console.log('Card Clicked')}>
        <Card.Actions>
          <Card.Action onClick={() => console.log('Edit Clicked')}>
            <FontAwesomeIcon icon={faPen} />
          </Card.Action>
          <Card.Action onClick={() => console.log('Delete Clicked')}>
            <FontAwesomeIcon icon={faTrash} />
          </Card.Action>
        </Card.Actions>
        <Card.Header
          heading='Mario & Luigi'
          subHeading='mario@gmail.com'
          meta={<Badge variant='success'>approved</Badge>}
        />
        <Card.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Card.Content>
        <Card.Content>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Card.Content>
      </Card>
      <Card size='sm' onClick={() => console.log('Card Clicked')}>
        <Card.Actions>
          <Card.Action onClick={() => console.log('Edit Clicked')}>
            <FontAwesomeIcon icon={faPen} />
          </Card.Action>
          <Card.Action onClick={() => console.log('Delete Clicked')}>
            <FontAwesomeIcon icon={faTrash} />
          </Card.Action>
        </Card.Actions>
        <Card.Header
          heading='Mario & Luigi'
          subHeading='mario@gmail.com'
          meta={<Badge variant='success'>approved</Badge>}
        />
        <Card.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Card.Content>
        <Card.Content>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Card.Content>
      </Card>
      <Card size='sm' onClick={() => console.log('Card Clicked')}>
        <Card.Actions>
          <Card.Action onClick={() => console.log('Edit Clicked')}>
            <FontAwesomeIcon icon={faPen} />
          </Card.Action>
          <Card.Action onClick={() => console.log('Delete Clicked')}>
            <FontAwesomeIcon icon={faTrash} />
          </Card.Action>
        </Card.Actions>
        <Card.Header
          heading='Mario & Luigi'
          subHeading='mario@gmail.com'
          meta={<Badge variant='success'>approved</Badge>}
        />
        <Card.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Card.Content>
        <Card.Content>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Card.Content>
      </Card>
    </CardGroup>
  </>
);

export const CardWithToggle = () => {
  const [slackShown, setSlackShown] = useState(false);
  const [discordShown, setDiscordShown] = useState(false);
  const [telegramShown, setTelegramShown] = useState(false);

  return (
    <CardGroup>
      <Card size='sm' onClick={() => console.log('test')}>
        <Card.ToggleSection heading='Slack' enabled={slackShown} setEnabled={setSlackShown}>
          <Card.Content>Some content</Card.Content>
          <Card.Spacer />
          <Card.Content>Some more content...</Card.Content>
          <Card.Spacer />
          <Card.SubContent>Some sub content...</Card.SubContent>
        </Card.ToggleSection>
      </Card>
      <Card size='sm' onClick={() => console.log('test')}>
        <Card.ToggleSection heading='Discord' enabled={discordShown} setEnabled={setDiscordShown}>
          <Card.Content>Some content</Card.Content>
          <Card.Spacer />
          <Card.Content>Some more content...</Card.Content>
          <Card.Spacer />
          <Card.SubContent>Some sub content...</Card.SubContent>
        </Card.ToggleSection>
      </Card>
      <Card size='sm' onClick={() => console.log('test')}>
        <Card.ToggleSection heading='Telegram' enabled={telegramShown} setEnabled={setTelegramShown}>
          <Card.Content>Some content</Card.Content>
          <Card.Spacer />
          <Card.Content>Some more content...</Card.Content>
          <Card.Spacer />
          <Card.SubContent>Some sub content...</Card.SubContent>
        </Card.ToggleSection>
      </Card>
    </CardGroup>
  );
};

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;
