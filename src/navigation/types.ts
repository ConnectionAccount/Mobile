import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export enum NavigationRoutes {
    HomeScreen = "HomeScreen",
    LoginScreen = "LoginScreen",

    TestSheet = "TestSheet"
}

export type RootStackParamList = {
    HomeScreen: undefined;
    LoginScreen: undefined;
}

export type BottomSheetParamList = {
    TestSheet: undefined;
}

export type RootStackScreenProps<T extends keyof RootStackParamList> = 
    NativeStackScreenProps<RootStackParamList, T>;
export type BottomSheetScreenProps<T extends keyof BottomSheetParamList> = 
    NativeStackScreenProps<BottomSheetParamList, T>;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
        interface RootParamList extends BottomSheetParamList { }
    }
}