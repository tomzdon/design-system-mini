import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./button"

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
        },
        size: {
            control: "select",
            options: ["default", "sm", "lg", "icon"],
        },
        children: {
            control: "text",
        },
        disabled: {
            control: "boolean",
        },
    },
    args: {
        variant: "default",
        size: "default",
        children: "Click me",
        disabled: false,
    },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {}

export const Variants: Story = {
    render: (args) => (
        <div className="flex flex-col gap-2">
            <Button {...args} variant="default">Default</Button>
            <Button {...args} variant="destructive">Destructive</Button>
            <Button {...args} variant="outline">Outline</Button>
            <Button {...args} variant="secondary">Secondary</Button>
            <Button {...args} variant="ghost">Ghost</Button>
            <Button {...args} variant="link">Link</Button>
        </div>
    ),
}

export const Sizes: Story = {
    render: (args) => (
        <div className="flex items-center gap-2">
            <Button {...args} size="sm">Small</Button>
            <Button {...args} size="default">Default</Button>
            <Button {...args} size="lg">Large</Button>
            <Button {...args} size="icon" aria-label="Icon button">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                    <path d="M12 2L12 22" stroke="currentColor" strokeWidth="2"/>
                    <path d="M2 12L22 12" stroke="currentColor" strokeWidth="2"/>
                </svg>
            </Button>
        </div>
    ),
}
