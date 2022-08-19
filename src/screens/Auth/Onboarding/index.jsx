import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  Dimensions,
  Text,
  StatusBar,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import {colors} from '../../../config/Colors';
import SplashScreen from 'react-native-splash-screen';
import {Image} from 'react-native';

const {width, height} = Dimensions.get('window');
const slides = [
  {
    id: '1',
    image: require('../../../assets/PMOnboarding.png'),
    title: 'Lorem Ipsum Dolor',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: '2',
    image: require('../../../assets/PMOnboarding1.png'),
    title: 'Lorem Ipsum Dolor',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
];
const Slide = ({item}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={item?.image}
        style={{height: '75%', width, resizeMode: 'contain'}}
      />
      <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};
const Index = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };
  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };
  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: colors.white,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>
        {/* Render buttons */}
        <View style={{marginBottom: 20}}>
          {currentSlideIndex === slides.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity style={styles.btn}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: colors.white,
                  }}>
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: colors.white,
                    borderWidth: 1,
                    backgroundColor: 'transparent',
                  },
                ]}
                onPress={skip}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: colors.white,
                  }}>
                  Skip
                </Text>
              </TouchableOpacity>
              <View style={{width: 15}} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: colors.white,
                  }}>
                  Next
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.white} />
      <FlatList
        ref={ref}
        data={slides}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height * 0.75}}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};
export default Index;
