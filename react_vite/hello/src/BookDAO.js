// 옛날에는 var를 사용했고
// 요새는 let을 권장한다
// 변하지 않는 변수는 const를 사용한다
const oracledb = require("oracledb");

//sql 실행결과를 js 객체 형태로 응답해주세요 ??
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

let madang = {
    user: "c##madang",
    password: "madang",
    connectString: "localhost:1521/XE"
}


//모든 도서 목록을 조회해서 반환하는 메서드 만들기
let findAll = async () => {
    // java의 drivermaneger.getconnection의 역할
    // db와의 연결을 위한 getconnection 함수는 비동기 작업을 수행한다.
    // 즉, 이 작업이 끝나지 않더라도 다른 작업이 이루어지게된다.
    // 최신 스크립트에서는 비동기 작업 함수들의 반환 타입이 promise이다.
    // 원래는 끝에 .then.catch로 성공/실패시의 작업을 정해주었다.
    let conn = await oracledb.getConnection(madang)  //db연결 정보를 반환하고, 변경되면 안되므로 const 변수로 받아준다.
    const result = await conn.execute(`SELECT * FROM book order by bookid`);
    await conn.close();   // awati -> 닫을때까지 기다려!!
    return result.rows;
}

let insertBook = async (book) => {
    let conn = await oracledb.getConnection(madang);
    const result = await conn.execute(`insert into book(bookid,bookname,price,publisher) values(:bookid, :bookname,:price,:publisher)`, book)
    conn.commit();
    console.log("Rows inserted : " + result.rowsAffected)
    await conn.close;
    return result.rowsAffected;
}
let updateBook = async (book) => {
    let conn = await oracledb.getConnection(madang);
    const result = await conn.execute(`update book set bookname=:bookname, price=:price, publisher=:publisher where bookid=:bookid`, book)
    conn.commit();
    console.log("Rows inserted : " + result.rowsAffected)
    await conn.close;
    return result.rowsAffected;
}

let getNextBookID = async () => {
    let conn = await oracledb.getConnection(madang);
    const result = await conn.execute(`select nvl(max(bookid),0)+1 bookid from book`)
    await conn.close;
    return result.rows[0].BOOKID;
}

let deleteBook = async (bookid) => {
    let conn = await oracledb.getConnection(madang);
    const result = await conn.execute(`delete book where bookid=:bookid`, bookid)
    conn.commit();
    console.log("Rows inserted : " + result.rowsAffected)
    await conn.close;
    return result.rowsAffected;
}



module.exports = { findAll, insertBook, getNextBookID, updateBook, deleteBook };