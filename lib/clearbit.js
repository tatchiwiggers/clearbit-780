const EvalSourceMapDevToolPlugin = require("webpack/lib/EvalSourceMapDevToolPlugin");

// TODO

// 1. select our targets (form and email)
// 2. send the AJAX request to the API using the fetch() function and
// read the json string (parse into a JS readable obj) and console.log
// the results.
// 3. use the preventDefault() command so that the
// default behavior of submit is disabled;
// 4. extract the <td> tags from our parsed json HTML
// 5. inject the fields extracted from the returned object into our HTML
//6. Calling our injectData(data) function in our findPerson function
// PASSING THE DATA AS I ARGUE!!! Line 31.


// 1. select our targets (form and email)
const clearbitForm = document.querySelector('#clearbitForm');
const email = document.querySelector('#clearbitEmail');

const apiKey = "Bearer sk_86a1b658937bca29a9aafc4cfe05497e";

// 2. send the AJAX request to the API using the fetch() function and
// read the json string (parse into a JS readable obj) and console.log
// the results.
const findPerson = (email) => {
    const url = `https://person.clearbit.com/v1/people/email/${email}`;
    fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 5.1; rv:15.0) Gecko/20100101 Firefox/15.0.1',
                Authorization: apiKey
            }
        })
        .then(response => response.json())
        .then((data) => {
            //   console.log(data);
            injectData(data);
        });
};


// 3. use the preventDefault() command so that the
// default behavior of submit is disabled;
clearbitForm.addEventListener('submit', (event) => {
    event.preventDefault();
    findPerson(email.value);
});


// 4. extract the <td> tags from our parsed json HTML
const injectData = (element) => {
    const name = document.getElementById('userName');
    const email = document.getElementById('userEmail');
    const bio = document.getElementById('userBio');
    const location = document.getElementById('userLocation');

    // 5. inject the fields extracted from the returned object into our HTML
    name.innerText = element.name.fullName;
    email.innerText = element.email;
    bio.innerText = element.bio;
    location.innerText = element.location
};

//6. Call our injectData(data) function in our findPerson function
// PASSING THE DATA AS I ARGUE!!! Line 31.