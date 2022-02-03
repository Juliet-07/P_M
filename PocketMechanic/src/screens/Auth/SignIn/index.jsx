import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Pheader} from '../../../components/Header/index';
import {Pinput} from '../../../components/Input/index';
import {Pbutton} from '../../../components/Button/index';
import MainView from '../../../components/Layouts/MainView/index';
import FlexView from '../../../components/Layouts/FlexView/index';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import theme from '../../../config/Theme/index';
import {colors} from '../../../config/Colors/index';
import CheckBox from '@react-native-community/checkbox';

const index = () => {
  const initialValues = {
    Email: '',
    Password: '',
  };
  const [show, setShow] = useState(true);
  const [select, setSelect] = useState(false);
  return (
    <MainView scrollable>
      <FlexView>
        <View style={styles.main}>
          <Pheader />
          <FlexView justifyContent="space-around">
            <View style={styles.header}>
              <Text style={styles.headText}>Welcome</Text>
            </View>
          </FlexView>
          <Formik initialValues={initialValues}>
            {({values, handleChange, handleSubmit}) => (
              <View style={styles.input}>
                <Pinput
                  name="Email"
                  placeholder="Email"
                  value={values.Email}
                  keyboardType="email-address"
                  onChangeText={handleChange('Email')}
                  leftIcon={
                    <SimpleLineIcons
                      name="envelope"
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
                    <Feather
                      name="lock"
                      size={theme.iconSize}
                      color={colors.black}
                    />
                  }
                  rightIcon={
                    <TouchableOpacity onPress={() => setShow(!show)}>
                      <Ionicons
                        name={show ? 'eye' : 'eye-off'}
                        color={colors.black}
                        size={theme.iconSize}
                      />
                    </TouchableOpacity>
                  }
                  secureTextEntry={show}
                />
                <FlexView justifyContent="space-between" marginBottom={10} marginTop={10}>
                  <FlexView>
                    <CheckBox value={select} onValueChange={setSelect} />
                    <Text style={styles.texts}>Remember Me</Text>
                  </FlexView>
                  <TouchableOpacity>
                    <Text style={styles.texts}>Forgot Password?</Text>
                  </TouchableOpacity>
                </FlexView>

                {/* ButtonView */}
                <View style={styles.btnView}>
                  <Pbutton title="SIGN IN" onPress={handleSubmit} />
                </View>
              </View>
            )}
          </Formik>
          <FlexView style={styles.last}>
            <Text style={styles.texts}>Don't have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.signUp}>SignUp</Text>
            </TouchableOpacity>
          </FlexView>
        </View>
      </FlexView>
    </MainView>
  );
};
export default index;
