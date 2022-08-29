import { FiClock } from "react-icons/fi";

const RightSidebarItem = (props) => {
  return (
    <div className="right-sidebar-content-item mb-2">
      <div className="right-sidebar-content-item-author">
        <img className="right-sidebar-content-item-author-img" src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
        <span className="right-sidebar-content-item-author-name">Moh Ihsan Budiman</span>
      </div>
      <div className="right-sidebar-content-item-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</div>
      <div className="right-sidebar-content-item-date">
        <FiClock />
        &nbsp;11 Agustus 2022
      </div>
    </div>
  );
};

export default RightSidebarItem;
