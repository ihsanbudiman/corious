import { FiBookmark, FiMoreHorizontal, FiThumbsUp } from "react-icons/fi";

const Story = (props) => {
  return (
    <div className="story">
      <div className="story-head">
        <img className="story-head-profile-image" src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
        <span className="story-head-profile-name">
          Moh Ihsan Budiman
          <span className="story-head-post-date">, 11 Agustus 2022</span>
        </span>
      </div>

      <div className="story-body">
        <div className="story-body-text">
          <span className="story-body-text-title">Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</span>
          <p className="story-body-text-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem illo qui ipsum impedit inventore in deleniti? Dolorem, totam est explicabo atque molestias dolores minima pariatur amet asperiores repellat, enim unde! Veritatis dolorem labore inventore voluptates quisquam consequuntur vel beatae ullam, reiciendis ea aliquid sunt id cumque soluta voluptate veniam deleniti ut enim. Quam illum nihil eius quasi dolores enim officia! </p>
        </div>
        <div className="story-body-image">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
        </div>
      </div>
      <div className="story-footer w-100">
        <div className="story-footer-info">
          <div className="story-footer-info-category">
            <span className="story-footer-info-category-badge">Category</span>
            <span className="story-footer-info-category-badge">Category</span>
            <span className="story-footer-info-category-badge">Category</span>
          </div>
        </div>
        <div className="story-footer-action">
          <div className="story-footer-action-btn">
            {/* fill thunbsup, purple */}
            <FiThumbsUp />
          </div>
          <div className="story-footer-action-btn">
            <FiBookmark />
          </div>
          <div className="story-footer-action-btn">
            <FiMoreHorizontal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
