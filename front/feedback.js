async function loadFeedback() {
  try {


    const response = await fetch("https://feedback-app-b1y9.onrender.com/api/feedback");

    const data = await response.json();
    const feedbacks = data.feedbacks || [];

    const feedbackList = document.getElementById("feedbackList");

    feedbackList.innerHTML = "";

    feedbacks.forEach((feedback) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <div class="card-header">
          <h3>${feedback.name}</h3>
          <span class="rating">⭐ ${feedback.rating}/5</span>
        </div>
        <p class="comment">${feedback.comment}</p>
      `;

      feedbackList.appendChild(card);
    });

  } catch (error) {
    console.error("Error loading feedback:", error);
  }
}

loadFeedback();