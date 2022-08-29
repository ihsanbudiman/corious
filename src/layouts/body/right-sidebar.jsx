import PeopleToFollow from "../../components/people-to-follow";
import RightSidebarItem from "../../components/right-sidebar-item";

const RightSidebar = () => {
  return (
    <>
      <div className="right-sidebar-title">You might interested</div>
      <div className="right-sidebar-content">
        <RightSidebarItem />
        <RightSidebarItem />
        <RightSidebarItem />
      </div>
      <div className="right-sidebar-topics">
        <div className="right-sidebar-topics-title">Recommended Topics</div>
        <div className="right-sidebar-topics-content">
          <span className="right-sidebar-topics-content-item">Programming</span>
          <span className="right-sidebar-topics-content-item">Golang</span>
          <span className="right-sidebar-topics-content-item">Golang</span>
          <span className="right-sidebar-topics-content-item">Golang</span>
          <span className="right-sidebar-topics-content-item">Golang</span>
        </div>
      </div>
      <PeopleToFollow />
    </>
  );
};

export default RightSidebar;
