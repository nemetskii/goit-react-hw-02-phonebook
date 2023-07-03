import React from 'react';
import AddContactForm from './AddContactForm/AddContactForm.js';
import ContactList from './ContactList/ContactList.js';
import Filter from './Filter/Filter.js';
import { nanoid } from 'nanoid';

export default class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = formState => {
    const { name, number } = formState;
    const contact = { name: name, number: number, id: nanoid(4) };
    let isNameInContatcs = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isNameInContatcs) {
      alert('Такое имя уже существует в контактах');
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  changeFilter = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
        <AddContactForm onAddContact={this.addContact} />
        <h2 style={{ textAlign: 'center' }}>Contacts</h2>
        <Filter changeValue={this.changeFilter} value={this.state.filter} />
        <ContactList
          contacts={filteredContacts}
          onFilterChange={this.updateInputState}
          onDeleteButton={this.deleteContact}
        />
      </div>
    );
  }
}
