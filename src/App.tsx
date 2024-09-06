import { StyleSheet, View } from "react-native";
import React from "react";
import {
  BACKGROUND_COLOR,
  ITEM_HEIGHT,
  ITEM_WIDTH,
  Stories,
  WINDOW_WIDTH,
} from "./constant";
import { StatusBar } from "expo-status-bar";
import StoryListItem from "./components/StoryListItem";
import Animated, {
  useAnimatedRef,
  useScrollViewOffset,
} from "react-native-reanimated";

type Props = {};

const ListPadding = WINDOW_WIDTH - ITEM_WIDTH;

const App = (props: Props) => {
  const animatedRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(animatedRef);
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={BACKGROUND_COLOR} />
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
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
});
