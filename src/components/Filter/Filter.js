import React from 'react';

export default class Filter extends React.Component {
  render() {
    return (
      <>
        <label style={{ display: 'flex', justifyContent: 'center' }}>
          Find contacts by name
          <input
            type="text"
            value={this.props.value}
            name="filter"
            onChange={this.props.changeValue}
          />
        </label>
      </>
    );
  }
}
