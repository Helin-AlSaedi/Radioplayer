// Fetch data from Sveriges Radio API
fetch("https://api.sr.se/api/v2/channels/?format=json")
  .then((response) => response.json()) // Parse JSON response
  .then((data) => {
    const channelsContainer = document.getElementById("channels"); // Get the container for channels

    // Iterate through the channels array
    data.channels.forEach((channel) => {
      // Create a container for each channel
      const channelDiv = document.createElement("div");
      channelDiv.classList.add("channel");

      // Set the background color in the API
      //   const backgroundColor = channel.color;
      channelDiv.style.backgroundColor = `#${channel.color}`;

      // channel details
      channelDiv.innerHTML = `
      <div class="image-section"> 
        <img src="${channel.image}" alt="${channel.name}">
      </div>
      <div class="info-section"> 
        <h2>${channel.name}</h2>
        <audio controls>
          <source src="${channel.liveaudio.url}" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </div>
    `;

      // Append the channel to the container

      channelsContainer.appendChild(channelDiv);
    });
  })
  .catch((error) => {
    console.error("Error fetching channels:", error);

    // Show an error message on the page
    const channelsContainer = document.getElementById("channels");
    channelsContainer.innerHTML = `<p>Failed to load channels. Please try again later.</p>`;
  });
