import { FiFileText } from "react-icons/fi";

const ButtonSide = (props) => {
  return (
    <div className="sidebar mt-2">
      <div className={`btn-side d-flex align-items-center`} style={{ textAlign: `left` }}>
        <div className="mb-1 mr-1 icon-side">
          <FiFileText />
        </div>
        <span>{props.text}</span>
      </div>
    </div>
  );
};

export default ButtonSide;
