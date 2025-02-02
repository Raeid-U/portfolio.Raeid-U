"use client";
import { useState, useEffect } from "react";

export default function Reimagined() {
  const fullText = [
    [
      { char: "p", highlight: false },
      { char: "r", highlight: true },
      { char: "o", highlight: false },
      { char: "g", highlight: false },
      { char: "r", highlight: false },
      { char: "a", highlight: true },
      { char: "m", highlight: false },
      { char: "m", highlight: false },
      { char: "i", highlight: false },
      { char: "n", highlight: false },
      { char: "g", highlight: false },
    ],
    [
      { char: "r", highlight: false },
      { char: "e", highlight: true },
      { char: "-", highlight: false },
      { char: "i", highlight: false },
      { char: "m", highlight: false },
      { char: "a", highlight: false },
      { char: "g", highlight: false },
      { char: "i", highlight: true },
      { char: "n", highlight: false },
      { char: "e", highlight: false },
      { char: "d", highlight: true },
    ],
  ];

  const [typedText, setTypedText] = useState<
    { char: string; highlight: boolean }[][]
  >([[], []]);
  const [] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!deleting) {
      if (typedText[0].length < fullText[0].length) {
        timeout = setTimeout(() => {
          setTypedText([
            [...typedText[0], fullText[0][typedText[0].length]],
            typedText[1],
          ]);
        }, 100);
      } else if (typedText[1].length < fullText[1].length) {
        timeout = setTimeout(() => {
          setTypedText([
            typedText[0],
            [...typedText[1], fullText[1][typedText[1].length]],
          ]);
        }, 100);
      } else {
        timeout = setTimeout(() => setDeleting(true), 5000);
      }
    } else {
      if (typedText[1].length > 0) {
        timeout = setTimeout(() => {
          setTypedText([typedText[0], typedText[1].slice(0, -1)]);
        }, 50);
      } else if (typedText[0].length > 0) {
        timeout = setTimeout(() => {
          setTypedText([typedText[0].slice(0, -1), typedText[1]]);
        }, 50);
      } else {
        setDeleting(false);
      }
    }

    return () => clearTimeout(timeout);
  }, [typedText, deleting]);

  return (
    <div>
      {typedText.map((line, lineIndex) => (
        <h2 key={lineIndex} className="text-xl md:text-2xl font-jetbrains">
          {line.map((letter, letterIndex) => (
            <span
              key={letterIndex}
              className={letter.highlight ? "text-highlight" : "text-offwhite"}
            >
              {letter.char}
            </span>
          ))}
        </h2>
      ))}
    </div>
  );
}
