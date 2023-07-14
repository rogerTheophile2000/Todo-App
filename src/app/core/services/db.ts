// db.ts
import Dexie, { Table } from 'dexie';
import { User } from './user.model';

export class AngularTodoDB extends Dexie {
  users! : Table<User, string>
  constructor(){
    super('AngularTodoDB');
    this.version(1).stores({
      users: 'nom, email, password'
    })
  }
}