faker.locale = "en_IND";

let count = 512;

const users = [];

function randomDate(start, end, startHour, endHour) {
  var date = new Date(+start + Math.random() * (end - start));
  var hour = (startHour + Math.random() * (endHour - startHour)) | 0;
  date.setHours(hour);
  return date;
}

const getNewGeneratedUser = () => {
  const name = faker.name.findName(); // Caitlyn Kerluke
  const email = faker.internet.email(); // Rusty@arne.info
  const totalTours = Math.round(Math.random() * 5);
  const tours = [];
  const address = faker.address;

  const accountCreationDate = randomDate(
    new Date(2021, 7, 1),
    new Date(),
    0,
    24
  );

  for (let i = 0; i < totalTours; i++) {
    tours.push({
      name: "tour-" + (i + 1),
      creationDate: randomDate(accountCreationDate, new Date(), 0, 24),
    });
  }

  return {
    name,
    email,
    totalTours,
    accountCreationDate,
    tours,
    address: {
      lat: parseFloat(address.latitude()),
      lng: parseFloat(address.longitude()),
      city: address.cityName(),
      country: address.country(),
    },
  };
};

while (count--) {
  users.push(getNewGeneratedUser());
}

let totalUsersAddedInMonths = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let totalToursCreatedInMonths = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

users.forEach((user) => {
  totalUsersAddedInMonths[user.accountCreationDate.getMonth()]++;
});

users.forEach((user) => {
  user.tours.forEach(
    (tour) => totalToursCreatedInMonths[tour.creationDate.getMonth()]++
  );
});

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
