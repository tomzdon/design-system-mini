import '../../index.css';
export default {
    title: "Design System/Typography",
};

export const Typography = () => (
    <div className="space-y-6 p-6 bg-white text-neutral-darkest dark:bg-[#202328] dark:text-white">
        <div>
            <div className="body-1">.body-1 – 16px regular</div>
            <div className="body-1-medium">.body-1-medium – 16px medium</div>
            <div className="body-1-bold">.body-1-bold – 16px bold</div>
        </div>

        <div>
            <div className="body-2">.body-2 – 14px regular</div>
            <div className="body-2-medium">.body-2-medium – 14px medium</div>
            <div className="body-2-bold">.body-2-bold – 14px bold</div>
            <div className="body-2-medium-uppercase">.body-2-medium-uppercase</div>
            <div className="body-2-bold-uppercase">.body-2-bold-uppercase</div>
            <div className="body-2-italic">.body-2-italic</div>
        </div>

        <div>
            <div className="body-3">.body-3 – 12px regular</div>
            <div className="body-3-medium">.body-3-medium – 12px medium</div>
            <div className="body-3-bold">.body-3-bold – 12px bold</div>
        </div>

        <div>
            <div className="body-4">.body-4 – 10px regular</div>
            <div className="body-4-medium">.body-4-medium – 10px medium</div>
            <div className="body-4-bold">.body-4-bold – 10px bold</div>
        </div>
    </div>
);
