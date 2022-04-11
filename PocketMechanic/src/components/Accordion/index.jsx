import React, {useState} from 'react';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';
import {colors} from '../../config/Colors';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {theme} from '../../config/Theme/index';

const Accordion = ({Title}) => {
  const [show, setShow] = useState(false);
  return (
    <ScrollView>
      <View style={styles.accordionContainer}>
        <View style={styles.titleContainer}>
          <TouchableOpacity style={styles.textContainer}>
            <Text style={styles.titleContainerText}>{Title}</Text>
            <TouchableOpacity
              onPress={() => setShow(!show)}
              style={styles.iconContainer}>
              <EvilIcons
                name={!show ? 'arrow-down' : 'arrow-up'}
                style={styles.icon}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        <View style={styles.contentContainer}></View>
        {show && (
          <>
            <View style={styles.contentContainer}>
              <View style={styles.fullNameContainer}>
                <Text style={styles.fullName}>Juliet Kelechi</Text>
                <View>
                  <Ionicons
                    name="person-outline"
                    size={20}
                    color={'rgba(75, 77, 76, 0.4)'}
                  />
                </View>
                <View style={styles.addressContainer}>
                  <Text style={styles.address}>
                    Karimu Kotun Victoria Island
                  </Text>
                  <View>
                    <Ionicons
                      name="location-outline"
                      size={20}
                      color={'rgba(75, 77, 76, 0.4)'}
                    />
                  </View>
                </View>
                <View style={styles.NumberContainer}>
                  <Text style={styles.Number}>08147808902</Text>
                  <View>
                    <Ionicons
                      name="ios-call"
                      size={20}
                      color={'rgba(75, 77, 76, 0.4)'}
                    />
                  </View>
                </View>
              </View>
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
};
export default Accordion;
