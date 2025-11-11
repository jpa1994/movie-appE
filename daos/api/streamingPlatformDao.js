const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')

const streamingPlatformDao = {

    table: 'streaming_platform',

    findStreamingPlatformInfo: (res, table)=> {

        const sql = `SELECT sp.streaming_platform_id, sp.streaming_platform
        FROM streaming_platform sp
        ORDER BY sp.streaming_platform_id;`

        con.query(
            sql,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    },

    findStreamingPlatformCount: (res, table)=> {

        const sql = `SELECT sp.streaming_platform_id, sp.streaming_platform,
        COUNT(mts.movie_id) AS platform_count
        FROM streaming_platform sp
        LEFT JOIN movie_to_streaming mts
        ON sp.streaming_platform_id = mts.streaming_platform_id
        GROUP BY sp.streaming_platform_id, sp.streaming_platform
        ORDER BY platform_count DESC`

        con.query(
            sql,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    }
}

module.exports = streamingPlatformDao