//oracledb 값을 변경할 수 없도록 oracledb를 요청하고 const 로 선언한다.
const oracledb = require("oracledb");
//Promise 형태가 아닌 json 형태로 내보내기 위하여 다음 설정을 한다.
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
//getConnection 메소드에 필요한 객체를 따로 변수로 선언해준다.
let madang = {
    user:"c##madang",
    password:"madang",
    connectionString:"localhost:1521/XE"
}
let listBook = async()=>{
    //커넥션을 얻는다. 
    //매개변수로 객체를 주는데, 이 connection 또한 변하면 안되므로, const 로 선언한다.
    //최신 스크립트 방식에서 비동기 방식으로 작업되는데, 이 함수들은 promise 형태로 반환을 한다.
    //이 함수 실행 결과가 성공, 실패할 수 있는데, 원래는 then, catch 방식으로 작업한다.
    //await 를 쓰려면 기본적으로 비동기 함수이다. 이것을 명시하는 것이 async 키워드이다.
    //프라미스가 처리될 때까지 함수 실행을 기다리게 만듭니다
    //Promise 객체는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타낸다.
    let conn = await oracledb.getConnection(madang);

    //db구분으로 다음의 사이트 참조
    //https://node-oracledb.readthedocs.io/en/latest/user_guide/sql_execution.html
    const result = conn.execute(
        `SELECT *
        FROM book`
    );

    //connection 을 받을 때까지 기다리라는 뜻
    //자원 닫기
    await conn.close();

    //result 의 rows 값을 반환한다.
    return (await result).rows;
}

//등록을 위한 메소드
let insertBook = async (book)=>{
    let conn = await oracledb.getConnection(madang);
    const result = await conn.execute(`insert into book(bookid, bookname, price, publisher) values(:bookid, :bookname, :price, :publisher)`,book);
    //DB 에 변동이 생겼으므로 commit 메소드를 사용해준다.
    conn.commit();
    let re = result.rowsAffected;
    console.log("Rows inserted : " + re);
    //connection 을 받을 때까지 기다리라는 뜻
    //자원 닫기
    await conn.close();

    //result 의 rows 값을 반환한다.
    return re+"";
}

//수정을 위한 메소드
let updateBook = async (book)=>{
    let conn = await oracledb.getConnection(madang);
    const result = await conn.execute(`update book set bookname=:bookname, price=:price, publisher=:publisher where bookid=:bookid`, book);
    //DB 에 변동이 생겼으므로 commit 메소드를 사용해준다.
    conn.commit();
    let re = result.rowsAffected;
    console.log("Rows inserted : " + re);
    //connection 을 받을 때까지 기다리라는 뜻
    //자원 닫기
    await conn.close();

    //result 의 rows 값을 반환한다.
    return re+"";
}

//삭제를 위한 메소드
let deleteBook = async (bookid)=>{
    let conn = await oracledb.getConnection(madang);
    let sql = "delete book where bookid="+bookid;
    const result = await conn.execute(sql);
    //DB 에 변동이 생겼으므로 commit 메소드를 사용해준다.
    conn.commit();
    let re = result.rowsAffected;
    console.log("Rows inserted : " + re);
    //connection 을 받을 때까지 기다리라는 뜻
    //자원 닫기
    await conn.close();

    //result 의 rows 값을 반환한다.
    return re+"";
}

//새로운 번호를 발행하는 메소드
let getNextBookID = async ()=>{
    let conn = await oracledb.getConnection(madang);
    const result = await conn.execute('select nvl(max(bookid), 0)+1 bookid from book');

    //자원 닫기
    await conn.close();
    //select 된 것의 0번째의 BOOKID 속성을 반환한다.
    return result.rows[0].BOOKID;
}
//listBook 을 exports(내보내기)한다.
module.exports={listBook, insertBook, getNextBookID, updateBook, deleteBook};