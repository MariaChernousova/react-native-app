import {StyleSheet, Text, View} from "react-native";
import React from "react";

export const Settings = () => {
    return(
        <View style={styles.setting}>
            <Text style={styles.text}>Settings</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    setting: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    text: {
        fontSize: 30,
    }
});
