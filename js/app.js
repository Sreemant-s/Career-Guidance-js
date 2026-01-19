function recommendCareer() {
    const skills = document.querySelectorAll('input[type="checkbox"]:checked');
    const result = document.getElementById("result");
    const msg = document.getElementById("msg");

    result.innerHTML = "";
    msg.textContent = "";

    if (skills.length === 0) {
        msg.textContent = "Please select at least one skill.";
        return;
    }

    let selected = [];
    skills.forEach(s => selected.push(s.value));

    let careers = new Set();

    if (selected.includes("Python") && selected.includes("ML"))
        careers.add("Data Scientist");

    if (selected.includes("Web"))
        careers.add("Web Developer");

    if (selected.includes("Java"))
        careers.add("Software Engineer");

    if (selected.includes("Cloud"))
        careers.add("Cloud Engineer");

    if (selected.includes("Comm"))
        careers.add("HR / Manager");

    if (selected.includes("Data"))
        careers.add("Data Analyst");

    careers.forEach(c => {
        const li = document.createElement("li");
        li.textContent = c;
        result.appendChild(li);
    });
}
