import * as THREE from 'three';
import Application from '../Application';
import BakedModel from '../Utils/BakedModel';
import Resources from '../Utils/Resources';

export default class Computer {
    application: Application;
    scene: THREE.Scene;
    resources: Resources;
    bakedModel: BakedModel;

    constructor() {
        this.application = new Application();
        this.scene = this.application.scene;
        this.resources = this.application.resources;

        this.bakeModel();
        this.setModel();
    }

    bakeModel() {
        this.bakedModel = new BakedModel(
            this.resources.items.gltfModel.computerSetupModel,
            this.resources.items.texture.computerSetupTexture,
            900
        );
        
        // Update materials to iMac white and blue theme
        this.bakedModel.getModel().traverse((child) => {
            if (child instanceof THREE.Mesh) {
                // Create iMac-style materials
                if (child.name.toLowerCase().includes('monitor') || 
                    child.name.toLowerCase().includes('screen')) {
                    // Monitor bezel - white with blue accents
                    child.material = new THREE.MeshLambertMaterial({
                        color: 0xf8f9fa, // Clean white
                        map: this.resources.items.texture.computerSetupTexture
                    });
                } else if (child.name.toLowerCase().includes('stand') ||
                          child.name.toLowerCase().includes('base')) {
                    // Stand - blue accent
                    child.material = new THREE.MeshLambertMaterial({
                        color: 0x007aff, // Apple blue
                    });
                } else {
                    // Other components - clean white/silver
                    child.material = new THREE.MeshLambertMaterial({
                        color: 0xe8e9ea,
                        map: this.resources.items.texture.computerSetupTexture
                    });
                }
            }
        });
    }

    setModel() {
        this.scene.add(this.bakedModel.getModel());
    }
}
