import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  useAnimatedRef,
  useScrollViewOffset,
} from "react-native-reanimated";
import { ITEM_HEIGHT, ITEM_WIDTH, Stories, WINDOW_WIDTH } from "../constant";
import StoryListItem from "../components/StoryListItem";

type Props = {};

const ListPadding = WINDOW_WIDTH - ITEM_WIDTH;

const StackCardCarousal = (props: Props) => {
  const animatedRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(animatedRef);
  return (
    <View style={{ height: ITEM_HEIGHT, width: "100%" }}>
      <Animated.ScrollView
        snapToInterval={ITEM_WIDTH}
        decelerationRate={"fast"}
        disableIntervalMomentum
        ref={animatedRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={{
          width: ITEM_WIDTH * Stories.length + ListPadding,
        }}
      >
        {Stories.map((story, index) => {
          return (
            <StoryListItem
              key={index}
              index={index}
              imageSource={story.image}
              scrollOffset={scrollOffset}
            />
          );
        })}
      </Animated.ScrollView>
    </View>
  );
};

export default StackCardCarousal;

const styles = StyleSheet.create({});
