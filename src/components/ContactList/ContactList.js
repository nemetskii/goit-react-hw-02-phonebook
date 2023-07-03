import React from 'react';
import ContactListItem from './ContactListItem.js';
export default class ContactList extends React.Component {
  render() {
    return (
      <>
        <ul style={{ textAlign: 'center', listStyle: 'none' }}>
          {this.props.contacts.map(contact => (
            <ContactListItem
              key={contact.id}
              contact={contact}
              onDeleteButton={this.props.onDeleteButton}
            />
          ))}
        </ul>
      </>
    );
  }
}
