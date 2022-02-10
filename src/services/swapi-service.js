export default class SwapiService{
    _apiBase = 'https://swapi.dev/api';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok){
            throw new Error(`Could not fetch ${this._apiBase}${url}, receive ${res.status}`);
        }
        const body = await res.json();
        return body;
    };

     getAllPeople = async () => {
        const res = await this.getResource('/people/');
        return res.results.map(this._transformPerson);
    };

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    };

    getAllPlanets = async () => {
        const res = await this.getResource('/planets/');
        return res.results.map(this._transformPlanet);
    };

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    };

    getAllStarships = async () => {
        const res = await this.getResource('/starships/');
        return res.results.map(this._transformStarship);
    };

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    };

    _extractId(item){
        const idRegExp = /\d/g;
        if(item.url.match(idRegExp)[1]){
            return item.url.match(idRegExp)[0]+item.url.match(idRegExp)[1]
        }
        return item.url.match(idRegExp);
    };

    _transformPlanet = (planet)=>{
        return{
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotatingPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    };

    _transformPerson = (person)=>{
        return{
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        };
    };

    _transformStarship = (starship) => {
        return{
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passangers: starship.passangers,
            cargoCapacity: starship.cargoCapacity,
        };
    };

    _imgBase = 'https://starwars-visualguide.com/assets/img';


    getPersonImage = ({id}) => {
        return `${this._imgBase}/characters/${id}.jpg`
    }

    getPlanetImage = ({id}) => {
        return `${this._imgBase}/planets/${id}.jpg`
    }

    getStarshipImage = ({id}) => {
        return `${this._imgBase}/starships/${id}.jpg`
    }
}


/*
const tester = new SwapiService();
tester.getAllPlanets.then((body)=>{console.log(body.name)})*/
