import { Sweden, Västernorrland, RadarIcon } from "./static/icons";
import { useEffect, useState } from "react";

function SwedenAnimation(props) {
  const [displayRadarButton, setDisplayRadarButton] = useState(false);

  useEffect(() => {
    if (props.fireAnimation) {
      let timer = () => setTimeout(setDisplayRadarButton, 2550, true);
      let timerId = timer();
      return () => {
        clearTimeout(timerId);
      };
    }
    if (!props.fireAnimation) {
      setDisplayRadarButton(false);
    }
  }, [props.fireAnimation]);

  useEffect(() => {
    if (displayRadarButton) {
      console.log("Show intro overlay.");
      let timer = () => setTimeout(props.setShowIntroOverlay, 500, true);
      let timerId = timer();
      return () => {
        clearTimeout(timerId);
      };
    }
    if (!displayRadarButton) {
      props.setShowIntroOverlay(false);
    }
  }, [displayRadarButton]);

  return (
    <div className="overflow-hidden pt-12 absolute inset-0 flex justify-center items-center">
      <div className="w-48">
        <div className={`relative ${props.fireAnimation ? "animatein" : ""} `}>
          <Sweden
            className={`${
              props.fireAnimation ? "animatein" : ""
            } sweden transform transition-all ease-in-out duration-500 fill-current text-blue-700`}
          />
          <Västernorrland
            className={`${
              props.fireAnimation ? "animatein" : ""
            } norrland fill-current text-blue-700 absolute z-50`}
          />
          <div
            className={`${
              displayRadarButton ? "opacity-100" : "opacity-0"
            } transition-all ease-in-out duration-500 positioncontainer absolute`}
          >
            <div
              className={`radarcontainer bg-blue-500 w-2 h-2 rounded-full bg-opacity-60`}
            >
              <div className="radar absolute w-2 h-2 rounded-full bg-blue-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwedenAnimation;
