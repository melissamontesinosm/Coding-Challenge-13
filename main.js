// Task 2: Fetch Products from the API Using Fetch and Promises

const productcontainer = document.getElementById('product-container');

fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response not ok');
    }
      return response.json(); // Parse the response as JSON
    })

    .then(data =>
        displayProducts(data)) // Display prducts

    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById('productContainer').innerHTML = '<p>Failed to load products. Please try again later.</p>';
    });

 // Task 3: Display Product Details Dynamically
 
 