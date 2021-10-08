import React from 'react'

class DogIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dog: ''
        }
    }

    componentDidMount() {
        fetch('https://dog.ceo/api/breeds/image/random').then(res => res.json()).then(json => this.setState({dog: json.message})).catch(err => console.log(err));
    }
    handleClick = () => {
        fetch('https://dog.ceo/api/breeds/image/random').then(res => res.json()).then(json => this.setState({dog: json.message})).catch(err => console.log(err));
    }
    render() { 
        return (
            <div>
                <div>
                    <img height='600' width='600' src={this.state.dog} alt='dog' />
                </div>
                <button onClick={this.handleClick}>get new dog</button>
            </div>
        );
    }
}

export default DogIndex;