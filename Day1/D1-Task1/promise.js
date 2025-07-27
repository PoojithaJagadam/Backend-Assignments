
// const name = fetch('https://v2.jokeapi.dev/joke/Any');
// console.log(name);


// const event = new Promise((resolve, reject) => {
//   let name = 'hello';
//   if (name == 'sdc') {
//     resolve();
//   } else {
//     reject();
//   }
// });

// event
//   .then(() => console.log('hello'))
//   .catch(() => console.log('error'));


// const url = 'https://v2.jokeapi.dev/joke/Any'

// fetch(url)
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err));


const getUsers = async () => {
  const response = await fetch('https://v2.jokeapi.dev/joke/Any');
  const data = await response.json();
  console.log(data);
}

getUsers();