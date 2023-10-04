document.addEventListener('DOMContentLoaded', function () {
    const logos = document.querySelectorAll('.skill_logos');

    logos.forEach(logo => {
        logo.addEventListener('click', function () {
            alert(`You clicked on ${this.alt} logo!`);
        });
    });
});
