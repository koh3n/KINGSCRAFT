import styled from 'styled-components';
import { Canvas, useLoader } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import '../styles/Modal.css'

function Model({ url }) {
  const obj = useLoader(OBJLoader, url);
  return <primitive object={obj} />;
}

// function Model({ url }) {
//   const obj = useLoader(OBJLoader, "https://sfu-hack.s3.amazonaws.com/test-user/models/chess.obj?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVRUVWOH7RDKOU6XO%2F20240519%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20240519T124502Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=9a34a5cbf773d632370fed2e7e0fa4edbd90dd9169b5be65703688c14ba5ac1b"
// );
//   return <primitive object={obj} />;
// }

function Modal() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Model url="/chess.obj" />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default Modal;