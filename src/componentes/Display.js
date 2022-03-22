import React from "react";
import {
    StyleSheet,
    Text,
    View,
} from "react-native";

export default (props) => {
    return (
        <View style={styles.display}>
            <Text style={styles.displayValue}>{props.valor}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    display: {
        padding: 10,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end'
    },
    displayValue: {
        fontSize: 60,
        color: '#fff'
    }
});