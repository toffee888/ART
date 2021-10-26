/* global AFRAME, THREE */

AFRAME.registerComponent('gesture-handler', {
    schema: {
        enabled: { default: true },
        rotationFactor: { default: 5 },
        minScale: { default: 0.3 },
        maxScale: { default: 20 },
    },

    init: function() {
        this.handleScale = this.handleScale.bind(this);
        this.handleRotation = this.handleRotation.bind(this);

        this.isVisible = true;
        this.initialScale = this.el.object3D.scale.clone();
        this.scaleFactor = 1;
    },

    update: function() {
        if (this.data.enabled) {
            this.el.sceneEl.addEventListener('twofingermove', this.handleScale);
        } else {
            this.el.sceneEl.removeEventListener('twofingermove', this.handleScale);
        }
    },

    remove: function() {
        this.el.sceneEl.removeEventListener('twofingermove', this.handleScale);
    },


    handleScale: function(event) {
        if (this.isVisible) {
            this.scaleFactor *=
                1 + event.detail.spreadChange / event.detail.startSpread;

            this.scaleFactor = Math.min(
                Math.max(this.scaleFactor, this.data.minScale),
                this.data.maxScale
            );

            this.el.object3D.scale.x = this.scaleFactor * this.initialScale.x;
            this.el.object3D.scale.y = this.scaleFactor * this.initialScale.y;
            this.el.object3D.scale.z = this.scaleFactor * this.initialScale.z;
        }
    },
});
