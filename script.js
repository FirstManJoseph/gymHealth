/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];

      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

// ===================================================

document.querySelector('.logo').addEventListener('click', function () {
  location.reload();
});

document.querySelector('#findGym').addEventListener('click', function () {
  document.querySelector('.hero-section').style.backgroundImage =
    'url(mapBG.png)';
  document.querySelector('.content').textContent = '';
  document.querySelector('.navbar').style.backgroundImage = 'url(gympic.jpeg)';
});

document.querySelector('#training').addEventListener('click', function () {
  document.querySelector('.hero-section').style.backgroundImage =
    'url(trainingsBG.png)';
  document.querySelector('.content').textContent = '';
  document.querySelector('.navbar').style.backgroundImage = 'url(gympic.jpeg)';
});

document.querySelector('#whyJoinUs').addEventListener('click', function () {
  document.querySelector('.hero-section').style.backgroundImage =
    'url(whyJoinUsBG.png)';
  document.querySelector('.content').textContent = '';
  document.querySelector('.navbar').style.backgroundImage = 'url(gympic.jpeg)';
});

document.querySelector('#eqptmnt').addEventListener('click', function () {
  document.querySelector('.hero-section').style.backgroundImage =
    'url(eqptmntBG.png)';
  document.querySelector('.content').textContent = '';
  document.querySelector('.navbar').style.backgroundImage = 'url(gympic.jpeg)';
});

document.querySelector('#contactUs').addEventListener('click', function () {
  document.querySelector('.hero-section').style.backgroundImage =
    'url(contactBG.png)';
  document.querySelector('.content').textContent = '';
  document.querySelector('.navbar').style.backgroundImage = 'url(gympic.jpeg)';
});
