const generateCards = () => {
  const tour_card = document.getElementById("tour-card");
  const card_container = document.getElementById("card-container");
  const createUser = (name, tourLink) => ({
    name: name,
    tourLink: tourLink,
  });

  let topCreators = [
    // createUser("360° TOUR Reception", "18d8042386b79e2c279fd162df0205c8"),
    // createUser("Washroom", "9872ed9fc22fc182d371c3e9ed316094"),
    // createUser("Balcony", "3636638817772e42b59d74cff571fbb3"),
    // createUser("Kartika's Sample VR", "aa942ab2bfa6ebda4840e7360ce6e7ef"),
    // createUser("Office", "5fd0b37cd7dbbb00f97ba6ce92bf5add"),
    // createUser("Residence", "9766527f2b5d3e95d4a733fcfb77bd7e"),
    // createUser("Interior", "9cfdf10e8fc047a44b08ed031e1f0ed1"),
    // createUser("Terrace", "37bc2f75bf1bcfe8450a1a41c200364c"),
    // createUser("RESIDENTIAL HOUSE", "698d51a19d8a121ce581499d7b701668"),
    // createUser("R&Y", "98dce83da57b0395e163467c9dae521b"),
    // createUser("PRESTIGE JINDAL CITY", "06eb61b839a0cefee4967c67ccb099dc"),

    // new tours

    // first tour is at html
    // createUser("VENKATA RAMANA", "bac9162b47c56fc8a4d2a519803d51b3"),

    createUser(
      "Post War City (Olga Javadova)",
      "24681928425f5a9133504de568f5f6df"
    ),
    createUser("Dojo (Olga Javadova)", "fccb3cdc9acc14a6e70a12f74560c026"),
    createUser(
      "Experience Center (Ycaro Rocha)",
      "1595af6435015c77a7149e92a551338e"
    ),
    createUser(
      "ALBI'S FLAT (ELISA BONAZZA)",
      "cb70ab375662576bd1ac5aaf16b3fca4"
    ),
    createUser(
      "Conference Room (Ycaro Rocha)",
      "08d98638c6fcd194a4b1e6992063e944"
    ),
    createUser("4BHK", "d34ab169b70c9dcd35e62896010cd9ff"),
    createUser("BINASH", "a01a0380ca3c61428c26a231f0e49a09"),
    createUser("3BHK (OMAR HELFAWI)", "cfa0860e83a4c3a763a7e62d825349f7"),
    createUser("SHIRISH KURANE", "918317b57931b6b7a7d29490fe5ec9f9"),
    createUser("3RD", "274ad4786c3abca69fa097b85867d9a4"),
    createUser("Dubai Garden Concept", "109a0ca3bc27f3e96597370d5c8cf03d"),
    createUser("Office 360° TOUR", "18d8042386b79e2c279fd162df0205c8"),
    createUser("11.1 - Arpit", "0a09c8844ba8f0936c20bd791130d6b6"),
    // createUser("LIVING AREA -1", "e3796ae8  38835da0b6f6ea37bcf8bcb7"),
    createUser("VENKATA RAMANA", "bac9162b47c56fc8a4d2a519803d51b3"),
    createUser("Showroom", "3328bdf9a4b9504b9398284244fe97c2"),
    createUser("WOW SPACES 360° TOUR", "bbf94b34eb32268ada57a3be5062fe7d"),
    createUser("PRESTIGE JINDAL CITY - D3", "06eb61b839a0cefee4967c67ccb099dc"),
  ];

  topCreators.forEach((user, index) => {
    const newCard = tour_card.cloneNode(true);
    newCard.href = `https://makevr.pro/login/viewer/index.php?code=${user.tourLink}`;
    newCard.target = "_blank";
    newCard.style.paddingBottom = "1rem";
    newCard.children[0].children[0].src = "./images/" + user.tourLink + ".png";
    // newCard.children[0].children[0].src =
    //   "./images/" + (user.img ? user.img : index + 13) + ".png";
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
