//Registering the Service Worker -------------------------------------------------------------
if ( 'serviceWorker' in navigator ) {
    var reg_prom = navigator.serviceWorker.register('serviceWorker.js');
    reg_prom
        .then(reg=>console.log("👍🏿👍🏿 Successfully reg..",reg))
        .catch( e=>console.log("👎🏿👎🏿 Failed to reg..", e));
}else{
    console.log("👎🏿👎🏿 No service worker..");
}


let container = document.getElementById("container");

function handleOrientation(event) {
    // Gyroscope data is available in event object
    const alpha = event.alpha; // Z-axis rotation
    const beta = event.beta;   // X-axis rotation
    const gamma = event.gamma; // Y-axis rotation

    container.innerHTML=`<h1>alpha = ${alpha}</h1>
            <h1>beta = ${beta}</h1>
            <h1>gamma = ${gamma}</h1>`
    console.log(`alpha: ${alpha}, beta: ${beta}, gamma: ${gamma}`);
}

if ('DeviceOrientationEvent' in window) {
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission().then(permissionState => {
            if (permissionState === 'granted') {
                console.log("Granted Permission");

                window.addEventListener('deviceorientation', handleOrientation);

            } else {
                console.log('Permission to access gyroscope data was denied.');
            }
        }).catch(error => {
            console.error('Error requesting gyroscope permission:', error);
        });
    } 
}else{
    console.log('Device Orientation API is not supported in this browser.');
}