import db from 'mysql-query-wrapper';
const {query, insert, exists} = db();

export default function() {

  // With many callbacks things are going to get a bit ugly
  return createUserTable().then(() => {
    console.log('Inserting some users - serial');

    return insert('user', {firstName: 'Bill', lastName: 'Jones'}).then(() =>
      insert('user', {firstName: 'Jimmy', lastName: 'Green'})
    );
  }).then(() => {
    console.log('Inserting some users - parallel');

    return Promise.all([
      insert('user', {firstName: 'Benny', lastName: 'Greg'}),
      insert('user', {firstName: 'Jenny', lastName: 'Smith'})
    ])
  }).then(() => exists('user', ['firstName', 'Jenny']).then(console.log));
}

// Create some random user database
const createUserTable = () => {
  // First drop the table
  return query('drop table if exists user;').then(() =>
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
    )
  );
}
