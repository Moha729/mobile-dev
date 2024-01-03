import { StyleSheet, Text, View } from "react-native"

const WelcomeBar = () => {
    return (
        <View style={styles.welcomeStyles}>
            <Text style={styles.welcomeTextStyle}>Welcome to your Milestone To-do App!</Text>
        </View>
    )
}

export {WelcomeBar}

const styles = StyleSheet.create({
    welcomeStyles: {
        borderColor: 'blue',
        backgroundColor: '#DAA520',
        padding: 30,
        marginTop: 30
    },
    welcomeTextStyle: {
        color: '#4B0082',
        fontSize: 30,
        fontWeight: '800',
        fontStyle: 'italic',
        textAlign: 'center',
        textShadowColor: 'black',
        
        
    }
})