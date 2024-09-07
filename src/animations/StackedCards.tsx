import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

type Props = {};

const StackedCards = (props: Props) => {
  const progress = useSharedValue(0);

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      onTouchStart={() => {
        progress.value = withSpring(1);
      }}
      onTouchEnd={() => (progress.value = withSpring(0))}
      onTouchCancel={() => (progress.value = withSpring(0))}
    >
      {Array(4)
        .fill(null)
        .map((_, index) => (
          <Card index={index} progress={progress} />
        ))}
    </View>
  );
};

export default StackedCards;

const Card: FC<{ index: number; progress: SharedValue<number> }> = ({
  index,
  progress,
}) => {
  const rStyle = useAnimatedStyle(() => {
    const translateX = interpolate(progress.value, [0, 1], [0, index * 25]);
    const translateY = interpolate(progress.value, [0, 1], [0, -index * 5]);
    const rotate = interpolate(
      progress.value,
      [0, 1],
      [-index * 10, index * 10]
    );
    return {
      transform: [
        { translateX: translateX },
        { translateY: translateY },
        {
          rotate: `${rotate}deg`,
        },
      ],
    };
  });

  return <Animated.View style={[styles.card, { zIndex: -index }, rStyle]} />;
};

const styles = StyleSheet.create({
  card: {
    height: 180,
    aspectRatio: 3 / 4,
    backgroundColor: "white",
    borderRadius: 10,
    borderCurve: "continuous",
    elevation: 5,
    borderWidth: 1,
    borderColor: "#b9b9b9",
    position: "absolute",
  },
});
