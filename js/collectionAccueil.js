const affichageCollection = async () => {

    try {
        const cardCollection = document.getElementById('containerImg');
        const response = await fetch('./data.json');
        const data = await response.json();

        let cards = '';
        data.forEach(items => {
            cards += `
           <a href='./html/collection.html?id=${items.id}'>
                <div class="collectionCard">
                        <img class="imgSize ImgCover" src="${items.cover}" alt="img2">
                        <h2>${items.title}</h2>  <div class="blockImg"></div>
                </div>
            </a>`;
        });
        
        cardCollection.innerHTML = cards;
    


    
    } catch (error) {
        console.error('Une erreur s\'est produite lors du chargement des données :', error);
    }
}

affichageCollection();




