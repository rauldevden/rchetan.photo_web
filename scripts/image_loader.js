document.onload = ()=>{

    
}

document.addEventListener("DOMContentLoaded", function(){
    let imageDisplayHTML = document.querySelector('#gallery-display');

    console.log(imageDisplayHTML);

    loadGallery('morenodiego_0');

    loadMainMenu();

    function loadMainMenu(){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", `/assets`, true);
        xhr.responseType = 'document';
        xhr.onload = () => {
        if (xhr.status === 200) {
            console.log(xhr);
            var elements = xhr.response.getElementsByTagName("a");
            // console.log(elements);
            for (x of elements) {
                console.log(x.title);
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
    }

    function loadGallery(galleryName){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", `/assets/${galleryName}`, true);
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
    }
    
});