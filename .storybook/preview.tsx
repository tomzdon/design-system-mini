import type {Preview} from '@storybook/react'
// @ts-ignore
import '/src/index.css';


const preview: Preview = {
    parameters: {
        backgrounds: {
            default: "light",
            values: [
                {name: "light", value: "#ffffff"},
                {name: "dark", value: "#202328"},
            ],
        },
    },
    decorators: [
        (Story) => (
            <div className="bg-white text-neutral-darkest dark:bg-[#202328] dark:text-white p-4">
                <Story / >
            </div>
),
],
};


export default preview;