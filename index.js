window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar');
    if (window.scrollY > window.innerHeight - 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
document.addEventListener("DOMContentLoaded", function () {
fetch("data.json")
.then(response => response.json())
.then(data => {
    const carouselInner = document.getElementById("carouselInner");

    
    carouselInner.innerHTML = "";

    
    const cardsPerSlide = window.innerWidth >= 992 ? 4 : window.innerWidth >= 768 ? 2 : 1;

    
    for (let i = 0; i < data.length; i += cardsPerSlide) {
        const chunk = data.slice(i, i + cardsPerSlide);

        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
       

        if (i === 0) carouselItem.classList.add("active"); 

        const row = document.createElement("div");
        row.classList.add("row", "g-4");

        chunk.forEach((property) => {
            const col = document.createElement("div");
            col.classList.add("col","d-flex");

          
            const card = `
                <div class="card property-card h-100 d-flex flex-column">
                    <div class="card-image">
                        <img src="${property.image}" class="card-img-top" alt="${property.title}">
                        <span class="card-badge">${property.status}</span>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${property.title}</h5>
                        <p class="card-text">${property.tagline}</p>
                        <div class="card-footer">
                            <button class="btn btn-primary learn-more" data-id="${property.id}">Learn More</button>
                            
                        </div>
                    </div>
                </div>`;
            col.innerHTML = card;
            row.appendChild(col);
        });

        carouselItem.appendChild(row);
        carouselInner.appendChild(carouselItem);
    }
        const carousel = document.querySelector('#propertyCarousel');
        const prevButton = carousel.querySelector('.carousel-control-prev');
        const nextButton = carousel.querySelector('.carousel-control-next');
        const totalItems = carousel.querySelectorAll('.carousel-item').length;

        function updateNavigationButtons(activeIndex) {
            // Hide prev button on first slide
            if (activeIndex === 0) {
                prevButton.classList.add('hidden');
            } else {
                prevButton.classList.remove('hidden');
            }

            // Hide next button on last slide
            if (activeIndex === totalItems - 1) {
                nextButton.classList.add('hidden');
            } else {
                nextButton.classList.remove('hidden');
            }
        }

        // Initialize button states
        updateNavigationButtons(0);

        // Update buttons when slide changes
        carousel.addEventListener('slid.bs.carousel', function (e) {
            const activeIndex = Array.from(carousel.querySelectorAll('.carousel-item'))
                .indexOf(carousel.querySelector('.carousel-item.active'));
            updateNavigationButtons(activeIndex);
        });
   

  
    document.querySelectorAll(".learn-more").forEach((button) => {
        button.addEventListener("click", () => {
            const propertyId = button.getAttribute("data-id");
            const property = data.find((item) => item.id === propertyId);

            if (property) {
                
                document.getElementById("modalPropertyImage").src = property.image;
                document.getElementById("modalPropertyTitle").textContent = property.title;
                document.getElementById("modalPropertyDescription").textContent = property.description;
                document.getElementById("modalPropertyLocation").querySelector("span").textContent = property.location;

             
                const featuresList = document.getElementById("modalPropertyFeatures");
                featuresList.innerHTML = ""; // Clear existing features
                property.features.forEach((feature) => {
                    const li = document.createElement("li");
                    li.innerHTML = `<i class="fas fa-check-circle text-success me-2"></i>${feature}`;
                    featuresList.appendChild(li);
                });

           
                const viewMoreLink = document.getElementById("modalPropertyLink");
                viewMoreLink.href = property.link;

               
                const modal = new bootstrap.Modal(document.getElementById("propertyModal"));
                modal.show();
            }
        });
    });
})
.catch(error => console.error("Error loading properties:", error));
});



emailjs.init("uoGN2rOUYPf9cWmAN");


document.addEventListener("DOMContentLoaded", function () {
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
event.preventDefault();

const formData = {
    first_name: document.getElementById("first-name").value,
    last_name: document.getElementById("last-name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    property: document.getElementById("Property").value,
    message: document.getElementById("message").value,
};

emailjs
    .send("service_lzxuyvi", "template_ergmivp", formData)
    .then(
        function (response) {
            alert("Message sent successfully!");
            contactForm.reset();
        },
        function (error) {
            alert("Failed to send message. Please try again.");
            console.error("EmailJS error:", error);
        }
    );
});
});