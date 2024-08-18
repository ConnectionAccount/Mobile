import React, { useMemo } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Themes } from "../constants";
import {
  type BottomSheetBackdropProps,
  useBottomSheet,
} from "@gorhom/bottom-sheet";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const SheetBackdrop = React.memo(
  ({ animatedIndex }: BottomSheetBackdropProps) => {
    const { close } = useBottomSheet();
    const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

    const opacityStyle = useAnimatedStyle(() => ({
      zIndex: animatedIndex.value > -1 ? 0 : -1,
      opacity: interpolate(
        animatedIndex.value,
        [-1, 0],
        [0, 0.55],
        Extrapolate.CLAMP,
      ),
    }));

    const animatedStyle = useMemo(
      () => [
        styles.root,
        {
          backgroundColor: Themes.blackOp06,
        },
        opacityStyle,
      ],
      [opacityStyle],
    );

    const handleOnPress = React.useCallback(() => {
      close();
    }, [close]);

    return <AnimatedPressable onPress={handleOnPress} style={animatedStyle} />;
  },
);

const styles = StyleSheet.create({
  root: {
    ...StyleSheet.absoluteFillObject,
    overflow: "hidden",
  },
});

SheetBackdrop.displayName = "SheetBackdrop";

export { SheetBackdrop };
