import oracledb from 'oracledb';

//sql실행결과를 자바스크립트 객체의 형식으로 출력
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
let madang = {
    user:"c##madang",
    password:"madang",
    connectionString:"localhost:1521/XE"
}

export let listBook = async ()=>{
    let conn = await oracledb.getConnection(madang);
    const result = await conn.execute( `select * from book`);
    await conn.close();
    return result.rows;
}

export let insertBook = async (book)=>{
    let conn = await oracledb.getConnection(madang);
    const result = await conn.execute( `insert into book(bookid,bookname,price,publisher) values(:bookid, :bookname, :price, :publisher)`, book);
    conn.commit();
    let re = result.rowsAffected;
    console.log("Rows inserted :"+re);    
    await conn.close();
    return re+"";
}

export let updateBook = async (book)=>{
    let conn = await oracledb.getConnection(madang);
    const result = await conn.execute( `update book set bookname=:bookname,price=:price,publisher=:publisher where bookid=:bookid`, book);
    conn.commit();
    let re = result.rowsAffected;
    console.log("Rows inserted :"+re);    
    await conn.close();
    return re+"";
}

export let deleteBook = async (bookid)=>{
    let conn = await oracledb.getConnection(madang);
    let sql = "delete book where bookid="+ bookid;
    const result = await conn.execute(sql);
    conn.commit();
    let re = result.rowsAffected;
    console.log("Rows inserted :"+re);    
    await conn.close();
    return re+"";
}

export let getNextBookID = async ()=>{
    let conn = await oracledb.getConnection(madang);
    const result = await conn.execute( `select nvl(max(bookid),0) +1 bookid  from book`);
    await conn.close();
    return result.rows[0].BOOKID;
}








