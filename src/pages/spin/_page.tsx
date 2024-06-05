import React from "react";

import { countUp } from "../../core/utility";
import { MtnButton } from "../../components/button/MtnButton";

const Spin = () => {
  // const [isLoading, setIsLoading] = React.useState<boolean>(false);
  // Usage example
  React.useEffect(() => {
    const countingElement = document.getElementById("counting");
    if (countingElement) {
      countUp(1, 10, 1000, countingElement); // Count from 1 to 10 in 1 second
    }
  }, []);

  return (
    <>
      <MtnButton
        className="w-1/3 py-2 text-white bg-black animate-pulse form-wizard-submit disabled:bg-gray-200 disabled:shadow-none lg:px-20"
        type={"submit"}
        label={"Click to spin..."}
      />
      {/* <Confetti
        drawShape={(ctx) => {
          ctx.beginPath();
          for (let i = 0; i < 22; i++) {
            const angle = 0.35 * i;
            const x = (0.2 + 1.5 * angle) * Math.cos(angle);
            const y = (0.2 + 1.5 * angle) * Math.sin(angle);
            ctx.lineTo(x, y);
          }
          ctx.stroke();
          ctx.closePath();
        }}
      /> */}
      <div id="countings"></div>
    </>
  );
};

export default Spin;
