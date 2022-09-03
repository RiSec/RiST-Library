function newBooksAPI() {
  //二週間前
     var date = new Date();
  var today = Utilities.formatDate(date, 'JST', 'yyyy/MM/dd');
  var day = date.getDate();
  date.setDate(day-14);
  var twoWeeksAgo = Utilities.formatDate(date, 'JST', 'yyyy/MM/dd');;
 //新しい本の追加
 const books=getBooks()
    let newBooks = []
    for(let i=0; i<books.length; i++){
      const book=books[i]
      const day1= book.registration
　　　const day2= twoWeeksAgo

if(day1>day2){
  newBooks.push(book)
}
    }
 　console.log(newBooks)   
}