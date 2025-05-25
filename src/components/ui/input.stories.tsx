import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';
import { useState } from 'react';
import { Search } from 'lucide-react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'text' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    helpText: { control: 'text' },
    error: { control: 'text' },
    prefix: { control: 'text' },
    value: { control: 'text' },
    className: { control: 'text' },
  },
  args: {
    label: 'Your name',
    placeholder: 'Enter your name',
    disabled: false,
    helpText: '',
    error: '',
    prefix: '',
    value: '',
    type: 'text',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// -------------------------------------------------
// ✅ Template — kontrolowany przez useState
// -------------------------------------------------

const Template = (args: React.ComponentProps<typeof Input>) => {
  const [value, setValue] = useState(args.value ?? '');

  return (
    <Input
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

// -------------------------------------------------
// ✅ Story: Domyślny input
// -------------------------------------------------
export const Default: Story = {
  render: (args) => <Template {...args} />,
};

// -------------------------------------------------
// ✅ Story: Z prefixem
// -------------------------------------------------
export const WithPrefix: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'Phone number',
    prefix: '+48',
    placeholder: '123 456 789',
  },
};

// -------------------------------------------------
// ✅ Story: Z ikoną
// -------------------------------------------------
export const WithIcon: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'Search',
    icon: <Search size={16} />,
    placeholder: 'Search something...',
  },
};

// -------------------------------------------------
// ✅ Story: Hasło z przełącznikiem "Show/Hide"
// -------------------------------------------------
export const Password: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
  },
};

// -------------------------------------------------
// ✅ Story: Z błędem i pomocą
// -------------------------------------------------
export const WithError: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    error: 'This email is already taken',
    helpText: 'Please enter a different email address.',
  },
};
