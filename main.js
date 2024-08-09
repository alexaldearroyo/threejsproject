import './style.css';
import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// Agregar luces
const light = new THREE.PointLight(0xffffff);
light.position.set(20, 20, 20);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

// Fondo de la escena
scene.background = new THREE.Color(0x000000);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({
  color: 0xff6347,
  wireframe: true,
});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  renderer.render(scene, camera);
}

animate();
