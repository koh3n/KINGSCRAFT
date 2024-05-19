import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, TextInput, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CameraScreen({ navigation }) {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [flash, setFlash] = useState('off');
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [projectName, setProjectName] = useState('');
  const cameraRef = useRef(null);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
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
    if (cameraRef.current && isCameraReady) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
      setIsModalVisible(true); // Show the modal after taking a picture
    }
  }

  function handleProjectNameSubmit() {
    console.log('Project Name:', projectName);
    setIsModalVisible(false);
    // Navigate to another screen or perform other actions with the project name and photo
  }

  function handleCancel() {
    setIsModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} flash={flash} ref={cameraRef} onCameraReady={onCameraReady}>
        <View style={styles.bottomButtonContainer}>
          <TouchableOpacity style={styles.flipButton} onPress={toggleCameraFacing}>
            <Icon name="flip-camera-ios" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.shutterButton} onPress={takePicture}>
            <Icon name="camera" size={50} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.flashButton} onPress={toggleFlash}>
            <Icon name={flash === 'off' ? 'flash-off' : 'flash-on'} size={30} color="white" />
          </TouchableOpacity>
        </View>
      </CameraView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(!isModalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Enter Project Name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setProjectName}
            value={projectName}
            placeholder="Project Name"
          />
          <View style={styles.modalButtonContainer}>
            <Button title="Submit" onPress={handleProjectNameSubmit} />
            <Button title="Cancel" onPress={handleCancel} />
          </View>
        </View>
      </Modal>
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
  bottomButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingBottom: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  flipButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flashButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shutterButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    marginTop: 80,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
    paddingLeft: 10,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
