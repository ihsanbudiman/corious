import Router from "preact-router";
import Login from "../pages/login/login";
import Main from "../pages/main/main";
import WriteStory from "../pages/write-story/new-story";
import Username from "../pages/[username]/username";
import Story from "../pages/[username]/[story]/story";

const RouterHandler = () => {
  return (
    <Router>
      <Login path="/login" />
      <Login path="/register" />
      <Main path="/" />
      <WriteStory path="/write-story" />
      <Username path="/:username" />
      <Story path="/:username/:story_id" />
    </Router>
  );
};

export default RouterHandler;
