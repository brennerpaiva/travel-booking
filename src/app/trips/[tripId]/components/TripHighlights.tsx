import React from "react";
import Image from "next/image";

interface TripHighlightsProps {
  highlights: string[];
}

const TripHighlights = ({ highlights }: TripHighlightsProps) => {
  return (
    <div className="flex flex-col p-5">
      <h2 className="font-semibold text-primaryDarker mb-2">Destaques</h2>
      <div className="flex flex-wrap gap-y-3">
        {highlights.map((highlights, index) => (
          <div className="flex items-center gap-2 w-1/2" key={highlights}>
            <Image
              src="/images/check-icon.png"
              width={15}
              height={15}
              alt="check icon"
            />
            <p className="text-xs text-grayPrimary">{highlights}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripHighlights;
