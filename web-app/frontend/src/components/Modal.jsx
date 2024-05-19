import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import styled from 'styled-components';
import { Canvas, useLoader } from '@react-three/fiber';

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

const Modal = ({ onClose, objUrl }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Aspect ratio 1 for square view
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const loader = new OBJLoader(); // Use OBJLoader from Three.js
  
    const setSize = () => {
      const { width, height } = container.getBoundingClientRect();
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
  
    setSize(); // Set initial size
  
    window.addEventListener('resize', setSize); // Update size on window resize
  
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
  
    camera.position.z = 5;
  
    loader.load(
  
      './chess_2.obj',
      (object) => {
        scene.add(object);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.error('An error happened', error);
      }
    );
  
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
  
    animate();
  
    return () => {
      window.removeEventListener('resize', setSize);
      container.removeChild(renderer.domElement);
    };
  }, [objUrl]);
  
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <div ref={containerRef}></div>  
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;