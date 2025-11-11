const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')

const actorDao = {

    table: 'actor',

    findActorInfo: (res, table)=> {

        const sql = `SELECT actor_id,
        CASE
            WHEN first_name IS NULL THEN ''
            ELSE first_name
            END first_name,
        CASE
            WHEN last_name IS NULL THEN ''
            ELSE last_name
            END last_name,
        img_url, m.title
        FROM actor
        LEFT OUTER JOIN movie_to_actor USING (actor_id)
        LEFT OUTER JOIN movie m USING (movie_id)
        ORDER BY actor_id;`

        con.query(
            sql,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    },

    findActorsByFirstNameStartLetter: (res, table, letter)=> {

        const sql = `SELECT actor_id, first_name, last_name FROM actor
        WHERE first_name LIKE ?;`
    
        con.query(
            sql,
            [`${letter}%`], (error, rows) => {
            queryAction(res, error, rows, table)
            }
        )
    }
}

module.exports = actorDao