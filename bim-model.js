const params = new URLSearchParams(window.location.search),
   id = params.get("id");


import { Color } from 'three';
import { IfcViewerAPI } from 'web-ifc-viewer';

const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) });
viewer.grid.setGrid();
viewer.axes.setAxes();

async function loadIfc(url) {
    await viewer.IFC.setWasmPath("./");
    const model = await viewer.IFC.loadIfcUrl(url);
    viewer.shadowDropper.renderShadow(model.modelID);
}

loadIfc(`./Resources/IFC/0${id}.ifc`);

// function loadViewer() {
//    if (id < 6) {
//       viewer.src =
//          "https://ifcjs.github.io/ifcjs-crash-course/sample-apps/0" +
//          id;
//    } else {
//       alert("Generic project loaded");
//    }
// }

// loadViewer()