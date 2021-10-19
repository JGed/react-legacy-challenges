import React from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      results: []
    }
  }
  

 searchFunction = () => {
    this.setState(prevState => ({results: prevState.things.filter(thing => thing === this.state.search || this.state.search === '')}))
 }
 render() {
   return (
     <div>
       <Input placeholder='Search Here' value={this.state.search} onChange={e => this.setState({search: e.target.value})}/>
       <button onClick={this.searchFunction}>Search</button>
       <h3>Results:</h3>
       {this.state.results.map(result => (<p key={result}>{result}</p>))}
     </div>
   );
 }
}

 
export default SearchIndex;
