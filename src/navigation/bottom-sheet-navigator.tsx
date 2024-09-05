import { BottomSheetParamList, NavigationRoutes } from "./types";
import { createBottomSheetNavigator } from "@th3rdwave/react-navigation-bottom-sheet";
import { WithSafeAreaInsetsProps, withSafeAreaInsets } from "react-native-safe-area-context";
import { TestSheet } from "../sheets/test";
import { SheetBackdrop } from "../components/bottom-sheet-backdrop";
import { RootStackNavigator } from "./root-stack-navigator";


const BottomSheet = createBottomSheetNavigator<BottomSheetParamList>();
const { Navigator, Screen, Group } = BottomSheet;

type Props = WithSafeAreaInsetsProps;
// git remote add origin https://github.com/ConnectionAccount/Front.git
// git push -u origin main

// const _BottomSheetRootStack = ({ insets }: Props) => (
//     <>
//         <Group>
//             <Screen
//                 name={NavigationRoutes.TestSheet}
//                 component={TestSheet}
//                 options={{
//                     backdropComponent: SheetBackdrop,
//                     snapPoints: [300],
//                     topInset: insets.top,
//                 }}
//             />
//         </Group>
//     </>
// )

// const BottomSheetRootStack = withSafeAreaInsets(_BottomSheetRootStack);

const BottomSheetNavigator = () => {
    return (
        <Navigator>
            <Screen
                name={NavigationRoutes.TestSheet}
                component={RootStackNavigator}
            />
            {/* <BottomSheetRootStack /> */}
        </Navigator>
    )
}

export { BottomSheetNavigator }