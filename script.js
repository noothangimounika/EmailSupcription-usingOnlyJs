// Create and insert the input field and button into the document

var divmain = document.createElement('div')
divmain.style.width = '350px';
divmain.style.height = '170px';
divmain.style.backgroundColor = 'aliceblue'
divmain.id = 'divmain';
divmain.style.textAlign = 'center';
divmain.style.padding = '20px';
divmain.style.borderRadius = '6px';

var h1 = document.createElement('h1');
h1.textContent = 'EmailSubscription';
h1.style.color = 'blue';


var input = document.createElement('input');
input.type = 'email';
input.placeholder = 'Enter your email';
input.id = 'emailInput';
input.style.width = '100%';
input.style.height = '25px';
input.style.margin = '10px 0';
input.style.outline = 'none';

var button = document.createElement('button');
button.innerText = 'Subscribe';
button.id = 'btn';
button.style.textTransform = 'uppercase';
button.style.background = 'blue';
button.style.border = 'none';
button.style.color = 'white';
button.style.width = '100px';
button.style.height = '30px';
button.style.borderRadius = '6px';
button.style.cursor='pointer';
button.onclick = subscribeEmail;

divmain.appendChild(h1);
divmain.appendChild(input);
divmain.appendChild(button);
document.body.appendChild(divmain);

// Function to subscribe an email

function subscribeEmail() 
{
  var email = document.getElementById('emailInput').value;
  if (email) {
    var url = 'https://script.google.com/macros/s/AKfycbzqvCyclkAJ9Dhr0RoeLQXyK7kvp7ml3X3MyrjqRUJPFFeiRHnd8RFXx1EU9cpXo6G8/exec';
    var data = { email: email };

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        alert('Success! Your email has been subscribed.');
        document.getElementById('emailInput').value = ''; 
      }
    };

    var encodedData = Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  
    xhr.send(encodedData);
  } 
  else
   {
    alert('Please enter a valid email address.');
  }
}