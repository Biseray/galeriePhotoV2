const collection = async () => {
  try {
    const img = document.getElementById('collectionImg');
    const dataId = new URL(location.href).searchParams.get("id");

    const response = await fetch('./data.json');
    const data = await response.json();

    const dataItem = data.find(item => item.id === dataId);
    console.log(dataItem.picturesH);

    let imgPictures = "";
    dataItem.pictures.forEach(picture => {
      imgPictures += `
        <div class='cardImg'>
          <img class="imgSize imgPosition" src="${picture}" alt="img2">
        </div>
      `;
    });

    img.innerHTML = imgPictures;




    // const openImg = (e) => {
    //   const imgOpen = e.target.closest('.imgPosition img');
    //   imgOpen.classList.add('active');

     
    // };

    // const clickImg = document.getElementById('cardImg');
    // clickImg.forEach(el => el.addEventListener("click", () => {
    //   alert('1');
    // }));



  } catch (error) {
    console.error('Une erreur s\'est produite lors du chargement des données :', error);
  }
}

collection();
