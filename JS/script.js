//AJAX call the Random User Generator API
$.ajax({
url: 'https://randomuser.me/api/?results=12',
dataType: 'json',
success: function(data) {
  gallery(data.results);
  modal(data);
}
});

// Loop through each user
function gallery(data){
    data.forEach(data => {
        const userHTML =
           `<div class="card">
            <div class="card-img-container">
                <img class="card-img" src="${data.picture.large}" alt="profile picture">
            </div>
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">${data.name.first} ${data.name.last}</h3>
                <p class="card-text">${data.email}</p>
                <p class="card-text cap">${data.location.city}, ${data.location.state}</p>
            </div>
            </div>`;
// Add the userHTML onto the gallery id section of the page
        $('#gallery').append(userHTML);
    })
}
// click event handler onto every card
function modal(data) {
    let card = $('.card');
    for (var i = 0; i < card.length; i++) {
    ((i) => {
    card[i].addEventListener("click", function() {
    let modalHTML =
    `<div class="modal-container">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
        <img class="modal-img" src="${data.results[i].picture.large}" alt="profile picture">
          <h3 id="name" class="modal-name cap">${data.results[i].name.first} ${data.results[i].name.last}</h3>
            <p class="modal-text">${data.results[i].email}</p>
            <p class="modal-text cap">${data.results[i].location.city}</p>
            <hr>
            <p class="modal-text">${data.results[i].cell}</p>
            <p class="modal-text">${data.results[i].location.street}, ${data.results[i].location.city}, ${data.results[i].location.state}, ${data.results[i].location.postcode}</p>
            <p class="modal-text">Birthday: ${data.results[i].dob.date.slice(0,10)}</p>
            <div class="modal-btn-container">
        </div>
    </div>
    </div>
    </div>
    </div>`;

    console.log(card);
    $('#gallery').append(modalHTML);
    // Closes window when pressing the X
    $('#modal-close-btn').click(function() {
        $('.modal-container').remove();
    });
    });
    })
    (i);
    };
}

// Search bar
const form =
  `<form action="#" method="get">
  <input type="search" id="search-input" class="search-input" placeholder="Search...">
  <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
  </form>`;
  $('.search-container').append(form);
