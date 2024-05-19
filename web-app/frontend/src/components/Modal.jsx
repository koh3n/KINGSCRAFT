import React, {Suspense} from 'react';
import styled from 'styled-components';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

import '../styles/Modal.css'

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  color: black;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  position: relative;
  width: 1000px;
  height: 1000px
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #1D2948;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function Model({ url }) {
    const obj = useLoader(OBJLoader, url);
    return <primitive object={obj} />;
}

const Modal = ({ children, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        {/* {children} */}

        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
                <Model url="/chess.obj" />
            </Suspense>
            <OrbitControls />
        </Canvas>

      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;