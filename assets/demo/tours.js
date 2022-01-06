const generateCards = () => {
  const tour_card = document.getElementById("tour-card");
  const card_container = document.getElementById("card-container");
  const createUser = (name, tourLink) => ({
    name: name,
    tourLink: tourLink,
  });

  let topCreators = [
    createUser("360° TOUR Reception", "18d8042386b79e2c279fd162df0205c8"),
    createUser("Washroom", "9872ed9fc22fc182d371c3e9ed316094"),
    createUser("Balcony", "3636638817772e42b59d74cff571fbb3"),
    createUser("Kartika's Sample VR", "aa942ab2bfa6ebda4840e7360ce6e7ef"),
    createUser("Office", "5fd0b37cd7dbbb00f97ba6ce92bf5add"),
    createUser("Residence", "9766527f2b5d3e95d4a733fcfb77bd7e"),
    createUser("Interior", "9cfdf10e8fc047a44b08ed031e1f0ed1"),
    createUser("Terrace", "37bc2f75bf1bcfe8450a1a41c200364c"),
    createUser("RESIDENTIAL HOUSE", "698d51a19d8a121ce581499d7b701668"),
    createUser("R&Y", "98dce83da57b0395e163467c9dae521b"),
    createUser("PRESTIGE JINDAL CITY", "06eb61b839a0cefee4967c67ccb099dc"),
  ];

  topCreators.forEach((user, index) => {
    const newCard = tour_card.cloneNode(true);
    newCard.href = `https://makevr.pro/login/viewer/index.php?code=${user.tourLink}`;
    newCard.target = "_blank";
    newCard.style.paddingBottom = "1rem";
    newCard.children[0].children[0].src = "./images/" + (index + 1) + ".png";
    newCard.children[0].children[1].children[0].innerHTML = user.name;

    console.log(newCard);
    card_container.appendChild(newCard);

    // const tableRow = document.createElement("tr");
    // const tableData1 = document.createElement("td");
    // tableData1.innerHTML = user.name;
    // const tableData2 = document.createElement("td");
    // tableData2.innerHTML = user.country;
    // const tableData3 = document.createElement("td");
    // tableData3.innerHTML = user.tours;
    // const tableData4 = document.createElement("td");
    // tableData4.innerHTML =
    //   user.accountCreationDate.getDate() +
    //   " " +
    //   months[user.accountCreationDate.getMonth()];

    // const tableData5 = document.createElement("td");
    // const tourLink = document.createElement("a");
    // tourLink.href =
    //   "https://makevr.pro/login/viewer/index.php?code=" + user.tourLink;
    // tourLink.innerHTML = "visit";

    // tourLink.target = "_blank";
    // tourLink.rel = "noopener noreferrer";

    // tableData5.appendChild(tourLink);

    // tableRow.appendChild(tableData1);
    // tableRow.appendChild(tableData2);
    // tableRow.appendChild(tableData3);
    // tableRow.appendChild(tableData4);
    // tableRow.appendChild(tableData5);
    // table.appendChild(tableRow);
  });
};
