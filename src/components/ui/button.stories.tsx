import type {Meta, StoryObj} from "@storybook/react"
import {Button} from "./button"
import {Plus} from "lucide-react"

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["primary", "secondary", "tertiary", "outline", "text"],
        },
        size: {
            control: "select",
            options: ["medium", "large", "icon"],
        },
        title: {control: "text"},
        icon: {control: false},
        fullwidth: {control: "boolean"},
        onClick: {action: "clicked"},
    },
    args: {
        title: "Click Me",
        variant: "primary",
        size: "medium",
        fullwidth: false,
    },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {}

export const WithIcon: Story = {
    args: {
        title: "Add",
        icon: <Plus size={16}/>,
    },
}

export const Variants: Story = {
    render: (args) => (
        <div className="flex flex-col gap-3">
            <Button {...args} variant="primary" title="Primary"/>
            <Button {...args} variant="secondary" title="Secondary"/>
            <Button {...args} variant="tertiary" title="Tertiary"/>
            <Button {...args} variant="outline" title="Outline"/>
            <Button {...args} variant="text" title="Text"/>
        </div>
    ),
}

export const Sizes: Story = {
    render: (args) => (
        <div className="flex items-center gap-4">
            <Button {...args} size="medium" title="Medium"/>
            <Button {...args} size="large" title="Large"/>
            <Button {...args} size="icon" icon={<Plus/>} aria-label="Icon"/>
        </div>
    ),
}

export const FullWidth: Story = {
    args: {
        fullwidth: true,
    },
}
