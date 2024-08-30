// const oracledb = require('oracledb');
import oracleDB from "oracledb";

let madang={
    user         : "c##madang",
    password     : "madnag",
    connectString:"localhost:1521/XE"
}

export let listDept = async()=>{
    const connection = await oracledb.getConnection(madang)
    const result = await connection.execute(`SELECT * FROM dept`);
    console.log("Result is:", result.rows);
    await connection.close();   // Always close connections
    return result.rows;
}
