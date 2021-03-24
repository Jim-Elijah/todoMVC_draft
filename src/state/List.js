import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <ul>
        {this.props.list.map((item) => {
          return <li key={item.key}>{item.title}</li>;
        })}
      </ul>
    
  }
}

export default List;
