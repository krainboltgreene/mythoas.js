exports.up = (knex) => {
  return knex
    .schema
    .createTable("metaResponses", (table) => {
      table.uuid("id").primary().notNullable().defaultTo(knex.raw("uuid_generate_v4()"))
      table.uuid("request_id").notNullable().index()
      table.jsonb("data").notNullable()
      table.jsonb("metadata").notNullable().defaultTo("{}")
      table.timestamp("created_at").notNullable().defaultTo(knex.fn.now()).index()
    })
}

exports.down = (knex) => {
  return knex
    .schema
    .dropTable("metaResponses")
}
