const loadPhones = async (searchText,datalimit) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhone(data.data,datalimit);
};

const displayPhone = (phones,datalimit) => {
  console.log(phones);
   const container = document.getElementById("phone-container");
   container.textContent=" ";
   const showButton = document.getElementById("show-all");
   if(datalimit && phones.length>15){
    phones = phones.slice(0, 15);
    showButton.classList.remove("d-none");
   }
   else{
    showButton.classList.add("d-none");
   }
   
   const noPhone=document.getElementById("no-found");
   if(phones.length===0){
    noPhone.classList.remove("d-none");
    toggleLoader(false);
   }
   else{
    noPhone.classList.add("d-none");
   }
  phones.forEach(phone=>{
    const newPhoneElement=document.createElement("div");
    newPhoneElement.classList.add("col");
    newPhoneElement.innerHTML = `<div class="card">
          <img src="${phone.image}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Brand: ${phone.brand}</h5>
            <p class="card-text">
              ${phone.phone_name}
            </p>
          </div>
        </div>`;
    container.appendChild(newPhoneElement);
    toggleLoader(false);
  })
};
document.getElementById("search-button").addEventListener("click",function(){
    processSearch(10);
})
// processSearch function
const processSearch=datalimit=>{
  toggleLoader(true);
  const searchTextElement = document.getElementById("searchText");
  const searchText = searchTextElement.value;
  loadPhones(searchText,datalimit);
}
// toggle loader 
const toggleLoader=isLoading=>{
  const loader=document.getElementById("loader");
  if(isLoading){
    loader.classList.remove("d-none");
  }

  else {
    loader.classList.add("d-none")
  }
}

// show all 
document.getElementById("show-button").addEventListener("click",function(){
  processSearch();
})