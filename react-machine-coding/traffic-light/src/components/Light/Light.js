import cx from "classnames";

const Light = ({ color }) => {
  return <div className={cx("light")} style={{ backgroundColor: color }}></div>;
};

export default Light;
