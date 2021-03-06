import { StyleSheet } from "react-native"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
    container: {
        width: 104,
        height: 120,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginRight: 8,
    },

    content: {
        width: 100,
        height: 116,
        borderRadius: 8,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
    },

    checked: {
        position: "absolute",
        top: 8,
        right: 0,
        width: 11,
        height: 11,
        backgroundColor: theme.colors.primary,
        marginRight: 7,
        borderRadius: 3,
    },

    check: {
        position: "absolute",
        top: 7,
        right: 7,
        width: 12,
        height: 12,
        backgroundColor: theme.colors.secondary100,
        borderColor: theme.colors.secondary50,
        borderWidth: 2,
        borderRadius: 3,
    },

    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 15,
    },
})
