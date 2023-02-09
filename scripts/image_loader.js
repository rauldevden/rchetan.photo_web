document.onload = ()=>{

    
}

document.addEventListener("DOMContentLoaded", function(){
    let imageDisplayHTML = document.querySelector('#image-display');

    console.log(imageDisplayHTML);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/assets/kevinsacris_0", true);
    xhr.responseType = 'document';
    xhr.onload = () => {
    if (xhr.status === 200) {
        var elements = xhr.response.getElementsByTagName("a");
        for (x of elements) {
        if ( x.href.match(/\.(jpe?g|png|gif)$/) ) { 
            let img = document.createElement("img");
            img.src = x.href;
            imageDisplayHTML.appendChild(img);
        } 
        };
    } 
    else {
        alert('Request failed. Returned status of ' + xhr.status);
    }
    }
    xhr.send()
    
});