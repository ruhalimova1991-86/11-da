// const users = [
//     {
//         id: 1,
//         name: "Aziz Karimov",
//         age: 24,
//         job: "Frontend Developer",
//         email: "aziz.karimov@gmail.com",
//         image: "https://randomuser.me/api/portraits/men/32.jpg",
//         city: "Toshkent",
//         car: "Chevrolet Cobalt"
//     },
//     {
//         id: 2,
//         name: "Malika Rasulova",
//         age: 22,
//         job: "UI/UX Designer",
//         email: "malika.rasulova@gmail.com",
//         image: "https://randomuser.me/api/portraits/women/44.jpg",
//         city: "Samarqand",
//         car: "Chevrolet Onix"
//     },
//     {
//         id: 3,
//         name: "Jasur Aliyev",
//         age: 28,
//         job: "Backend Developer",
//         email: "jasur.aliyev@gmail.com",
//         image: "https://randomuser.me/api/portraits/men/46.jpg",
//         city: "Buxoro",
//         car: "Chevrolet Malibu"
//     },
//     {
//         id: 4,
//         name: "Madina Tursunova",
//         age: 25,
//         job: "SMM Manager",
//         email: "madina.tursunova@gmail.com",
//         image: "https://randomuser.me/api/portraits/women/65.jpg",
//         city: "Toshkent",
//         car: "Chevrolet Tracker"
//     },
//     {
//         id: 5,
//         name: "Bekzod Ismoilov",
//         age: 31,
//         job: "Project Manager",
//         email: "bekzod.ismoilov@gmail.com",
//         image: "https://randomuser.me/api/portraits/men/52.jpg",
//         city: "Andijon",
//         car: "Kia K5"
//     },
//     {
//         id: 6,
//         name: "Nilufar Hamidova",
//         age: 27,
//         job: "Graphic Designer",
//         email: "nilufar.hamidova@gmail.com",
//         image: "https://randomuser.me/api/portraits/women/33.jpg",
//         city: "Namangan",
//         car: "Chevrolet Spark"
//     },
//     {
//         id: 7,
//         name: "Sardor Ergashev",
//         age: 29,
//         job: "Mobile Developer",
//         email: "sardor.ergashev@gmail.com",
//         image: "https://randomuser.me/api/portraits/men/71.jpg",
//         city: "Farg'ona",
//         car: "Hyundai Elantra"
//     },
//     {
//         id: 8,
//         name: "Zarina Qodirova",
//         age: 23,
//         job: "English Teacher",
//         email: "zarina.qodirova@gmail.com",
//         image: "https://randomuser.me/api/portraits/women/68.jpg",
//         city: "Toshkent",
//         car: "Chevrolet Nexia 3"
//     },
//     {
//         id: 9,
//         name: "Akmal Raxmonov",
//         age: 35,
//         job: "Marketing Manager",
//         email: "akmal.raxmonov@gmail.com",
//         image: "https://randomuser.me/api/portraits/men/75.jpg",
//         city: "Qarshi",
//         car: "Toyota Camry"
//     },
//     {
//         id: 10,
//         name: "Shahnoza Mirzayeva",
//         age: 26,
//         job: "Data Analyst",
//         email: "shahnoza.mirzayeva@gmail.com",
//         image: "https://randomuser.me/api/portraits/women/79.jpg",
//         city: "Navoiy",
//         car: "Chevrolet Gentra"
//     }
// ];
// let users_wwww = document.querySelector('.users')
// let input = document.querySelector('input')
// let job = document.querySelector('#job')
// let city = document.querySelector('#city')
// let car = document.querySelector('#car')
// repost(users)

// function repost(Data) {
//     users_wwww.innerHTML = ""
//     Data.map(e => {
//         let card = document.createElement('div')
//         card.classList.add("card")
//         card.innerHTML = `
//           <img
//             src=${e.image}
//             alt=${e.name}
//             class="user-image"
//           />

//           <div class="card-body">
//             <h2>${e.name}</h2>

//             <p class="job">${e.job}</p>

//             <div class="info">
//               <p>
//                 <span>Yoshi:</span>
//                 ${e.age}
//               </p>

//               <p>
//                 <span>Email:</span>
//                 ${e.email}
//               </p>

//               <p>
//                 <span>Shahar:</span>
//                 ${e.city}
//               </p>

//               <p>
//                 <span>Mashina:</span>
//                 ${e.car}

//                 </p>
//             </div>

    

//             <button>Profilni ko'rish</button>
//           </div>
          
// `
//         let option = document.createElement('option')
//         option.innerHTML = `
//     <option value=${e.job}>${e.job}</option>
// `
//      let option_city = document.createElement('option')
//         option.innerHTML = `
//     <option value=${e.city}>${e.city}</option>
//     `
//      let option_car = document.createElement('option')
//         option.innerHTML = `
//     <option value=${e.car}>${e.car}</option>
//     `


      

                
//         job.appendChild(option)
//         city.appendChild(option_city)
//         car.appendChild(option_car)
//         users_wwww.appendChild(card)
//     })


// }

// input.addEventListener("input", () => {
//     console.log(input.value);



//     let user_filter = users.filter(e => {

//         return e.name.toLocaleLowerCase().includes(input.value.trim().toLocaleLowerCase())
//     })
//     repost(user_filter);

// })

// job.addEventListener('change', () => {
//     console.log(job.value);
//     let job_tekna = users.filter(e => {
//         return e.job == job.value

