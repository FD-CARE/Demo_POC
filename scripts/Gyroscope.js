let sensor = new Gyroscope();
sensor.start();

sensor.onreading = () => {
    const dev = document.getElementById("Gyroscope");
    if(dev){
        dev.innerHTML=`
            <br>
            <h1>Groscope Data</h1>
            <h1>Angular Velocity X-axis = ${sensor.x}</h1>
            <h1>Angular Velocity Y-axis = ${sensor.y}</h1>
            <h1>Angular Velocity Z-axis = ${sensor.z}</h1>
        `;
    }else{
        const Gyroscope = document.createElement("div");
        Gyroscope.id="Gyroscope";
        Gyroscope.innerHTML=`
            <br>
            <h1>Groscope Data</h1>
            <h1>Angular Velocity X-axis = ${sensor.x}</h1>
            <h1>Angular Velocity Y-axis = ${sensor.y}</h1>
            <h1>Angular Velocity Z-axis = ${sensor.z}</h1>
        `;
    }
};

sensor.onerror = event => console.log(event.error.name, event.error.message);