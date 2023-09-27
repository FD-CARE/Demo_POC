let container = document.getElementById("container");

container.innerHTML="<h1>notFound</h1>"

if ('DeviceOrientationEvent' in window) {
    container.innerHTML="<h1>Found</h1>";
    window.addEventListener("deviceorientation",(event)=>{
        // Gyroscope data is available in event object
        const alpha = event.alpha; // Z-axis rotation
        const beta = event.beta;   // X-axis rotation
        const gamma = event.gamma; // Y-axis rotation
        console.log(`alpha: ${alpha}, beta: ${beta}, gamma: ${gamma}`);

        container.innerHTML=`
                <h1>Gyroscopic Data</h1>
                <h1>alpha = ${alpha}</h1>
                <h1>beta = ${beta}</h1>
                <h1>gamma = ${gamma}</h1>
        `
    });
}else{
    console.log('Device Orientation API is not supported in this browser.');
}