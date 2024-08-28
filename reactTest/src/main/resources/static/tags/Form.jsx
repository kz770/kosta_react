let Form = () => {
    let submitForm = () => {
        let form = document.getElementById("bookForm");
        let formData = new FormData(form);    //자바스크립트가 만들어놓은 객체로 만들어준다
        let doc = Object.fromEntries(formData.entries());
        console.log(doc)
        const axiosConfig = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }
        axios.post("/insert", doc, axiosConfig).then((res) => {
            location.reload();  //다시 ajax 통신해서 list를 가져오겠다
        }); //이해가 안가^^
    }
    return <form id="bookForm">
        <input type="hidden" id="bookid"/>
        <label>BOOKNAME</label>
        <input type="text" name="bookname" id="bookname"/>
        <br/>
        <label>PRICE</label>
        <input type="text" name="price" id="price"/>
        <br/>
        <label>PUBLISHER</label>
        <input type="text" name="publisher" id="publisher"/>
        <br/>
        <input type="button" value="submit" onClick={()=>submitForm()}/>
    </form>
}