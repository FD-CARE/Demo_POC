if ('DeviceProximityEvent' in window) {
    window.addEventListener("deviceproximity",(event)=>{

        const distance = event.value; // Proximity distance in centimeters
        const isNear = event.near;   // Boolean indicating if the object is near
        
        const dev = document.getElementById("deviceProximity");
        if(dev){
            dev.innerHTML=`
            <br>
            <h1>Device Provimity Data</h1>
            <h1>Distance = ${distance}</h1>
            <h1>Is Near = ${isNear}</h1>
        `;
        }else{
            const deviceProximity = document.createElement("div");
            deviceProximity.id="deviceProximity";
            deviceProximity.innerHTML=`
                <br>
                <h1>Device Provimity Data</h1>
                <h1>Distance = ${distance}</h1>
                <h1>Is Near = ${isNear}</h1>
            `;

            container.appendChild(deviceProximity);
        }

    });
}else{
    console.log('DeviceProximityEvent is not supported in this browser.');
}