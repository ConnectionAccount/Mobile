import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export enum NavigationRoutes {
    HomeScreen = "HomeScreen",
    LoginScreen = "LoginScreen",
    ForgetPasswordScreen = "ForgetPasswordScreen",
    IntroductionScreen = "IntroductionScreen",
    TermScreen = "TermScreen",
    CreateAccountScreen = "CreateAccountScreen",
    ResetPasswordScreen = "ResetPasswordScreen",
    
    TestSheet = "TestSheet"
}

export type RootStackParamList = {
    HomeScreen: undefined;
    LoginScreen: undefined;
    ForgetPasswordScreen: undefined;
    IntroductionScreen: undefined;
    CreateAccountScreen: undefined;
    TermScreen: undefined;
    ResetPasswordScreen: undefined;
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