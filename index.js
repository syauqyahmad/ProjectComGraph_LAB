import * as THREE from "./three.js/build/three.module.js"
import {OrbitControls} from "./three.js/examples/jsm/controls/OrbitControls.js"
import {GLTFLoader} from "./three.js/examples/jsm/loaders/GLTFLoader.js"

var scene, camera, camera2, control ,renderer

const createTexture = (image) => {
    const loader = new THREE.TextureLoader()
    const texture = loader.load(image)
    return texture
}

const createAmbientLight = () => {
    const ambientLight = new THREE.AmbientLight("#404040")

    // scene.add(createAmbientLight)
    return ambientLight
}

const createSpotLight1 = () => {
    const spotLight1 = new THREE.SpotLight("#FFFFFF", 1, 300)

    spotLight1.position.set(-100, 0, 100)
    spotLight1.lookAt(0, 50, 0)
    spotLight1.castShadow = true

    // scene.add(createSpotLight1)
    return spotLight1
}

const createSpotLight2 = () => {
    const spotLight2 = new THREE.SpotLight("#FFFFFF", 1, 300)

    spotLight2.position.set(-100, 0, -100)
    spotLight2.lookAt(0, 50, 0)
    spotLight2.castShadow = true
    
    // scene.add(createSpotLight2)
    return spotLight2
}

const createSpotLight3 = () => {
    const spotLight3 = new THREE.SpotLight("#FFFFFF", 0.5, 300)
    
    spotLight3.position.set(-100, 0, -100)
    spotLight3.lookAt(0, 0, 0)
    spotLight3.castShadow = true
    spotLight3.angle = Math.PI/4 + Math.PI/6

    // scene.add(createSpotLight3)
    return spotLight3
}

function createGround(){
    const groundGeo = new THREE.PlaneGeometry(1000, 1000)
    const groundMat = new THREE.MeshStandardMaterial({
        color: "#8c3b0c"
    })
    const groundMesh = new THREE.Mesh(groundGeo, groundMat)

    groundMesh.position.set(0, -5, 0)
    groundMesh.rotation.x = -Math.PI/2, 0, 0
    groundMesh.receiveShadow = true

    scene.add(groundMesh)
    return groundMesh
}

function create3DModel(){
    let loader = new GLTFLoader()
    let clock = new THREE.Clock()

    loader.load('./model/scene.gltf',
    function(gltf){
        let model = gltf.scene
        let animation = gltf.animations[0]

        let mixer = new THREE.AnimationMixer(model)
        let action = mixer.clipAction(animation)
        action.play()

        scene.add(model)


        function animate(){
            renderer.render(scene, currentCamera)
            requestAnimationFrame(animate)
            let delta = clock.getDelta()
            mixer.update(delta)
        }

        animate()

    })
}

function createCrateA1(){
    const geo = new THREE.BoxGeometry(10, 10, 10)
    const texture = createTexture("./assets/texture/crate1.jpeg")
    const material = new THREE.MeshPhongMaterial({
        side : THREE.DoubleSide,
        map : texture
    })

    const crateA1Mesh = new THREE.Mesh(geo, material)
    crateA1Mesh.position.set(-30, 0, -40)
    crateA1Mesh.rotation.x = 0
    crateA1Mesh.receiveShadow = true
    crateA1Mesh.castShadow= true
    
    scene.add(crateA1Mesh)
    return crateA1Mesh
}

function createCrateA2(){
    const geometry = new THREE.BoxGeometry(5, 5, 5)
    const texture = createTexture("./assets/texture/crate1.jpeg")
    const material = new THREE.MeshPhongMaterial({
        side : THREE.DoubleSide,
        map : texture
    })

    const crateA2Mesh = new THREE.Mesh(geometry, material)
    crateA2Mesh.position.set(-30, -2, -48)
    crateA2Mesh.rotation.x = Math.PI/6
    crateA2Mesh.receiveShadow = true
    crateA2Mesh.castShadow= true

    scene.add(crateA2Mesh)
    return crateA2Mesh
}

