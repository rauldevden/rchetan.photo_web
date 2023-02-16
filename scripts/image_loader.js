document.onload = ()=>{

    
}

document.addEventListener("DOMContentLoaded", function(){
    let imageDisplayHTML = document.querySelector('#gallery-display');
    
    let mainMenu =  document.querySelector('#main-menu');

    // console.log(imageDisplayHTML);

    // loadGallery('morenodiego_0');

    loadMainMenu();

    function loadMainMenu(){

        let mainMenuImages = [];
        
        let xhr = new XMLHttpRequest();
        xhr.open("GET", `/assets`, true);
        xhr.responseType = 'document';
        xhr.onload = () => {
        if (xhr.status === 200) {

            let folders = xhr.response.getElementsByTagName("a");
            for (x of folders) {
                let title = x.title;

                // console.log(`FOLDER: ${title}`);

                let xhr = new XMLHttpRequest();
                xhr.open("GET", `/assets/${title}`, true);
                xhr.responseType = 'document';
                xhr.onload = () => {
                if (xhr.status === 200) {

                    let folderElements = xhr.response.getElementsByTagName("a");
                    for (image of folderElements) {
                        // console.log(image.title);
                        if(image.title === 'cover.jpg' && image.href.match(/\.(jpe?g|png|gif)$/) ){
                            let img = document.createElement("img");
                            let card = document.createElement('div');
                            let cardText = document.createElement('p');
                            cardText.innerHTML = title;
                            card.id = title;
                            img.src = image.href;
                            card.append(img);
                            card.append(cardText);
                            mainMenu.appendChild(card);
                        }

                    };
                } 
                else {
                    alert('Request failed. Returned status of ' + xhr.status);
                }
                }
                xhr.send()
            };
            console.log(mainMenuImages);
        } 
        else {
            alert('Request failed. Returned status of ' + xhr.status);
        }

        }
        xhr.send()

        console.log(mainMenuImages);
        mainMenuImages.forEach(coverImage =>{
            console.log(coverImage);
            let img = document.createElement("img");
            img.src = coverImage.href;
            imageDisplayHTML.appendChild(img);
        });

    }

    function loadGallery(galleryName){
        let xhr = new XMLHttpRequest();
        xhr.open("GET", `/assets/${galleryName}`, true);
        xhr.responseType = 'document';
        xhr.onload = () => {
        if (xhr.status === 200) {
            let elements = xhr.response.getElementsByTagName("a");
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