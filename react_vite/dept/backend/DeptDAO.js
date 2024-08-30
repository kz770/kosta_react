//const oracledb = require('oracledb');
import oracledb from "oracledb";

// sql 실행 결과를 자바스크립트 객체의 형식으로 출력
oracledb.outFormat=oracledb.OUT_FORMAT_OBJECT

let madang = {
    user          : "c##madang",
    password      : "madang",
    connectString : "localhost:1521/XE"
};

export let listDept = async () => {
    const connection = await oracledb.getConnection(madang);

    const result = await connection.execute(`SELECT * FROM dept order by dno`);
    // console.log("Result is:", result.rows);

    await connection.close();
    return result.rows;
}

export let insertDept = async (dept) => {
    const connection = await oracledb.getConnection(madang);

    const result = await connection.execute(`insert into dept(dno, dname, dloc) values(:dno, :dname, :dloc)`, dept);
    connection.commit();
    console.log("Result is:", result.rowsAffected);

    await connection.close();
    return result.rowsAffected;
}