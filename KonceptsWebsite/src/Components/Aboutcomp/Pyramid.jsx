import React, { useEffect, useRef } from 'react';

const PyramidCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const drawOuterTriangle = (progress) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const baseWidth = 400;
      const height = 300;
      const x = canvas.width / 2;
      const y = canvas.height - 50 + 30; // Move the base down by 30px

      // Add the text to the top left corner
      ctx.font = '20px Arial';
      ctx.fillStyle = 'black';
      // Draw the outer triangle progressively
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - baseWidth / 2 * progress, y);
      ctx.lineTo(x + baseWidth / 2 * progress, y);
      ctx.closePath();
      ctx.stroke();

      // Draw complete outer triangle once progress reaches 1
      if (progress >= 1) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - baseWidth / 2, y);
        ctx.lineTo(x, y - height);
        ctx.lineTo(x + baseWidth / 2, y);
        ctx.closePath();
        ctx.stroke();
        drawInnerLines();
      } else {
        animationFrameId = requestAnimationFrame(() => drawOuterTriangle(progress + 0.03)); // Speed up animation
      }
    };

    const drawInnerLines = () => {
      const baseWidth = 400;
      const height = 400;
      const x = canvas.width / 2;
      const y = canvas.height - 50 + 30; // Move the base down by 30px
      const labels = ['Testing', 'Validation', 'Implementation', 'Structuring', 'Research'].reverse();
      const lines = 5;
      const lineHeight = height / lines;

      const drawLine = (i, progress) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Redraw the outer triangle
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - baseWidth / 2, y);
        ctx.lineTo(x, y - height);
        ctx.lineTo(x + baseWidth / 2, y);
        ctx.closePath();
        ctx.stroke();

        // Draw previous lines
        for (let j = 1; j < i; j++) {
          let yPos = y - lineHeight * j;
          let xStart = x - (baseWidth / 2) * (1 - j / lines);
          let xEnd = x + (baseWidth / 2) * (1 - j / lines);

          if (j === 3) {
            xStart = x - baseWidth;
            xEnd = x + baseWidth ;
          }

          ctx.beginPath();
          ctx.moveTo(xStart, yPos);
          ctx.lineTo(xEnd, yPos);
          ctx.stroke();

          const gapAdjustment = j === 5 ? 25 : 0;
          ctx.fillStyle = 'black';
          ctx.font = '16px Arial';
          ctx.fillText(labels[j - 1], x - ctx.measureText(labels[j - 1]).width / 2, yPos + lineHeight / 2 + gapAdjustment);
        }

        // Draw current line
        if (i <= lines) {
          let yPos = y - lineHeight * i;
          let xStart = x - (baseWidth / 2) * (1 - i / lines) * progress;
          let xEnd = x + (baseWidth / 2) * (1 - i / lines) * progress;


          ctx.beginPath();
          ctx.moveTo(xStart, yPos);
          ctx.lineTo(xEnd, yPos);
          ctx.stroke();

          const gapAdjustment = i === 5 ? 25 : 0;
          ctx.fillStyle = 'black';
          ctx.font = '16px Arial';
          ctx.fillText(labels[i - 1], x - ctx.measureText(labels[i - 1]).width / 2, yPos + lineHeight / 2 + gapAdjustment);

          if (progress < 1) {
            animationFrameId = requestAnimationFrame(() => drawLine(i, progress + 0.1)); // Speed up horizontal lines
          } else if (i < lines) {
            setTimeout(() => drawLine(i + 1, 0), 400); // Adjust delay for each line
          }
        }
      };

      drawLine(1, 0);
    };

    const startAnimation = () => {
      drawOuterTriangle(0);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(canvas);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
 
  return (
    <div className='relative w-full md:w-1/2'>
      <canvas ref={canvasRef} width={500} height={400}/>
        <h1 className='absolute text-sm left-0 top-32 w-32'>High Value Design Process Here</h1>
        <h1 className='absolute text-sm right-0 top-32 w-32'>High Value Design Process Here</h1>
        <h1 className='absolute text-sm left-0 bottom-40 w-32'>High Value Design Process Here</h1>
        <h1 className='absolute text-sm right-0 bottom-40 w-32'>High Value Design Process Here</h1>
    </div>
  );
};

export default PyramidCanvas;
