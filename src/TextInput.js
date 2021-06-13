// import { formatMs, StylesProvider } from '@material-ui/core';
import React from 'react';
import {safeAreaView, StyleSheet, TextInput} from 'react-native';

export default function MyTextInput() {
    // const [text, onChangeText] = React.useState("Text");
    const [number, onChangeNumber] = React.useState(null);

    return (
        <safeAreaView>
            {/* <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            /> */}
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder=" Enter Task Here! "
                keyboardType="numeric"
            />
        </safeAreaView>
    );
};

const styles = StyleSheet.create({
    
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        textAlign: 'center'
    },
});

// export default function MyTextInput();