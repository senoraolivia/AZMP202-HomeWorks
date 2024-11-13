document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    document.body.appendChild(imageContainer); 

    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('cards-container');
    document.body.appendChild(cardsContainer); 

    for (let i = 1; i <= 3; i++) {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = 'https://via.placeholder.com/290x180';
        img.alt = "#";
        card.appendChild(img);

        const h3 = document.createElement('h3');
        h3.textContent = `Indocentetus Facilis`;
        card.appendChild(h3);

        const p = document.createElement('p');
        p.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing.`;
        card.appendChild(p);

        const a = document.createElement('a');
        a.href = '#';
        a.textContent = 'Read More >';
        card.appendChild(a);

        cardsContainer.appendChild(card);
    }
});

