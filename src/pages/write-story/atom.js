import { atom } from "recoil";

const persistNewStoryTemp =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      isReset ? localStorage.removeItem(key) : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const newStoryTemp = atom({
  key: "newStoryTemp",
  default: {},
  effects: [persistNewStoryTemp("newStoryTemp")],
});
