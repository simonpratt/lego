import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { WidthLimitLayout, Text } from '../..';

/* eslint-disable @typescript-eslint/no-empty-function */

interface WidthLimitStoryProps {
  max: 'mobile' | 'tablet' | 'desktop';
}

export const Standard = ({ max }: WidthLimitStoryProps) => (
  <WidthLimitLayout max={max}>
    <Text>
      Suspendisse sit amet pellentesque nisi. Quisque eget velit sit amet mauris tincidunt dictum id et ex. Integer
      pulvinar tellus id viverra finibus. Cras dapibus diam a ante eleifend, ac ultrices ligula vestibulum. Nulla
      gravida ante nec mi tristique, vel elementum arcu volutpat. Nunc in lorem id ligula sodales tincidunt non ut
      ipsum. Fusce risus eros, dapibus sed lacus et, faucibus auctor purus. Nulla sed rhoncus ligula, at porttitor
      tellus. Aliquam vitae gravida quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque
      quis tempus risus.
      <br />
      <br />
      Nullam tincidunt mauris ut lectus auctor aliquam. Aenean ornare mi et sollicitudin suscipit. Integer eu nulla at
      turpis molestie malesuada. Maecenas non consectetur massa. Nunc dui magna, imperdiet placerat bibendum ac,
      accumsan non lorem. Proin vulputate magna nisl, vel convallis elit iaculis quis. Proin maximus ante non ante
      vehicula sodales. Aliquam dui nisi, posuere vitae urna in, porta aliquet tellus. Curabitur commodo diam nec erat
      luctus, quis pharetra diam ultricies. Fusce sagittis libero lorem, convallis tristique mi egestas fermentum. Sed
      eu erat ut eros porttitor sollicitudin. Vivamus facilisis felis odio, ac tristique enim blandit a. Aliquam
      tincidunt iaculis sapien, sed vulputate mauris luctus ac. Donec aliquet ullamcorper orci quis tempor. Curabitur ac
      felis nulla.
      <br />
      <br />
      Aenean vestibulum aliquam purus ut fringilla. Maecenas aliquet a nunc eget scelerisque. Mauris varius dignissim
      velit, vitae faucibus massa posuere sit amet. Nulla rutrum enim tellus, eget interdum massa ultricies sed. Proin
      pulvinar odio non lectus scelerisque, et varius nisl blandit. Donec nisl ante, ultricies eu volutpat ut, dapibus
      sed ex. Aliquam risus ex, porttitor vel commodo in, convallis laoreet dolor. Proin pretium neque pretium, laoreet
      dolor ultrices, vulputate sapien. Aenean rutrum lorem non mauris egestas accumsan.
      <br />
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nibh lorem, mattis sed dolor ac, malesuada maximus
      lorem. Proin hendrerit maximus ipsum, eu laoreet erat congue a. Duis pellentesque leo sed nisi mattis, a
      sollicitudin sapien ornare. Mauris efficitur nulla metus. Etiam felis velit, mollis eget fringilla nec, venenatis
      non libero. Suspendisse at arcu rhoncus, tristique ex nec, blandit enim. Vivamus rutrum, felis faucibus vulputate
      vulputate, lacus quam sollicitudin eros, non consequat velit neque in lorem. Ut hendrerit lectus vel quam placerat
      tincidunt. Ut auctor tortor elit, ac aliquam orci pellentesque efficitur. Morbi eget sollicitudin est. Donec
      ullamcorper velit ipsum, non dapibus nisi vulputate ac. Proin dapibus, mi ac scelerisque sollicitudin, turpis
      augue hendrerit metus, eget dignissim justo lectus id urna. Vivamus massa ipsum, posuere eu risus non, ultrices
      convallis tellus. Mauris et egestas erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia curae; Donec sagittis porttitor nisi a gravida.
      <br />
      <br />
      Donec mollis nisl quis scelerisque suscipit. Suspendisse eget risus ornare lorem convallis gravida sit amet id
      nisi. Duis venenatis tortor vitae facilisis auctor. Nulla in pretium odio, et aliquet dui. Sed non venenatis ex.
      Praesent felis sem, tincidunt et ligula sit amet, vulputate tincidunt tellus. Nam quis eros quis justo aliquet
      tempus. Nulla imperdiet bibendum velit, eu elementum felis cursus ut. Curabitur eget dui et urna vehicula
      porttitor sit amet vitae risus. Nulla vitae lacus id quam gravida volutpat at eu elit. Quisque efficitur hendrerit
      purus, sed viverra elit cursus non. Nunc at scelerisque eros, ut posuere erat. Suspendisse egestas volutpat orci,
      id ornare nisi aliquet vel.
      <br />
      <br />
      Donec ultrices lectus lectus, eget mollis nisi venenatis vitae. Morbi cursus quis sapien ut ultrices. Quisque
      placerat, massa ut accumsan tempor, purus leo sollicitudin leo, eu auctor mauris quam nec nisl. Donec eu dignissim
      erat. Aenean bibendum blandit leo, sed posuere risus euismod eu. Ut dignissim nisl ex, eget condimentum turpis
      auctor in. Fusce tristique neque accumsan diam suscipit, vel blandit lorem sodales. Etiam ut tincidunt nisi, ut
      aliquet felis. Suspendisse vestibulum, velit imperdiet tempor varius, lectus massa consectetur lacus, sagittis
      scelerisque ante enim non metus. Donec nunc nisl, fermentum scelerisque ornare nec, congue id velit. Praesent
      vehicula dolor nisl, vel sollicitudin nisl ullamcorper sit amet. Maecenas nec ante eu dui interdum mollis.
      Maecenas urna enim, maximus et ligula at, aliquet varius arcu. Ut justo arcu, commodo iaculis est ut, ornare
      posuere arcu.
      <br />
      <br />
      Curabitur at nunc et erat placerat laoreet aliquet in eros. Proin sagittis dolor libero, ut ultrices elit euismod
      vitae. Phasellus non tellus tellus. Morbi sit amet auctor lacus. Maecenas commodo sagittis ex nec eleifend. Mauris
      sit amet augue a sapien vulputate rhoncus. Donec dignissim finibus erat, sit amet suscipit arcu blandit non. Sed
      pulvinar tincidunt volutpat. Proin pretium leo non enim pretium, vitae porttitor felis pellentesque. Nam tincidunt
      euismod arcu quis aliquam. Maecenas in lorem et tortor sagittis efficitur. Vestibulum est odio, tristique eget
      massa vitae, porta tincidunt magna. Curabitur tempus velit ut auctor auctor. Integer ultricies lorem vitae nibh
      convallis, ac placerat tellus rutrum.
      <br />
      <br />
      Curabitur ac lorem vitae lorem convallis tincidunt. Aenean luctus, dolor et blandit consectetur, odio risus
      lacinia ante, non auctor libero turpis accumsan metus. Donec accumsan vitae lacus a varius. Aliquam ac ultricies
      massa. Praesent vel lacus tempus, interdum nisi eget, varius justo. Pellentesque nec mauris ac dolor fringilla
      pulvinar. Sed sollicitudin nec lectus nec condimentum. Maecenas molestie blandit ipsum ut finibus. Cras eu nibh
      congue, porta metus vel, pellentesque tellus.
      <br />
      <br />
      Morbi feugiat, arcu vel ultricies ultrices, justo odio faucibus purus, vel pharetra augue metus nec purus.
      Suspendisse sit amet leo ipsum. Vivamus ut velit ut ante consectetur vehicula ut at mi. Nam et ex at nisl
      ullamcorper maximus nec vel est. Fusce ut est neque. Vivamus dictum, ipsum porta varius tempus, arcu diam
      sollicitudin risus, in vulputate est orci sit amet ligula. Donec a est vel lacus consectetur dictum.
    </Text>
  </WidthLimitLayout>
);

export default {
  title: 'Layouts/WidthLimit',
  component: WidthLimitLayout,
  argTypes: {
    max: {
      options: ['mobile', 'tablet', 'desktop'],
      control: { type: 'select' },
      defaultValue: 'tablet',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;
