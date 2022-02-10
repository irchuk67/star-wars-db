import React, {Component} from "react";
import SwapiService from '../../services/swapi-service';
import './random-planet.css';
import Loader from "../loader/loader";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

class Planet extends Component{
    swapiService = new SwapiService();



    state = {
        planet:{},
        loading: true
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        });

    };

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 1500);
    }


    componentWillUnmount() {
        clearInterval(this.interval)
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet = () => {
        console.log('update')
        const id = Math.floor(Math.random()*35) +2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }



    render() {
        const {planet, loading, error} = this.state;

        const hasData = !(loading || error);

        const err = error ? <ErrorIndicator/> : null;
        const loader = loading ? <Loader/> : null;
        const classN = (loading || error) ? null : 'planet-wrapper';
        const content = hasData ? <PlanetView planet={planet}/> : null;

        return(
            <div className={classN}>
                {loader}
                {err}
                {content}
            </div>
        )
    }
}

const PlanetView = ({planet}) => {
    const { id, name, population, rotatingPeriod, diameter} = planet;
    return(
        <React.Fragment>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={'planet-view'} className="planet-img"/>
            <div className="planet-info card-body">
                <h2>{name}</h2>
                <ul className="list-group list-group-flush">
                    <li className={'list-group-item'}>
                        <span className={'term'}>Population: </span>
                        <span>{population}</span>
                    </li>
                    <li className={'list-group-item'}>
                        <span className={'term'}>Rotation period: </span>
                        <span>{rotatingPeriod}</span>
                    </li>
                    <li className={'list-group-item'}>
                        <span className={'term'}>Diameter: </span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )

}


export default Planet;