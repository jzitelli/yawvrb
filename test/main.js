var app;

function onLoad() {
	"use strict";

	var scene = ( function () {
		var scene = new THREE.Scene();

		var objectLoader = new THREE.ObjectLoader();
		objectLoader.load('models/desk.json', function (obj) {
			obj.rotation.y = Math.PI;
			obj.position.set(0, -3.75, -2.75);
			scene.add(obj);
		});

		return scene;
	} )();

	app = new WebVRApp(scene, undefined, {canvas: document.getElementById('webgl-canvas')});

	requestAnimationFrame(animate);
	function animate(t) {
		app.render();
		requestAnimationFrame(animate);
	}
}
