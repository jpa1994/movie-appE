const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')

const genreDao = {

    table: 'genre',

    findGenreInfo: (res, table)=> {

        const sql= `SELECT g.genre_id, g.genre, m.title
        FROM genre g
        LEFT OUTER JOIN movie_to_genre mtg USING (genre_id)
        LEFT OUTER JOIN movie m USING (movie_id)
        ORDER BY g.genre_id;`

        con.query(
            sql,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    },

    findNumberofEachGenre: (res, table)=> {

        const sql = `SELECT genre_id, g.genre, count(*)
                    FROM genre g
                    LEFT OUTER JOIN movie_to_genre mtg USING (genre_id)
                    GROUP BY g.genre_id;`
        
        con.query(
            sql,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    }
}

module.exports = genreDao