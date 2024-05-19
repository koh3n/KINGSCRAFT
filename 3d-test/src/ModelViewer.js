import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

function Model({ url }) {
  const obj = useLoader(OBJLoader, url);
  return <primitive object={obj} />;
}

function ModelViewer() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Model url="/model.obj" />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default ModelViewer;
