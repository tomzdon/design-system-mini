import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../components/ui/checkbox.tsx';
import React, { useState } from 'react';
import type { CheckedState } from '@radix-ui/react-checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    id: 'example',
    label: 'Accept terms and conditions',
    description: 'This is a checkbox description',
  },
  argTypes: {
    isValid: { control: 'boolean' },
    disabled: { control: 'boolean' },
    error: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['default', 'orange'],
    },
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
    description: undefined,
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

export const WithoutDescriptionAndTitle: Story = {
  args: {
    description: undefined,
    label: undefined,
  },
  render: (args) => <ControlledCheckbox {...args} />,
};

export const OrangeVariant: Story = {
  args: {
    variant: 'orange',
    label: 'Subscribe to newsletter',
    description: 'Orange variant of checkbox',
  },
  render: (args) => <ControlledCheckbox {...args} />,
};
