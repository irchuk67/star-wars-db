import React from "react";
import List from "../List/item-list";
import withSwapiService from "../hoc-helpers/with-swapi-service";
import withData from "../hoc-helpers/with-data/with-data";


const withChildren = (View, func) => {
    return (props) => {
        return(

            <View {...props} >
                {func}
            </View>
            )

    }
}

const renderName = ({name}) => <span>{name}</span>;

const renderModelAndName = ({model, name}) => <span>{name}({model})</span>;

const mapPersonMethodsToProps = (swapiService) => {
  return{
      getData: swapiService.getAllPeople
  }
};

const mapPlanetMethodsToProps = (swapiService) => {
  return{
      getData: swapiService.getAllPlanets
  }
};

const mapStarshipMethodsToProps = (swapiService) => {
  return{
      getData: swapiService.getAllStarships
  }
};


const PersonList =  withSwapiService(
                        withData(
                            withChildren(List, renderName)
                        ), mapPersonMethodsToProps
                    );

const PlanetList = withSwapiService(
    withData(
        withChildren(List, renderName)),
    mapPlanetMethodsToProps);

const StarshipList = withSwapiService(
    withData(
        withChildren(List, renderModelAndName)),
    mapStarshipMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
}