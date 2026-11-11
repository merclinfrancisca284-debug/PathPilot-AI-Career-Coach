const paths = {
  "Artificial Intelligence": {
    name: "AI / Machine Learning Engineer",
    desc: "Explore how intelligent systems learn from data. Build a foundation in Python, statistics and machine learning before moving into real-world AI projects.",
    score: 91,
    focus: ["Python", "Statistics", "NumPy & Pandas", "Machine Learning", "Model evaluation"],
    steps: [
      ["01", "Strengthen Python", "Practise functions, lists, dictionaries, file handling and writing clean, reusable code."],
      ["02", "Learn data foundations", "Work with NumPy and Pandas. Explore datasets and practise basic statistics."],
      ["03", "Build machine learning basics", "Learn regression, classification, train/test split and model evaluation with scikit-learn."],
      ["04", "Create a portfolio project", "Build a small prediction project, document your process and publish it on GitHub."]
    ]
  },
  "Data Science": {
    name: "Data Analyst → Data Scientist",
    desc: "Turn raw data into useful insights. Start with data cleaning and visualisation, then build towards statistical analysis and predictive models.",
    score: 89,
    focus: ["Python", "SQL", "Pandas", "Statistics", "Data visualisation"],
    steps: [
      ["01", "Learn Python for data", "Practise Python basics, then use Pandas and NumPy to clean datasets."],
      ["02", "Understand SQL", "Practise SELECT, filtering, joins, grouping and aggregate functions."],
      ["03", "Visualise insights", "Create clear charts and dashboards; explain what the data means."],
      ["04", "Build a case study", "Choose a public dataset, answer 3–5 questions and publish your analysis."]
    ]
  },
  "Web Development": {
    name: "Frontend / Full-stack Developer",
    desc: "Create useful websites and applications. Learn the web fundamentals first, then add interactive features and connect a database.",
    score: 87,
    focus: ["HTML", "CSS", "JavaScript", "Git & GitHub", "React"],
    steps: [
      ["01", "Master HTML & CSS", "Build responsive pages and practise layouts, forms and accessibility."],
      ["02", "Learn JavaScript", "Understand variables, functions, arrays, objects, DOM and events."],
      ["03", "Use Git and React", "Track your work with Git; learn components, props, state and routing."],
      ["04", "Deploy a project", "Build a useful app, publish it online and write a clear GitHub README."]
    ]
  },
  "Cloud Computing": {
    name: "Cloud / DevOps Associate",
    desc: "Learn how applications are deployed and operated. Begin with networking and Linux, then explore cloud services and automation.",
    score: 86,
    focus: ["Linux", "Networking", "Git", "Cloud fundamentals", "Docker"],
    steps: [
      ["01", "Learn the foundations", "Understand operating systems, IP addresses, DNS, HTTP and basic networking."],
      ["02", "Practise Linux and Git", "Use the terminal, manage files and version-control a small project."],
      ["03", "Explore cloud services", "Learn compute, storage, databases, identity and basic cloud security."],
      ["04", "Deploy a simple app", "Deploy a static site or small application and document the architecture."]
    ]
  },
  "Cybersecurity": {
    name: "Cybersecurity Analyst",
    desc: "Develop the foundations for protecting systems and data. Focus on networking, operating systems, security concepts and safe lab practice.",
    score: 85,
    focus: ["Networking", "Linux", "Python", "Security fundamentals", "Log analysis"],
    steps: [
      ["01", "Understand networking", "Learn TCP/IP, DNS, ports, HTTP and how devices communicate."],
      ["02", "Practise Linux", "Use command-line tools and understand users, permissions and processes."],
      ["03", "Learn security basics", "Study authentication, encryption, vulnerabilities and defensive practices."],
      ["04", "Use safe practice labs", "Complete beginner defensive labs and write up what you learned."]
    ]
  }
};

const form = document.getElementById("careerForm");
const results = document.getElementById("results");
let currentPlan = "";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const interest = document.getElementById("interest").value;
  const skills = document.getElementById("skills").value.split(",").map(s => s.trim()).filter(Boolean);
  const level = document.getElementById("level").value;
  const hours = Number(document.getElementById("hours").value);
  const plan = paths[interest];

  document.getElementById("careerName").textContent = plan.name;
  document.getElementById("careerDesc").textContent = plan.desc;
  document.getElementById("matchScore").textContent = plan.score + "%";
  document.getElementById("timeNote").textContent = `${hours} learning hours / week`;
  document.getElementById("roadmap").innerHTML = plan.steps.map((s, i) =>
    `<article class="road-step"><b>STEP ${s[0]}</b><h4>${s[1]}</h4><p>${s[2]}</p></article>`
  ).join("");

  const combined = [...new Set([...skills, ...plan.focus])];
  document.getElementById("skillTags").innerHTML = combined.slice(0, 10).map(s =>
    `<span class="chip">${escapeHTML(s)}</span>`
  ).join("");

  currentPlan = `PATHPILOT — MY CAREER PLAN\nCareer direction: ${plan.name}\nInterest: ${interest}\nDegree: ${document.getElementById("degree").value}\nCurrent skills: ${skills.join(", ") || "Not entered"}\nExperience: ${level}\nLearning time: ${hours} hours/week\n\nROADMAP:\n` +
    plan.steps.map(s => `${s[0]}. ${s[1]} — ${s[2]}`).join("\n") +
    `\n\nSkills to focus on: ${plan.focus.join(", ")}\n\nNote: This is a rule-based learning suggestion, not a validated aptitude score or job guarantee.`;
  results.classList.remove("hidden");
  results.scrollIntoView({behavior: "smooth", block: "start"});
});

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}

document.getElementById("reset").addEventListener("click", () => {
  results.classList.add("hidden");
  form.scrollIntoView({behavior: "smooth"});
});
document.getElementById("download").addEventListener("click", () => {
  const blob = new Blob([currentPlan], {type: "text/plain;charset=utf-8"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "my-pathpilot-career-plan.txt";
  a.click();
  URL.revokeObjectURL(url);
});
