const generateUsersTable = () => {
  const table = document.getElementById("users-table-body");

  users.forEach((user) => {
    const tableRow = document.createElement("tr");
    const tableData1 = document.createElement("td");
    tableData1.innerHTML = user.name;
    const tableData2 = document.createElement("td");
    tableData2.innerHTML = user.tours.length;
    const tableData3 = document.createElement("td");
    tableData3.innerHTML =
      user.accountCreationDate.getDate() +
      " " +
      months[user.accountCreationDate.getMonth()];

    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);
    tableRow.appendChild(tableData3);

    table.appendChild(tableRow);
  });
};
