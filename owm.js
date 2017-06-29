const cities = {
  london: { lat: 51.5074, lon: 0.1278},
  seattle: { lat: 47.6762, lon: -122.3182 }
}

let handleClick = (city) => {
  getWeather(city)
    .then((data) => { console.log(JSON.parse(data)) })
    .catch((error) => { console.log(`oh noes! ${error}`) })
}

let getWeather = (city) => {
  const apiKey = "1156c7740f54a386f697a0e12d9c769f"
  const coords = cities[city]
  const apiURL = "http://api.openweathermap.org/data/2.5/weather"
  const queryString = `?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`
  const requestURL = `https://cors-anywhere.herokuapp.com/${apiURL}${queryString}`

  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest()

    request.open('GET', requestURL, true)
    request.onload = () => { resolve(request.response) }
    request.onerror = (error) => { reject(error) }
    request.send()
  })
}
