import PeopleToFollowItem from "./people-to-follow-item";

const PeopleToFollow = (props) => {
  return (
    <div className="right-sidebar-to-follow">
      <div className="right-sidebar-to-follow-title">Peple to follow</div>
      <div className="right-sidebar-to-follow-content">
        <PeopleToFollowItem />
        <PeopleToFollowItem />
        <PeopleToFollowItem />
      </div>
    </div>
  );
};

export default PeopleToFollow;
