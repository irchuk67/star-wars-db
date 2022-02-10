import React, {Component} from "react";
import Header from "../Header/Header";
import Planet from "../RandomPlannetView/random-planet";
import './App.css'
import PeoplePage from "../Pages/people-page";
import {SwapiServiceProvider, SwapiServiceConsumer} from "../Swapi Service context/swapi-service-context";
import SwapiService from "../../services/swapi-service";

class App extends Component {
    swapiService = new SwapiService();
 /*   state = {
        selectedItem: 1
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }*/



    render() {
        return(
            <SwapiServiceProvider value={this.swapiService}>
                <div className={'wrapper'}>
                    <Header/>

                <Planet/>

                    <PeoplePage/>


                </div>
            </SwapiServiceProvider>



        )
    }


}

export default App;
