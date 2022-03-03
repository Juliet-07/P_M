import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MainView from '../../../components/Layouts/MainView';
import {Pbutton} from '../../../components/Button/index';
import CodeInput from 'react-native-confirmation-code-input';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../config/Colors/index';
import theme from '../../../config/Theme';

const Index = ({navigation}) => {
  const {navigate} = navigation;
  const [value, setValue] = useState('');
  return (
    <MainView scrollable>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigate('Signup')}>
          <Ionicons name="arrow-back-sharp" size={35} color={colors.default} />
        </TouchableOpacity>
        <View style={styles.text}>
          <Text
            style={{
              fontSize: 25,
              color: colors.primaryBlue,
              fontWeight: 'bold',
            }}>
            Enter code
          </Text>
          <Text style={{marginTop: 10, fontSize: 15}}>
            An SMS code was sent to +2348147808902
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: colors.secondaryBlue,
                fontWeight: 'bold',
                marginTop: 5,
              }}>
              Edit phone number
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 35, alignItems: 'center'}}>
          <CodeInput
            space={4}
            size={70}
            codeInputStyle={{
              backgroundColor: '#fff',
              borderBottomColor: colors.secondaryBlue,
              borderBottomWidth: 4,
              color: 'black',
            }}
            codeLength={4}
            keyboardType="number-pad"
            activeColor="transparent"
            inactiveColor="transparent"
            inputPosition="left"
            onFulfill={code => {
              console.log(code, 'code');
              setValue(code);
            }}
          />
        </View>
        {/* Button Section */}
        <View style={styles.btnView}>
          <Pbutton
            title="Sign up"
            onPress={() => navigate('Signin')}
            buttonStyle={styles.btn}
          />
          <TouchableOpacity>
            <Text
              style={{
                marginTop: 20,
                fontSize: 20,
                color: colors.secondaryBlue,
              }}>
              Resend code
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </MainView>
  );
};
export default Index;
