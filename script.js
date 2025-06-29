document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".original-button");

    const homeSection = document.getElementById("home");
    const aboutSection = document.getElementById("about");
    const projectSection = document.getElementById("projects");
    const contactSection = document.getElementById("contact");

    const welcomeText = document.querySelector(".welcome-text");
    const welcomePara = document.querySelector(".welcome-para");
    const social = document.querySelector(".social-media");
    const image = document.querySelector(".image");

    const aboutText = aboutSection.querySelector(".about-text");
    const aboutParas = aboutSection.querySelectorAll(".about-para");
    const heading = aboutSection.querySelector(".what-drives-me-heading");
    const cardContainer = aboutSection.querySelector(".card-container");
    const skillset = aboutSection.querySelector(".skillset");

    const projectHeading = projectSection.querySelector(".project-heading");
    const leftCards = projectSection.querySelectorAll(".card1, .card2, .card5, .card6");
    const rightCards = projectSection.querySelectorAll(".card3, .card4, .card7, .card8");

    const contactCard = contactSection.querySelector(".contact-card");

    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        if (section.id === "home") {
            section.classList.add("active");
            section.style.display = "flex";
        } else {
            section.classList.remove("active");
            section.style.display = "none";
        }
    });

    let currentSection = homeSection;

    // ========== HOME ==========
    function resetHomeClasses() {
        welcomeText.className = "welcome-text";
        welcomePara.className = "welcome-para";
        social.className = "social-media";
        image.className = "image";
    }

    function playHomeEnter() {
        homeSection.style.display = "flex";
        resetHomeClasses();

        welcomeText.classList.remove("hidden");
        welcomePara.classList.remove("hidden");
        social.classList.remove("hidden");
        image.classList.remove("hidden");

        void welcomeText.offsetWidth;

        welcomeText.classList.add("slide-in-down");
        welcomePara.classList.add("slide-in-down");
        social.classList.add("slide-in-up");
        image.classList.add("slide-in-right");

        setTimeout(resetHomeClasses, 600);
    }

    function playHomeExit() {
        resetHomeClasses();

        welcomeText.classList.add("slide-up");
        welcomePara.classList.add("slide-up");
        social.classList.add("slide-down");
        image.classList.add("slide-right");

        setTimeout(() => {
            welcomeText.classList.add("hidden");
            welcomePara.classList.add("hidden");
            social.classList.add("hidden");
            image.classList.add("hidden");
            homeSection.style.display = "none";
        }, 600);
    }

    // ========== ABOUT ==========
    function resetAboutClasses() {
        aboutText.className = "about-text";
        aboutParas.forEach(p => p.className = "about-para");
        heading.className = "what-drives-me-heading";
        cardContainer.className = "card-container";
        skillset.className = "skillset";
    }

    function playAboutEnter() {
        aboutSection.style.display = "flex";
        aboutText.classList.remove("hidden");
        aboutParas.forEach(p => p.classList.remove("hidden"));
        heading.classList.remove("hidden");
        cardContainer.classList.remove("hidden");
        skillset.classList.remove("hidden");

        void aboutText.offsetWidth;

        resetAboutClasses();
        aboutText.classList.add("slide-in-down");
        aboutParas.forEach(p => p.classList.add("slide-in-down"));
        heading.classList.add("slide-in-up");
        cardContainer.classList.add("slide-in-up");
        skillset.classList.add("slide-in-right");

        setTimeout(resetAboutClasses, 600);
    }

    function playAboutExit() {
        resetAboutClasses();
        aboutText.classList.add("slide-up");
        aboutParas.forEach(p => p.classList.add("slide-up"));
        heading.classList.add("slide-down");
        cardContainer.classList.add("slide-down");
        skillset.classList.add("slide-right");

        setTimeout(() => {
            aboutText.classList.add("hidden");
            aboutParas.forEach(p => p.classList.add("hidden"));
            heading.classList.add("hidden");
            cardContainer.classList.add("hidden");
            skillset.classList.add("hidden");
            aboutSection.style.display = "none";
        }, 600);
    }

    // ========== PROJECTS ==========
    function resetProjectClasses() {
        projectHeading.className = "project-heading";
        leftCards.forEach(card => card.className = card.classList[0]);
        rightCards.forEach(card => card.className = card.classList[0]);
    }

    function playProjectsEnter() {
        projectSection.style.display = "flex";
        projectHeading.classList.remove("hidden");
        leftCards.forEach(card => card.classList.remove("hidden"));
        rightCards.forEach(card => card.classList.remove("hidden"));

        void projectHeading.offsetWidth;

        resetProjectClasses();
        projectHeading.classList.add("slide-in-down");
        leftCards.forEach(card => card.classList.add("slide-in-left"));
        rightCards.forEach(card => card.classList.add("slide-in-right"));

        setTimeout(resetProjectClasses, 600);
    }

    function playProjectsExit() {
        resetProjectClasses();

        projectHeading.classList.add("slide-up");
        leftCards.forEach(card => card.classList.add("slide-left"));
        rightCards.forEach(card => card.classList.add("slide-right"));

        setTimeout(() => {
            projectHeading.classList.add("hidden");
            leftCards.forEach(card => card.classList.add("hidden"));
            rightCards.forEach(card => card.classList.add("hidden"));
            projectSection.style.display = "none";
        }, 600);
    }

    // ========== CONTACT ==========
    function playContactEnter() {
        contactSection.style.display = "flex";
        void contactCard.offsetWidth;
        contactCard.classList.add("slide-in-up");

        setTimeout(() => {
            contactCard.classList.add("show-elements");
        }, 700);
    }

    function playContactExit() {
        contactCard.classList.remove("slide-in-up");
        contactCard.classList.add("slide-down");

        setTimeout(() => {
            contactSection.style.display = "none";
        }, 700);
    }

    // ========== TRANSITION HANDLER ==========
    function handleSectionTransition(targetId) {
        const targetSection = document.getElementById(targetId);
        if (targetSection === currentSection) {
            if (targetId === "about") {
                playAboutExit();
                setTimeout(playAboutEnter, 700);
            } else if (targetId === "home") {
                playHomeExit();
                setTimeout(playHomeEnter, 700);
            } else if (targetId === "projects") {
                playProjectsExit();
                setTimeout(playProjectsEnter, 700);
            } else if (targetId === "contact") {
                playContactExit();
                setTimeout(playContactEnter, 700);
            }
            return;
        }

        if (currentSection.id === "home") playHomeExit();
        else if (currentSection.id === "about") playAboutExit();
        else if (currentSection.id === "projects") playProjectsExit();
        else if (currentSection.id === "contact") playContactExit();

        setTimeout(() => {
            currentSection.classList.remove("active");
            targetSection.classList.add("active");

            if (targetId === "home") playHomeEnter();
            else if (targetId === "about") playAboutEnter();
            else if (targetId === "projects") playProjectsEnter();
            else if (targetId === "contact") playContactEnter();

            currentSection = targetSection;
        }, 600);
    }

    // ========== BUTTON EVENTS ==========
    buttons.forEach(button => {
        const img = button.querySelector("img");
        const targetId = img?.dataset.target;

        button.addEventListener("click", () => {
            if (targetId && document.getElementById(targetId)) {
                handleSectionTransition(targetId);
            }
        });
    });
});
