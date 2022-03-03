import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {Formik} from 'formik';
import {Pinput} from '../../../components/Input/index';
import {Pbutton} from '../../../components/Button/index';
import FlexView from '../../../components/Layouts/FlexView/index';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../../../config/Theme/index';
import {colors} from '../../../config/Colors/index';

const Index = ({navigation}) => {
  const {navigate} = navigation;
  const initialValues = {
    Email: '',
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate('Signin')}>
        <Ionicons name="arrow-back-sharp" size={35} color={colors.default} />
      </TouchableOpacity>
      <Text style={styles.headerText}>Forgot Password?</Text>
      <View style={styles.msgView}>
        <Text style={styles.message}>
          We will send you a link to reset it
        </Text>
      </View>
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
                <EvilIcons
                  name="envelope"
                  size={theme.iconSize}
                  color={colors.black}
                />
              }
            />
            {/* ButtonView */}
            <View style={styles.btnView}>
              <Pbutton
                title="SEND CODE"
                onPress={()=>navigate('Change')}
                type="outline"
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};
export default Index;
