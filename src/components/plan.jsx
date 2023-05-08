// import { DoneOutlineRoundedIcon } from "@mui/icons-material";
// import { CancelRoundedIcon } from "@mui/icons-material";
import { TiTick } from "react-icons/ti";
import { RxCrossCircled } from "react-icons/rx";
const Plan = (props) => {
  return (
    <div className="table rounded-2xl bg-red-400 text-white p-8">
      <h1 className="pb-3 font-bold">{props.plans}</h1>
      <div className="month">
        <span className="text-3xl py-3">${props.price}</span>/month
      </div>
      <div className="line h-0.5 bg-gray-300 flex m-2"></div>
      <div className="user"></div>
      <ul className="contents">
        <li className="flex items-center">
          <div>
            {" "}
            {props.li1 === "tick" ? (
              <TiTick className="mr-2" />
            ) : (
              <RxCrossCircled className="mr-2" />
            )}
          </div>
          <div className="flex items-center"> {props.user}</div>
        </li>
        <li className="flex items-center">
          {props.li1 === "tick" ? (
            <TiTick className="mr-2" />
          ) : (
            <RxCrossCircled className="mr-2" />
          )}
          <div className="flex items-center">{props.storage}</div>
        </li>
        <li className="flex items-center">
          {props.li1 === "tick" ? (
            <TiTick className="mr-2" />
          ) : (
            <RxCrossCircled className="mr-2" />
          )}
          Unlimited Public Projects
        </li>
        <li className="flex  items-center">
          {props.li1 === "tick" ? (
            <TiTick className="mr-2" />
          ) : (
            <RxCrossCircled className="mr-2" />
          )}
          Community Access
        </li>
        <li
          className={
            props.content4 === "grey"
              ? "text-gray-600 flex items-center"
              : "flex  items-center"
          }
        >
          {props.li5 === "tick" ? (
            <TiTick className="mr-2" />
          ) : (
            <RxCrossCircled className="mr-2" />
          )}
          Unlimited Private Projects
        </li>
        <li
          className={
            props.content4 === "grey"
              ? "text-gray-600 flex  items-center"
              : "flex  items-center"
          }
        >
          {props.li6 === "tick" ? (
            <TiTick className="mr-2" />
          ) : (
            <RxCrossCircled className="mr-2" />
          )}
          Dedicated Phone Support
        </li>
        <li
          className={
            props.content4 === "grey"
              ? "text-gray-600 flex"
              : "flex items-center"
          }
        >
          {props.li7 === "tick" ? (
            <TiTick className="mr-2" />
          ) : (
            <RxCrossCircled className="mr-2" />
          )}
          <div className=""> {props.domain}</div>
        </li>
        <li
          className={
            props.content5 === "grey"
              ? "text-gray-600 flex  items-center"
              : "flex  items-center"
          }
        >
          {props.li8 === "tick" ? (
            <TiTick className="mr-2" />
          ) : (
            <RxCrossCircled className="mr-2" />
          )}
          Monthly Status Reports
        </li>
      </ul>
      <button className="px-10 py-3 mt-3 bg-blue-400 rounded-2xl font-bold">
        Button
      </button>
    </div>
  );
};

export default Plan;
