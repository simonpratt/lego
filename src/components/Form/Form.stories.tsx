import { Meta } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, ControlGroup, Form, Heading, Input } from '../..';

/* eslint-disable @typescript-eslint/no-empty-function */

const PaddedDiv = styled.div`
  padding-left: 16px;
`;

export const Standard = () => {
  const [value, setValue] = useState({
    name: 'Frightened Kangaroo',
    colour: 'Red',
    treats: [{ name: 'Jerky' }, { name: 'Leaves' }],
  });

  return (
    <>
      <Form value={value} onChange={setValue}>
        <ControlGroup variation='submission'>
          <Input name='name' placeholder='name' />
          <Input name='colour' placeholder='colour' />
          <Heading.FormHeading>Treats</Heading.FormHeading>
          <PaddedDiv>
            <Form.NestedFormArray name='treats' index={0}>
              <Input name='name' placeholder='name' />
            </Form.NestedFormArray>
          </PaddedDiv>
          <PaddedDiv>
            <Form.NestedFormArray name='treats' index={1}>
              <Input name='name' placeholder='name' />
            </Form.NestedFormArray>
          </PaddedDiv>
          <ControlGroup.Spacer />
          <Button>Next</Button>
        </ControlGroup>
      </Form>
      <br />
      <br />
      <br />
      <div>{JSON.stringify(value)}</div>
    </>
  );
};

export const Blank = () => {
  const [value, setValue] = useState({});

  return (
    <>
      <Form value={value} onChange={setValue}>
        <ControlGroup variation='submission'>
          <Input name='name' placeholder='name' />
          <Input name='colour' placeholder='colour' />
          <Heading.FormHeading>Treats</Heading.FormHeading>
          <PaddedDiv>
            <Form.NestedFormArray name='treats' index={0}>
              <Input name='name' placeholder='name' />
            </Form.NestedFormArray>
          </PaddedDiv>
          <PaddedDiv>
            <Form.NestedFormArray name='treats' index={1}>
              <Input name='name' placeholder='name' />
            </Form.NestedFormArray>
          </PaddedDiv>
          <ControlGroup.Spacer />
          <Button>Next</Button>
        </ControlGroup>
      </Form>
      <br />
      <br />
      <br />
      <div>{JSON.stringify(value)}</div>
    </>
  );
};

export const WithErrors = () => {
  const [value, setValue] = useState({
    name: 'Frightened Kangaroo',
    colour: 'Red',
    treats: [{ name: 'Jerky' }, { name: 'Leaves' }],
  });

  const errors = {
    name: 'Name is required',
    colour: 'Colour is required',
    treats: [{ name: 'Name is required' }, { name: 'Name is required' }],
  };

  return (
    <>
      <Form value={value} errors={errors} onChange={setValue}>
        <ControlGroup variation='submission'>
          <Input name='name' placeholder='name' />
          <Input name='colour' placeholder='colour' />
          <Heading.FormHeading>Treats</Heading.FormHeading>
          <PaddedDiv>
            <Form.NestedFormArray name='treats' index={0}>
              <Input name='name' placeholder='name' />
            </Form.NestedFormArray>
          </PaddedDiv>
          <PaddedDiv>
            <Form.NestedFormArray name='treats' index={1}>
              <Input name='name' placeholder='name' />
            </Form.NestedFormArray>
          </PaddedDiv>
          <ControlGroup.Spacer />
          <Button>Next</Button>
        </ControlGroup>
      </Form>
      <br />
      <br />
      <br />
      <div>{JSON.stringify(value)}</div>
    </>
  );
};

export default {
  title: 'Forms/Form',
  component: Form,
} as Meta;
