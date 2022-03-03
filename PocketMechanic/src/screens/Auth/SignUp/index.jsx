import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {Formik} from 'formik';
import * as yup from 'yup';
import generateValidationSchema from '../../../utils/validators';
import {Pinput} from '../../../components/Input/index';
import {Pbutton} from '../../../components/Button/index';
import MainView from '../../../components/Layouts/MainView/index';
import FlexView from '../../../components/Layouts/FlexView/index';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../../../config/Theme/index';
import {colors} from '../../../config/Colors/index';
import CheckBox from '@react-native-community/checkbox';

const Index = ({navigation}) => {
  const {navigate} = navigation;
  const initialValues = {
    Name: '',
    Email: '',
    Phone: '',
    Address: '',
    Password: '',
    Confirm: '',
  };
  const [show, setShow] = useState(true);
  const [select, setSelect] = useState(false);
  const validate = generateValidationSchema(
    yup,
    ['Name', 'Email', 'Phone', 'Password', 'Confirm'],
    ['NAME', 'EMAIL', 'PHONE', 'PASSWORD', 'CONFIRMPASSWORD'],
  );
  return (
    <MainView scrollable>
      <View>
        <TouchableOpacity onPress={()=>navigate('Splash')}>
          <Ionicons name="arrow-back-sharp" size={35} color={colors.default} />
        </TouchableOpacity>
        <FlexView justifyContent="space-around">
          <View style={styles.header}>
            <Text style={styles.headText}>Let's get started</Text>
            <Text style={styles.text}>Fill the form to continue.</Text>
          </View>
        </FlexView>
        <Formik initialValues={initialValues} validationSchema={validate}>
          {({values, handleChange, handleSubmit}) => (
            <View style={styles.inputView}>
              <Pinput
                name="Name"
                placeholder="Full Name"
                value={values.Name}
                onChangeText={handleChange('Name')}
                leftIcon={
                  <Ionicons
                    name="person-outline"
                    size={theme.iconSize}
                    color={colors.default}
                  />
                }
              />
              <Pinput
                name="Email"
                placeholder="example@domain.com"
                value={values.Email}
                keyboardType="email-address"
                onChangeText={handleChange('Email')}
                leftIcon={
                  <EvilIcons
                    name="envelope"
                    size={theme.iconSize}
                    color={colors.black}
                  />
                }
              />
              <Pinput
                name="Phone"
                placeholder="Phone Number"
                value={values.Phone}
                keyboardType="number-pad"
                onChangeText={handleChange('Phone')}
                leftIcon={
                  <Ionicons
                    name="phone-portrait-outline"
                    size={theme.iconSize}
                    color={colors.black}
                  />
                }
              />
              <Pinput
                name="Address"
                placeholder="Address"
                value={values.Address}
                onChangeText={handleChange('Address')}
                leftIcon={
                  <Ionicons
                    name="phone-portrait-outline"
                    size={theme.iconSize}
                    color={colors.black}
                  />
                }
              />
              <Pinput
                name="Password"
                placeholder="Password"
                value={values.Password}
                onChangeText={handleChange('Password')}
                leftIcon={
                  <EvilIcons
                    name="lock"
                    size={theme.iconSize}
                    color={colors.black}
                  />
                }
                rightIcon={
                  <TouchableOpacity onPress={() => setShow(!show)}>
                    <Ionicons
                      name={show ? 'eye-outline' : 'eye-off-outline'}
                      color={colors.black}
                      size={theme.iconSize}
                    />
                  </TouchableOpacity>
                }
                secureTextEntry={show}
              />
              <Pinput
                name="Confirm"
                placeholder="Confirm Password"
                value={values.Confirm}
                onChangeText={handleChange('Confirm')}
                leftIcon={
                  <EvilIcons
                    name="lock"
                    size={theme.iconSize}
                    color={colors.black}
                  />
                }
                rightIcon={
                  <TouchableOpacity onPress={() => setShow(!show)}>
                    <Ionicons
                      name={show ? 'eye-outline' : 'eye-off-outline'}
                      color={colors.black}
                      size={theme.iconSize}
                    />
                  </TouchableOpacity>
                }
                secureTextEntry={show}
              />
              <FlexView>
                <CheckBox value={select} onValueChange={setSelect} />
                <Text style={styles.texts}>
                  I agree to the Terms of Service and Privacy Policy
                </Text>
              </FlexView>
              {/* ButtonView */}
              <View style={styles.btnView}>
                <Pbutton
                  title="Sign up"
                  onPress={()=>navigate('Verification')}
                  buttonStyle={styles.btn}
                />
              </View>
            </View>
          )}
        </Formik>
        <FlexView style={styles.last}>
          <Text style={styles.texts}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigate('Signin')}>
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
        </FlexView>
      </View>
    </MainView>
  );
};
export default Index;
