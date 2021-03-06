import React from "react";
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    Dimensions
} from 'react-native';
const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get("window").width / 4,
        width: Dimensions.get("window").width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    },
    buttonOperation: {
        color: '#fff',
        backgroundColor: '#fa8231'
    },
    buttonDouble: {
        width: (Dimensions.get("window").width / 4) * 2
    },
    buttonTriple: {
        width: (Dimensions.get("window").width / 4) * 3
    }
});
export default props => {
    const stylesButton = [styles.button];
    if (props.isOperation)
        stylesButton.push(styles.buttonOperation);
    if (props.isDouble)
        stylesButton.push(styles.buttonDouble);
    if (props.isTriple)
        stylesButton.push(styles.buttonTriple);
    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    );
}