const tlacitkoNacistData = document.getElementById('fetchDataBtn');
const nacitaniDiv = document.getElementById('loading');
const planetyDiv = document.getElementById('planets');

tlacitkoNacistData.addEventListener('click', async () => {
    tlacitkoNacistData.disabled = true;
    nacitaniDiv.style.display = 'block';
    planetyDiv.innerHTML = '';
    try {
        const odpoved = await fetch('https://swapi.py4e.com/api/planets/');
        if (!odpoved.ok) {
            alert('Data se nepodařilo načíst');
        }
        const data = await odpoved.json();
        const planety = data.results;
        planety.forEach(planeta => {
            const planetElement = document.createElement('div');
            planetElement.innerHTML = `<strong>Planeta: </strong>${planeta.name}`;
            planetyDiv.appendChild(planetElement);
        });

    }  finally {
        tlacitkoNacistData.disabled = false;
        nacitaniDiv.style.display = 'none';
    }
});
