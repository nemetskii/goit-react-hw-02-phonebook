import React from 'react';

export default class ContactListItem extends React.Component {
  render() {
    return (
      <>
        <li style={{ marginBottom: '10px' }}>
          <span>
            {this.props.contact.name}: {this.props.contact.number}
          </span>
          <button
            type="button"
            onClick={() => {
              this.props.onDeleteButton(this.props.contact.id);
            }}
          >
            Delete
          </button>
        </li>
      </>
    );
  }
}
