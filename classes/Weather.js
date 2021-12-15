class Weather {
    constructor(city) {
        this.city = city
        this.key = '1be874f1963f5abf75004820b5bfd946'
    }

    async getWeather() {
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responceData = await responce.json()
        return responceData
    }

    changeCity(city) {
        this.city = city
    }
}