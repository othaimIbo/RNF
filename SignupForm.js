import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { isValidEmail, isValidObjField, updateError } from '../utils/methods';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitBtn from './FormSubmitBtn';

import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({ 
    fullname: Yup.string()
        .trim()
        .min(5, 'Invalid name!')
        .required('Name is required!'),
    email: Yup.string()
        .email('Invalid email!')
        .required('Email is required!'),
    password: Yup.string()
        .trim()
        .min(8, 'Password is too short!')
        .required('Password is required!'),
    password: Yup.string()
        .equals([Yup.ref('password'), null], 'Passwords do not match!'),
});

export default function SignupForm() {

    const userInfo = {
        fullname: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const [error, setError] = useState('');

    const { fullname, email, password, confirmPassword } = userInfo;

    const handleOnChangeText = (value, fieldName) => {
        setUserInfo({ ...userInfo, [fieldName]: value })
    };

    const isValidForm = () => {
        // Only accept if all inputs have been filled out. 
        if (!isValidObjField(userInfo)) return updateError('Alle velden moeten worden ingevuld!', setError)
        // Only accept if username is longer then 5 characters. 
        if (!fullname.trim() || fullname.length < 5) return updateError('Invalid username!', setError)
        // Only accept if valid email has been submitted. 
        if (!isValidEmail(email)) return updateError('Invalid email!', setError);
        // Only accept if password is atleast 8 characters long. 
        if (!password.trim() || password.length < 8) return updateError('Password is less then 8 characters!', setError);
        // Only accept if passwords are identical. 
        if (password !== confirmPassword) return updateError('Passwords do not match!', setError);
    };

    const submitForm = () => {
        if (isValidForm()) {
            console.log(userInfo);
        }
    };

    return (
        <FormContainer>
            <Formik initialValues={ userInfo } validationSchema={ validationSchema } >
                {({ values, handleChange }) => {
                    console.log(values);

                    const { 
                        fullname, 
                        email, 
                        password, 
                        confirmPassword 
                    } = values;

                    return (
                        <View>
                            <FormInput 
                                value={fullname} 
                                onChangeText={handleChange('fullname')} 
                                autoCapitalize='none' 
                                title='Gebruikersnaam' 
                                placeholder='John Doe' />
                            <FormInput 
                                value={email} 
                                onChangeText={handleChange('email')} 
                                autoCapitalize='none' 
                                title='E-mail' 
                                placeholder='example@email.com' />
                            <FormInput 
                                value={password} 
                                onChangeText={handleChange('password')} 
                                autoCapitalize='none' 
                                title='Wachtwoord' 
                                placeholder='********' 
                                secureTextEntry={true} />
                            <FormInput 
                                value={confirmPassword} 
                                onChangeText={handleChange('confirmPassword')} 
                                autoCapitalize='none' 
                                title='Wachtwoord Bevestigen' 
                                placeholder='********' 
                                secureTextEntry={true} />
                            <FormSubmitBtn onPress={submitForm} title='Aanmelden' />
                        </View>
                    );
                }};
            </Formik>
        </FormContainer>
    );
};

const styles = StyleSheet.create({  });
