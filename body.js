// Create a new scene
var scene = new THREE.Scene();

// Create a new camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a new renderer
var renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("#canvas") });
renderer.setClearColor(0x000000);
renderer.setSize(window.innerWidth, window.innerHeight);

// Create a new cube
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add event listeners for mouse movement
var mouse = new THREE.Vector2();
document.addEventListener('mousemove', function(event) {
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}, false);

// Animate the cube
function animate() {
  requestAnimationFrame(animate);

  // Rotate the cube based on mouse position
  camera.position.x += ( mouse.x * 5 - camera.position.x ) * 0.05;
  camera.position.y += ( - mouse.y * 5 - camera.position.y ) * 0.05;
  camera.lookAt(scene.position);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();
