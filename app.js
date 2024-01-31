document.addEventListener('DOMContentLoaded', function () {
    var skillLogos = document.querySelectorAll('.python-skill-logo, .java-script-skill-logo, .html-skill-logo, .css-skill-logo, .git-skill-logo, .github-skill-logo, .sql-skill-logo, .java-skill-logo, .django-skill-logo, .spring-skill-logo');

    skillLogos.forEach(function (logo) {
        logo.addEventListener('click', function () {
            var imageName = logo.getAttribute('data-name');
            alert('You clicked on the ' + imageName + ' logo.');
        });
    });
});

