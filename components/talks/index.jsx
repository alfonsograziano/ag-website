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

const talks = {
  AUTOMATE_YOUR_LIFE: {
    title: "Automate Your Life: Building a Workflow Engine in TypeScript",
  },
  STAFF_ENG_VS_ENG_MANAGER: {
    title:
      "The Staff Engineer VS Manager Path: A window over the tech career paths",
  },
  EFFORTLESS_SECURITY: {
    title:
      "Effortless Security: Simplify Authentication and Authorization with Open Source Tools",
  },
  PERCORSO_UNI: {
    title:
      "Dal Percorso Universitario al Successo Professionale: Consigli Pratici",
  },
  CREATING_VIDEOS: {
    title: "Creating videos... With React!",
  },
  AI_GENERATED_UI: {
    title: "AI-generated UI: The state of the Art",
  },
  FROM_SENIOR_ENG_TO_TL: {
    title:
      "From Senior Engineer to Tech Lead: close the gap and grow in the role	",
  },
};

const talksInstances = [
  {
    eventName: "DWX - Developer Week '25",
    talkTitle: talks.FROM_SENIOR_ENG_TO_TL.title,
    date: buildDate(30, 6, 2025),
    where: "Mannheim, Germany 🇩🇪",
  },
  {
    eventName: "DWX - Developer Week '25",
    talkTitle: talks.CREATING_VIDEOS.title,
    date: buildDate(30, 6, 2025),
    where: "Mannheim, Germany 🇩🇪",
  },
  {
    eventName: "jsday 2025",
    talkTitle: talks.AUTOMATE_YOUR_LIFE.title,
    date: buildDate(7, 4, 2025),
    where: "Bologna, Italy 🇮🇹",
  },
  {
    eventName: "Devworld Conference",
    talkTitle: talks.STAFF_ENG_VS_ENG_MANAGER.title,
    date: buildDate(27, 2, 2025),
    where: "Amsterdam, Netherlands 🇳🇱",
  },
  {
    eventName: "Coderful",
    talkTitle: talks.EFFORTLESS_SECURITY.title,
    date: buildDate(23, 1, 2025),
    where: "Catania, Italy 🇮🇹",
  },
  {
    eventName: "DevFest Pescara",
    talkTitle: talks.STAFF_ENG_VS_ENG_MANAGER.title,
    date: buildDate(9, 11, 2024),
    where: "Pescara, Italy 🇮🇹",
  },
  {
    eventName: "DevFest Bari",
    talkTitle: talks.PERCORSO_UNI.title,
    date: buildDate(26, 10, 2024),
    where: "Bari, Italy 🇮🇹",
  },
  {
    eventName: "DevFest Modena",
    talkTitle: talks.STAFF_ENG_VS_ENG_MANAGER.title,
    date: buildDate(12, 10, 2024),
    where: "Modena, Italy 🇮🇹",
  },
  {
    eventName: "Come To Code",
    talkTitle: talks.CREATING_VIDEOS.title,
    date: buildDate(29, 9, 2024),
    where: "Pignola, Italy 🇮🇹",
  },
  {
    eventName: "WeAreDevelopers World Congress",
    talkTitle: talks.STAFF_ENG_VS_ENG_MANAGER.title,
    date: buildDate(17, 7, 2024),
    where: "Berlin, Germany 🇩🇪",
  },
  {
    eventName: "React Summit",
    talkTitle: talks.CREATING_VIDEOS.title,
    date: buildDate(18, 6, 2024),
    where: "Amsterdam, Netherlands 🇳🇱",
  },
  {
    eventName: "Road to Coderful",
    talkTitle: talks.AI_GENERATED_UI.title,
    date: buildDate(8, 6, 2024),
    where: "Naples, Italy 🇮🇹",
  },
  {
    eventName: "DevDays Europe",
    talkTitle: talks.CREATING_VIDEOS.title,
    date: buildDate(23, 5, 2024),
    where: "Vilnius, Lithuania 🇱🇹",
  },
  {
    eventName: "RomaJS Meetup",
    talkTitle: talks.CREATING_VIDEOS.title,
    date: buildDate(21, 2, 2024),
    where: "Rome, Italy 🇮🇹",
  },
  {
    eventName: "DevFest Bari",
    talkTitle: talks.STAFF_ENG_VS_ENG_MANAGER.title,
    date: buildDate(2, 12, 2023),
    where: "Bari, Italy 🇮🇹",
  },
  {
    eventName: "Conf42: JavaScript 2023",
    talkTitle: talks.CREATING_VIDEOS.title,
    date: buildDate(16, 11, 2023),
    where: "Online",
  },
  {
    eventName: "DevFest Napoli",
    talkTitle: talks.CREATING_VIDEOS.title,
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
      <h1 className={styles.title}>Talks</h1>

      {talksInstances.map((talk, index) => (
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
