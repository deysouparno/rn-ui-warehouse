import { StyleSheet, View } from "react-native";
import React, { FC } from "react";
import { ITEM_HEIGHT, ITEM_WIDTH, WINDOW_WIDTH } from "../constant";
import { Image, ImageSource } from "expo-image";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = {
  imageSource: ImageSource;
  index: number;
  scrollOffset: SharedValue<number>;
};

const StoryListItem: FC<Props> = ({ imageSource, index, scrollOffset }) => {
  const rContainerStyle = useAnimatedStyle(() => {
    const activeIndex = scrollOffset.value / ITEM_WIDTH;
    const padding = (WINDOW_WIDTH - ITEM_WIDTH) / 4;
    const translateX = interpolate(
      activeIndex,
      [index - 2, index - 1, index, index + 1],
      [90, 60, padding, -ITEM_WIDTH - padding * 2],
      Extrapolation.CLAMP
    );

    const scale = interpolate(
      activeIndex,
      [index - 2, index - 1, index, index + 1],
      [0.8, 0.9, 1, 1],
      Extrapolation.CLAMP
    );
    return {
      zIndex: -index,
      transform: [
        {
          translateX: translateX + scrollOffset.value,
        },
        { scale },
      ],
    };
  });
  return (
    <Animated.View
      style={[
        {
          height: ITEM_HEIGHT,
          width: ITEM_WIDTH,
          position: "absolute",
        },
        rContainerStyle,
      ]}
    >
      <Image
        source={imageSource}
        style={{
          height: ITEM_HEIGHT,
          width: ITEM_WIDTH,
          borderRadius: 25,
        }}
      />
    </Animated.View>
  );
};

export default StoryListItem;

const styles = StyleSheet.create({});
