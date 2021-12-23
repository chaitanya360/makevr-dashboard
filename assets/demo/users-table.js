const generateUsersTable = () => {
  const table = document.getElementById("users-table-body");

  function randomDate(start, end, startHour, endHour) {
    var date = new Date(+start + Math.random() * (end - start));
    var hour = (startHour + Math.random() * (endHour - startHour)) | 0;
    date.setHours(hour);
    return date;
  }

  const createUser = (name, tours, tourLink) => ({
    name: name,
    tours: tours,
    tourLink: tourLink,
    accountCreationDate: randomDate(
      randomDate(new Date(2021, 7, 1), new Date(), 0, 24),
      new Date(),
      0,
      24
    ),
  });

  let topCreators = [
    createUser("Anupam", 112, "d96409bf894217686ba124d7356686c9"),
    createUser("Mukeshjha", 25, "140f6969d5213fd0ece03148e62e461e"),
    createUser("Saurav", 19, "33e75ff09dd601bbe69f351039152189"),
    createUser("Gautam", 11, "fc490ca45c00b1249bbe3554a4fdf6fb"),
    createUser("Anshul", 10, "a3c65c2974270fd093ee8a9bf8ae7d0b"),
    createUser("Sarvasiddi", 10, "f2217062e9a397a1dca429e7d70bc6ca"),
    createUser("Pratibhatukaram", 8, "85d8ce590ad8981ca2c8286f79f59954"),
    createUser("Virendra", 8, "f0935e4cd5920aa6c7c996a5ee53a70f"),
    createUser("Arpit", 6, "9b8619251a19057cff70779273e95aa6"),
    createUser("Shrutikala", 5, "310dcbbf4cce62f762a2aaa148d556bd"),
    createUser("Kashish", 5, "65ded5353c5ee48d0b7d48c591b8f430"),
    createUser("Dharam", 5, "ec5decca5ed3d6b8079e2e7e7bacc9f2"),
    createUser("Fayyaz", 5, "3295c76acbf4caaed33c36b1b5fc2cb1"),
    createUser("Aman", 4, "82aa4b0af34c2313a562076992e50aa3"),
    createUser("Kuldeepsingh", 4, "289dff07669d7a23de0ef88d2f7129e7"),
    createUser("Harleenkaur", 4, "950a4152c2b4aa3ad78bdd6b366cc179"),
  ];

  topCreators.forEach((user) => {
    const tableRow = document.createElement("tr");
    const tableData1 = document.createElement("td");
    tableData1.innerHTML = user.name;
    const tableData2 = document.createElement("td");
    tableData2.innerHTML = user.tours;
    const tableData3 = document.createElement("td");
    tableData3.innerHTML =
      user.accountCreationDate.getDate() +
      " " +
      months[user.accountCreationDate.getMonth()];

    const tableData4 = document.createElement("td");
    const tourLink = document.createElement("a");
    tourLink.href =
      "https://makevr.pro/login/viewer/index.php?code=" + user.tourLink;
    tourLink.innerHTML = "visit";

    tourLink.target = "_blank";
    tourLink.rel = "noopener noreferrer";

    tableData4.appendChild(tourLink);
    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);
    tableRow.appendChild(tableData3);
    tableRow.appendChild(tableData4);
    table.appendChild(tableRow);
  });
};
