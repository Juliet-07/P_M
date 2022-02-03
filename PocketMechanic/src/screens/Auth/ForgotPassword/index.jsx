import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {Formik} from 'formik';
import {Pinput} from '../../../components/Input/index';
import {Pbutton} from '../../../components/Button/index';
import FlexView from '../../../components/Layouts/FlexView/index';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import theme from '../../../config/Theme/index';
import {colors} from '../../../config/Colors/index';

const index = () => {
  const initialValues = {
    Email: '',
  };
  return (
    <View style={styles.container}>
      <FlexView justifyContent="space-around">
        <View style={styles.header}>
          <Text style={styles.headerText}>Forgot Password?</Text>
        </View>
      </FlexView>
      <View style={styles.msgView}>
        <Text style={styles.message}>
          A password reset link will be sent to your email.
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
                <SimpleLineIcons
                  name="envelope"
                  size={theme.iconSize}
                  color={colors.black}
                />
              }
            />
            {/* ButtonView */}
            <View style={styles.btnView}>
              <Pbutton title="SEND CODE" onPress={handleSubmit} type='outline'/>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};
export default index;
