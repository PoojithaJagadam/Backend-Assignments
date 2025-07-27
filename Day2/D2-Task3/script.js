// Use fetch or axis to get data from this API: https://catfact.ninja/fact  
// Print only the fact from the response.

const url = 'https://catfact.ninja/fact';

fetch(url)
 .then(res => res.json())
 .then(data => console.log(data))
 .catch(err => console.log(err));

/*  output: {
  fact: 'Cat families usually play best in even numbers. Cats and kittens should be aquired in pairs whenever possible.',
  length: 110
} */