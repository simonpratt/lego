import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { ContentLayout, Card, CardGroup, Heading, Button, Text } from '../..';

export const Standard = () => (
  <ContentLayout>
    <ContentLayout.Header actions={<Button>Add</Button>}>
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

export const Small = () => (
  <ContentLayout>
    <ContentLayout.Header>
      <Heading>A small content section</Heading>
    </ContentLayout.Header>
    <ContentLayout.Content size='sm'>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget odio vitae elit sodales cursus. Phasellus a
        consequat leo. Ut elit metus, bibendum et consequat quis, facilisis nec ex. Curabitur ex magna, tempor a pretium
        eu, hendrerit ut erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id lectus varius,
        lacinia metus et, egestas magna. Pellentesque egestas massa nec hendrerit tempus. Aliquam laoreet elit aliquet
        orci semper, eget finibus neque volutpat. Ut dignissim in neque quis lobortis. Vivamus bibendum mauris eu est
        aliquam efficitur. Vestibulum finibus condimentum lacus, vitae congue metus faucibus at. Aliquam et lacus eu
        turpis blandit commodo sit amet nec ligula. Proin tristique porttitor iaculis. Nunc efficitur justo et justo
        rutrum gravida. Cras accumsan ipsum vitae cursus consequat. Sed at nunc at risus dictum hendrerit. Pellentesque
        vel felis convallis, pellentesque enim in, suscipit urna. Aenean eu tristique lectus. Sed convallis at velit
        eget maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed
        eget erat eget ligula lacinia ultricies a non ex. In efficitur purus non cursus tincidunt. Quisque lobortis
        feugiat ipsum, non mollis sapien aliquam in. Sed dictum libero id neque dictum pellentesque. In sed molestie
        nibh, volutpat fringilla leo. Phasellus at scelerisque enim. Donec nulla enim, dapibus quis tempor at, cursus
        eget mi. Vivamus ac consectetur tortor, ut egestas felis. Quisque ultricies, ligula sit amet vestibulum
        vulputate, erat lacus volutpat urna, nec tempor lacus nisl vitae lectus. Sed rhoncus lorem id tempus posuere.
        Vestibulum quis tellus dui. Suspendisse finibus placerat vestibulum. Suspendisse potenti. Nam sollicitudin nec
        velit non efficitur. In hac habitasse platea dictumst. Ut ut placerat nibh. Vestibulum felis enim, volutpat eget
        urna a, dapibus fringilla est. Vivamus rhoncus quis leo vel porta. In sit amet neque accumsan ligula varius
        aliquet eu ut nisi. Nunc bibendum elementum urna a blandit. Maecenas ultrices eros ac lacus eleifend, sit amet
        posuere erat iaculis. Nam hendrerit ipsum sed leo mattis ultrices. Aliquam tincidunt dui eget tincidunt
        pharetra. Aenean efficitur magna nunc, vitae luctus turpis placerat id. Aliquam quis rutrum purus. Proin tortor
        mauris, fermentum et pharetra vel, vulputate id dui. Nam pharetra risus odio. Etiam quis erat a mauris semper
        dignissim. Praesent a sollicitudin nunc. Integer scelerisque eget leo in pellentesque. Vivamus felis augue,
        condimentum nec auctor tincidunt, maximus nec nunc. Etiam vel imperdiet nisl, vel iaculis felis. Etiam tempor
        dolor ac ultrices luctus. Ut id nulla vestibulum, convallis sapien at, ultrices est. Mauris finibus est vitae
        fringilla placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum tincidunt sem, eu
        dignissim purus viverra in. Curabitur libero felis, eleifend sit amet bibendum at, ornare in lacus. Curabitur ac
        mattis ligula. Nulla dignissim pharetra urna at eleifend. Ut vitae auctor nibh. Nulla facilisi. Maecenas
        bibendum nibh nec dui posuere, eu vulputate arcu mollis. Sed auctor, diam sit amet scelerisque fringilla, nunc
        risus tristique libero, et ornare lorem augue eu mauris. Donec hendrerit, sapien ac semper vehicula, nunc ex
        bibendum lacus, vel ultricies sapien purus eget libero.
      </Text>
    </ContentLayout.Content>
  </ContentLayout>
);

export const Medium = () => (
  <ContentLayout>
    <ContentLayout.Header>
      <Heading>A medium content section</Heading>
    </ContentLayout.Header>
    <ContentLayout.Content size='md'>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget odio vitae elit sodales cursus. Phasellus a
        consequat leo. Ut elit metus, bibendum et consequat quis, facilisis nec ex. Curabitur ex magna, tempor a pretium
        eu, hendrerit ut erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id lectus varius,
        lacinia metus et, egestas magna. Pellentesque egestas massa nec hendrerit tempus. Aliquam laoreet elit aliquet
        orci semper, eget finibus neque volutpat. Ut dignissim in neque quis lobortis. Vivamus bibendum mauris eu est
        aliquam efficitur. Vestibulum finibus condimentum lacus, vitae congue metus faucibus at. Aliquam et lacus eu
        turpis blandit commodo sit amet nec ligula. Proin tristique porttitor iaculis. Nunc efficitur justo et justo
        rutrum gravida. Cras accumsan ipsum vitae cursus consequat. Sed at nunc at risus dictum hendrerit. Pellentesque
        vel felis convallis, pellentesque enim in, suscipit urna. Aenean eu tristique lectus. Sed convallis at velit
        eget maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed
        eget erat eget ligula lacinia ultricies a non ex. In efficitur purus non cursus tincidunt. Quisque lobortis
        feugiat ipsum, non mollis sapien aliquam in. Sed dictum libero id neque dictum pellentesque. In sed molestie
        nibh, volutpat fringilla leo. Phasellus at scelerisque enim. Donec nulla enim, dapibus quis tempor at, cursus
        eget mi. Vivamus ac consectetur tortor, ut egestas felis. Quisque ultricies, ligula sit amet vestibulum
        vulputate, erat lacus volutpat urna, nec tempor lacus nisl vitae lectus. Sed rhoncus lorem id tempus posuere.
        Vestibulum quis tellus dui. Suspendisse finibus placerat vestibulum. Suspendisse potenti. Nam sollicitudin nec
        velit non efficitur. In hac habitasse platea dictumst. Ut ut placerat nibh. Vestibulum felis enim, volutpat eget
        urna a, dapibus fringilla est. Vivamus rhoncus quis leo vel porta. In sit amet neque accumsan ligula varius
        aliquet eu ut nisi. Nunc bibendum elementum urna a blandit. Maecenas ultrices eros ac lacus eleifend, sit amet
        posuere erat iaculis. Nam hendrerit ipsum sed leo mattis ultrices. Aliquam tincidunt dui eget tincidunt
        pharetra. Aenean efficitur magna nunc, vitae luctus turpis placerat id. Aliquam quis rutrum purus. Proin tortor
        mauris, fermentum et pharetra vel, vulputate id dui. Nam pharetra risus odio. Etiam quis erat a mauris semper
        dignissim. Praesent a sollicitudin nunc. Integer scelerisque eget leo in pellentesque. Vivamus felis augue,
        condimentum nec auctor tincidunt, maximus nec nunc. Etiam vel imperdiet nisl, vel iaculis felis. Etiam tempor
        dolor ac ultrices luctus. Ut id nulla vestibulum, convallis sapien at, ultrices est. Mauris finibus est vitae
        fringilla placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum tincidunt sem, eu
        dignissim purus viverra in. Curabitur libero felis, eleifend sit amet bibendum at, ornare in lacus. Curabitur ac
        mattis ligula. Nulla dignissim pharetra urna at eleifend. Ut vitae auctor nibh. Nulla facilisi. Maecenas
        bibendum nibh nec dui posuere, eu vulputate arcu mollis. Sed auctor, diam sit amet scelerisque fringilla, nunc
        risus tristique libero, et ornare lorem augue eu mauris. Donec hendrerit, sapien ac semper vehicula, nunc ex
        bibendum lacus, vel ultricies sapien purus eget libero.
      </Text>
    </ContentLayout.Content>
  </ContentLayout>
);

export const Large = () => (
  <ContentLayout>
    <ContentLayout.Header>
      <Heading>A large content section</Heading>
    </ContentLayout.Header>
    <ContentLayout.Content size='lg'>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget odio vitae elit sodales cursus. Phasellus a
        consequat leo. Ut elit metus, bibendum et consequat quis, facilisis nec ex. Curabitur ex magna, tempor a pretium
        eu, hendrerit ut erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id lectus varius,
        lacinia metus et, egestas magna. Pellentesque egestas massa nec hendrerit tempus. Aliquam laoreet elit aliquet
        orci semper, eget finibus neque volutpat. Ut dignissim in neque quis lobortis. Vivamus bibendum mauris eu est
        aliquam efficitur. Vestibulum finibus condimentum lacus, vitae congue metus faucibus at. Aliquam et lacus eu
        turpis blandit commodo sit amet nec ligula. Proin tristique porttitor iaculis. Nunc efficitur justo et justo
        rutrum gravida. Cras accumsan ipsum vitae cursus consequat. Sed at nunc at risus dictum hendrerit. Pellentesque
        vel felis convallis, pellentesque enim in, suscipit urna. Aenean eu tristique lectus. Sed convallis at velit
        eget maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed
        eget erat eget ligula lacinia ultricies a non ex. In efficitur purus non cursus tincidunt. Quisque lobortis
        feugiat ipsum, non mollis sapien aliquam in. Sed dictum libero id neque dictum pellentesque. In sed molestie
        nibh, volutpat fringilla leo. Phasellus at scelerisque enim. Donec nulla enim, dapibus quis tempor at, cursus
        eget mi. Vivamus ac consectetur tortor, ut egestas felis. Quisque ultricies, ligula sit amet vestibulum
        vulputate, erat lacus volutpat urna, nec tempor lacus nisl vitae lectus. Sed rhoncus lorem id tempus posuere.
        Vestibulum quis tellus dui. Suspendisse finibus placerat vestibulum. Suspendisse potenti. Nam sollicitudin nec
        velit non efficitur. In hac habitasse platea dictumst. Ut ut placerat nibh. Vestibulum felis enim, volutpat eget
        urna a, dapibus fringilla est. Vivamus rhoncus quis leo vel porta. In sit amet neque accumsan ligula varius
        aliquet eu ut nisi. Nunc bibendum elementum urna a blandit. Maecenas ultrices eros ac lacus eleifend, sit amet
        posuere erat iaculis. Nam hendrerit ipsum sed leo mattis ultrices. Aliquam tincidunt dui eget tincidunt
        pharetra. Aenean efficitur magna nunc, vitae luctus turpis placerat id. Aliquam quis rutrum purus. Proin tortor
        mauris, fermentum et pharetra vel, vulputate id dui. Nam pharetra risus odio. Etiam quis erat a mauris semper
        dignissim. Praesent a sollicitudin nunc. Integer scelerisque eget leo in pellentesque. Vivamus felis augue,
        condimentum nec auctor tincidunt, maximus nec nunc. Etiam vel imperdiet nisl, vel iaculis felis. Etiam tempor
        dolor ac ultrices luctus. Ut id nulla vestibulum, convallis sapien at, ultrices est. Mauris finibus est vitae
        fringilla placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum tincidunt sem, eu
        dignissim purus viverra in. Curabitur libero felis, eleifend sit amet bibendum at, ornare in lacus. Curabitur ac
        mattis ligula. Nulla dignissim pharetra urna at eleifend. Ut vitae auctor nibh. Nulla facilisi. Maecenas
        bibendum nibh nec dui posuere, eu vulputate arcu mollis. Sed auctor, diam sit amet scelerisque fringilla, nunc
        risus tristique libero, et ornare lorem augue eu mauris. Donec hendrerit, sapien ac semper vehicula, nunc ex
        bibendum lacus, vel ultricies sapien purus eget libero.
      </Text>
    </ContentLayout.Content>
  </ContentLayout>
);

export const Full = () => (
  <ContentLayout>
    <ContentLayout.Header>
      <Heading>A full content section</Heading>
    </ContentLayout.Header>
    <ContentLayout.Content size='full'>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget odio vitae elit sodales cursus. Phasellus a
        consequat leo. Ut elit metus, bibendum et consequat quis, facilisis nec ex. Curabitur ex magna, tempor a pretium
        eu, hendrerit ut erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id lectus varius,
        lacinia metus et, egestas magna. Pellentesque egestas massa nec hendrerit tempus. Aliquam laoreet elit aliquet
        orci semper, eget finibus neque volutpat. Ut dignissim in neque quis lobortis. Vivamus bibendum mauris eu est
        aliquam efficitur. Vestibulum finibus condimentum lacus, vitae congue metus faucibus at. Aliquam et lacus eu
        turpis blandit commodo sit amet nec ligula. Proin tristique porttitor iaculis. Nunc efficitur justo et justo
        rutrum gravida. Cras accumsan ipsum vitae cursus consequat. Sed at nunc at risus dictum hendrerit. Pellentesque
        vel felis convallis, pellentesque enim in, suscipit urna. Aenean eu tristique lectus. Sed convallis at velit
        eget maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed
        eget erat eget ligula lacinia ultricies a non ex. In efficitur purus non cursus tincidunt. Quisque lobortis
        feugiat ipsum, non mollis sapien aliquam in. Sed dictum libero id neque dictum pellentesque. In sed molestie
        nibh, volutpat fringilla leo. Phasellus at scelerisque enim. Donec nulla enim, dapibus quis tempor at, cursus
        eget mi. Vivamus ac consectetur tortor, ut egestas felis. Quisque ultricies, ligula sit amet vestibulum
        vulputate, erat lacus volutpat urna, nec tempor lacus nisl vitae lectus. Sed rhoncus lorem id tempus posuere.
        Vestibulum quis tellus dui. Suspendisse finibus placerat vestibulum. Suspendisse potenti. Nam sollicitudin nec
        velit non efficitur. In hac habitasse platea dictumst. Ut ut placerat nibh. Vestibulum felis enim, volutpat eget
        urna a, dapibus fringilla est. Vivamus rhoncus quis leo vel porta. In sit amet neque accumsan ligula varius
        aliquet eu ut nisi. Nunc bibendum elementum urna a blandit. Maecenas ultrices eros ac lacus eleifend, sit amet
        posuere erat iaculis. Nam hendrerit ipsum sed leo mattis ultrices. Aliquam tincidunt dui eget tincidunt
        pharetra. Aenean efficitur magna nunc, vitae luctus turpis placerat id. Aliquam quis rutrum purus. Proin tortor
        mauris, fermentum et pharetra vel, vulputate id dui. Nam pharetra risus odio. Etiam quis erat a mauris semper
        dignissim. Praesent a sollicitudin nunc. Integer scelerisque eget leo in pellentesque. Vivamus felis augue,
        condimentum nec auctor tincidunt, maximus nec nunc. Etiam vel imperdiet nisl, vel iaculis felis. Etiam tempor
        dolor ac ultrices luctus. Ut id nulla vestibulum, convallis sapien at, ultrices est. Mauris finibus est vitae
        fringilla placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum tincidunt sem, eu
        dignissim purus viverra in. Curabitur libero felis, eleifend sit amet bibendum at, ornare in lacus. Curabitur ac
        mattis ligula. Nulla dignissim pharetra urna at eleifend. Ut vitae auctor nibh. Nulla facilisi. Maecenas
        bibendum nibh nec dui posuere, eu vulputate arcu mollis. Sed auctor, diam sit amet scelerisque fringilla, nunc
        risus tristique libero, et ornare lorem augue eu mauris. Donec hendrerit, sapien ac semper vehicula, nunc ex
        bibendum lacus, vel ultricies sapien purus eget libero.
      </Text>
    </ContentLayout.Content>
  </ContentLayout>
);

export default {
  title: 'Layouts/Content',
  component: ContentLayout,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;
