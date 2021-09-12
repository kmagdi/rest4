const getFetch=()=>{
	const url='http://localhost:8080/books'
	fetch(url)
  		.then(response => response.json())
  		.then(data => renderBooks(data));
}
const renderBooks=(books)=>{
    document.querySelector('.container').innerHTML=books.map(book => 
        `<div class="t">
			<h2>${book.author}</h2>
			<div class="m">${book.title}</div>
		</div>`).join('');
}
