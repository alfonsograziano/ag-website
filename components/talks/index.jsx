import styles from "./styles.module.css";

function formatDate(dateString) {
  const date = new Date(dateString);

  // Ensure the date is valid
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // JavaScript month is 0-indexed
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

const buildDate = (day, month, year) => new Date(year, month - 1, day);

const talks = [
  {
    eventName: "DevFest Bari",
    talkTitle: "Dal Percorso Universitario al Successo Professionale: Consigli Pratici",
    date: buildDate(26, 10, 2024),
    where: "Bari, Italy 🇮🇹",
  },
  {
    eventName: "DevFest Modena",
    talkTitle:
      "The Staff Engineer VS Manager Path: A window over the tech career paths",
    date: buildDate(12, 10, 2024),
    where: "Modena, Italy 🇮🇹",
  },
  {
    eventName: "Come To Code",
    talkTitle: "Creating videos... With React!",
    date: buildDate(29, 9, 2024),
    where: "Pignola, Italy 🇮🇹",
  },
  {
    eventName: "WeAreDevelopers World Congress",
    talkTitle:
      "The Staff Engineer VS Manager Path: A window over the tech career paths",
    date: buildDate(17, 7, 2024),
    where: "Berlin, Germany 🇩🇪",
  },
  {
    eventName: "React Summit",
    talkTitle: "Creating videos... With React!",
    date: buildDate(18, 6, 2024),
    where: "Amsterdam, Netherlands 🇳🇱",
  },
  {
    eventName: "Road to Coderful",
    talkTitle: "AI-generated UI: The state of the Art",
    date: buildDate(8, 6, 2024),
    where: "Naples, Italy 🇮🇹",
  },
  {
    eventName: "DevDays Europe",
    talkTitle: "Creating videos... With React!",
    date: buildDate(23, 5, 2024),
    where: "Vilnius, Lithuania 🇱🇹",
  },
  {
    eventName: "RomaJS Meetup",
    talkTitle: "Creating videos... With React!",
    date: buildDate(21, 2, 2024),
    where: "Rome, Italy 🇮🇹",
  },
  {
    eventName: "DevFest Bari",
    talkTitle:
      "The Staff Engineer VS Manager Path: A window over the tech career paths",
    date: buildDate(2, 12, 2023),
    where: "Bari, Italy 🇮🇹",
  },
  {
    eventName: "Conf42: JavaScript 2023",
    talkTitle: "Creating videos... With React!",
    date: buildDate(16, 11, 2023),
    where: "Online",
  },
  {
    eventName: "DevFest Napoli",
    talkTitle: "Creating videos... With React!",
    date: buildDate(28, 10, 2023),
    where: "Naples, Italy 🇮🇹",
  },
  {
    eventName: "DevDay Salerno",
    talkTitle: "Cloud 101",
    date: buildDate(3, 12, 2022),
    where: "Salerno, Italy 🇮🇹",
  },
];

export default function Talks() {
  return (
    <section className={styles.center}>
      <h1 className={styles.title}>Talk</h1>

      {talks.map((talk, index) => (
        <div key={index} className={styles.containerShadow}>
          <div className={styles.container}>
            <span>
              <b>{talk.eventName}</b>
              <br />
              {talk.talkTitle}
              <br />
              <i>{talk.where}</i>
            </span>
            <span>{formatDate(talk.date)}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
