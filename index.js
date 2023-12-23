// Add your code here

function submitData (userName, userEmail){;

const userData = {
    name: userName,
    email: userEmail
  };

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(userData),
  };

  fetch("http://localhost:3000/users", configurationObject)
  .then(function (response) {
    return response.json();
  })
  .then(data => {document.body.innerHTML = data.id}
  )
  .catch(function (error) {
    document.body.innerHTML = err.message
  });
}