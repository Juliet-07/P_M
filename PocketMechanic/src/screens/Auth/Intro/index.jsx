import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import {Pbutton} from '../../../components/Button/index';
import Gears from '../../../assets/gears.svg';
import Svg, {Circle} from 'react-native-svg';
const Index = ({navigation}) => {
  const {navigate} = navigation;
  return (
    <View style={styles.container}>
      <View style={styles.gifView}>
        <Svg height="50%" width="50%" viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="50"
            stroke="purple"
            strokeWidth=".5"
            fill="violet"
          />
        </Svg>
        {/* <Gears /> */}
        <Text style={styles.gif}>SVG</Text>
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
