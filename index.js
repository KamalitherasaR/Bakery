document.addEventListener("DOMContentLoaded", function () {

    const copyright = document.querySelector(".copyright");

    if (copyright) {
        copyright.textContent =
            `© ${new Date().getFullYear()} Joe & Emal Bakery. All rights reserved.`;
    }

    const menuCards = document.querySelectorAll(".menu-card");

    menuCards.forEach(function (card) {

        const itemName = card.querySelector("h3");
        const price = card.querySelector(".price");
        const content = card.querySelector(".card-content");

        if (itemName && content && !card.querySelector(".order-btn")) {

            const orderButton = document.createElement("button");

            orderButton.textContent = "Order Now";
            orderButton.className = "btn order-btn";
            orderButton.type = "button";
            orderButton.style.marginTop = "15px";

            orderButton.addEventListener("click", function () {

                const product = itemName.textContent;
                const productPrice = price ? price.textContent : "";

                const subject = `Order Request - ${product}`;

                const body =
                    `Hello Joe & Emal Bakery!\n\n` +
                    `I would like to order: ${product}\n` +
                    `Price: ${productPrice}`;

                openEmail(subject, body);
            });

            content.appendChild(orderButton);
        }
    });

    function openEmail(subject, body) {

    const emailId = "josespinkt@gmail.com";

    const url =
        `https://mail.google.com/mail/?view=cm&fs=1` +
        `&to=${encodeURIComponent(emailId)}` +
        `&su=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

    window.open(url, "_blank");
}
    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const message = document.querySelector("#message").value.trim();

            if (!name || !email || !message) {
                alert("Please fill in all the fields.");
                return;
            }

            const subject = "Customer Enquiry - Joe & Emal Bakery";

            const body =
                `Hello Joe & Emal Bakery!\n\n` +
                `Name: ${name}\n` +
                `Customer Email: ${email}\n\n` +
                `Message:\n${message}`;

            openEmail(subject, body);
        });
    }

    const galleryImages = document.querySelectorAll(".gallery-item img");

    galleryImages.forEach(function (img) {

        img.style.cursor = "pointer";

        img.addEventListener("click", function () {

            const overlay = document.createElement("div");

            overlay.style.cssText = `
                position: fixed;
                inset: 0;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
                padding: 20px;
                cursor: pointer;
            `;

            const largeImage = document.createElement("img");

            largeImage.src = img.src;
            largeImage.alt = img.alt;

            largeImage.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                width: auto;
                height: auto;
                object-fit: contain;
                border-radius: 8px;
            `;

            overlay.appendChild(largeImage);
            document.body.appendChild(overlay);

            overlay.addEventListener("click", function () {
                overlay.remove();
            });
        });
    });

});
