console.log("Greetings, I work");
console.log("Hi sir, thank you for setting this up po. You da GOAT! :D");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//cube
const cubeGeometry = new THREE.BoxGeometry( 3, 3, 3 );
const cubeMaterial = new THREE.MeshBasicMaterial( { color: 0xfcba03 } );
const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
//cone
const coneGeometry = new THREE.ConeGeometry( 3, 8, 20 ); 
const coneMaterial = new THREE.MeshBasicMaterial( {color: 0x16faf2} );
const cone = new THREE.Mesh(coneGeometry, coneMaterial );
//cylinder
const cylinderGeometry = new THREE.CylinderGeometry( 2, 2, 8, 12 ); 
const cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0x93fa16} ); 
const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
//torus
const torusGeometry = new THREE.TorusGeometry( 6, 0.5, 10, 30 ); 
const torusMaterial = new THREE.MeshBasicMaterial( { color: 0x95169c } ); 
const torus = new THREE.Mesh( torusGeometry, torusMaterial ); 
//sphere
const sphereGeometry = new THREE.SphereGeometry( 3, 10, 12 ); 
const sphereMaterial = new THREE.MeshBasicMaterial( { color: 0x870e24 } ); 
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial ); 




//scene add stuff
scene.add(cube);
scene.add(cone);
scene.add(cylinder);
scene.add(torus);
scene.add(sphere);


camera.position.z = 25;

function animate() {

    //set position
    cone.position.x = -3;
    cone.position.y = -10;
    cylinder.position.x = -10;
    cylinder.position.y = 10;
    sphere.position.x = 10;
    sphere.position.y = 6;

    //animation rotation
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cone.rotation.z -= 0.06;
    cylinder.rotation.x += 0.06;
    cylinder.rotation.z += 0.04;
    torus.rotation.x = 5;
    torus.rotation.y += 0.01;
    sphere.rotation.x += 0.06;
    
    //render
    renderer.render( scene, camera );
}

//animate
renderer.setAnimationLoop( animate );
