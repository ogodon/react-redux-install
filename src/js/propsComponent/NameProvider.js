import React from 'react';

class NameProvider extends React.Component {
  render() {
    const childrenWithProps = React.Children.map(this.props.children, child => React.cloneElement(child, { name: 'My Name' }));
    return <div>{childrenWithProps}</div>;
  }
}

export default NameProvider;