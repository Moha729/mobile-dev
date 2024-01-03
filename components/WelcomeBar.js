import { StyleSheet, Text, View } from "react-native"

const WelcomeBar = () => {
    return (
        <View>
            <Text style={styles.welcomeTextStyle}>Welcome to your Milestone To-do App!</Text>
        </View>
    )
}

export {WelcomeBar}

const styles = StyleSheet.create({
    welcomeStyles: {

    },
    welcomeTextStyle: {
        color: 'red',
        fontSize: 20,
        
    }
})