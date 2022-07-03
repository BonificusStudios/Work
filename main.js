import '/work/style.css';
import * as THREE from 'three';
import { GLTFLoader } from '../GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;
document.body.appendChild( renderer.domElement );

{
	const gltfLoader = new THREE.GLTFLoader();
	const url = '../Poker.gltf';
	gltfLoader.load(url, (gltf) => {
	  const root = gltf.scene;
	  scene.add(root);
	});

}

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
};
animate();