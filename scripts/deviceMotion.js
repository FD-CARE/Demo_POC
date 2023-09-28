window.addEventListener('devicemotion', (event)=>{
    const acc = event.acceleration;
    const accWithGravity = event.accelerationIncludingGravity;
    const rotationRate = event.rotationRate;

    const threshold = 7; // main goal is to change it.
    
    const totalAcceleration = Math.sqrt(
      acc.x * acc.x +
      acc.y * acc.y +
      acc.z * acc.z
    );
    if(totalAcceleration > threshold){
        document.body.style.backgroundColor = "#ff0000";   
    }else{
        document.body.style.backgroundColor= "#0cff00";
    }

    const dev = document.getElementById("deviceMotion");
    if(dev){
        dev.innerHTML=`
            <br>
            <h1>Device Motion Data</h1>
            <h1>Acc = { x : ${acc.x} , y : ${acc.y} , z : ${acc.z} }</h1>
            <h1>Acc (Gravity) = { x : ${accWithGravity.x} , y : ${accWithGravity.y} , z : ${accWithGravity.z} }</h1>
            <h1>Rotation Rate = { alpha : ${rotationRate.alpha} , beta : ${rotationRate.beta} , gamma : ${rotationRate.gamma} }</h1>
        `;
    }else{
        const deviceMotion = document.createElement("div");
        deviceMotion.id="deviceMotion";
        deviceMotion.innerHTML=`
                <br>
                <h1>Device Motion Data</h1>
                <h1>Acc = { x : ${acc.x} , y : ${acc.y} , z : ${acc.z} }</h1>
                <h1>Acc (Gravity) = { x : ${accWithGravity.x} , y : ${accWithGravity.y} , z : ${accWithGravity.z} }</h1>
                <h1>Rotation Rate = { alpha : ${rotationRate.alpha} , beta : ${rotationRate.beta} , gamma : ${rotationRate.gamma} }</h1>
        `;
        container.appendChild(deviceMotion);
    }
});