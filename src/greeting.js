let database = [{
    name: 'Susan',
    country: 'USA',
    age: 27
  },
  {
    name: 'Arhcie',
    country: 'Bahrain',
    age: 25
  },
  {
    name: 'Reem',
    country: 'UAE',
    age: 22
  },
]

const greet = () => {
  let temp = document.querySelector('#templete');
  for (let i = 0; i < database.length; i++) {
    let user = database[i];
    let cloned = temp.content.cloneNode(true);
    let h1 = cloned.querySelectorAll('h1');
    // why did i have to use h1[0] not run with for through all of them 
    h1[0].innerHTML = user.name;
    let h2 = cloned.querySelectorAll('h2');
    h2[0].innerHTML = `Is from: ${user.country} and he/she is: ${user.age}`;
    temp.parentNode.appendChild(cloned);
  }



}

export default greet;