import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { type RadioOption, RadioSelector } from './radioSelector';
import '../../index.css';

type Option = 'apple' | 'banana' | 'cherry';

const options: RadioOption<Option>[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
];

const meta: Meta<typeof RadioSelector<Option>> = {
  title: 'Components/RadioSelector',
  component: RadioSelector,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioSelector<Option>>;

// --------------------
// --------------------
const BasicStory = () => {
  const [value, setValue] = useState<Option>('apple');

  return (
    <RadioSelector
      title="Select your favorite fruit"
      options={options}
      value={value}
      onChange={setValue}
    />
  );
};

export const Default: Story = {
  render: () => <BasicStory />,
};

// --------------------
// --------------------
const WithIconsStory = () => {
  const [value, setValue] = useState<Option>('banana');

  const optionsWithIcons: RadioOption<Option>[] = [
    { value: 'apple', label: 'Apple',icon: 'fa-basketball' },
    { value: 'banana', label: 'Banana', icon: 'fa-solid fa-lemon' },
    { value: 'cherry', label: 'Cherry', icon: 'fa-solid fa-cherry', disabled: true },
  ];

  return (
    <RadioSelector
      title="Pick a fruit with an icon"
      options={optionsWithIcons}
      value={value}
      onChange={setValue}
    />
  );
};

export const WithIcons: Story = {
  render: () => <WithIconsStory />,
};

// --------------------
// --------------------
const DisabledStory = () => {
  const [value, setValue] = useState<Option>('apple');

  const optionsDisabled: RadioOption<Option>[] = [
    { value: 'apple', label: 'Apple', },
    { value: 'banana', label: 'Banana', disabled: true },
    { value: 'cherry', label: 'Cherry' },
  ];

  return (
    <RadioSelector
      title="Banana is disabled"
      options={optionsDisabled}
      value={value}
      onChange={setValue}
    />
  );
};

export const DisabledOption: Story = {
  render: () => <DisabledStory />,
};

// --------------------
// --------------------
const NoTitleStory = () => {
  const [value, setValue] = useState<Option>('banana');

  return (
    <RadioSelector
      options={options}
      value={value}
      onChange={setValue}
    />
  );
};

export const NoTitle: Story = {
  render: () => <NoTitleStory />,
};
