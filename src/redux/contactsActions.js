export const addContact = contact => ({
  type: 'contacts/addContact',
  payload: contact,
});

export const deleteContact = contactId => ({
  type: 'contacts/deleteContact',
  payload: contactId,
});

export const setFilter = value => ({
  type: 'contacts/setFilter',
  payload: value,
});
