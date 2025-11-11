const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')

const directorDao = {

    table: 'director',

    findDirectorInfo: (res, table)=> {

        const sql = `SELECT director_id,
        CASE
            WHEN first_name IS NULL THEN ''
            ELSE first_name
            END first_name,
        CASE
        WHEN last_name IS NULL THEN ''
        ELSE last_name
        END last_name,
        m.title
        FROM director
        LEFT OUTER JOIN movie_to_director USING (director_id)
        LEFT OUTER JOIN movie m USING (movie_id)
        ORDER BY director_id;`

        con.query(
            sql,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    },

    findDirectorsByLastNameStartLetter: (res, table, letter)=> {

        const sql = `SELECT director_id, first_name, last_name FROM director
        WHERE last_name LIKE ?;`
    
        con.query(
            sql,
            [`${letter}%`], (error, rows) => {
            queryAction(res, error, rows, table)
            }
        )
    }
}

module.exports = directorDao