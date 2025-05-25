import '../index.css';

export default {
  title: 'Design System/Typography',
};

export const Typography = () => (
  <div className=" ">
    <div className="space-y-4">
      <h1 className="font-normal">Typography</h1>
      <p className="lead mb-4 text-muted-foreground">
        Establishes the font styles used to ensure clarity, hierarchy, and consistency across all user interfaces.
      </p>
    </div>

    <div className="space-y-4 mb-4">
      <h1 className="heading-1">This is heading 1</h1>
      <h2>This is heading 2</h2>
      <h3>This is heading 3</h3>
      <h4>This is heading 4</h4>
      <h5>This is heading 5</h5>
      <p>This is a text</p>
    </div>

    <blockquote className="mb-4">
      This is blockquote
    </blockquote>

    <ul className="list-disc pl-5 space-y-1 mb-4">
      <li>This is a list</li>
      <li>This is a list</li>
      <li>This is a list</li>
    </ul>

    <div className="space-y-4 mb-4">
      <p className="lead">This is a text (.lead)</p>
      <p className="large">This is a text (.large)</p>
      <p className="small">This is a text (small)</p>

      <p className="small text-muted-foreground">This is a text (.small muted )</p>


    </div>

    <table className="table-auto border-collapse border border-neutral-300">
      <thead>
      <tr>
        <th className="border border-neutral-300 px-4 py-2 ">This is a text</th>
        <th className="border border-neutral-300 px-4 py-2 ">This is a text</th>
      </tr>
      </thead>
      <tbody>
      {Array.from({ length: 4 }).map((_, i) => (
        <tr key={i}>
          <td className="border border-neutral-300 px-4 py-2">This is a text</td>
          <td className="border border-neutral-300 px-4 py-2">This is a text</td>
        </tr>
      ))}
      </tbody>
    </table>


    <div className="space-y-6 mt-6">
      <h1>
        The Framework Freeze <br /> Chronicles
      </h1>
      <p>
        Once upon a time, in a continent brimming with ideas, developers across Africa were building the future —
        shipping products, solving local problems, and launching businesses. But something wasn’t quite right.
      </p>
      <p>
        Despite all the talent, teams everywhere were struggling to move fast:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Setting up environments took days.</li>
        <li>Reusing components meant rewriting them from scratch.</li>
        <li>Scaling across markets felt like reinventing the wheel.</li>
      </ul>
      <p>
        Developers were frustrated. Designers were blocked. The digital economy slowed.
      </p>
    </div>

    <div className="space-y-4">
      <h2 className="border-t border-neutral-200 pt-6">
        Enter PawaTech
      </h2>
      <p>
        While others patched things together, a group of builders decided to rethink the foundation. They asked:
      </p>
      <blockquote className="border-l-4 border-neutral-300 pl-4 ">
        “What if we gave teams the right blocks to build from day one?”
      </blockquote>
    </div>

    <div className="space-y-4 mt-4">
      <h3>The Blocks Begin to Move</h3>
      <p>PawaTech started releasing tools:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Shared UI kits and design tokens</li>
        <li>Localized dev infra</li>
        <li>Smart component libraries</li>
        <li>Platform-ready templates for instant product launches</li>
      </ul>
      <p>
        Soon, builders across the continent were shipping faster, designing with consistency, and scaling confidently.
      </p>
    </div>

    <div className="space-y-4">
      <h4 className="">The Unfreeze</h4>
      <p>As more teams adopted PawaTech’s tools, something shifted:</p>

      <table className="table-auto border-collapse border border-neutral-300 w-full max-w-3xl text-left">
        <thead>
        <tr>
          <th className="border border-neutral-300 px-4 py-2 ">Product Stack</th>
          <th className="border border-neutral-300 px-4 py-2 ">Team Speed</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td className="border border-neutral-300 px-4 py-2">Scattered tools</td>
          <td className="border border-neutral-300 px-4 py-2">Slow</td>
        </tr>
        <tr>
          <td className="border border-neutral-300 px-4 py-2">Integrated blocks</td>
          <td className="border border-neutral-300 px-4 py-2">Fast</td>
        </tr>
        <tr>
          <td className="border border-neutral-300 px-4 py-2">Pawa-powered</td>
          <td className="border border-neutral-300 px-4 py-2">Unstoppable</td>
        </tr>
        </tbody>
      </table>

      <p>
        Now, building across Africa isn’t about surviving the chaos — it’s about thriving with structure.
      </p>
      <p>
        PawaTech didn’t just unfreeze innovation — it unlocked momentum.
      </p>

      <p className=" mt-4">
        The moral of the story: <br />
        <span className="font-bold text-black dark:text-white">
          Give teams power, not friction — and they’ll build the future.
        </span>
      </p>
    </div>

  </div>
);
