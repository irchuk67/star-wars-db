import React, {Component} from "react";
import Loader from "../../loader/loader";

const withData = (View) => {
    return class extends Component{
        state = {
            data: []
        };

        componentDidMount(){
            this.props.getData()
                .then((list) => {
                    this.setState({
                        data: list
                    });

                })
        }

        render() {
            const {data} = this.state;

            if(!data) {
                return <Loader/>;
            }

            return(
                <View {...this.props} data={data}/>
            )
        }

    }
}

export default withData;

