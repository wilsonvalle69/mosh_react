import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    // tags: ['tag-1', 'tag-2', 'tag-3', 'tag-4'],
  };

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map((tag) => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClassess()}>{this.formatCount()}</span>
        <button
        //   onClick={ () => this.handleIncrement(product)}
          onClick={ () => this.handleIncrement({id:9})}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* {this.state.tags.length === 0 && 'Please enter a new Tag'}
        {this.renderTags()} */}
      </React.Fragment>
    );
  }

  getBadgeClassess() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
