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

    <div style={{ width: '100%', height: '100%' }}>
      <Canvas style={{ background: 'transparent' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model url= "./temp.obj"/>
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default ModelViewer;
