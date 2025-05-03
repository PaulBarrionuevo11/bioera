// Import THREE.js library
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.0/build/three.module.js';
// To allow for the camera to move around the scene
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.152.0/examples/jsm/controls/OrbitControls.js';
// Import GLTFLoader to load 3D models in GLTF format   
// To allow for the GLTF model to be loaded  
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.152.0/examples/jsm/loaders/GLTFLoader.js'; 
// Import the CSS3DRenderer to render HTML elements in 3D space

// Create a scene
const scene = new THREE.Scene();
// Create a camera with a field of view of 75 degrees, aspect ratio based on window size, and near and far clipping planes
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Keep the 3D object on a glbal variable to be able to access it later
let object = null;

// OrbitControls to allow for camera movement
let controls = null;
// Set which object to render
let objectToRender = 'tiger_3d'; // Default object to render

const loader = new GLTFLoader();

// Load the 3D model
loader.load(
    `./models/${objectToRender}/scene.gltf`, 
    function (gltf) {
        object = gltf.scene;
        scene.add(object);
}, 
function(xhr)
{
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
}, 
function (error) {
    console.error(error);
});

// Initialize a new renderer and set its size to the window size
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Add the renderer to the DOM
document.getElementById('container3D').appendChild(renderer.domElement);

// Set the camera position
camera.position.z = objectToRender === 'tiger_3d' ? 25 : 500; // Set the camera position based on the object to render

// Add lights to the scene, so we can actually see the 3D model
const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(500, 500, 500);   // top-left corner of the screen
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, objectToRender == 'tiger_3d' ? 5:1); // Soft white light
scene.add(ambientLight);

//This adds controls to the camera, so we can rotate / zoom it with the mouse
if (objectToRender === 'tiger_3d') {
    controls = new OrbitControls(camera, renderer.domElement);
  }

function animate() {
    requestAnimationFrame(animate);
    // if (object) {
    //     object.rotation.y += 0.01; // Rotate the object around the y-axis
    // }
    // renderer.render(scene, camera);
}
animate(); // Start the animation loop

// Add a listener to the window resize event to update the camera and renderer size
window.addEventListener('resize', function() {
    // Update the camera aspect ratio and renderer size when the window is resized
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
