(() => {
  const home = document.getElementById("home");
  const sections = [
    document.getElementById("messageSection"),
    document.getElementById("snapshotsSection"),
    document.getElementById("remindersSection"),
    document.getElementById("videoSection"),
  ];

  function showSection(sectionId) {
    // Hide home
    home.classList.add("d-none");

    // Hide all sections
    sections.forEach(s => s.classList.add("d-none"));

    // Show target
    const target = document.getElementById(sectionId);
    if (target) target.classList.remove("d-none");

    // Nice: jump to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goHome() {
    // Hide all sections, show home
    sections.forEach(s => s.classList.add("d-none"));
    home.classList.remove("d-none");

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Card navigation
  document.querySelectorAll("[data-target]").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");
      showSection(target);
    });
  });

  // Back buttons
  document.querySelectorAll("[data-action='goHome']").forEach(btn => {
    btn.addEventListener("click", goHome);
  });

  // Polaroid modal (enlarge + caption)
  const modalEl = document.getElementById("photoModal");
  const modalImage = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");
  const photoModal = modalEl ? new bootstrap.Modal(modalEl) : null;

  document.querySelectorAll(".polaroid").forEach(card => {
    card.addEventListener("click", () => {
      const fullSrc = card.getAttribute("data-full");
      const caption = card.getAttribute("data-caption") || "";

      if (modalImage) modalImage.src = fullSrc;
      if (modalCaption) modalCaption.textContent = caption;

      if (photoModal) photoModal.show();
    });
  });
})();
