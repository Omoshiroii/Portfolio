(() => {
  "use strict";

  function initializeNewspaper() {
    const root = document.documentElement;
    if (root.dataset.newspaperReady === "true") return;
    root.dataset.newspaperReady = "true";

    const navigation = document.getElementById("edition-nav");
    const menuToggle = document.querySelector("[data-menu-toggle]");
    const sectionLinks = [...document.querySelectorAll("[data-section-link]")];

    function closeMenu() {
      navigation?.classList.remove("is-open");
      menuToggle?.setAttribute("aria-expanded", "false");
    }

    menuToggle?.addEventListener("click", () => {
      if (!navigation) return;
      const isOpen = navigation.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    function setCurrentSection(id) {
      sectionLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${id}`) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    }

    sectionLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
        const href = link.getAttribute("href");
        if (href?.startsWith("#")) setCurrentSection(href.slice(1));
      });
    });

    const sections = [...document.querySelectorAll("[data-nav-section]")];
    const initialSection = sections.find((section) => `#${section.id}` === window.location.hash);
    setCurrentSection(initialSection?.id || "home");

    if ("IntersectionObserver" in window) {
      const visibleSections = new Map();
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visibleSections.set(entry.target.id, entry.intersectionRatio);
          else visibleSections.delete(entry.target.id);
        });
        const current = [...visibleSections.entries()].sort((a, b) => b[1] - a[1])[0];
        if (current) setCurrentSection(current[0]);
      }, { rootMargin: "-15% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] });
      sections.forEach((section) => observer.observe(section));
    }

    const filterButtons = [...document.querySelectorAll("[data-filter]")];
    const projects = [...document.querySelectorAll("[data-project-category]")];
    const filterStatus = document.querySelector("[data-filter-status]");

    function filterProjects(filter) {
      let visibleCount = 0;
      projects.forEach((project) => {
        const isVisible = filter === "all" || project.dataset.projectCategory === filter;
        project.hidden = !isVisible;
        // An explicit display value also respects filtering if a card uses display: grid.
        if (isVisible) project.style.removeProperty("display");
        else project.style.setProperty("display", "none");
        if (isVisible) visibleCount += 1;
      });
      filterButtons.forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.filter === filter));
      });
      if (filterStatus) {
        filterStatus.textContent = `${visibleCount} ${visibleCount === 1 ? "story" : "stories"} in this edition`;
      }
    }

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => filterProjects(button.dataset.filter || "all"));
    });
    if (projects.length) filterProjects("all");

    const dialogs = [...document.querySelectorAll('dialog[id^="case-"]')];
    const dialogOpeners = new WeakMap();

    function finishClosingDialog(dialog) {
      // Ignore a delayed close event if this dialog has already been reopened.
      if (dialog.hasAttribute("open")) return;
      document.body.classList.toggle("dialog-open", dialogs.some((item) => item.open));
      const opener = dialogOpeners.get(dialog);
      if (opener instanceof HTMLElement && opener.isConnected) opener.focus({ preventScroll: true });
      dialogOpeners.delete(dialog);
    }

    function closeDialog(dialog) {
      if (!dialog || !dialog.hasAttribute("open")) return;
      if (typeof dialog.close === "function") dialog.close();
      else dialog.removeAttribute("open");
      // Native close events may be deferred; restore focus and scrolling now.
      finishClosingDialog(dialog);
    }

    document.querySelectorAll("[data-open-case]").forEach((button) => {
      button.addEventListener("click", () => {
        const dialog = document.getElementById(`case-${button.dataset.openCase}`);
        if (!dialog || !dialogs.includes(dialog) || dialog.hasAttribute("open")) return;
        dialogOpeners.set(dialog, button);
        if (typeof dialog.showModal === "function") dialog.showModal();
        else dialog.setAttribute("open", "");
        document.body.classList.add("dialog-open");
        dialog.querySelector("[data-close-dialog]")?.focus({ preventScroll: true });
      });
    });

    dialogs.forEach((dialog) => {
      dialog.addEventListener("close", () => finishClosingDialog(dialog));
      dialog.querySelectorAll("[data-close-dialog]").forEach((button) => {
        button.addEventListener("click", () => closeDialog(dialog));
      });
      dialog.addEventListener("click", (event) => {
        if (event.target !== dialog) return;
        const bounds = dialog.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right ||
            event.clientY < bounds.top || event.clientY > bounds.bottom) closeDialog(dialog);
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      const menuWasOpen = navigation?.classList.contains("is-open");
      closeMenu();
      if (menuWasOpen) menuToggle?.focus();
      // Native modal dialogs handle Escape themselves; this covers the basic fallback.
      dialogs.forEach((dialog) => {
        if (typeof dialog.showModal !== "function") closeDialog(dialog);
      });
    });

    document.querySelectorAll("[data-print-edition]").forEach((button) => {
      button.addEventListener("click", () => window.print());
    });
    document.querySelectorAll("[data-year]").forEach((element) => {
      element.textContent = String(new Date().getFullYear());
    });

    const frontEdition = document.querySelector(".front-edition") || document.querySelector(".hero-scene");
    const motionToggle = document.querySelector(".motion-toggle");
    if (frontEdition && typeof window.matchMedia === "function") {
      const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      let animationFrame = 0;
      let pointerClientX = 0;
      let pointerClientY = 0;
      let userPaused = motionToggle?.getAttribute("aria-pressed") === "true";

      function resetPaper() {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
        frontEdition.style.setProperty("--paper-rx", "0deg");
        frontEdition.style.setProperty("--paper-ry", "0deg");
        frontEdition.style.setProperty("--pointer-x", "0px");
        frontEdition.style.setProperty("--pointer-y", "0px");
        frontEdition.style.setProperty("--light-x", "50%");
        frontEdition.style.setProperty("--light-y", "50%");
      }

      function updatePaper(event) {
        if (event.pointerType === "touch") return;
        pointerClientX = event.clientX;
        pointerClientY = event.clientY;
        if (animationFrame) return;
        animationFrame = window.requestAnimationFrame(() => {
          animationFrame = 0;
          // Read the paper once per frame, then write the inherited depth and light values.
          const bounds = frontEdition.getBoundingClientRect();
          if (!bounds.width || !bounds.height) return;
          const x = Math.max(-1, Math.min(1, ((pointerClientX - bounds.left) / bounds.width - 0.5) * 2));
          const y = Math.max(-1, Math.min(1, ((pointerClientY - bounds.top) / bounds.height - 0.5) * 2));
          frontEdition.style.setProperty("--paper-rx", `${(-y * 0.9).toFixed(2)}deg`);
          frontEdition.style.setProperty("--paper-ry", `${(x * 1.1).toFixed(2)}deg`);
          frontEdition.style.setProperty("--pointer-x", `${(x * 6).toFixed(2)}px`);
          frontEdition.style.setProperty("--pointer-y", `${(y * 4).toFixed(2)}px`);
          frontEdition.style.setProperty("--light-x", `${((x + 1) * 50).toFixed(2)}%`);
          frontEdition.style.setProperty("--light-y", `${((y + 1) * 50).toFixed(2)}%`);
        });
      }

      function configureEffects() {
        const paused = userPaused || reducedMotion.matches;
        document.body.classList.toggle("effects-paused", paused || document.hidden);
        if (motionToggle) {
          motionToggle.setAttribute("aria-pressed", String(paused));
          motionToggle.textContent = paused ? "RESUME EFFECTS" : "PAUSE EFFECTS";
          // The OS preference remains authoritative, including when it changes mid-visit.
          motionToggle.disabled = reducedMotion.matches;
          motionToggle.title = reducedMotion.matches
            ? "Effects are paused by your device's reduced motion preference."
            : "Pause or resume the paper, lighting and bat effects.";
        }
        frontEdition.removeEventListener("pointermove", updatePaper);
        frontEdition.removeEventListener("pointerleave", resetPaper);
        frontEdition.removeEventListener("pointercancel", resetPaper);
        resetPaper();
        if (finePointer.matches && !paused && !document.hidden) {
          frontEdition.addEventListener("pointermove", updatePaper, { passive: true });
          frontEdition.addEventListener("pointerleave", resetPaper);
          frontEdition.addEventListener("pointercancel", resetPaper);
        }
      }

      motionToggle?.addEventListener("click", () => {
        if (reducedMotion.matches) return;
        userPaused = !userPaused;
        configureEffects();
      });
      [finePointer, reducedMotion].forEach((query) => {
        if (typeof query.addEventListener === "function") query.addEventListener("change", configureEffects);
        else if (typeof query.addListener === "function") query.addListener(configureEffects);
      });
      document.addEventListener("visibilitychange", configureEffects);
      window.addEventListener("blur", resetPaper);
      configureEffects();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeNewspaper, { once: true });
  } else {
    initializeNewspaper();
  }
})();
