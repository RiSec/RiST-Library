function commentAPI(query) {
  const books=getBooks()
  const comments=getComments()
  const histories=getHistory() 
    let commentView = []
    // 履歴の貸出IDから書籍IDを出す
         for(let j=0; j<books.length; j++){   
        const book=books[j] 
        const title=book.title
      const serchBookId2=book.bookId
      if(title=="Python自動処理"){
        for(let i=0; i<histories.length; i++){
      const history=histories[i]
      const historyID=history.lendingId
      const bookID=history.bookId
      if(serchBookId2==bookID){
 for(let k=0; k<comments.length; k++){
     const comSourse=comments[k]
   const comID=comSourse.lenndingID
  if(historyID==comID){
     commentView.push(book)
     commentView.push(comSourse)
      }
    }
      }
        }
      }        
         }         
       console.log(commentView)
  　　return commentView      
}