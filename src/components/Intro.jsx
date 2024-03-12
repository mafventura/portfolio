import React from "react";
import Typed from "typed.js";

export default function Intro() {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["web ^1000", "HTML ^1000", "CSS ^1000", "JavaScript ^1000", "React.js ^1000", "Node.js ^1000", "Python ^1000", "Django ^1000"],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
            loopCount: Infinity,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <div class="flex justify-center items-baseline m-12 p-12">
            <h1 class="font-ubuntu lg:text-9xl md:text-7xl text-5xl">Maf</h1>
            <h1 class="font-ubuntu lg:text-9xl md:text-7xl text-orange text-5xl">.</h1>
            <span ref={el} class="font-ubuntu text-2xl md:text-4xl lg:text-6xl"/>
        </div>
    );
}
