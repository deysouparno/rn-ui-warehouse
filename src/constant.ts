import { Dimensions } from "react-native";

export const Stories = [
  {
    image: require("../assets/images/image_01.png"),
  },
  {
    image: require("../assets/images/image_02.jpg"),
  },
  {
    image: require("../assets/images/image_03.jpg"),
  },
  {
    image: require("../assets/images/image_04.jpg"),
  },
  {
    image: require("../assets/images/image_02.jpg"),
  },
  {
    image: require("../assets/images/image_03.jpg"),
  },
  {
    image: require("../assets/images/image_04.jpg"),
  },
];

export const BACKGROUND_COLOR = "#2D3045";

export const WINDOW_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Dimensions.get("window").width * 0.8;
export const ITEM_HEIGHT = (ITEM_WIDTH / 3) * 4;
