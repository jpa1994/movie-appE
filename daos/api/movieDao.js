const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')

const movieDao = {

    table: 'movie',

    findMovieInfo: (res, table)=> {

        const sql = `SELECT movie_id, m.title, m.rating, m.runtime, m.nationality, m.yr_released, m.budget, m.gross, production, m.showing, poster
        FROM movie m
        LEFT OUTER JOIN production USING (production_id)
        ORDER BY movie_id;`

        con.query(
            sql,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    },

    findFourOldestMovies: (res, table)=> {

        const sql = `SELECT title, yr_released
        FROM movie
        ORDER BY yr_released LIMIT 4;`

        con.query(
            sql,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    }
}

module.exports = movieDao