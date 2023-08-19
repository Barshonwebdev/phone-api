const loadPhones = async () => {
  const url = "https://openapi.programming-hero.com/api/phones?search=iphone";
  const res = await fetch(url);
  const data = await res.json();
  displayPhone(data.data);
};

const displayPhone = (phones) => {
  console.log(phones);
   const container = document.getElementById("phone-container");
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

loadPhones();
