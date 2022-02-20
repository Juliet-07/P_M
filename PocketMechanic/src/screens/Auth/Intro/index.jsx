import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import {Pbutton} from '../../../components/Button/index';
const Index = ({navigation}) => {
  const {navigate} = navigation;
  return (
    <View style={styles.container}>
      <View style={styles.gifView}>
        <Text style={styles.gif}>GIF</Text>
      </View>
      <View style={styles.logoView}>
        <Image source={require('../../../assets/logo.png')} />
        <Text style={styles.logoText}>
          Schedule auto repair from your mobile device
        </Text>
      </View>
      <View style={styles.btnView}>
        <Pbutton
          title="Login"
          buttonStyle={styles.btn1}
          onPress={() => navigate('Signin')}
        />
      </View>
      <View style={styles.btnView1}>
        <Pbutton
          title="Sign Up"
          buttonStyle={styles.btn2}
          onPress={() => navigate('Signup')}
        />
      </View>
    </View>
  );
};
export default Index;
