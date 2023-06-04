async function getData () {

const url = 'https://airvisual1.p.rapidapi.com/v2/auto-complete?q=Vietnam&x-user-lang=en-US&x-user-timezone=Asia%2FSingapore&x-aqi-index=us&x-units-pressure=mbar&x-units-distance=kilometer&x-units-temperature=celsius';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3a32362989msh6c6894142956825p122ef0jsn7d3651f0377a',
		'X-RapidAPI-Host': 'airvisual1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
    let data = JSON.parse(result);
    console.log(data.data.cities[0].currentMeasurement.aqius);
    document.getElementById("aqius").textContent = `AQI US :  ${data.data.cities[0].currentMeasurement.aqius}`;
    console.log(data.data.news[1].url)
    let link = document.getElementById("url");
    link.href = data.data.news[1].url;
} catch (error) {
	console.error(error);
}
}
getData();