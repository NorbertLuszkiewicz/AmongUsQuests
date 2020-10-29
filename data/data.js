const data = [
  {
    title: "Only Right",
    description: "you must go only right section on start",
    type: "POSITION",
    impostor: "CREWMATE",
  },
  {
    title: "Third Eye",
    description: "check cameras every round",
    type: "POSITION",
    impostor: "CREWMATE",
  },
  {
    title: "Only Left",
    description: "you must go only left section on start",
    type: "POSITION",
    impostor: "CREWMATE",
  },
  {
    title: "I hate red",
    description:
      "In first meeting vote for red (if you red or there is no red vote orange, pink, yellow)",
    type: "VOTING",
    impostor: "CREWMATE",
  },
  {
    title: "I love red",
    description:
      "In first meeting help red (if you red or there is no red help orange, pink, yellow)",
    type: "VOTING",
    impostor: "CREWMATE",
  },
  {
    title: "I love blue",
    description:
      "In first meeting help red (if you blue or there is no blue help lightblue, purple, brown)",
    type: "VOTING",
    impostor: "CREWMATE",
  },
  {
    title: "I love green",
    description:
      "In first meeting help green (if you green or there is no green help black, white, yellow)",
    type: "VOTING",
    impostor: "CREWMATE",
  },
  {
    title: "I hate blue",
    description:
      "In first meeting vote for blue (if you blue or there is no blue vote lightblue, purple, brown)",
    type: "VOTING",
    impostor: "CREWMATE",
  },
  {
    title: "I hate green",
    description:
      "In first meeting vote for green (if you green or there is no green vote black, white, yellow)",
    type: "VOTING",
    impostor: "CREWMATE",
  },
  {
    title: "I hate you",
    description: "vote for first suspect in each meeting",
    type: "VOTING",
    impostor: "CREWMATE",
  },
  {
    title: "I love you",
    description: "protect firtst suspect at each meeting",
    type: "VOTING",
    impostor: "CREWMATE",
  },
  {
    title: "Only Reactor",
    description: "you can only sabotage the reactor",
    type: "OTHER",
    impostor: "IMPOSTOR",
  },
  {
    title: "Only Light",
    description: "you can only off light",
    type: "OTHER",
    impostor: "IMPOSTOR",
  },
  {
    title: "Only left section",
    description:
      "you must go only right, you can go in the left to mission but after you must go right",
    type: "POSITION",
    impostor: "CREWMATE",
  },
  {
    title: "Only left section",
    description: "you must go only left",
    type: "POSITION",
    impostor: "IMPOSTOR",
  },
  {
    title: "Only right section",
    description: "you must go only right",
    type: "POSITION",
    impostor: "IMPOSTOR",
  },
  {
    title: "Sabotage is my time",
    description: "only kill while sabotaging",
    type: "OTHER",
    impostor: "IMPOSTOR",
  },
  {
    title: "Sabotage time",
    description: "turn on some sabotage every cooldown",
    type: "OTHER",
    impostor: "IMPOSTOR",
  },
  {
    title: "I'm faster",
    description: "kills a person every cooldown",
    type: "OTHER",
    impostor: "IMPOSTOR",
  },
  {
    title: "I play solo",
    description: "suspect a second imposter, you want to throw it away",
    type: "VOTING",
    impostor: "IMPOSTOR",
  },
  {
    title: "mute microfon",
    description:
      "don't use microfon/chat if you are not in a critical situation",
    type: "VOTING",
    impostor: "IMPOSTOR",
  },
  {
    title: "mute microfon",
    description:
      "don't use microfon/chat if you are not in a critical situation",
    type: "VOTING",
    impostor: "CREWMATE",
  },
  {
    title: "I'm Afk",
    description: "do not move for the first 10 seconds",
    type: "OTHER",
    impostor: "CREWMATE",
  },
  {
    title: "F1",
    description:
      "before you start the tasks, you have to go around the whole map",
    type: "OTHER",
    impostor: "CREWMATE",
  },
  {
    title: "Spectator",
    description: "you check everyone instead of doing tasks",
    type: "OTHER",
    impostor: "CREWMATE",
  },
  {
    title: "Shadow",
    description: "follow 1 selected person",
    type: "POSITION",
    impostor: "CREWMATE",
  },
  {
    title: "You will live",
    description:
      "choose a person who you won't kill until the end (who will survive with the impostor)",
    type: "OTHER",
    impostor: "IMPOSTOR",
  },
  {
    title: "Ventilation man",
    description: "use ventalization on each kill",
    type: "OTHER",
    impostor: "IMPOSTOR",
  },
  {
    title: "Only P",
    description: "use words only for p",
    type: "TEAM",
    impostor: "TEAM",
  },
  {
    title: "5 word",
    description: "you can only use 5 words in a meeting",
    type: "TEAM",
    impostor: "TEAM",
  },
  {
    title: "I'm you",
    description:
      "the fun consists in changing the nickname to another person and pretending it, in speaking, playing, etc.",
    type: "TEAM",
    impostor: "TEAM",
  },
  {
    title: "I'm red",
    description:
      "everyone changes the nickname to some random letters, numbers, e.g. 69, d3. as. we don't say who we are, while playing, we can talk from the beyond and pretend to be another player, or say that we are imposters",
    type: "TEAM",
    impostor: "TEAM",
  },
  {
    title: "Race",
    description:
      "you play for 1 inpostor, the impostor has the smallest possible vision and cooldown, crewmate has the greatest vision possible, the fun is to finish tasks by crewmates as quickly as possible and running away from the killer with your vision, while having fun, you can talk e.g. where the killer was seen, you cannot report bodies or a meeting",
    type: "TEAM",
    impostor: "TEAM",
  },
];

export default data;
