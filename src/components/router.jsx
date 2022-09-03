import Router, { route } from "preact-router";
import Login from "../pages/login/login";
import Main from "../pages/main/main";
import WriteStory from "../pages/write-story/new-story";
import Username from "../pages/[username]/username";
import Story from "../pages/[username]/[story]/story";

const listAuth = new Map();
listAuth.set("/login", false);
listAuth.set("/register", false);
listAuth.set("/", false);
listAuth.set("/write-story", true);
listAuth.set("/:username", false);
listAuth.set("/:username/:story_id", false);

const RouterHandler = () => {
  const checkAuth = (path) => {
    // const auth = listAuth.get(path.path);
    // console.log(auth);
    // if (auth === undefined) {
    //   return route("/login");
    // }
    // // console.log(path.path);
    // if (auth) return route("/");
  };

  return (
    <Router onChange={checkAuth}>
      <Login path="/login" />
      <Login path="/register" />
      <Main path="/" />
      <WriteStory path="/write-story" />
      <WriteStory path="/write-storya/" />
      <Username path="/:username" />
      <Story path="/:username/:story_id" />
    </Router>
  );
};

export default RouterHandler;
