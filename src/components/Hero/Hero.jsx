import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./Hero.css";
import GuiProfile from "../../assets/GuiProfilepic.png";
import Guilogoverde from "../../assets/Guilogoverde2.png"; // Certifique-se de que o caminho está correto

const Hero = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    // Initialize Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    mountRef.current.appendChild(renderer.domElement);

    // Setup Camera
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 10);
    camera.position.set(0, 0, 2);

    // Create Scene
    const scene = new THREE.Scene();

    // Setup Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.03;
    controls.enableZoom = false;

    // Geometry and Materials
    const geometry = new THREE.IcosahedronGeometry(1, 1);

    // Base Material
    const meshMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      flatShading: true,
      transparent: true,
      opacity: 0,
    });

    // Create the main mesh
    const mesh = new THREE.Mesh(geometry, meshMaterial);
    scene.add(mesh);

    // Wireframe Shader Material
    const wireShaderMaterial = createWireframeShaderMaterial();
    const wireMesh = new THREE.Mesh(geometry, wireShaderMaterial);
    wireMesh.scale.setScalar(1.001);
    scene.add(wireMesh);

    // Lighting
    const hemiLight = new THREE.HemisphereLight(0xffffff);
    scene.add(hemiLight);

    // Animation loop
    const animate = (t = 0) => {
      wireMesh.rotation.y = t * 0.0001;


      renderer.render(scene, camera);
      controls.update();
      requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = debounce(() => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }, 100); // 100ms debounce time

    window.addEventListener("resize", handleResize);

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Wireframe shader material generator
  const createWireframeShaderMaterial = () => {
    return new THREE.ShaderMaterial({
      uniforms: {
        color1: { value: new THREE.Color(0x474646) },
        color2: { value: new THREE.Color(0xA4A4A4) },
      },
      vertexShader: `
        varying vec3 vPosition;
        void main() {
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec3 vPosition;
        void main() {
          float mixFactor = (vPosition.y + 1.0) / 2.0;
          gl_FragColor = vec4(mix(color1, color2, mixFactor), 1.0);
        }
      `,
      wireframe: true,
    });
  };

  // Debounce function to limit how often the resize handler fires
  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  };

  return (
    <div className="hero-container">
      <div className="imagens">
        <img src={GuiProfile} alt="Profile" />
      </div>

      {/* Three.js Canvas */}
      <div ref={mountRef} className="canvas-container" />

      {/* Fixed Logo */}
      <img src={Guilogoverde} alt="Logo" className="fixed-logo" />
      <p className="nome">nome</p>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-arrow"></div>
      </div>
    </div>
  );
};

export default Hero;
