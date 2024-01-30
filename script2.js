const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e13b9a0ea8msh93c481172d985acp12dc5cjsn0f6fe8b7050b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>{
	cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {


		cloud_pct.innerHTML= response.cloud_pct
		temp.innerHTML= response.temp
		temp2.innerHTML= response.temp
		feels_like.innerHTML= response.feels_like
		humidity.innerHTML= response.humidity
		humidity2.innerHTML= response.humidity
		min_temp.innerHTML= response.min_temp
		//  max_temp2.innerHTML= response.max_temp
		wind_speed.innerHTML= response.wind_speed
		wind_speed2.innerHTML= response.wind_speed
		wind_degrees.innerHTML= response.wind_degrees
		sunrise.innerHTML= response.sunrise
		sunset.innerHTML= response.sunset
	})
	.catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Pune");