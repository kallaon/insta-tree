document.addEventListener("DOMContentLoaded", function () {
  fetch("config.json")
    .then((response) => response.json())
    .then((config) => {
      // Profilová fotka a pozadie
      const profilePic = document.getElementById("profile-picture");
      profilePic.src = config.profilePicture || "profile_picture.png";

      // Názov kanálu a popis
      document.getElementById("channel-name").textContent = config.channelName;
      document.getElementById("channel-description").textContent =
        config.channelDescription;

      // Pridanie tlačidiel s odkazmi
      const linksContainer = document.getElementById("links");
      config.links.forEach((link) => {
        const linkElement = document.createElement("a");
        linkElement.className = "link-button";
        linkElement.href = link.url;
        linkElement.target = "_blank";
        linkElement.innerHTML = `<i class="fab ${link.icon}"></i> ${link.text}`;
        linksContainer.appendChild(linkElement);
      });

      // Pridanie sociálnych ikon
      const socialContainer = document.getElementById("social-links");
      config.socialLinks.forEach((social) => {
        const socialElement = document.createElement("a");
        socialElement.href = social.url;
        socialElement.target = "_blank";
        socialElement.innerHTML = `<i class="fab ${social.icon}"></i>`;
        socialContainer.appendChild(socialElement);
      });
    })
    .catch((error) =>
      console.error("Chyba pri načítavaní config.json:", error)
    );
});
