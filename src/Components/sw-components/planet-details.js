import React from "react";
import withSwapiService from "../hoc-helpers/with-swapi-service";
import ItemDetails, {Record} from "../item-details/item-details";

const PlanetDetails = (props) =>{
    return(
        <ItemDetails {...props}>
            <Record field={'population'} label={'Population'}/>
            <Record field={'rotatingPeriod'} label={'Rotation period'}/>
            <Record field={'diameter'} label={'Diameter'}/>
        </ItemDetails>
    )

};

const makeMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage

    }
}

export default  withSwapiService(PlanetDetails, makeMethodsToProps);