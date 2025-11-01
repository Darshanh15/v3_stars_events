// import React, { useState, useRef, useEffect } from "react";
// import "./imageCarousel.scss";

// export default function ImageCarousel({ images = [], height = 160 }) {
//   const [index, setIndex] = useState(0);
//   const rootRef = useRef(null);
//   const startX = useRef(0);
//   const deltaX = useRef(0);

//   useEffect(() => {
//     // clamp index
//     if (index < 0) setIndex(images.length - 1);
//     if (index >= images.length) setIndex(0);
//   }, [index, images.length]);

//   // touch handlers for swipe
//   function onTouchStart(e) {
//     startX.current = e.touches[0].clientX;
//     deltaX.current = 0;
//   }
//   function onTouchMove(e) {
//     deltaX.current = e.touches[0].clientX - startX.current;
//   }
//   function onTouchEnd() {
//     if (Math.abs(deltaX.current) < 40) return; // small move
//     if (deltaX.current < 0) setIndex((i) => i + 1);
//     else setIndex((i) => i - 1);
//     deltaX.current = 0;
//   }

//   if (!images || images.length === 0) {
//     return (
//       <div className="ic-root" style={{ height }}>
//         <div className="ic-empty">No image</div>
//       </div>
//     );
//   }

//   return (
//     <div
//       className="ic-root"
//       style={{ height }}
//       ref={rootRef}
//       onTouchStart={onTouchStart}
//       onTouchMove={onTouchMove}
//       onTouchEnd={onTouchEnd}
//     >
//       <div
//         className="ic-track"
//         style={{ transform: `translateX(-${index * 100}%)`, width: `${images.length * 100}%` }}
//         aria-live="polite"
//       >
//         {images.map((src, i) => (
//           <div className="ic-slide" key={i} style={{ width: `${100 / images.length}%` }}>
//             <img src={src} alt={`slide ${i + 1}`} loading="lazy" />
//           </div>
//         ))}
//       </div>

//       {/* arrows */}
//       {images.length > 1 && (
//         <>
//           <button
//             className="ic-arrow ic-arrow--left"
//             aria-label="Previous image"
//             onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
//           >
//             ‹
//           </button>
//           <button
//             className="ic-arrow ic-arrow--right"
//             aria-label="Next image"
//             onClick={() => setIndex((i) => (i + 1) % images.length)}
//           >
//             ›
//           </button>

//           {/* dots */}
//           <div className="ic-dots" role="tablist" aria-label="Image slides">
//             {images.map((_, i) => (
//               <button
//                 key={i}
//                 className={`ic-dot ${i === index ? "active" : ""}`}
//                 aria-label={`Go to slide ${i + 1}`}
//                 onClick={() => setIndex(i)}
//                 role="tab"
//                 aria-selected={i === index}
//               />
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }


// ImageCarousel.jsx
import React, { useState, useRef, useEffect, useCallback } from "react";
import "./imageCarousel.scss";

/**
 * ImageCarousel
 * props:
 * - images: array of image URLs (required)
 * - height: number (px) or string (e.g. "160px")
 * - autoplay: boolean (default: false)
 * - autoplayDelay: number in ms (default: 4000)
 */
export function ImageCarousel({
  images = [],
  height = 160,
  autoplay = false,
  autoplayDelay = 4000,
}) {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);
  const deltaX = useRef(0);
  const autoplayRef = useRef(null);
  const hovered = useRef(false);
  const mounted = useRef(true);

  // ensure index always in range when images change
  useEffect(() => {
    if (!images || images.length === 0) {
      setIndex(0);
      return;
    }
    if (index >= images.length) setIndex(0);
  }, [images, index]);

  // autoplay logic
  const clearAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    mounted.current = true;
    clearAutoplay();

    if (autoplay && images && images.length > 1) {
      autoplayRef.current = setInterval(() => {
        if (hovered.current) return;
        if (!mounted.current) return;
        setIndex((i) => (i + 1) % images.length);
      }, Math.max(1000, parseInt(autoplayDelay, 10) || 4000));
    }

    return () => {
      mounted.current = false;
      clearAutoplay();
    };
  }, [autoplay, autoplayDelay, images, clearAutoplay]);

  // touch handlers for swipe
  function onTouchStart(e) {
    startX.current = e.touches[0].clientX;
    deltaX.current = 0;
    hovered.current = true; // pause while interacting
  }
  function onTouchMove(e) {
    deltaX.current = e.touches[0].clientX - startX.current;
  }
  function onTouchEnd() {
    hovered.current = false;
    if (Math.abs(deltaX.current) < 40) return;
    if (deltaX.current < 0) setIndex((i) => (i + 1) % images.length);
    else setIndex((i) => (i - 1 + images.length) % images.length);
    deltaX.current = 0;
  }

  if (!images || images.length === 0) {
    return (
      <div className="ic-root ic-empty-root" style={{ height }}>
        <div className="ic-empty">No image</div>
      </div>
    );
  }

  return (
    <div
      className="ic-root"
      style={{ height }}
      onMouseEnter={() => (hovered.current = true)}
      onMouseLeave={() => (hovered.current = false)}
      onFocus={() => (hovered.current = true)}
      onBlur={() => (hovered.current = false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="ic-track"
        style={{
          transform: `translateX(-${index * (100 / images.length)}%)`,
          width: `${images.length * 100}%`,
        }}
        aria-live="polite"
      >
        {images.map((src, i) => (
          <div
            className="ic-slide"
            key={i}
            style={{ width: `${100 / images.length}%` }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${images.length}`}
          >
            <img src={src} alt={`slide ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      {/* arrows */}
      {images.length > 1 && (
        <>
          <button
            className="ic-arrow ic-arrow--left"
            aria-label="Previous image"
            onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
          >
            ‹
          </button>

          <button
            className="ic-arrow ic-arrow--right"
            aria-label="Next image"
            onClick={() => setIndex((i) => (i + 1) % images.length)}
          >
            ›
          </button>

          {/* dots */}
          <div className="ic-dots" role="tablist" aria-label="Image slides">
            {images.map((_, i) => (
              <button
                key={i}
                className={`ic-dot ${i === index ? "active" : ""}`}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                role="tab"
                aria-selected={i === index}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ImageCarousel;
