import path from 'node:path';

const pathToDBFile = path.join(process.cwd(), 'src', 'db', 'db.json');

export const PATH_DB = pathToDBFile;
