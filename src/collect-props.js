'use strict';
class Person {
  constructor(firstName, lastName, displayName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.displayName = displayName;
    this.email = email;
  }
}
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  const collectionProps = Array.from(
    document.querySelectorAll('input[type="text"]')
  );
  const arrValues = collectionProps.map((item) => item.value);
  
  // const firstName = document.getElementById('first-name').value;
  // const displayName = document.getElementById('display-name').value;
  // const email = document.getElementById('email').value;
  // const person = new Person(firstName, lastName, displayName, email);

  const lastName = document.getElementById('last-name').value;
  const person = new Person(...arrValues);
  localStorage.setItem(`${lastName}`, JSON.stringify(person));
  this.reset();
});
