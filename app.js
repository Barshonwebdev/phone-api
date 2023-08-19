const loadPhones = async (searchText) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhone(data.data);
};

const displayPhone = (phones) => {
  console.log(phones);
   const container = document.getElementById("phone-container");
   container.textContent=" ";
   phones=phones.slice(0,15);
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
  })
};
document.getElementById("search-button").addEventListener("click",function(){
    const searchTextElement=document.getElementById("searchText");
    const searchText=searchTextElement.value;
    loadPhones(searchText);
})

