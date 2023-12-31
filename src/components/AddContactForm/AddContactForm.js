import React from 'react';
import css from './AddContactForm.module.css';
export default class AddContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  updateInputState = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form
        className={css.contactForm}
        onSubmit={evt => {
          evt.preventDefault();
          this.props.onAddContact(this.state);
          this.resetForm();
        }}
      >
        <label className={css.contactForm__label}>
          Name
          <input
            onChange={this.updateInputState}
            type="text"
            name="name"
            pattern="^[A-Za-z\u0080-\uFFFF ']+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
          />
        </label>
        <label className={css.contactForm__label}>
          Number
          <input
            type="tel"
            onChange={this.updateInputState}
            name="number"
            value={this.state.number}
            pattern="^(\+?[0-9.\(\)\-\s]*)$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></input>
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
