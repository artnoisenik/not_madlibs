
exports.up = function(knex, Promise) {
  return Promise.all([

    knex.schema.createTable('users', function( table ){
      table.increments();
      table.string('userName');
      table.string('password');
    }),
    knex.schema.createTable('strains', function( table ){
      table.increments();
      table.string('word');
    }),
    knex.schema.createTable('types', function( table ){
      table.increments();
      table.string('word');
    }),
    knex.schema.createTable('places', function( table ){
      table.increments();
      table.string('word');
    })

  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([

    knex.schema.dropTable('users'),
    knex.schema.dropTable('strains'),
    knex.schema.dropTable('types'),
    knex.schema.dropTable('places')

  ])
};