function createCrateA3(){
    const geometry = new THREE.BoxGeometry(10, 15, 10)
    const texture = createTexture("./assets/texture/crate1.jpeg")
    const material = new THREE.MeshPhongMaterial({
        side : THREE.DoubleSide,
        map : texture
    })
    
    const crateA3Mesh = new THREE.Mesh(geometry, material)
    crateA3Mesh.position.set(-40, 2.5, 30)
    crateA3Mesh.rotation.y = -Math.PI/4
    crateA3Mesh.receiveShadow = true
    crateA3Mesh.castShadow= true
    
    scene.add(crateA3Mesh)
    return crateA3Mesh
}

function createCrateB1(){
    const geometry = new THREE.BoxGeometry(20, 20, 20)
    const texture = createTexture("./assets/texture/crate2.jpeg")
    const material = new THREE.MeshPhongMaterial({
        side : THREE.DoubleSide,
        map : texture
    })

    const crateB1Mesh = new THREE.Mesh(geometry, material)
    crateB1Mesh.position.set(30, 5, 40)
    crateB1Mesh.rotation.y = Math.PI/3
    crateB1Mesh.receiveShadow = true
    crateB1Mesh.castShadow= true

    scene.add(crateB1Mesh)
    return crateB1Mesh
}

function createCrateB2(){
    const geometry = new THREE.BoxGeometry(40, 15, 30)
    const texture = createTexture("./assets/texture/crate2.jpeg")
    const material = new THREE.MeshPhongMaterial({
        side : THREE.DoubleSide,
        map : texture
    })

    const crateB2Mesh = new THREE.Mesh(geometry, material)
    crateB2Mesh.position.set(30, 2.5, -60)
    crateB2Mesh.rotation.y = -Math.PI/6
    crateB2Mesh.receiveShadow = true
    crateB2Mesh.castShadow= true

    scene.add(crateB2Mesh)
    return crateB2Mesh
}

function createTire1(){
    const geometry = new THREE.TorusGeometry(5, 2.5, 16,100)
    const material = new THREE.MeshStandardMaterial({
        color: "#3e444c"
    })

    const tire1Mesh = new THREE.Mesh(geometry, material)
    tire1Mesh.position.set(-70, -5, 0)
    tire1Mesh.rotation.y = Math.PI/2
    tire1Mesh.receiveShadow = true
    tire1Mesh.castShadow = true
    
    scene.add(tire1Mesh)
    return tire1Mesh
}

function createTire2(){
    const geometry = new THREE.TorusGeometry(5, 2.5, 16,100)
    const material = new THREE.MeshStandardMaterial({
        color: "#3e444c"
    })

    const tire2Mesh = new THREE.Mesh(geometry, material)
    tire2Mesh.position.set(-65, -5, 20)
    tire2Mesh.rotation.y = Math.PI/2 + Math.PI / 9 * 1
    tire2Mesh.receiveShadow = true
    tire2Mesh.castShadow = true
    
    scene.add(tire2Mesh)
    return tire2Mesh
}

function createTire3(){
    const geometry = new THREE.TorusGeometry(5, 2.5, 16, 100)
    const material = new THREE.MeshStandardMaterial({
        color: "#3e444c"
    })

    const tire3Mesh = new THREE.Mesh(geometry, material)
    tire3Mesh.position.set(-65, -5, -20)
    tire3Mesh.rotation.y = -Math.PI/2 + -Math.PI / 9 * 1
    tire3Mesh.receiveShadow = true
    tire3Mesh.castShadow = true
    
    scene.add(tire3Mesh)
    return tire3Mesh
}

function createTire4(){
    const geometry = new THREE.TorusGeometry(5, 2.5, 16, 100)
    const material = new THREE.MeshStandardMaterial({
        color: "#3e444c"
    })

    const tire4Mesh = new THREE.Mesh(geometry, material)
    tire4Mesh.position.set(-55, -5, 40)
    tire4Mesh.rotation.y = -Math.PI/2 + Math.PI / 9 * 2
    tire4Mesh.receiveShadow = true
    tire4Mesh.castShadow = true
    
    scene.add(tire4Mesh)
    return tire4Mesh
}

