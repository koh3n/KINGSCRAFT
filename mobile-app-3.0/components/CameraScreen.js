import { CameraView, useCameraPermissions, takePictureAsync } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CameraScreen({ navigation }) {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [flash, setFlash] = useState('off');
  const [isCameraReady, setIsCameraReady] = useState(false);
  const cameraRef = useRef();
  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  function toggleFlash() {
    setFlash(current => (current === 'off' ? 'on' : 'off'));
  }
  
  const onCameraReady = () => {
    setIsCameraReady(true);
  };
    
  async function takePicture() {
      if (cameraRef.current) {
        const photo = await cameraRef.current.takePictureAsync();
        console.log(photo);
      }
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} flash={flash} ref={cameraRef}>
        {/* <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View> */}

        <View style={styles.topButtonContainer}>
          <TouchableOpacity style={styles.flipButton} onPress={toggleCameraFacing}>
            <Icon name="flip-camera-ios" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.flashButton} onPress={toggleFlash}>
            <Icon name={flash === 'off' ? 'flash-off' : 'flash-on'} size={30} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomButtonContainer}>
          <TouchableOpacity style={styles.shutterButton} onPress={takePicture}>
            <Icon name="camera" size={50} color="white" />
          </TouchableOpacity>
        </View>

      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  topButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  bottomButtonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  flipButton: {
    alignSelf: 'flex-start',
  },
  flashButton: {
    alignSelf: 'flex-end',
  },
  shutterButton: {
    alignSelf: 'center',
  },
});