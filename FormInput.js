import React from 'react'
import { StyleSheet, Text, TextInput } from 'react-native'

export default function FormInput(props) {
    const {placeholder, title, secureTextEntry} = props;
    return (
        <>
            <Text style={{ fontWeight: 'bold' }}>{title}</Text>
            <TextInput 
                {...props}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
            />
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#1b1b33',
        height: 35,
        borderRadius: 8,
        fontSize: 16,
        paddingLeft: 10,
        marginBottom: 20,
    }
})
