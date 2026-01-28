function evaluate(){
  let answers = [
    getVal("q1"),
    getVal("q2"),
    getVal("q3")
  ];

  if(answers.includes(null)){
    msg("Please answer all questions");
    return;
  }

  let tech=0,bio=0,comm=0;

  answers.forEach(a=>{
    if(a==="tech") tech++;
    if(a==="bio") bio++;
    if(a==="comm") comm++;
  });

  let career="", colleges="", percent="", image="";

  if(tech>=2){
    career="Engineering / IT";
    colleges="IITs, NITs, VIT, SRM";
    percent="Minimum 75% in PCM";
    image="https://via.placeholder.com/80?text=IT";
  }
  else if(bio>=2){
    career="Medical";
    colleges="AIIMS, Govt Medical Colleges";
    percent="Minimum 80% in PCB";
    image="https://via.placeholder.com/80?text=MED";
  }
  else{
    career="Commerce & Management";
    colleges="IIMs, Christ University, DU";
    percent="Minimum 60% in Commerce";
    image="https://via.placeholder.com/80?text=BIZ";
  }

  showResult(career,colleges,percent,image);
}

function getVal(q){
  let r=document.getElementsByName(q);
  for(let i of r) if(i.checked) return i.value;
  return null;
}

function showResult(career,colleges,percent,image){
  let html = `
  <div class="result-box">
    <h3>Recommended Career: ${career}</h3>
    <img src="${image}">
    <p><b>Suggested Colleges:</b> ${colleges}</p>
    <p><b>Required Percentage:</b> ${percent}</p>
  </div>`;
  document.getElementById("result").innerHTML=html;
}

function msg(t){
  document.getElementById("msg").innerText=t;
}

