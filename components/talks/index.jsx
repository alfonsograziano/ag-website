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
    eventName: "DevFest Napoli",
    talkTitle: "Creating videos... With React!",
    date: buildDate(28, 10, 2023),
  },
  {
    eventName: "DevDay Salerno",
    talkTitle: "Cloud 101",
    date: buildDate(3, 12, 2022),
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
            </span>
            <span>{formatDate(talk.date)}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
