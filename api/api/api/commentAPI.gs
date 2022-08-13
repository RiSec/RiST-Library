function commentAPI() {
  const books=getBooks()
  const comment=getComments()
  const histories=getHistory()  
    let commentView = []
    //コメントがあるものの書籍IDを取得
     for(let k=0; k<comment.length; k++){
      const comSourse=comment[k]
      //履歴の貸出IDから書籍IDを出す
        for(let i=0; i<histories.length; i++){
      const history=histories[i]
      const historyID=history.lendingId
      const bookID=history.bookId
      const comText=comSourse.comText
      const comID=comSourse.lendingID
      if(comID== historyID){
       commentView.push(comText)
         for(let j=0; j<books.length; j++){   
        const book=books[j] 
        const title=book.title
        const image=book.image
      const serchBookId2=book.bookId
      if(serchBookId2==bookID){
      commentView.push(title)
        commentView.push(image)
      }
      }       
      }
      }
    }
console.log(commentView)
  　　return commentView
}