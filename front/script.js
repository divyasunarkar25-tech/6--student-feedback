const form = document.getElementById("feedbackForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const feedbackData = {
    name: document.getElementById("name").value,
    rating: document.getElementById("rating").value,
    comment: document.getElementById("comment").value,
  };

  try {
    const response = await fetch(
      "https://feedback-app-b1y9.onrender.com/api/feedback",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackData),
      }
    );

    const data = await response.json();

    alert(data.message);

    form.reset();

  } catch (error) {
    console.log(error);
  }
});