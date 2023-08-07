//where provile information will appear
const overview = document.querySelector(".overview");
const username = "Sara-414";

const gitProfileInfo = async function () {
    const userInfo = await fetch(
        `https://api.github.com/users/${username}`);
    const userData = await userInfo.json();
    displayUserInfo(userData);
};
gitProfileInfo();

const displayUserInfo = function (userData) {
    const div = document.createElement("div");
    div.classList.add("user-info");
    div.innerHTML = `
    <figure>
      <img alt="user avatar" src=${userData.avatar_url} />
    </figure>
    <div>
      <p><strong>Name:</strong> ${userData.name}</p>
      <p><strong>Bio:</strong> ${userData.bio}</p>
      <p><strong>Location:</strong> ${userData.location}</p>
      <p><strong>Number of public repos:</strong> ${userData.public_repos}</p>
    </div>
    `;
    overview.append(div);
};