const instructorWithLongestName = function(instructors) {
  let index = 0;
  let longestName = "";

  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > longestName.length) {
      longestName = instructors[i].name;
      index = i;
    }
  }
  return instructors[index];
};
console.log(instructorWithLongestName([{
    name: "Samuel",
    course: "iOS"
  },
  {
    name: "Jeremiah",
    course: "Web"
  },
  {
    name: "Ophilia",
    course: "Web"
  },
  {
    name: "Donald",
    course: "Web"
  }
]));
console.log(instructorWithLongestName([{
    name: "Matthew",
    course: "Web"
  },
  {
    name: "David",
    course: "iOS"
  },
  {
    name: "Domascus",
    course: "Web"
  }
]));
