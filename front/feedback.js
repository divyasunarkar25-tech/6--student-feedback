const feedbackList = document.getElementById("feedbackList");

const getFeedback = async () => {
  try {
    const response = await fetch(
      "https://6-student-feedback.vercel.app/feedback",
    );

    const data = await response.json();

    feedbackList.innerHTML = "";

    let html = "";

    data.feedbacks.forEach((item) => {
      html += `
        <div class="card">
          <h3>${item.name}</h3>
          <p>⭐ ${item.rating}</p>
          <p>${item.comment}</p>
        </div>
      `;
    });

    feedbackList.innerHTML = html;

  } catch (error) {
    console.log(error);
  }
};

getFeedback();