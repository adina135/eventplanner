// EventPlanner – interactivitate pagina principală
document.addEventListener("DOMContentLoaded", () => {
  // 1. Validare formular de căutare: textul, dacă e completat, are minim 3 caractere
  const formCautare = document.getElementById("formCautare");
  if (formCautare) {
    formCautare.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = document.getElementById("cautaText");
      const oras = document.getElementById("cautaOras").value;
      const valoare = text.value.trim();
      if (valoare.length > 0 && valoare.length < 3) {
        text.classList.add("is-invalid");
        return;
      }
      text.classList.remove("is-invalid");
      const params = new URLSearchParams();
      if (valoare) params.set("q", valoare);
      if (oras) params.set("oras", oras);
      window.location.href = "evenimente.html" + (params.toString() ? "?" + params : "");
    });
  }

  // 2. Validare newsletter: e-mail valid + acord GDPR bifat
  const formNews = document.getElementById("formNewsletter");
  if (formNews) {
    formNews.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("emailNewsletter");
      const acord = document.getElementById("acordGdpr");
      const emailOk = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(email.value.trim());
      email.classList.toggle("is-invalid", !emailOk);
      acord.classList.toggle("is-invalid", !acord.checked);
      if (emailOk && acord.checked) {
        document.getElementById("mesajNewsletter").classList.remove("d-none");
        formNews.reset();
      }
    });
  }

  // 3. Filtru rapid pentru evenimentele recomandate
  const butoane = document.querySelectorAll(".btn-filter");
  butoane.forEach((btn) => {
    btn.addEventListener("click", () => {
      butoane.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filtru = btn.dataset.filter;
      document.querySelectorAll(".event-item").forEach((card) => {
        const tags = card.dataset.tags.split(" ");
        card.classList.toggle("ascuns", filtru !== "toate" && !tags.includes(filtru));
      });
    });
  });
});
