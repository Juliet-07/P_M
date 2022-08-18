import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {Formik} from 'formik';
import {Pinput} from '../../../components/Input/index';
import {Pbutton} from '../../../components/Button/index';
import MainView from '../../../components/Layouts/MainView/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../config/Colors/index';

const Index = ({navigation}) => {
  const {navigate} = navigation;
  const initialValues = {
    Old: '',
    New: '',
    Reenter: '',
  };
  const [show, setShow] = useState(true);
  return (
    <MainView scrollable>
      <View>
        <TouchableOpacity onPress={() => navigate('Forgot')}>
          <Ionicons name="arrow-back-sharp" size={35} color={colors.default} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Change Password</Text>
        <Formik initialValues={initialValues}>
          {({values, handleChange, handleSubmit}) => (
            <View style={styles.input}>
              <Pinput
                name="Old"
                placeholder="Old Password"
                value={values.Old}
                onChangeText={handleChange('Old')}
              />
              <Pinput
                name="New"
                placeholder="New Password"
                value={values.New}
                onChangeText={handleChange('New')}
              />
              <Pinput
                name="Reenter"
                placeholder="Re-enter New Password"
                value={values.Reenter}
                onChangeText={handleChange('Reenter')}
                secureTextEntry={show}
              />
              {/* ButtonView */}
              <View style={styles.btnView}>
                <Pbutton
                  title="Save"
                  onPress={handleSubmit}
                  buttonStyle={styles.btn}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </MainView>
  );
};
export default Index;
