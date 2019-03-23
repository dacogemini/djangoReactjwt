import React, { Component } from 'react';
import List from '../elements/List';
import Additional from '../elements/Additional';



class Catalog extends Component {
  render() {
    return (
        <div>
          <List />
          <Additional />
        </div>
    );
  }
}

export default Catalog;