let Form = () => {
    let submitForm = (url) => {
        console.log(url)    // button이 전달하는 파라미터에 따라서 url이 달라진다

        let form = document.getElementById("bookForm");
        let formData = new FormData(form);    //자바스크립트가 만들어놓은 객체로 만들어준다
        let doc = Object.fromEntries(formData.entries());
        console.log(doc)
        const axiosConfig = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }
        axios.post(url, doc, axiosConfig).then((res) => {
            location.reload();  //다시 ajax 통신해서 list를 가져오겠다
        }); //이해가 안가^^
    }
    return <form id="bookForm">
        <input type="hidden" id="bookid" name="bookid"/>
        <label>BOOKNAME</label>
        <input type="text" name="bookname" id="bookname"/>
        <br/>
        <label>PRICE</label>
        <input type="text" name="price" id="price"/>
        <br/>
        <label>PUBLISHER</label>
        <input type="text" name="publisher" id="publisher"/>
        <br/>
        <input type="button" value="submit" onClick={()=>submitForm("/insert")}/>
        <input type="button" value="modify" onClick={()=>submitForm("/update")}/>
        <input type="button" value="delete" onClick={()=>submitForm("/delete")}/>
    </form>
}