//     })

// if(job.value=='all'){
//     repost(users)
// }else if(job_tekna){
//     repost(job_tekna);

// }

    
// })
// city.addEventListener('change', () => {
//     console.log(city.value);
//     let city_tekna = users.filter(e => {
//         return e.city == city.value

//     })

// if(city.value=='all'){
//     repost(users)
// }else if(city_tekna){
//     repost(city_tekna);

// }

    
// })
// car.addEventListener('change', () => {
//     console.log(car.value);
//     let car_tekna = users.filter(e => {
//         return e.car == car.value

//     })

// if(car.value=='all'){
//     repost(users)
// }else if(job_tekna){
//     repost(job_tekna);

// }

    
// })


const users = [
  {
    id: 1,
    name: "Aziz Karimov",
    age: 24,
    job: "Frontend Developer",
    email: "aziz.karimov@gmail.com",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    city: "Toshkent",
    car: "Chevrolet Cobalt"
  },
  {
    id: 2,
    name: "Malika Rasulova",
    age: 22,
    job: "UI/UX Designer",
    email: "malika.rasulova@gmail.com",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    city: "Samarqand",
    car: "Chevrolet Onix"
  },
  {
    id: 3,
    name: "Jasur Aliyev",
    age: 28,
    job: "Backend Developer",
    email: "jasur.aliyev@gmail.com",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    city: "Buxoro",
    car: "Chevrolet Malibu"
  },
  {
    id: 4,
    name: "Madina Tursunova",
    age: 25,
    job: "SMM Manager",
    email: "madina.tursunova@gmail.com",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    city: "Toshkent",
    car: "Chevrolet Tracker"
  },
  {
    id: 5,
    name: "Bekzod Ismoilov",
    age: 31,
    job: "Project Manager",
    email: "bekzod.ismoilov@gmail.com",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    city: "Andijon",
    car: "Kia K5"
  },
  {
    id: 6,
    name: "Nilufar Hamidova",
    age: 27,
    job: "Graphic Designer",
    email: "nilufar.hamidova@gmail.com",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    city: "Namangan",
    car: "Chevrolet Spark"
  },
  {
    id: 7,
    name: "Sardor Ergashev",
    age: 29,
    job: "Mobile Developer",
    email: "sardor.ergashev@gmail.com",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
    city: "Farg'ona",
    car: "Hyundai Elantra"
  },
  {
    id: 8,
    name: "Zarina Qodirova",
    age: 23,
    job: "English Teacher",
    email: "zarina.qodirova@gmail.com",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    city: "Toshkent",
    car: "Chevrolet Nexia 3"
  },
  {
    id: 9,
    name: "Akmal Raxmonov",
    age: 35,
    job: "Marketing Manager",
    email: "akmal.raxmonov@gmail.com",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    city: "Qarshi",
    car: "Toyota Camry"
  },
  {
    id: 10,
    name: "Shahnoza Mirzayeva",
    age: 26,
    job: "Data Analyst",
    email: "shahnoza.mirzayeva@gmail.com",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
    city: "Navoiy",
    car: "Chevrolet Gentra"
  }
];

let users_wwww = document.querySelector('.users');
let input = document.querySelector('input');
let job = document.querySelector('#job');
let city = document.querySelector('#city');
let car = document.querySelector('#car');

// Option'larni ro'yxatga bir marta qo'shish funksiyasi
function initSelectOptions() {
  users.forEach(e => {
    let optionJob = document.createElement('option');
    optionJob.value = e.job;
    optionJob.textContent = e.job;
    job.appendChild(optionJob);

    let optionCity = document.createElement('option');
    optionCity.value = e.city;
    optionCity.textContent = e.city;
    city.appendChild(optionCity);

    let optionCar = document.createElement('option');
    optionCar.value = e.car;
    optionCar.textContent = e.car;
    car.appendChild(optionCar);
  });
}

function repost(Data) {
  users_wwww.innerHTML = "";
  Data.map(e => {
    let card = document.createElement('div');
    card.classList.add("card");
    card.innerHTML = `
      <img src="${e.image}" alt="${e.name}" class="user-image" />
      <div class="card-body">
        <h2>${e.name}</h2>
        <p class="job">${e.job}</p>
        <div class="info">
          <p><span>Yoshi:</span> ${e.age}</p>
          <p><span>Email:</span> ${e.email}</p>
          <p><span>Shahar:</span> ${e.city}</p>
          <p><span>Mashina:</span> ${e.car}</p>
        </div>
        <button>Profilni ko'rish</button>
      </div>
    `;
    users_wwww.appendChild(card);
  });
}

initSelectOptions();
repost(users);

// Event Listeners
input.addEventListener("input", () => {
  let user_filter = users.filter(e => 
    e.name.toLowerCase().includes(input.value.trim().toLowerCase())
  );
  repost(user_filter);
});

job.addEventListener('change', () => {
  if (job.value === 'all') {
    repost(users);
  } else {
    let filtered = users.filter(e => e.job === job.value);
    repost(filtered);
  }
});

city.addEventListener('change', () => {
  if (city.value === 'all') {
    repost(users);
  } else {
    let filtered = users.filter(e => e.city === city.value);
    repost(filtered);
  }
});

car.addEventListener('change', () => {
  if (car.value === 'all') {
    repost(users);
  } else {
    let filtered = users.filter(e => e.car === car.value);
    repost(filtered);
  }
});