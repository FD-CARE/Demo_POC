if ('DeviceOrientationEvent' in window) {
    window.addEventListener("deviceorientation",(event)=>{
        // Gyroscope data is available in event object
        const alpha = event.alpha; // Z-axis rotation
        const beta = event.beta;   // X-axis rotation
        const gamma = event.gamma; // Y-axis rotation
        
        const dev = document.getElementById("deviceOrientation");
        if(dev){
            dev.innerHTML=`
            <br>
            <h1>Device Orientation Data</h1>
            <h1>Alpha = ${alpha}</h1>
            <h1>Beta = ${beta}</h1>
            <h1>Gamma = ${gamma}</h1>
        `;
        }else{
            const deviceOrientation = document.createElement("div");
            deviceOrientation.id="deviceOrientation";
            deviceOrientation.innerHTML=`
                <br>
                <h1>Device Orientation Data</h1>
                <h1>Alpha = ${alpha}</h1>
                <h1>Beta = ${beta}</h1>
                <h1>Gamma = ${gamma}</h1>
            `;

            container.appendChild(deviceOrientation);
        }

    });
}else{
    console.log('Device Orientation API is not supported in this browser.');
}