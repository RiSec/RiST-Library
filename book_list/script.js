const api = '' //URLを挿入
fetch(api)
    .then(res => res.json())
    .then(date => tenki(data))

function book(data) {
    let s = ''
    const first = data[319] //319が何ものかわからないまま書いている
    for (let row of first){
        console.log(row) //デバッグ表示とは？？
        s +=`
        <h3>${row['book_name']}</h3>
        <ul><li>${row['categly']}
        <li>${row['year']}</li>
        <li>${row['register_day']}</li>
        <li>${row['book_id']}</li></ul> //書式設定はでいてない
        `
    }
    document.write(s)
}