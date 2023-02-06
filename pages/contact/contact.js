// const form = document.querySelector("#contact-form");

// form.addEventListener("submit", async (event) => {
//   event.preventDefault();
//   const formData = new FormData(form);
//   const name = formData.get("name");
//   const email = formData.get("email");
//   const message = formData.get("message");

//   const body = { name, email, message };

//   try {
//     const response = await fetch("/api/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(body),
//     });
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     form.reset();
//     const data = await response.json();
//     console.log(data);
//     alert("Message sent successfully");
//   } catch (error) {
//     console.error("There was a problem with your fetch operation:", error);
//   }
// });
