import { Sweden, Västernorrland, RadarIcon } from "./static/icons";
import { CSSTransition } from "react-transition-group";

/*
function SwedenAnimation(props) {
  const transitionStyles = {
    entering: "opacity-0",
    entered: "scale-150",
    exiting: "opacity-0",
    exited: "",
  };
  return (
    <div className="sweden overflow-hidden absolute inset-0 flex justify-center items-center">
      <div className="w-48">
        <CSSTransition
          classNames="sweden"
          in={props.fireAnimation}
          timeout={{
            appear: 0,
            enter: 0,
            exit: 500,
          }}
          unmountOnExit={true}
          appear
        >
          {(state) => (
            <Sweden
              state={state}
              className={`transform transition-all ease-in-out duration-500 fill-current text-blue-500 ${transitionStyles[state]}`}
            />
          )}
        </CSSTransition>
      </div>
    </div>
  );
}
*/

/*
function SwedenAnimation(props) {
  return (
    <div className="overflow-hidden absolute inset-0 flex justify-center items-center">
      <div className="w-48">
        <CSSTransition
          classNames="sweden"
          in={props.fireAnimation}
          timeout={{
            appear: 0,
            enter: 0,
            exit: 500,
          }}
          unmountOnExit={true}
        >
          <Sweden
            className={`transform transition-all ease-in-out duration-500 fill-current text-blue-500`}
          />
        </CSSTransition>
      </div>
    </div>
  );
}
*/

function SwedenAnimation(props) {
  return (
    <div className="overflow-hidden pt-12 absolute inset-0 flex justify-center items-center">
      <div className="w-48">
        <div
          className={`relative ${
            props.fireAnimation ? "animatein" : "animateout"
          } `}
        >
          <Sweden
            className={`${
              props.fireAnimation ? "animatein" : "animateout"
            } sweden transform transition-all ease-in-out duration-500 fill-current text-blue-700`}
          />
          <Västernorrland
            className={`${
              props.fireAnimation ? "animatein" : "animateout"
            } norrland fill-current text-blue-700 absolute z-50`}
          />
          <div className="radarcontainer bg-blue-500 w-2 h-2 rounded-full bg-opacity-60 absolute">
            <RadarIcon className="radar absolute fill-current w-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwedenAnimation;
