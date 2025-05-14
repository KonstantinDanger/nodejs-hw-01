import { PATH_DB } from '../constants/contacts.js';

import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const jsonContacts = JSON.stringify(updatedContacts);
    await fs.writeFile(PATH_DB, jsonContacts);
  } catch (error) {
    throw new Error(error.message);
  }

  return true;
};
