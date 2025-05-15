// src/components/ui/Colors.stories.tsx


export default {
    title: "Design System/Colors",
};

const colorGroups = {
    "Primary": [
        "bg-primary-light",
        "bg-primary-medium",
        "bg-primary",
        "bg-primary-dark",
    ],
    "Secondary": [
        "bg-secondary-medium",
    ],
    "Tertiary": [
        "bg-tertiary-medium",
    ],
    "Neutral": [
        "bg-white",
        "bg-neutral-lightest",
        "bg-neutral-lighter",
        "bg-neutral-light",
        "bg-neutral-medium",
        "bg-neutral-medium-dark",
        "bg-neutral-dark",
        "bg-neutral-dark-alt",
        "bg-neutral-darker",
        "bg-neutral-darkest",
    ],
    "Info": [
        "bg-info-dark",
        "bg-info-medium",
        "bg-info-light-dim",
        "bg-info-lighter",
    ],
    "Warning": [
        "bg-warning-medium",
        "bg-warning-light",
    ],
    "Error": [
        "bg-error-medium",
        "bg-error-light",
    ],
};

const ColorBlock = ({ name }: { name: string }) => {
    return (

    <div className="flex items-center gap-4">
        <div
            className={`w-12 h-12 rounded border ${name}`}
        />
        <code className={`text-sm  text-neutral-darkest dark:text-white`}>{name}</code>
    </div>
)};

export const Colors = () => (
    <div className="p-6 space-y-8 bg-white dark:bg-[#202328]">
        {Object.entries(colorGroups).map(([groupName, colors]) => (

            <div key={groupName}>
                <h3 className="text-lg font-bold text-neutral-darkest dark:text-white mb-4">{groupName}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {colors.map((color) => (
                        <ColorBlock key={color} name={color} />
                    ))}
                </div>
            </div>
        ))}
    </div>
);
