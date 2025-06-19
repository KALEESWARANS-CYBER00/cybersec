document.addEventListener("DOMContentLoaded", () => {
  const titles = [
  "JAVA FULLSTACK DEV",
  "MERN STACK DEV"
  ];

  const typedElement = document.getElementById("typed");
  if (!typedElement) return;

  let titleIndex = 0;
  let charIndex = 0;
  let typing = true;

  function typeEffect() {
    const currentTitle = titles[titleIndex];

    if (typing) {
      typedElement.textContent = currentTitle.slice(0, ++charIndex);
      if (charIndex === currentTitle.length) {
        typing = false;
        setTimeout(typeEffect, 90000);
      } else {
        setTimeout(typeEffect, 90000);
      }
    } else {
      typedElement.textContent = currentTitle.slice(0, --charIndex);
      if (charIndex === 0) {
        typing = true;
        titleIndex = (titleIndex + 1) % titles.length;
        setTimeout(typeEffect, 200);
      } else {
        setTimeout(typeEffect, 50);
      }
    }
  }

  typeEffect();

  // Optional: Contact form logic
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector("input[placeholder='Name']").value.trim();
      const email = form.querySelector("input[placeholder='Email']").value.trim();
      const message = form.querySelector("textarea").value.trim();

      if (name && email && message) {
        console.log("Contact Form Submitted:", { name, email, message });
        alert(`Thank you for reaching out, ${name}!`);
        form.reset();
      } else {
        alert("Please fill out all fields.");
      }
    });
  }
});
 function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.remove("toast-hidden");
    toast.classList.add("toast-show");

    setTimeout(() => {
      toast.classList.remove("toast-show");
      toast.classList.add("toast-hidden");
    }, 4000);
  }

  function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.remove("toast-hidden");
    toast.classList.add("toast-show");

    setTimeout(() => {
      toast.classList.remove("toast-show");
      toast.classList.add("toast-hidden");
    }, 5000);
  }

  document.querySelector('.btn[download]').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default download

    const fileUrl = this.getAttribute('href');

    fetch(fileUrl, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          // File exists, allow download
          window.location.href = fileUrl;
        } else {
          showToast("⚠️ Resume not found. An updated version with new skills is coming soon. Apologies for the inconvenience.");
        }
      })
      .catch(() => {
        showToast("⚠️ Resume not found. An updated version with new skills is coming soon. Apologies for the inconvenience.");
      });
  });
