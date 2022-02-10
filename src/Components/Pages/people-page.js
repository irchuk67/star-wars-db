import React, {Component} from "react";
import Row from "../Row/Row";
import {PersonDetails, PersonList} from "../sw-components";


export default class PeoplePage extends Component{
    state ={
        selectedPerson: 1
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }
    render() {
        return(
            <Row left={<PersonList onItemSelected={this.onPersonSelected}/>} right={<PersonDetails selectedItem={this.state.selectedPerson} />}/>
        )
            }
}