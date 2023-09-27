function handleOrientation(event) {
    // Gyroscope data is available in event object
    const alpha = event.alpha; // Z-axis rotation
    const beta = event.beta;   // X-axis rotation
    const gamma = event.gamma; // Y-axis rotation
    console.log(`alpha: ${alpha}, beta: ${beta}, gamma: ${gamma}`);

    container.innerHTML=`<h1>alpha = ${alpha}</h1>
            <h1>beta = ${beta}</h1>
            <h1>gamma = ${gamma}</h1>`
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