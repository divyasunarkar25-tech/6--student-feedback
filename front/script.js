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
      "http://localhost:5000/api/feedback",
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