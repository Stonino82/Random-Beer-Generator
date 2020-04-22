document.addEventListener('DOMContentLoaded', () => {

    const btn = document.querySelector('.button');
    const titleBeer = document.querySelector('.random-beer');
    const tagline = document.querySelector('.tag_line');
    // const liter = document.querySelector('.liter');
    const descriptionBeer = document.querySelector('.description');
    const abvIbu = document.querySelector('.abv-ibu');
    const foodPairing = document.querySelector('.food_pairing');
    const brewersTips = document.querySelector('.brewers_tips');
    const image = document.querySelector('.image');


    function getBeer(event){
        event.preventDefault();

        fetch('https://api.punkapi.com/v2/beers/random')
        .then(response => {
            return response.json();
        })
        .then(data => {      
            console.log(data);  

            titleBeer.style.textTransform = 'capitalize';
            const nameData = data[0].name;
            titleBeer.innerHTML = nameData;

            const taglineData = data[0].tagline;
            tagline.innerHTML = "\"" + taglineData + "\"";
            
            const row = document.querySelector('.row');
            row.style.margin = "2.5rem 0";

            const imageUrlData = data[0].image_url;
            image.setAttribute('src', imageUrlData);

            // const {volume} = data[0];
            // const volumeValueData = volume.value;
            // const volumeUnitData = volume.unit;
            // liter.innerHTML = volumeValueData + ' ' + volumeUnitData;

            descriptionBeer.style.margin = '1rem 0';
            const descriptionData = data[0].description;
            descriptionBeer.innerHTML = descriptionData;

            const abvData = data[0].abv;
            const ibuData = data[0].ibu;
            abvIbu.innerHTML = 'ABV ' + abvData + '% - ' + 'IBU ' + ibuData;

            const food_pairingData = [...data[0].food_pairing];
            foodPairing.innerHTML = 'Food pairing: ' + food_pairingData.join(', ');

            brewersTips.style.padding = '1.2rem';
            const brewersTipsData = data[0].brewers_tips;
            brewersTips.innerHTML = brewersTipsData;
            brewersTips.style.backgroundColor = "#FEBC58";


        })
    };
    
    btn.addEventListener('click', getBeer);

    //catch space and enter press
    document.body.onkeyup = function(e){
        if(e.keyCode == 32){
            getBeer(e);
        }
    }

});