import { useState, useEffect } from 'react';
import axios from 'axios';

const ContactForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [contacts, setContacts] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const existingContactIndex = contacts.findIndex(contact => contact.email === email);
      if (existingContactIndex !== -1) {
        const existingContact = contacts[existingContactIndex];
        await axios.delete(`https://crudcrud.com/api/edaed815b14948669e30d3dc2bf14e5a/contacts/${existingContact._id}`);
        console.log('Contact deleted:', existingContact);
      }
      const newContact = {
        name: name,
        email: email,
        phone: phone
      };
      const response = await axios.post('https://crudcrud.com/api/edaed815b14948669e30d3dc2bf14e5a/contacts', newContact, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Contact added:', response.data);
      setName('');
      setEmail('');
      setPhone('');
      fetchContacts();
    } catch (error) {
      console.error('Error adding/updating contact:', error);
    }
  };

  const fetchContacts = async () => {
    try {
      const response = await axios.get('https://crudcrud.com/api/edaed815b14948669e30d3dc2bf14e5a/contacts');
      console.log('Contacts:', response.data);
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleEditClick = (contact) => {
    setName(contact.name);
    setEmail(contact.email);
    setPhone(contact.phone);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="container">
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input type="tel" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <h2>Contacts</h2>
      <ul className="list-group">
        {contacts.map((contact, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {contact.name} - {contact.email} - {contact.phone}
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => handleEditClick(contact)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactForm;