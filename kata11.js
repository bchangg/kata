const organizeInstructors = function(instructors) {
  let courseNames = instructors.map(function(item) {
    return item.course;
  });
  let courseNamesUnique = courseNames.filter(function(item, index) {
    return courseNames.indexOf(item) >= index;
  })
  let result = new Object();
  for (let i = 0; i < courseNamesUnique.length; i++) {
    result[courseNamesUnique[i]] = [];
  }
  for (let i = 0; i < instructors.length; i++) {
    for (let j = 0; j < courseNamesUnique.length; j++) {
      if (instructors[i].course === courseNamesUnique[j]) {
        result[courseNamesUnique[j]].push(instructors[i].name);
      }
    }
  }
  return result;
};
console.log(organizeInstructors([{
    name: "Samuel",
    course: "iOS"
  },
  {
    name: "Victoria",
    course: "Web"
  },
  {
    name: "Karim",
    course: "Web"
  },
  {
    name: "Donald",
    course: "Web"
  }
]));
console.log(organizeInstructors([{
    name: "Brendan",
    course: "Blockchain"
  },
  {
    name: "David",
    course: "Web"
  },
  {
    name: "Martha",
    course: "iOS"
  },
  {
    name: "Carlos",
    course: "Web"
  }
]));
