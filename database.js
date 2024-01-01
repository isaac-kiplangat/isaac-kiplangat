// database.js

import PouchDB from 'pouchdb-browser';
import data from './data.json';

const dbName = 'your-database-name';
const docId = 'your-doc-id';

const db = new PouchDB(dbName);

const initializeDatabase = async () => {
  try {
    await db.put({
      _id: docId,
      ...data,
    });
    console.log('Data added to PouchDB successfully.');
  } catch (error) {
    console.error('Error adding data to PouchDB:', error);
  }
};

const fetchData = async () => {
  try {
    const result = await db.get(docId);
    console.log('Data from PouchDB:', result);
  } catch (error) {
    console.error('Error fetching data from PouchDB:', error);
  }
};

export { db, initializeDatabase, fetchData };
