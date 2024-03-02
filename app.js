
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



document.getElementById('admissionForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const grade = document.getElementById('grade').value;
  if (name.length > 25) return
  if (age > 25 || age < 5) return
  if (grade > 9) return
  if (confirm(`\nSubmitted Data:\nName: ${name}\nAge: ${age}\nGender: ${gender}\nGrade: ${grade}`))
    if (confirm(`Your Form is Submited Successfully`)) {
      window.location.href = 'index.html';
    }

});

document.getElementById('name').addEventListener('change', function (event) {
  if (event.target.value.length > 25) {
    document.getElementById('nameError').innerText = "Name is to long"
  } else {
    document.getElementById('nameError').innerText = ""
  }
})

document.getElementById('age').addEventListener('change', function (event) {
  if (event.target.value > 25) {
    document.getElementById('ageError').innerText = "Age is to long"
  } else if (event.target.value < 5) {
    document.getElementById('ageError').innerText = "Age is to Short"
  }
  else {
    document.getElementById('ageError').innerText = ""
  }
})

document.getElementById('grade').addEventListener('change', function (event) {
  if (event.target.value > 9) {
    document.getElementById('gradeError').innerText = "Grade is to long"
  } else {
    document.getElementById('gradeError').innerText = ""
  }
});