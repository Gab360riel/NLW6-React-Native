import { StyleSheet } from "react-native"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    label: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 18,
    },

    form: {
        paddingHorizontal: 24,
        marginTop: 32,
    },

    select: {
        width: '100%',
        height: 68,
        flexDirection: 'row',
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: "center",
        paddingRight: 25,
        overflow: 'hidden',
    },

    image: {
        width: 64,
        height: 68,
        backgroundColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
    },

    selectBody: {
        flex: 1,
        alignItems: "center",
    },
})
