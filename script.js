const btnEl = document.querySelector(".btn");
const idEl = document.querySelector(".id");
const quoteEl = document.querySelector(".quote-box");

const apiUrl = "https://api.adviceslip.com/advice"

   async function getAdvise(url) {
	   try {
		const response = await fetch(url);
		const data = await response.json();
		quoteEl.innerHTML = data.slip.advice;
		idEl.innerHTML = "#" + data.slip.id; 
	   } catch(error){
		   quoteEl.textContent = "An error occured, try again later...";
		   idEl.textContent = "";
	   }
}
getAdvise(apiUrl);

btnEl.addEventListener("click", ()=>{
	getAdvise(apiUrl);
});