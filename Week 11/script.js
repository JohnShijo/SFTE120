// function calculateGrades() {
//   const name = document.getElementById('studentName').value;
//   const id = document.getElementById('studentID').value;

//   const scores = [
//     parseFloat(document.getElementById('math').value),
//     parseFloat(document.getElementById('science').value),
//     parseFloat(document.getElementById('english').value),
//     parseFloat(document.getElementById('social').value),
//     parseFloat(document.getElementById('art').value),
//     parseFloat(document.getElementById('pe').value),
//     parseFloat(document.getElementById('language').value)
//   ];

//   // Check for any NaN input
//   if (scores.some(score => isNaN(score))) {
//     alert("Please enter all subject scores.");
//     return;
//   }

//   const total = scores.reduce((sum, score) => sum + score, 0);
//   const percentage = total / scores.length;

//   let gpa;
//   if (percentage >= 90) gpa = 4.0;
//   else if (percentage >= 80) gpa = 3.0;
//   else if (percentage >= 70) gpa = 2.0;
//   else if (percentage >= 60) gpa = 1.0;
//   else gpa = 0.0;

//   document.getElementById('studentInfo').innerText = `Student: ${name} (ID: ${id})`;
//   document.getElementById('totalScore').innerText = `Total Score: ${total}/700`;
//   document.getElementById('percentage').innerText = `Percentage: ${percentage.toFixed(2)}%`;
//   document.getElementById('gpa').innerText = `GPA: ${gpa.toFixed(1)}`;
//   document.getElementById('resultBox').style.display = 'block';
// }


function addRow() {
  const tbody = document.getElementById('tableBody');
  const row = document.createElement('tr');

  row.innerHTML = `
    <td><input type="text" placeholder="Name"></td>
    <td><input type="text" placeholder="ID"></td>
    <td><input type="number" min="0" max="100"></td>
    <td><input type="number" min="0" max="100"></td>
    <td><input type="number" min="0" max="100"></td>
    <td><input type="number" min="0" max="100"></td>
    <td><input type="number" min="0" max="100"></td>
    <td><input type="number" min="0" max="100"></td>
    <td><input type="number" min="0" max="100"></td>
    <td class="total">-</td>
    <td class="percentage">-</td>
    <td class="gpa">-</td>
    <td><button onclick="calculateRow(this)">Calculate</button></td>
  `;

  tbody.appendChild(row);
}

function removeRow() {
  const tbody = document.getElementById('tableBody');
  if (tbody.rows.length > 0) {
    tbody.deleteRow(-1);
  }
}

function calculateRow(button) {
  const row = button.closest('tr');
  const inputs = row.querySelectorAll('input[type="number"]');
  const scores = Array.from(inputs).map(input => parseFloat(input.value));

  if (scores.some(score => isNaN(score))) {
    alert('Please enter all subject scores.');
    return;
  }

  const total = scores.reduce((sum, score) => sum + score, 0);
  const percentage = total / scores.length;

  let gpa;
  if (percentage >= 90) gpa = 4.0;
  else if (percentage >= 80) gpa = 3.0;
  else if (percentage >= 70) gpa = 2.0;
  else if (percentage >= 60) gpa = 1.0;
  else gpa = 0.0;

  row.querySelector('.total').innerText = total;
  row.querySelector('.percentage').innerText = `${percentage.toFixed(2)}%`;
  row.querySelector('.gpa').innerText = gpa.toFixed(1);
}

// Add one row by default when the page loads
window.onload = addRow;
