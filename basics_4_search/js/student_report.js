var message = '';
var student;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

 function getStudentReport(student) {
    var report = '<h2>Student: ' + student.name + '</h2>';
    report += '<p>Track: ' + student.track + '</p>';
    report += '<p>Points: ' + student.points + '</p>';
    report += '<p>Achievements: ' + student.achievements + '</p>';   
    return report;
 }

while(true) { 
  var search = prompt("Which student info you need");
  if(search === null || search === "quit") {
    break; 
  }
 
  for (var i = 0; i < students.length; i += 1) {
  student = students[i];
  if(student.name === search) {
    var message  = getStudentReport(student);
    print(message);
  }
}
}
 