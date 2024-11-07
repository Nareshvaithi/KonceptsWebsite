import React, { useState, useEffect, useRef } from 'react';

const Counter = () => {
  const [WorkResult, SetWorkResult] = useState(0);
  const [AverageCustomer, setAverageCustomer] = useState(0); // Fixed typo
  const [ProjectComplete, setProjectComplete] = useState(0);
  const [Experience, setExperience] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [hasCounted, setHasCounted] = useState(false); // New state to track if counting has started
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasCounted) { // Only start counting if it hasn't started before
          SetWorkResult(0);
          setAverageCustomer(0);
          setProjectComplete(0);
          setExperience(0); // Reset count to 0 when section enters viewport for the first time
          setIsCounting(true); // Start counting
          setHasCounted(true); // Mark that counting has started
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasCounted]);

  useEffect(() => {
    let timer;
    if (isCounting && WorkResult < 100) {
      timer = setInterval(() => {
        SetWorkResult((prevCount) => {
          if (prevCount < 100) return prevCount + 1;
          clearInterval(timer); // Clear interval outside of state update
          return prevCount;
        });
      }, 10); // Adjust time interval as needed
    }
    return () => clearInterval(timer);
  }, [isCounting, WorkResult]);

  useEffect(() => {
    let timer;
    if (isCounting && AverageCustomer < 5) { // Fixed variable name here
      timer = setInterval(() => {
        setAverageCustomer((prevCount) => {
          if (prevCount < 5) return prevCount + 1;
          clearInterval(timer); // Clear interval outside of state update
          return prevCount;
        });
      }, 200); // Adjust time interval as needed
    }
    return () => clearInterval(timer);
  }, [isCounting, AverageCustomer]);

  useEffect(() => {
    let timer;
    if (isCounting && ProjectComplete < 190) {
      timer = setInterval(() => {
        setProjectComplete((prevCount) => {
          if (prevCount < 190) return prevCount + 1;
          clearInterval(timer); // Clear interval outside of state update
          return prevCount;
        });
      }, 5); // Adjust time interval as needed
    }
    return () => clearInterval(timer);
  }, [isCounting, ProjectComplete]);

  useEffect(() => {
    let timer;
    if (isCounting && Experience < 10) {
      timer = setInterval(() => {
        setExperience((prevCount) => {
          if (prevCount < 10) return prevCount + 1;
          clearInterval(timer); // Clear interval outside of state update
          return prevCount;
        });
      }, 100); // Adjust time interval as needed
    }
    return () => clearInterval(timer);
  }, [isCounting, Experience]);

  return (
    <div ref={sectionRef}>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
        <div className='w-full border border-gray-200 aboutExpCardContainer'>
          <h1 className="text-5xl font-semibold text-gray-800">{ProjectComplete}+</h1>
          <p className="text-gray-600 mt-3 w-40">successfully completed projects in UX and UI</p>
        </div>
        <div className='w-full border border-gray-200 aboutExpCardContainer'>
          <h1 className="text-5xl font-semibold text-gray-800">{Experience}+</h1>
          <p className="text-gray-600 mt-3 w-40">years of experience in digital design</p>
        </div>
        <div className='w-full border border-gray-200 aboutExpCardContainer'>
          <h1 className="text-5xl font-semibold text-gray-800">{AverageCustomer}.0 <span className='text-2xl'>of 5.0</span></h1>
          <p className="text-gray-600 mt-3 w-40">average rate from our customers</p>
        </div>
        <div className='w-full border border-gray-200 aboutExpCardContainer'>
          <h1 className="text-5xl font-semibold text-gray-800">{WorkResult}%</h1>
          <p className="text-gray-600 mt-3 w-40">work results delivery in the past</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
