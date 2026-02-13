function hoursNeeded(architectName, numberOfProjects) {
  let hours = numberOfProjects * 3;
  console.log(
    `The architect ${architectName} will need ${hours} hours to complete ${numberOfProjects} project/s.`
  );
}

hoursNeeded("George", 9);
