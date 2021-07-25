import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Modal, Button } from '../..';

export const Standard = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      {open && (
        <Modal size='sm' onClose={() => setOpen(false)}>
          <Modal.Header header='Small modal' subHeader="This one shouldn't scroll" />
          <Modal.Body>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget efficitur libero. In eu gravida
              turpis. Nunc dictum pretium felis a vulputate. Aliquam bibendum ex sed sapien rutrum accumsan. Curabitur
              sed mi arcu.
            </p>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export const LotsOfContent = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      {open && (
        <Modal onClose={() => setOpen(false)}>
          <Modal.Header header='Larger modal' subHeader='This one should scroll' />
          <Modal.Body>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget efficitur libero. In eu gravida
              turpis. Nunc dictum pretium felis a vulputate. Aliquam bibendum ex sed sapien rutrum accumsan. Curabitur
              sed mi arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut cursus urna. Morbi
              vestibulum tortor porta tortor efficitur, et semper tortor viverra. Suspendisse ac cursus lacus. Vivamus
              blandit, elit eu pretium rutrum, tellus orci tristique ante, vel condimentum quam nisl eget quam. Donec
              convallis aliquet dictum. Aliquam in sapien quis quam consequat interdum sed quis est. Phasellus dictum
              posuere mauris in tempor. Nulla scelerisque, risus ut dignissim gravida, ex urna vestibulum turpis, vel
              interdum velit nibh nec quam. Nulla non commodo odio. Proin eu justo risus.
            </p>
            <br />
            <p>
              In volutpat nulla eros, sed vulputate urna suscipit vestibulum. Suspendisse posuere, mauris ut
              pellentesque aliquam, sapien leo molestie arcu, eu dapibus felis eros varius lacus. Quisque nec convallis
              neque. Mauris dignissim ultricies nunc, vel interdum ante elementum nec. Integer faucibus laoreet nisi.
              Etiam tincidunt eleifend velit, nec tempor tortor rhoncus vel. Aliquam interdum, eros euismod tincidunt
              tristique, lacus tellus sagittis mi, a ultricies ligula tortor quis est. Nam volutpat nisl vitae vulputate
              tristique. Proin consequat lacus facilisis, pretium turpis quis, faucibus nisl. Vivamus eu mauris
              pellentesque, pretium eros nec, blandit mauris. Nulla maximus risus a velit dapibus, quis laoreet nisl
              dapibus. Nullam a varius nulla.
            </p>
            <br />
            <p>
              Aliquam vitae sollicitudin sapien, at commodo est. In hac habitasse platea dictumst. Etiam erat metus,
              gravida ut posuere ac, mollis quis nisi. Curabitur arcu lorem, convallis nec facilisis non, ultricies vel
              lectus. Suspendisse accumsan metus eu lorem dictum vestibulum sed sed lorem. Sed facilisis ultricies enim
              consectetur sagittis. Phasellus blandit urna vitae varius tempus. Ut molestie porta nisl id egestas. Ut
              bibendum ante vitae quam viverra, ut dapibus felis convallis. Fusce quam nisl, pellentesque ac turpis sed,
              scelerisque congue velit. Morbi vehicula ac neque et rutrum. Vivamus leo velit, accumsan at tristique a,
              ultricies vitae tortor. Pellentesque gravida pharetra urna. Maecenas aliquet elementum justo, id tincidunt
              velit.
            </p>
            <br />
            <p>
              Proin vitae nulla porta, ullamcorper nisi at, convallis ante. Maecenas facilisis augue vel ultricies
              laoreet. Vivamus blandit enim ac felis consectetur, quis malesuada sem laoreet. Praesent vehicula felis
              tellus, at luctus ipsum suscipit at. Sed lorem felis, euismod sit amet cursus et, porttitor et mauris.
              Proin cursus arcu lacus, non condimentum mi consectetur eu. Suspendisse quis venenatis felis, eu facilisis
              dolor. Morbi laoreet egestas arcu, vel tempor nisi vehicula at. Nullam ut ligula posuere, vestibulum mi
              at, mollis felis. Nunc ut massa elit. Suspendisse id nunc at ipsum eleifend finibus imperdiet et lectus.
              Curabitur elementum, nulla sit amet interdum mollis, metus elit vulputate neque, mattis lacinia lorem
              purus ut odio. Morbi interdum neque sed libero molestie consequat. Sed condimentum orci facilisis tortor
              mollis ultrices.
            </p>
            <br />
            <p>
              Nulla diam lorem, placerat non dui et, viverra ultrices augue. Phasellus tristique porta odio at
              scelerisque. Proin facilisis elit ut est faucibus rhoncus. Nunc ac auctor ante. Suspendisse consequat
              nulla sit amet interdum luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Aliquam vel dapibus sem. Quisque feugiat libero id maximus blandit. Duis nec urna
              aliquet, dapibus nibh at, scelerisque enim. Donec venenatis est dui, sit amet sollicitudin mi tempus ac.
              Aenean quis nunc a risus congue malesuada at vulputate metus. Integer sed efficitur libero. Aenean sit
              amet consequat arcu. Aliquam rhoncus porttitor vestibulum.
            </p>
            <br />
            <p>
              Aliquam vitae sollicitudin sapien, at commodo est. In hac habitasse platea dictumst. Etiam erat metus,
              gravida ut posuere ac, mollis quis nisi. Curabitur arcu lorem, convallis nec facilisis non, ultricies vel
              lectus. Suspendisse accumsan metus eu lorem dictum vestibulum sed sed lorem. Sed facilisis ultricies enim
              consectetur sagittis. Phasellus blandit urna vitae varius tempus. Ut molestie porta nisl id egestas. Ut
              bibendum ante vitae quam viverra, ut dapibus felis convallis. Fusce quam nisl, pellentesque ac turpis sed,
              scelerisque congue velit. Morbi vehicula ac neque et rutrum. Vivamus leo velit, accumsan at tristique a,
              ultricies vitae tortor. Pellentesque gravida pharetra urna. Maecenas aliquet elementum justo, id tincidunt
              velit.
            </p>
            <br />
            <p>
              Proin vitae nulla porta, ullamcorper nisi at, convallis ante. Maecenas facilisis augue vel ultricies
              laoreet. Vivamus blandit enim ac felis consectetur, quis malesuada sem laoreet. Praesent vehicula felis
              tellus, at luctus ipsum suscipit at. Sed lorem felis, euismod sit amet cursus et, porttitor et mauris.
              Proin cursus arcu lacus, non condimentum mi consectetur eu. Suspendisse quis venenatis felis, eu facilisis
              dolor. Morbi laoreet egestas arcu, vel tempor nisi vehicula at. Nullam ut ligula posuere, vestibulum mi
              at, mollis felis. Nunc ut massa elit. Suspendisse id nunc at ipsum eleifend finibus imperdiet et lectus.
              Curabitur elementum, nulla sit amet interdum mollis, metus elit vulputate neque, mattis lacinia lorem
              purus ut odio. Morbi interdum neque sed libero molestie consequat. Sed condimentum orci facilisis tortor
              mollis ultrices.
            </p>
            <br />
            <p>
              Nulla diam lorem, placerat non dui et, viverra ultrices augue. Phasellus tristique porta odio at
              scelerisque. Proin facilisis elit ut est faucibus rhoncus. Nunc ac auctor ante. Suspendisse consequat
              nulla sit amet interdum luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Aliquam vel dapibus sem. Quisque feugiat libero id maximus blandit. Duis nec urna
              aliquet, dapibus nibh at, scelerisque enim. Donec venenatis est dui, sit amet sollicitudin mi tempus ac.
              Aenean quis nunc a risus congue malesuada at vulputate metus. Integer sed efficitur libero. Aenean sit
              amet consequat arcu. Aliquam rhoncus porttitor vestibulum.
            </p>
            <br />
            <p>
              Aliquam vitae sollicitudin sapien, at commodo est. In hac habitasse platea dictumst. Etiam erat metus,
              gravida ut posuere ac, mollis quis nisi. Curabitur arcu lorem, convallis nec facilisis non, ultricies vel
              lectus. Suspendisse accumsan metus eu lorem dictum vestibulum sed sed lorem. Sed facilisis ultricies enim
              consectetur sagittis. Phasellus blandit urna vitae varius tempus. Ut molestie porta nisl id egestas. Ut
              bibendum ante vitae quam viverra, ut dapibus felis convallis. Fusce quam nisl, pellentesque ac turpis sed,
              scelerisque congue velit. Morbi vehicula ac neque et rutrum. Vivamus leo velit, accumsan at tristique a,
              ultricies vitae tortor. Pellentesque gravida pharetra urna. Maecenas aliquet elementum justo, id tincidunt
              velit.
            </p>
            <br />
            <p>
              Proin vitae nulla porta, ullamcorper nisi at, convallis ante. Maecenas facilisis augue vel ultricies
              laoreet. Vivamus blandit enim ac felis consectetur, quis malesuada sem laoreet. Praesent vehicula felis
              tellus, at luctus ipsum suscipit at. Sed lorem felis, euismod sit amet cursus et, porttitor et mauris.
              Proin cursus arcu lacus, non condimentum mi consectetur eu. Suspendisse quis venenatis felis, eu facilisis
              dolor. Morbi laoreet egestas arcu, vel tempor nisi vehicula at. Nullam ut ligula posuere, vestibulum mi
              at, mollis felis. Nunc ut massa elit. Suspendisse id nunc at ipsum eleifend finibus imperdiet et lectus.
              Curabitur elementum, nulla sit amet interdum mollis, metus elit vulputate neque, mattis lacinia lorem
              purus ut odio. Morbi interdum neque sed libero molestie consequat. Sed condimentum orci facilisis tortor
              mollis ultrices.
            </p>
            <br />
            <p>
              Nulla diam lorem, placerat non dui et, viverra ultrices augue. Phasellus tristique porta odio at
              scelerisque. Proin facilisis elit ut est faucibus rhoncus. Nunc ac auctor ante. Suspendisse consequat
              nulla sit amet interdum luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Aliquam vel dapibus sem. Quisque feugiat libero id maximus blandit. Duis nec urna
              aliquet, dapibus nibh at, scelerisque enim. Donec venenatis est dui, sit amet sollicitudin mi tempus ac.
              Aenean quis nunc a risus congue malesuada at vulputate metus. Integer sed efficitur libero. Aenean sit
              amet consequat arcu. Aliquam rhoncus porttitor vestibulum.
            </p>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;
