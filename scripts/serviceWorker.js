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