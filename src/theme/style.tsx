import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "./color";


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: Colors.bg
    },
    main: {
        flex: 1,
        marginHorizontal: 20,
        backgroundColor: Colors.bg
    },
    title: {
        fontSize: 28,
        color: Colors.secondary,
        fontFamily: 'Raleway-Bold'
    },
    apptitle: {
        fontSize: 24,
        color: Colors.secondary,
        fontFamily: 'OpenSans-Bold'
    },
    subtitle: {
        fontSize: 20,
        fontFamily: 'Raleway-Bold',
        color: Colors.secondary,
    },

    r12: {
        fontSize: 12,
        color: Colors.disable,
        fontFamily: 'OpenSans-Regular',
    },
    m12: {
        fontSize: 12,
        color: Colors.disable,
        fontFamily: 'OpenSans-Medium',
    },
    b12: {
        fontSize: 12,
        color: Colors.disable,
        fontFamily: 'OpenSans-Bold',
    },
    r14: {
        fontSize: 14,
        color: Colors.disable,
        fontFamily: 'OpenSans-Regular',
    },
    m14: {
        fontSize: 14,
        color: Colors.disable,
        fontFamily: 'OpenSans-Medium',
    },
    b14: {
        fontSize: 14,
        color: Colors.disable,
        fontFamily: 'OpenSans-Bold',
    },
    r16: {
        fontSize: 16,
        color: Colors.disable,
        fontFamily: 'OpenSans-Regular'

    },
    m16: {
        fontSize: 16,
        color: Colors.disable,
        fontFamily: 'OpenSans-Medium'

    },
    b16: {
        fontSize: 16,
        color: Colors.disable,
        fontFamily: 'OpenSans-Bold'

    },
    r18: {
        fontSize: 18,
        color: Colors.disable,
        fontFamily: 'Raleway-Regular'

    },
    m18: {
        fontSize: 18,
        color: Colors.disable,
        fontFamily: 'Raleway-Medium'

    },
    b18: {
        fontSize: 18,
        color: Colors.disable,
        fontFamily: 'Raleway-Bold'

    },



    btn: {
        // backgroundColor: Colors.primary,
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 25,

    },
    btntxt: {
        fontSize: 16,
        color: Colors.secondary,
        fontFamily: 'Raleway-Bold'
    },

    obtn: {
        height: 50, width: width / 2.5, borderRadius: 25,
    },
    ibtn: {
        borderRadius: 25, margin: 1.3, justifyContent: 'center',
    },
    ltxt: {
        marginVertical: 12.5, textAlign: 'center', color: Colors.secondary, fontSize: 16, fontFamily: 'Raleway-Bold'
    },
    indicator: {
        borderColor: '#E0E0E0',
        borderWidth: 1,
        padding: 4,
        borderRadius: 20,
        backgroundColor: '#E0E0E0',
        marginHorizontal: 5,

    },


    shadow: {
        shadowColor: Colors.secondary,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: '#FFFFFF',

    },

    txtinput: {
        height: 50,
        borderWidth: 1,
        borderColor: Colors.border
    },

    radio: {
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 10,
        borderColor: Colors.border,
        color: Colors.disable,
    },

    divider: {
        height: 1,
        backgroundColor: Colors.border,
    },

    divider1: {
        height: 1.5,
        backgroundColor: Colors.border,
        marginTop: 20,
        marginBottom: 20,
        flex: 1
    },

    dividertxt: {
        color: Colors.disable,
        fontFamily: 'Raleway-Regular'
    },

    btn1: {

        alignItems: 'center',
        // paddingVertical:15,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 55


    },
    btntxt1: {
        fontSize: 16,
        color: Colors.secondary,
        paddingLeft: 15,
        fontFamily: 'Raleway-Regular'
    },

    inputContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: Colors.border,
        marginTop: 10,
        height: 50,
        borderRadius:25,
        paddingHorizontal:20
        // flex: 1
    },

    verticaldivider: {
        height: '60%',
        width: 1,
    },

    modalcontainer: {
        flex: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        marginVertical: 140,
        paddingTop: 20,
        marginHorizontal: -10,
        alignSelf: 'center',
    },
    btnoutline: {
        borderColor: Colors.primary,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        height: 55,
        width: width / 4.5,
    },

    b3: {
        backgroundColor: Colors.secondary,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 30,
        alignItems: 'center',
        borderColor: '#E5E7EB',
        borderWidth: 1
    },
    follow: {
        paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, backgroundColor: Colors.primary
    },
    following: {
        paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, borderColor: Colors.primary, borderWidth: 2
    },
    categoryTextSelected: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        color: Colors.secondary,
        fontFamily: 'Raleway-Regular'
    },
    categoryText: {
        fontSize: 14,
        color: Colors.secondary,
        borderWidth: 1,
        borderColor: Colors.secondary,
        borderRadius: 10,
        paddingBottom: 5,
        paddingTop: 7,
        paddingHorizontal: 15,
        marginHorizontal: 5,
        fontFamily: 'Raleway-Regular'
    },
    categorycontainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 30,
        justifyContent: 'space-between',

    },
}
);