import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@/components/ui/badge.tsx';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
    children: {
      control: 'text',
      defaultValue: 'Badge',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>


export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Default',
  },
};


export const Orange: Story = {
  args: {
    variant: 'orange',
    children: 'Orange',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};


export const WithIcons = () => (
  <div className="flex flex-col gap-8 items-center">
    <Badge variant="primary" leftIcon={<ArrowLeft size={16} />} rightIcon={<ArrowRight size={16} />}>
      Badge
    </Badge>
    <Badge variant="orange" leftIcon={<ArrowLeft size={16} />} rightIcon={<ArrowRight size={16} />}>
      Badge
    </Badge>
    <Badge variant="secondary" rightIcon={<ArrowRight size={16} />}>
      Badge
    </Badge>
    <Badge variant="outline" leftIcon={<ArrowLeft size={16} />}>
      Badge
    </Badge>
  </div>
);
