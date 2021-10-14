import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export default function FormInput(props) {
    const {placeholder, title, secureTextEntry, error} = props;
    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                <Text style={{ fontWeight: 'bold' }}>{title}</Text>
                {error ? (<Text style={{ color: 'red', fontSize: 16 }}>{errors}</Text>) : null}
            </View>
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