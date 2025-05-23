import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';
import React, { useState } from 'react';
import type { CheckedState } from '@radix-ui/react-checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    id: 'example',
    label: 'Accept terms and conditions',
  },
  argTypes: {
    isValid: { control: 'boolean' },
    disabled: { control: 'boolean' },
    error: { control: 'text' },
    onCheckedChange: { action: 'checked changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

const ControlledCheckbox = (args: React.ComponentProps<typeof Checkbox>) => {
  const [checked, setChecked] = useState<CheckedState>(false);

  return (
    <Checkbox
      {...args}
      checked={checked}
      onCheckedChange={setChecked}
    />
  );
};

export const Default: Story = {
  render: (args) => <ControlledCheckbox {...args} />,
};

export const WithError: Story = {
  args: {
    error: 'This field is required',
  },
  render: (args) => <ControlledCheckbox {...args} />,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <ControlledCheckbox {...args} />,
};

export const Valid: Story = {
  args: {
    isValid: true,
  },
  render: (args) => <ControlledCheckbox {...args} />,
};
