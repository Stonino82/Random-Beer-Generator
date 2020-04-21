document.addEventListener('DOMContentLoaded', () => {

    const btn = document.querySelector('.button');
    const titleBeer = document.querySelector('.random-beer');
    const liter = document.querySelector('.liter');
    const descriptionBeer = document.querySelector('.description');
    const tagline = document.querySelector('.tag_line');
    const brewersTips = document.querySelector('.brewers_tips');
    const image = document.querySelector('.image');
    const foodPairing = document.querySelector('.food_pairing');


    function getBeer(event){
        event.preventDefault();

        fetch('https://api.punkapi.com/v2/beers/random')
        .then(response => {
            return response.json();
        })
        .then(data => {      
            console.log(data);    
            const nameData = data[0].name;
            const descriptionData = data[0].description;
            const taglineData = data[0].tagline;
            const brewersTipsData = data[0].brewers_tips;
            const {volume} = data[0];
            const volumeValueData = volume.value;
            const volumeUnitData = volume.unit;
            const imageUrl = data[0].image_url;
            const food_pairingData = [...data[0].food_pairing];
            console.log(food_pairingData);

            titleBeer.innerHTML = nameData;
            liter.innerHTML = volumeValueData + ' ' + volumeUnitData;
            tagline.innerHTML = "\"" + taglineData + "\"";
            brewersTips.innerHTML = brewersTipsData;
            descriptionBeer.innerHTML = descriptionData;
            brewersTips.style.backgroundColor = "#FEBC58";
            image.setAttribute('src', imageUrl);
            foodPairing.innerHTML = 'Food pairing: ' + food_pairingData.join(', ');

        })
    };

    

    
    btn.addEventListener('click', getBeer);


});