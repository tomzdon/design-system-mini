import type { Meta, StoryObj } from '@storybook/react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';

const ThemedGroup = ({
                       title,
                       description,
                       children,
                     }: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-6 bg-white dark:bg-[#0d1224] p-6 rounded-xl border border-neutral-200 dark:border-none">
    <div>
      <h1 className="heading-1">{title}</h1>
      <p className="paragraph text-neutral-500 dark:text-neutral-200">{description}</p>
    </div>
    {children}
  </div>
);

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'outline', 'text'],
    },
    size: {
      control: 'select',
      options: ['medium', 'large', 'icon'],
    },
    title: { control: 'text' },
    Icon: { control: false },
    iconName: { control: 'text' },
    fullwidth: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
  args: {
    title: 'Click Me',
    variant: 'primary',
    size: 'medium',
    fullwidth: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>

export const Primary: Story = {};

export const WithIcon: Story = {
  args: {
    title: 'Add',
    Icon: <Plus size={16} />,
  },
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-3">
      <Button {...args} variant="primary" title="Primary" />
      <Button {...args} variant="secondary" title="Secondary" />
      <Button {...args} variant="tertiary" title="Tertiary" />
      <Button {...args} variant="outline" title="Outline" />
      <Button {...args} variant="text" title="Text" />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Button {...args} size="medium" title="Medium" />
      <Button {...args} size="large" title="Large" />
      <Button {...args} size="icon" Icon={<Plus />} aria-label="Icon" />
    </div>
  ),
};

export const FullWidth: Story = {
  args: {
    fullwidth: true,
  },
};

export const AllOptions: Story = {
  render: (args) => (
    <div className="space-y-10 p-6">
      {/* Light Theme */}
      <ThemedGroup
        title="Buttons"
        description="A button lets the user perform an action with a tap or a click."
      >
        <div className="space-y-4">
          <div className="flex flex-col gap-3">
            <Button {...args} variant="primary" title="Primary" Icon={<Plus />} />
            <Button {...args} variant="secondary" title="Secondary" Icon={<Plus />} />
            <Button {...args} variant="tertiary" title="Tertiary" Icon={<Plus />} />
            <Button {...args} variant="outline" title="Outline" Icon={<Plus />} />
          </div>
        </div>
        <div className="flex gap-4 pt-6">
          <Button {...args} size="medium" title="Medium" Icon={<Plus />} />
          <Button {...args} size="large" title="Large" Icon={<Plus />} />
        </div>
      </ThemedGroup>

      {/* Dark Theme */}
      <div className="dark">
        <ThemedGroup
          title="Buttons"
          description="A button lets the user perform an action with a tap or a click."
        >
          <div className="space-y-4">
            <div className="flex flex-col gap-3">
              <Button {...args} variant="primary" title="Primary" Icon={<Plus />} />
              <Button {...args} variant="secondary" title="Secondary" Icon={<Plus />} />
              <Button {...args} variant="tertiary" title="Tertiary" Icon={<Plus />} />
              <Button {...args} variant="outline" title="Outline" Icon={<Plus />} />
            </div>
          </div>
          <div className="flex gap-4 pt-6">
            <Button {...args} size="medium" title="Medium" Icon={<Plus />} />
            <Button {...args} size="large" title="Large" Icon={<Plus />} />
          </div>
        </ThemedGroup>
      </div>
    </div>
  ),
};

