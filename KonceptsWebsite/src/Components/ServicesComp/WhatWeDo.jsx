import React, { useRef, useEffect } from "react";

const WhatWeDo = ({ id, title, details, serviceOffered, activeId, previousId, setActiveId }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActiveId(id); // Set this card as active when it appears in view
                }
            },
            {
                threshold: 0.8, // Adjust threshold to trigger at 60% visibility
            }
        );

        if (cardRef.current) observer.observe(cardRef.current);

        return () => {
            if (cardRef.current) observer.unobserve(cardRef.current);
        };
    }, [id, setActiveId]);

    const heightAdj = (id) => {
        if (id === 5) {
            return "h-auto pb-10";
        }
    };

    return (
        <div
            ref={cardRef}
            className={`sticky ${heightAdj(id)} top-0 headj bg-white transition-all duration-500 ${
                previousId === id ? "blur-sm" : "blur-none"
            }`}
        >
            <div className="container pt-24">
                <div>
                    {/* Content */}
                    <div className="flex items-center gap-3 font-ContentText">
                        <h3 className="text-sm font-bold borderdarkblue rounded-full px-2 py-2 -rotate-12">
                            0{id}
                        </h3>
                        <div className="w-72 h-[2px] bg-darkblue"></div>
                        <h3 className="text-[15px] md:text-3xl">a fresh perspective</h3>
                    </div>
                    <div className="">
                        <h1 className="font-Heading text-3xl md:text-6xl">{title}</h1>
                        {details.map((item, index) => (
                            <p
                                key={index}
                                className="font-ContentText text-[10px] md:text-[18px] py-3 mb-0"
                            >
                                {item}
                            </p>
                        ))}
                        {serviceOffered && serviceOffered.length > 0 && (
                            <div className="font-ContentText">
                                {serviceOffered.map((item, index) => (
                                    <p
                                        key={index}
                                        className={`${
                                            index === 0
                                                ? "font-bold text-[15px] md:text-xl"
                                                : "text-sm md:text-[18px]"
                                        } font-ContentText my-2`}
                                    >
                                        <span className="font-bold">
                                            {index === 0 ? "" : index + ". "}
                                        </span>
                                        {item}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div>{/* Image or other content can go here */}</div>
            </div>
        </div>
    );
};

export default WhatWeDo;
