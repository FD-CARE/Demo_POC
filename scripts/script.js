let container = document.getElementById("container");

if ('DeviceOrientationEvent' in window) {
    window.addEventListener("deviceorientation",(event)=>{
        // Gyroscope data is available in event object
        const alpha = event.alpha; // Z-axis rotation
        const beta = event.beta;   // X-axis rotation
        const gamma = event.gamma; // Y-axis rotation
        console.log(`alpha: ${alpha}, beta: ${beta}, gamma: ${gamma}`);

        const dev = document.getElementById("deviceOrientation");
        if(dev){
            dev.innerHTML=`
            <br>
            <h1>Device Orientation Data</h1>
            <h1>alpha = ${alpha}</h1>
            <h1>beta = ${beta}</h1>
            <h1>gamma = ${gamma}</h1>
        `;
        }else{
            const deviceOrientation = document.createElement("div");
            deviceOrientation.id="deviceOrientation";
            deviceOrientation.innerHTML=`
                <br>
                <h1>Device Orientation Data</h1>
                <h1>alpha = ${alpha}</h1>
                <h1>beta = ${beta}</h1>
                <h1>gamma = ${gamma}</h1>
            `;

            container.appendChild(deviceOrientation);
        }

    });
}else{
    console.log('Device Orientation API is not supported in this browser.');
}

window.addEventListener('devicemotion', (event)=>{
    const acc = event.acceleration;
    const accWithGravity = event.accelerationIncludingGravity;
    const rotationRate = event.rotationRate;

    const dev = document.getElementById("deviceMotion");
    if(dev){
        dev.innerHTML=`
            <br>
            <h1>Device Motion Data</h1>
            <h1>acc = { x : ${acc.x} , y : ${acc.y} , z : ${acc.z} }</h1>
            <h1>accWithGravity = { x : ${accWithGravity.x} , y : ${accWithGravity.y} , z : ${accWithGravity.z} }</h1>
            <h1>rotationRate = { alpha : ${rotationRate.alpha} , beta : ${rotationRate.beta} , gamma : ${rotationRate.gamma} }</h1>
        `;
    }else{
        const deviceMotion = document.createElement("div");
        deviceMotion.id="deviceMotion";
        deviceMotion.innerHTML=`
                <br>
                <h1>Device Motion Data</h1>
                <h1>acc = { x : ${acc.x} , y : ${acc.y} , z : ${acc.z} }</h1>
                <h1>accWithGravity = { x : ${accWithGravity.x} , y : ${accWithGravity.y} , z : ${accWithGravity.z} }</h1>
                <h1>rotationRate = { alpha : ${rotationRate.alpha} , beta : ${rotationRate.beta} , gamma : ${rotationRate.gamma} }</h1>
        `;
        container.appendChild(deviceMotion);
    }
});