const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')

const productionDao = {

    table: 'production',

    findProductionInfo: (res, table)=> {

        const sql = `SELECT production_id, production
                    FROM production
                    ORDER BY production_id;`

        con.query(
            sql,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    },

    totalNumOfProductions: (res, table)=> {

        const sql = `SELECT production_id, production, count(*) production_count
        FROM production
        LEFT OUTER JOIN movie m USING (production_id)
        GROUP BY production_id;`
        
        con.query(
            sql,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    }
}

module.exports = productionDao