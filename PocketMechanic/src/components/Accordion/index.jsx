// import React, {useState} from 'react';
// import {View, ScrollView, TouchableOpacity, Text} from 'react-native';
// import {styles} from './styles';
// import {colors} from '../../config/Colors';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import {theme} from '../../config/Theme/index';

// const Accordion = ({Title}) => {
//   const [show, setShow] = useState(false);
//   return (
//     <ScrollView>
//       <View style={styles.accordionContainer}>
//         <View style={styles.titleContainer}>
//           <TouchableOpacity style={styles.textContainer}>
//             <Text style={styles.titleContainerText}>{Title}</Text>
//             <TouchableOpacity
//               onPress={() => setShow(!show)}
//               style={styles.iconContainer}>
//               <EvilIcons
//                 name={!show ? 'arrow-down' : 'arrow-up'}
//                 style={styles.icon}
//               />
//             </TouchableOpacity>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.contentContainer}></View>
//         {show && (
//           <>
//             <View style={styles.contentContainer}>
//               <View style={styles.fullNameContainer}>
//                 <Text style={styles.fullName}>Juliet Kelechi</Text>
//                 <View>
//                   <Ionicons
//                     name="person-outline"
//                     size={20}
//                     color={'rgba(75, 77, 76, 0.4)'}
//                   />
//                 </View>
//                 <View style={styles.addressContainer}>
//                   <Text style={styles.address}>
//                     Karimu Kotun Victoria Island
//                   </Text>
//                   <View>
//                     <Ionicons
//                       name="location-outline"
//                       size={20}
//                       color={'rgba(75, 77, 76, 0.4)'}
//                     />
//                   </View>
//                 </View>
//                 <View style={styles.NumberContainer}>
//                   <Text style={styles.Number}>08147808902</Text>
//                   <View>
//                     <Ionicons
//                       name="ios-call"
//                       size={20}
//                       color={'rgba(75, 77, 76, 0.4)'}
//                     />
//                   </View>
//                 </View>
//               </View>
//             </View>
//           </>
//         )}
//       </View>
//     </ScrollView>
//   );
// };
// export default Accordion;

import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SplashScreen from 'react-native-splash-screen';
import {Accordion} from 'react-native-paper/lib/typescript/components/List/List';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const Accordion = _props => {
  const [value, setValue] = useState(null);
  // const [selected, setSelected] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  // const renderItem = item => {
  //   return (
  //     <View style={styles.item}>
  //       <Text style={styles.textItem}>{item.label}</Text>
  //       <Text>Tick</Text>
  //       {/* <Image style={styles.icon} source={require('./assets/tick.png')} /> */}
  //     </View>
  //   );
  // };
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>
          Dropdown Label
        </Text>
      );
    }
    return null;
  };
  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        data={data}
        search
        searchPlaceholder="Search"
        value={value}
        placeholder="Select item"
        labelField="label"
        valueField="value"
        maxHeight={300}
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        onFocus={() => setIsFocus(true)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
          console.log('selected', item);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? 'blue' : 'black'}
            name="Safety"
            size={20}
          />
        )}
        // renderItem={item => renderItem(item)}
      />

      {/* <MultiSelect
        style={styles.dropdown2}
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        search
        searchPlaceholder="Search"
        value={selected}
        onChange={item => {
          setSelected(item);
          console.log('selected', item);
        }}
        renderItem={item => _renderItem(item)}
      /> */}
    </View>
  );
};

export default Accordion;
