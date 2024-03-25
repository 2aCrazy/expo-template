import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { StyleSheet, Text, View, Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

import ImageViewer from './ImageViewer';
import Button from './Bouton';

import * as ImagePicker from 'expo-image-picker';

import { useState } from 'react';


const PlaceholderImage = require("./assets/john.png");

export default function App() {

  const [selectedImage, setSelectedImage] = useState(null);


  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }

  };
  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* <Image source={PlaceholderImage} style={styles.image} /> */}
        {/* <ImageViewer placeholderImageSource={PlaceholderImage} /> */}
        <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>
      <View style={styles.footerContainer}>
        {/* <Button label="Choose a photo" /> */}
        {/* <Button theme="primary" label="Choose a photo" /> */}
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />

        <Button label="Use this photo" />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
