import type {Meta, StoryObj} from '@storybook/react';
import {TooltipModal} from './tooltipModal';
import {useState} from 'react';

const meta: Meta<typeof TooltipModal> = {
    title: 'Components/TooltipModal',
    component: TooltipModal,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof TooltipModal>;

export const Default: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(true);

        return (
            <>
                <button onClick={() => setIsOpen(true)} className="bg-primary text-neutral-dark px-4 py-2 rounded">
                    Open Modal
                </button>

                <TooltipModal isOpen={isOpen} onCancel={() => setIsOpen(false)}>
                    <h2 className="body-2-bold">Tooltip Modal</h2>
                    <p className="body-2">This is a simple tooltip modal body.</p>
                </TooltipModal>
            </>
        );
    },
};
