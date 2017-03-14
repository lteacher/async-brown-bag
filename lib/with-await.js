import db from 'mysql-query-wrapper';
const {query, insert, exists} = db();

export default async function() {

  await createUserTable();

  console.log('Inserting some users - serial');

  // Insert a couple of users, this is async but serial
  await insert('user', {firstName: 'Bill', lastName: 'Jones'});
  await insert('user', {firstName: 'Jimmy', lastName: 'Green'});

  console.log('Inserting some users - parallel');

  // Insert some more users, in parallel
  await Promise.all([
    insert('user', {firstName: 'Benny', lastName: 'Greg'}),
    insert('user', {firstName: 'Jenny', lastName: 'Smith'})
  ]);

  // Check, and log the existence of some user, this is async!
  console.log(await exists('user', ['firstName', 'Jenny']));
}

// Create some random user database
const createUserTable = async () => {
  // First drop the table
  await query('drop table if exists user;');

  // Then create the table
  query(
    `create table user(
      id int not null auto_increment,
      firstName varchar(255),
      lastName varchar(255),
      username varchar(40),
      password varchar(40),
      primary key (id)
    );`
  );
}
