import React, {Component} from "react";
import './item-details.css'

const Record = ({item, field, label}) => {
    return(
        <li className={'list-group-item'}>
            <span className={'term'}>{label}: </span>
            <span>{item[field]}</span>
        </li>
    )
}

export {
    Record
}

export default class ItemDetails extends Component{

    state = {
        item: {},
        loading: true,
        error: false,
        image: null
    }

    componentDidMount(){
        console.log('componentDidMount()')
        this.updateItem();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.selectedItem !== prevProps.selectedItem){
            console.log('componentDidUpdate()')
            this.updateItem();
        }

    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateItem = () =>{
        const {selectedItem, getData, getImageUrl} = this.props;
        if (!selectedItem){
            return
        }
        getData(selectedItem)
            .then((item)=>{
                this.setState({
                    item: item,
                    loading: false,
                    error: false,
                    image: getImageUrl(item)
                });
            })
            .catch(this.onError)
    };


    render() {
        const {item, image} = this.state;
        if(!item){
            return <div>Please, choose item from list</div>
        }

        return(
            <div className="item-view card">
                <img src={image} alt={'person image'} className={'person-image'}/>
                <div className={'person-info'}>
                    <h2>{item.name}</h2>
                    <ul className="list-group list-group-flush">
                        {React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}



