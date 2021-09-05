function init () {
  fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
    response.json().then(function(json) {
      // console.log(json);
      let name = json[0].firstName + " " + json[0].lastName;
      let hoursInSpace = json[0].hoursInSpace;
      let active = json[0].active;
      let skills = json[0].skills.join(", ");
      let picture = json[0].picture;
      let profile = document.getElementById("container");
      profile.innerHTML = `
        <div class="astronaut">
          <div class="bio">
            <h3>${name}</h3>
            <ul>
                <li>Hours in space: ${hoursInSpace}</li>
                <li>Active: ${active}</li>
                <li>Skills: ${skills}</li>
            </ul>
          </div>
          <img class="avatar" src="${picture}">
        </div>
      `
    });
  });
}
window.addEventListener("load", init);