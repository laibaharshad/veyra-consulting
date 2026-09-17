const hero = document.querySelector(".hero, .page-hero");
const shape = document.querySelector(".hero-shape");
const inner = document.querySelector(".hero-shape-inner");

if (hero && shape && inner) {

    hero.addEventListener("mousemove", (event) => {

        const rect = hero.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        shape.style.transform = `
            translate(${x * 45}px, calc(-50% + ${y * 45}px))
            rotate(20deg)
        `;

        inner.style.transform = `
            translate(${x * -20}px, ${y * -20}px)
        `;
    });


    hero.addEventListener("mouseleave", () => {

        shape.style.transform =
            "translate(0, -50%) rotate(20deg)";

        inner.style.transform =
            "translate(0, 0)";
    });

}