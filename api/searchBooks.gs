function searchBooksAPI(query) {
    // 本一覧を取得
    const books=getBooks()
    let foundBooks = []
    for(let i=0; i<books.length; i++){
      const book=books[i]
      const title=book.title
      if(title.indexOf(query)>=0){
       foundBooks.push(book)
      }
    }
  　　return foundBooks
  }
  
  
  function searchBooksAPITest() {
    const query = "Python";
    const foundBooks = searchBooksAPI(query);
    console.log(foundBooks)　
  }