function createTire5(){
    const geometry = new THREE.TorusGeometry(5, 2.5, 16, 100)
    const material = new THREE.MeshStandardMaterial({
        color: "#3e444c"
    })

    const tire5Mesh = new THREE.Mesh(geometry, material)
    tire5Mesh.position.set(-55, -5, -40)
    tire5Mesh.rotation.y = -Math.PI/2 + -Math.PI / 9 * 2
    tire5Mesh.receiveShadow = true
    tire5Mesh.castShadow = true
    
    scene.add(tire5Mesh)
    return tire5Mesh
}

function createPole1(){
    const geometry = new THREE.CylinderGeometry(1, 1, 50, 16)
    const material = new THREE.MeshStandardMaterial({
        color: "#646FD4"
    })

    const pole1Mesh = new THREE.Mesh(geometry, material)
    pole1Mesh.position.set(0,15,35)
    pole1Mesh.rotation.x = -Math.PI/6
    pole1Mesh.receiveShadow = true
    
    scene.add(pole1Mesh)
    return pole1Mesh
}

function createPole2(){
    const geometry = new THREE.CylinderGeometry(1, 1, 50, 16)
    const material = new THREE.MeshStandardMaterial({
        color: "#646FD4"
    })
    const pole2Mesh = new THREE.Mesh(geometry, material)
    pole2Mesh.position.set(0,15,-35)
    pole2Mesh.rotation.x = Math.PI/6
    pole2Mesh.receiveShadow = true
    
    scene.add(pole2Mesh)
    return pole2Mesh
}

function createButton1(){
    const geometry = new THREE.BoxGeometry(10, 16.5, 14.5)
    const material = new THREE.MeshPhongMaterial({
        color : "#848482"
    })
    const button1Mesh = new THREE.Mesh(geometry, material)
    button1Mesh.position.set(-43, 3, 65)
    button1Mesh.rotation.y = -Math.PI/6
    button1Mesh.receiveShadow = true
    button1Mesh.castShadow = true
    
    scene.add(button1Mesh)
    return button1Mesh
}

function createButton2(){
    const geometry = new THREE.SphereGeometry(4.5, 32, 16)
    const material = new THREE.MeshPhongMaterial({
        color : "#dc143c"
    })

    const button2Mesh = new THREE.Mesh(geometry, material)
    button2Mesh.position.set(-43, 3, 63)
    button2Mesh.receiveShadow = true
    button2Mesh.castShadow = true
    
    scene.add(button2Mesh)
    return button2Mesh
}

function init() {
    scene = new THREE.Scene()

    const FOV = 50
    const ASPECT = window.innerWidth / window.innerHeight
    const NEAR = 1
    const FAR = 5000

    camera = new THREE.PerspectiveCamera(FOV, ASPECT, NEAR, FAR)
    camera.position.set(-180, 30, 0)
    camera.lookAt(0, 30, 0)

    camera2 = new THREE.PerspectiveCamera(FOV, ASPECT, NEAR, FAR)
    camera2.position.set(-200, 50, 0)
    camera2.lookAt(0, 0, 0)

    renderer = new THREE.WebGLRenderer({
        antialias: true
    })
    renderer.shadowMap.enabled = true
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    control = new OrbitControls(camera2, renderer.domElement)

    // biar bisa ganti2 camera
    currentCamera = camera

    //munculin object
    createGround()
    create3DModel()
    createCrateA1()
    createCrateA2()
    createCrateA3()
    createCrateB1()
    createCrateB2()
    createTire1()
    createTire2()
    createTire3()
    createTire4()
    createTire5()
    createPole1()
    createPole2()
    createButton1()
    createButton2()

    //scene.add
    scene.add(createAmbientLight)
    scene.add(createSpotLight1)
    scene.add(createSpotLight2)
    scene.add(createSpotLight3)

}

function render(){
    control.update()
    requestAnimationFrame(render)
    renderer.render(scene, currentCamera)
}

window.onload = function(){
    init()
    render()
}