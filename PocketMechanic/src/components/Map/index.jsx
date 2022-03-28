// import React, {useState, useEffect} from 'react';
// import SplashScreen from 'react-native-splash-screen';
// import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
// import {Alert, ActivityIndicator, StatusBar, StyleSheet} from 'react-native';
// // import {SearchBar} from 'react-native-elements';
// // import {styles} from './style';
// import Geolocation from 'react-native-geolocation-service';
// // import MapInput from './MapInput';
// import {getDistance} from 'geolib';

// const Map = () => {
//   useEffect(() => {
//     SplashScreen.hide();
//   }, []);
//   const initialLocation = {
//     latitude: 0,
//     longitude: 0,
//     latitudeDelta: 0.05,
//     longitudeDelta: 0.05,
//   };
//   //  getDistance(
//   //    {},
//   //    {}
//   //   )
//   const [locations, setLocations] = useState(initialLocation);
//   const [search, setSearch] = useState('');

//   const updateInput = search => {
//     setSearch(search);
//   };
//   useEffect(() => {
//     Geolocation.getCurrentPosition(
//       position => {
//         const {latitude, longitude} = position.coords;
//         const newLocation = {
//           latitude,
//           longitude,
//           latitudeDelta: 0.05,
//           longitudeDelta: 0.05,
//         };
//         // getDistance(position.coords,{
//         //   latitude,
//         //   longitude
//         // })
//         console.log(getDistance);
//         setLocations(newLocation);
//       },
//       error => {
//         Alert.alert(error.code, error.message);
//       },
//       {
//         enableHighAccuracy: true,
//         timeout: 20000,
//         maximumAge: 1000,
//       },
//     );
//   }, []);
//   return (
//     <>
//       {/* <StatusBar backgroundColor="blue" translucent/> */}

//       {/* <MapInput notifyChange={(loc) => getCoordsFromName(loc)}/> */}
//       {locations.longitude > 0 ? (
//         <MapView
//           style={{...StyleSheet.absoluteFillObject}}
//           showsUserLocation={true}
//           initialRegion={locations}
//           provider={PROVIDER_GOOGLE}>
//           <Marker
//             coordinate={locations}
//             title="LearnFactory"
//             description="This is where the magic happens"
//           />
//         </MapView>
//       ) : (
//         <ActivityIndicator size="large" color="blue" />
//       )}
//     </>
//   );
// };
// export default Map;

import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Modal} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const Map = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={styles.container}>
      {/* <Modal visible={true}> */}
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}>
          <Marker
            coordinate={{
              latitude: 5.10658,
              longitude: 7.36667,
            }}
            title="LearnFactory"
            description="This is where the magic happens"
          />
        </MapView>
      {/* </Modal> */}
    </View>
  );
};
export default Map;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
