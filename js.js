const tlacitkoNacistData = document.getElementById('fetchDataBtn');
const nacitaniDiv = document.getElementById('loading');
const planetyDiv = document.getElementById('planets');

tlacitkoNacistData.addEventListener('click', async () => {
    tlacitkoNacistData.disabled = true;
    nacitaniDiv.style.display = 'block';
    planetyDiv.innerHTML = '';
    try {
        const odpoved = await fetch('https://swapi.py4e.com/api/planets');
        if (!odpoved.ok) {
            alert('Data se nepodařilo načíst');
        }
        const data = await odpoved.json();
        const planety = data.results;
        planety.forEach(planeta => {
            const planetDiv = document.createElement('div');

            const jmeno = document.createElement('div');
            jmeno.innerHTML = `<strong>Název planety: </strong>${planeta.name}`;
            planetDiv.appendChild(jmeno);

            const prumer = document.createElement('div');
            prumer.innerHTML = `<strong>Průměr planety: </strong>${planeta.diameter}`;
            planetDiv.appendChild(prumer);

            planetyDiv.appendChild(planetDiv);
        });

    }  finally {
        tlacitkoNacistData.disabled = false;
        nacitaniDiv.style.display = 'none';
    }
});
