import React, {useEffect} from 'react';
import {View} from 'react-native';
import PagerView from 'react-native-pager-view';
import Page from '../../../components/Page/index';
import {colors} from '../../../config/Colors/index';
import image1 from '../../../assets/PMOnboarding.png';
import image2 from '../../../assets/PMOnboarding1.png';
import Footer from '../../../components/Footer/index';
import SplashScreen from 'react-native-splash-screen';

const Index = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <PagerView style={{flex: 1}} initialPage={0}>
      <View key="1">
        <Page
          title="My name is Juliet"
          backgroundColor={colors.primaryBlue}
          image={image1}
        />
        <Footer
          backgroundColor="#ffc93c"
          rightButtonLabel="Next"
          rightButtonPress={() => true}
        />
      </View>
      <View key="2">
        <Page
          title="My name is Juliet"
          backgroundColor={colors.buttonYellow}
          image={image2}
        />
        <Footer
          backgroundColor="#07689f"
          rightButtonLabel="Next"
          rightButtonPress={() => true}
        />
      </View>
    </PagerView>
  );
};
export default Index;
