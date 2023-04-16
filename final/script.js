// Define variables
const cartoonList = [
    { title: 'Tom and Jerry', genre: 'Comedy', rating: 4.5 },
    { title: 'Scooby-Doo', genre: 'Mystery', rating: 4.0 },
    { title: 'The Simpsons', genre: 'Comedy', rating: 4.2 },
    { title: 'Phineas and Ferb', genre: 'Comedy', rating: 4.4 },
    { title: 'Avatar: The Last Airbender', genre: 'Action', rating: 4.7 },
    { title: 'Gravity Falls', genre: 'Mystery', rating: 4.6 }
  ];
  
  const cartoonSection = document.querySelector('#cartoon-section');
  const filterButtons = document.querySelectorAll('.filter-button');
  
  // Display cartoon list
  function displayCartoons(cartoons) {
    let cartoonHTML = '';
    cartoons.forEach((cartoon) => {
      cartoonHTML += `
        <div class="cartoon">
          <h2>${cartoon.title}</h2>
          <p>Genre: ${cartoon.genre}</p>
          <p>Rating: ${cartoon.rating}</p>
        </div>
      `;
    });
    cartoonSection.innerHTML = cartoonHTML;
  }
  
  displayCartoons(cartoonList);
  
  // Filter cartoons by genre
  function filterCartoons(event) {
    const genre = event.target.dataset.genre;
    const filteredCartoons = cartoonList.filter((cartoon) => {
      return cartoon.genre === genre;
    });
    displayCartoons(filteredCartoons);
  }
  
  // Add event listeners to filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener('click', filterCartoons);
  });
  