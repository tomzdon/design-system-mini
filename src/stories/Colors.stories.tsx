export default {
  title: 'Design System/Colors',
};

const colorGroups = {
  Brand: [
    'bg-primary-50',
    'bg-primary-100',
    'bg-primary-200',
    'bg-primary-300',
    'bg-primary-400',
    'bg-primary-500',
    'bg-primary-600',
    'bg-primary-700',
    'bg-primary-800',
    'bg-primary-900',
  ],
  Neutral: [
    'bg-neutral-50',
    'bg-neutral-100',
    'bg-neutral-200',
    'bg-neutral-300',
    'bg-neutral-400',
    'bg-neutral-500',
    'bg-neutral-600',
    'bg-neutral-700',
    'bg-neutral-800',
    'bg-neutral-900',
  ],
  Orange: [
    'bg-orange-50',
    'bg-orange-100',
    'bg-orange-200',
    'bg-orange-300',
    'bg-orange-400',
    'bg-orange-500',
    'bg-orange-600',
    'bg-orange-700',
    'bg-orange-800',
    'bg-orange-900',
  ],
  Purple: [
    'bg-purple-50',
    'bg-purple-100',
    'bg-purple-200',
    'bg-purple-300',
    'bg-purple-400',
    'bg-purple-500',
    'bg-purple-600',
    'bg-purple-700',
    'bg-purple-800',
    'bg-purple-900',
  ],
  Teal: [
    'bg-teal-50',
    'bg-teal-100',
    'bg-teal-200',
    'bg-teal-300',
    'bg-teal-400',
    'bg-teal-500',
    'bg-teal-600',
    'bg-teal-700',
    'bg-teal-800',
    'bg-teal-900',
  ],
  Yellow: [
    'bg-yellow-50',
    'bg-yellow-100',
    'bg-yellow-200',
    'bg-yellow-300',
    'bg-yellow-400',
    'bg-yellow-500',
    'bg-yellow-600',
    'bg-yellow-700',
    'bg-yellow-800',
    'bg-yellow-900',
  ],
  Red: [
    'bg-red-50',
    'bg-red-100',
    'bg-red-200',
    'bg-red-300',
    'bg-red-400',
    'bg-red-500',
    'bg-red-600',
    'bg-red-700',
    'bg-red-800',
    'bg-red-900',
  ],
};

const ColorBlock = ({ name }: { name: string }) => {
  const shade = name.split('-').pop();
  return (
    <div className="flex flex-col items-center gap-1">
      <div className={`w-12 h-12 rounded border ${name}`} />
      <code className="text-xs text-neutral-darkest dark:text-white">{shade}</code>
    </div>
  );
};

export const Colors = () => (
  <div className="p-8 space-y-16 bg-white dark:bg-[#202328]">
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-neutral-darkest dark:text-white">Colors</h2>
      <p className="text-base text-neutral-500 dark:text-neutral-300 max-w-3xl">
        Defines the brand's core color palette, used to create consistency, hierarchy, and accessible experiences across
        all products.
      </p>
    </div>

    {Object.entries(colorGroups).map(([groupName, colors]) => (
      <div key={groupName} className="space-y-4">
        <h3 className="text-lg font-bold text-neutral-darkest dark:text-white">{groupName}</h3>
        <div className="grid grid-cols-10 gap-x-4 gap-y-8">
          {colors.map((color) => (
            <ColorBlock key={color} name={color} />
          ))}
        </div>
      </div>
    ))}
  </div>
);
