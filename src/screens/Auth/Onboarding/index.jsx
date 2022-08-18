import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Title from '../../../components/Page/index';
import {colors} from '../../../config/Colors/index';
import image1 from '../../../assets/PMOnboarding.png';
import image2 from '../../../assets/PMOnboarding1.png';
import SplashScreen from 'react-native-splash-screen';

const Index = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: 'transparent',
          image: <Image source={image1} style={{width: 300, height: 300}} />,
          title: 'Lorem Ipsum Dolor',
          titleStyles: {color: 'blue'},
          subtitle: (
            <Title
              title={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
              }
            />
          ),
        },
        {
          backgroundColor: '#fff',
          image: <Image source={image2} style={{width: 200, height: 200}} />,
          title: 'Onboarding2',
          subtitle: 'Practicing for pocket mechanic',
        },
      ]}
    />
  );
};
export default Index;
