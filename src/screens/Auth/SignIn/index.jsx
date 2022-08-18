import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {Formik} from 'formik';
import * as yup from 'yup';
import generateValidationSchema from '../../../utils/validators';
// import {Pheader} from '../../../components/Header/index';
import {Pinput} from '../../../components/Input/index';
import {Pbutton} from '../../../components/Button/index';
import MainView from '../../../components/Layouts/MainView/index';
import FlexView from '../../../components/Layouts/FlexView/index';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../../../config/Theme/index';
import {colors} from '../../../config/Colors/index';
import CheckBox from '@react-native-community/checkbox';
import {AuthContext} from '../../../context';
import Accordion from '../../../components/Accordion';

const Index = ({navigation}) => {
  const {navigate} = navigation;
  // const {signIn} = useContext(AuthContext);
  const initialValues = {
    Email: '',
    Password: '',
  };
  const [show, setShow] = useState(true);
  const [select, setSelect] = useState(false);
  const validate = generateValidationSchema(
    yup,
    ['Email', 'Password'],
    ['EMAIL', 'PASSWORD'],
  );
  // const [userLogin,{loading,error}]
  return (
    <MainView scrollable>
      <FlexView>
        <View style={styles.main}>
          <TouchableOpacity onPress={() => navigate('Splash')}>
            <Ionicons
              name="arrow-back-sharp"
              size={35}
              color={colors.default}
            />
          </TouchableOpacity>
          <FlexView justifyContent="space-around">
            <View style={styles.header}>
              <Text style={styles.headText}>Welcome</Text>
            </View>
          </FlexView>
          <Formik initialValues={initialValues} validationSchema={validate}>
            {({values, handleChange, handleSubmit}) => (
              <View style={styles.input}>
                <Pinput
                  name="Email"
                  placeholder="Email"
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
                <FlexView
                  justifyContent="space-between"
                  marginBottom={10}
                  marginTop={20}>
                  <FlexView>
                    <CheckBox value={select} onValueChange={setSelect} />
                    <Text style={styles.texts}>Remember Me</Text>
                  </FlexView>
                  <TouchableOpacity onPress={() => navigate('Forgot')}>
                    <Text style={styles.texts1}>Forgot Password?</Text>
                  </TouchableOpacity>
                </FlexView>

                {/* ButtonView */}
                <View style={styles.btnView}>
                  <Pbutton
                    title="Login"
                    onPress={handleSubmit}
                    buttonStyle={styles.btn}
                  />
                </View>
              </View>
            )}
          </Formik>
          <FlexView>
            <Text style={styles.texts}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigate('Signup')}>
              <Text style={styles.texts1}>SignUp</Text>
            </TouchableOpacity>
          </FlexView>
          {/* <View>
            <Accordion title={'PickUp Details'} />
            <Accordion Title={'Dropoff Details'} />
            <Accordion Title={'Seleted Categories'} />
          </View> */}
        </View>
      </FlexView>
    </MainView>
  );
};
export default Index;
