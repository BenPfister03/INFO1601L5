// Object literals
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};

const students = [bob, sally, paul];

// Function to get the average grade for a course
function getAverageGrade(student, course) {
  for (let i = 0; i < student.transcript.length; i++) {
    if (student.transcript[i].course === course) {
      let grades = student.transcript[i].grades;
      let total = grades.reduce((sum, grade) => sum + grade, 0);
      return total / grades.length;
    }
  }
  return -1;
}

// Function to get the assignment mark for a course
function getAssignmentMark(student, course, num) {
  for (let i = 0; i < student.transcript.length; i++) {
    if (student.transcript[i].course === course) {
      if (num >= 0 && num < student.transcript[i].grades.length) {
        return student.transcript[i].grades[num];
      } else {
        return -1;
      }
    }
  }
  return -1;
}

// Function to get the average assessment mark for a course assignment
function averageAssessment(students, courseName, assignment) {
  let total = 0;
  let count = 0;
  
  students.forEach(student => {
    let mark = getAssignmentMark(student, courseName, assignment);
    if (mark !== -1) {
      total += mark;
      count++;
    }
  });
  
  return count > 0 ? total / count : -1;
}

// Example usage
console.log(getAverageGrade(bob, 'INFO 1601')); // Output: 63.3333...
console.log(getAssignmentMark(sally, 'INFO 1601', 1)); // Output: 89
console.log(averageAssessment(students, 'INFO 1601', 1)); // Output: 61.5
