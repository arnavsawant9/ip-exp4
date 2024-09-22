// // const receiptDiv = document.querySelector("#receipt");
// // addEventListener("DOMContentLoaded", function () {
// //   document
// //     .getElementById("orderForm")
// //     .addEventListener("submit", showSuccessMessage);
// //   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// //   const mobileNumberRegex = /^[0-9]{10}$/;
// //   // Validating the email address
// //   document.getElementById("email").addEventListener("input", () => {
// //     if (!emailRegex.test(document.getElementById("email").value)) {
// //       document
// //         .getElementById("email")
// //         .setCustomValidity("Invalid email address");
// //       console.log("Invalid email address");
// //     } else {
// //       document.getElementById("email").setCustomValidity("");
// //       console.log("Valid email address");
// //     }
// //   });
// //   // Validating the mobile number
// //   document.getElementById("mobile_number").addEventListener("input", () => {
// //     if (
// //       !mobileNumberRegex.test(document.getElementById("mobile_number").value)
// //     ) {
// //       document
// //         .getElementById("mobile_number")
// //         .setCustomValidity("Invalid mobile number");
// //       console.log("Invalid mobile number");
// //     } else {
// //       document.getElementById("mobile_number").setCustomValidity("");
// //       console.log("Valid mobile number");
// //     }
// //   });
// // });
// // function showSuccessMessage(event) {
// //   event.preventDefault();
// //   document.getElementById("successMessage").innerHTML =
// //     "Your order has been placed successfully!";
// //   const name = document.querySelector("#name");
// //   const email = document.querySelector("#email");
// //   const mobile_number = document.querySelector("#mobile_number");
// //   const address = document.querySelector("#address");
// //   const size = document.querySelector("#size");
// //   const color = document.querySelector("#color");
// //   const quantity = document.querySelector("#quantity");
// //   const customText = document.querySelector("#customText");
// //   const orderObject = {
// //     name: name.value,
// //     email: email.value,
// //     mobile_number: mobile_number.value,
// //     address: address.value,
// //     size: size.value,
// //     color: color.value,
// //     quantity: quantity.value,
// //     custom_text: customText.value,
// //   };
// //   console.log(orderObject);
// //   setTimeout(() => {
// //     document.getElementById("successMessage").innerHTML = "";
// //   }, 5000);
// //   document.querySelector("#orderForm").reset();
// // }

// // function generateReceipt() {
// //   receiptDiv.innerHTML = "";

// //   const currentDate = new Date().toLocaleDateString("en-IN");

// //   const name = document.querySelector("name").value.trim();
// //   const address = document.querySelector("address").value.trim();
// //   // const tagline = document.getElementById('tagline').value.trim();
// //   const size = document.querySelector("size").value;

// //   const receiptContent = `
// //             <h2>Order Receipt</h2>
// //             <p><strong>Name:</strong> ${name}</p>
// //             <p><strong>Address:</strong> ${address}</p>
// //             <p><strong>Size:</strong> ${size}</p>
// //             <p><strong>Date:</strong> ${currentDate}</p>
// //         `;
// //   receiptDiv.innerHTML = receiptContent;
// // }

// // document.querySelector(".order").addEventListener("receipt",generateReceipt());












// //const receiptDiv = document.getElementById("receipt");

// addEventListener("DOMContentLoaded", function () {
//   document
//     .getElementById("orderForm")
//     .addEventListener("submit", showSuccessMessage);

//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   const mobileNumberRegex = /^[0-9]{10}$/;
  
//   // Validating the email address
//   document.getElementById("email").addEventListener("input", () => {
//     if (!emailRegex.test(document.getElementById("email").value)) {
//       document
//         .getElementById("email")
//         .setCustomValidity("Invalid email address");
//       console.log("Invalid email address");
//     } else {
//       document.getElementById("email").setCustomValidity("");
//       console.log("Valid email address");
//     }
//   });

//   // Validating the mobile number
//   document.getElementById("mobile_number").addEventListener("input", () => {
//     if (!mobileNumberRegex.test(document.getElementById("mobile_number").value)) {
//       document
//         .getElementById("mobile_number")
//         .setCustomValidity("Invalid mobile number");
//       console.log("Invalid mobile number");
//     } else {
//       document.getElementById("mobile_number").setCustomValidity("");
//       console.log("Valid mobile number");
//     }
//   });


// //   function generateReceipt() {
// //     receiptDiv.innerHTML = "";
  
// //     const currentDate = new Date().toLocaleDateString("en-IN");
  
// //     // Selecting by IDs instead of tag names
// //     const name = document.querySelector("#name").value.trim();
// //     const address = document.querySelector("#address").value.trim();
// //     const size = document.querySelector("#size").value;
  
// //     const receiptContent = `
// //       <h2>Order Receipt</h2>
// //       <p><strong>Name:</strong> ${name}</p>
// //       <p><strong>Address:</strong> ${address}</p>
// //       <p><strong>Size:</strong> ${size}</p>
// //       <p><strong>Date:</strong> ${currentDate}</p>
// //     `;
  
// //     receiptDiv.innerHTML = receiptContent;
// //   }

// });

// function showSuccessMessage(event) {
//   event.preventDefault();
//   document.getElementById("successMessage").innerHTML =
//     "Your order has been placed successfully!";

//   const name = document.querySelector("#name");
//   const email = document.querySelector("#email");
//   const mobile_number = document.querySelector("#mobile_number");
//   const address = document.querySelector("#address");
//   const size = document.querySelector("#size");
//   const color = document.querySelector("#color");
//   const quantity = document.querySelector("#quantity");
//   const customText = document.querySelector("#customText");
//   const receiptDiv = document.getElementById("receipt");

//   const orderObject = {
//     name: name.value,
//     email: email.value,
//     mobile_number: mobile_number.value,
//     address: address.value,
//     size: size.value,
//     color: color.value,
//     quantity: quantity.value,
//     custom_text: customText.value,
//   };

//   console.log(orderObject);



//   function generateReceipt() {
//     receiptDiv.innerHTML = "";
  
//     const currentDate = new Date().toLocaleDateString("en-IN");
  
//     // Selecting by IDs instead of tag names
//     const name = document.getElementById("name").value;
//     const address = document.getElementById("address").value;
//     const size = document.getElementById("size").value;
  
//     const receiptContent = `
//       <h2>Order Receipt</h2>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Address:</strong> ${address}</p>
//       <p><strong>Size:</strong> ${size}</p>
//       <p><strong>Date:</strong> ${currentDate}</p>
//     `;
  
//     receiptDiv.innerHTML = receiptContent;
//   }




//   generateReceipt();
//   // Call the generateReceipt function here to display the receipt

//   setTimeout(() => {
//     document.getElementById("successMessage").innerHTML = "";
//   }, 5000);
//   document.querySelector("#orderForm").reset();

//  // generateReceipt();
// }


  












addEventListener("DOMContentLoaded", function () {
  // Attach submit event listener to form
  document
    .getElementById("orderForm")
    .addEventListener("submit", showSuccessMessage);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const mobileNumberRegex = /^[0-9]{10}$/;

  // Validating the email address
  document.getElementById("email").addEventListener("input", () => {
    if (!emailRegex.test(document.getElementById("email").value)) {
      document
        .getElementById("email")
        .setCustomValidity("Invalid email address");
      console.log("Invalid email address");
    } else {
      document.getElementById("email").setCustomValidity("");
      console.log("Valid email address");
    }
  });

  // Validating the mobile number
  document.getElementById("mobile_number").addEventListener("input", () => {
    if (!mobileNumberRegex.test(document.getElementById("mobile_number").value)) {
      document
        .getElementById("mobile_number")
        .setCustomValidity("Invalid mobile number");
      console.log("Invalid mobile number");
    } else {
      document.getElementById("mobile_number").setCustomValidity("");
      console.log("Valid mobile number");
    }
  });
});

// Function that handles the form submission and generates the receipt
function showSuccessMessage(event) {
  event.preventDefault(); // Prevent form from submitting the traditional way
  document.getElementById("successMessage").innerHTML =
    "Your order has been placed successfully!";

  // Extracting values from the form inputs
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const mobile_number = document.querySelector("#mobile_number").value.trim();
  const address = document.querySelector("#address").value.trim();
  const size = document.querySelector("#size").value;
  const color = document.querySelector("#color").value;
  const quantity = document.querySelector("#quantity").value;
  const customText = document.querySelector("#customText").value;

  // Creating the order object for logging or further processing
  const orderObject = {
    name,
    email,
    mobile_number,
    address,
    size,
    color,
    quantity,
    custom_text: customText,
  };

  console.log(orderObject); // Log the order object

  // Generate the receipt and display it
  generateReceipt();

  // Clear the success message after 5 seconds
  setTimeout(() => {
    document.getElementById("successMessage").innerHTML = "";
  }, 5000);

  // Reset the form
  document.querySelector("#orderForm").reset();
}

// Function to generate and display the receipt
function generateReceipt() {
  const receiptDiv = document.getElementById("receipt"); // Selecting the receipt div
  receiptDiv.innerHTML = ""; // Clear any existing receipt content

  const currentDate = new Date().toLocaleDateString("en-IN"); // Get current date in "en-IN" format

  // Extracting values again for the receipt generation
  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const size = document.getElementById("size").value;

  // Creating the receipt content as HTML
  const receiptContent = `
    <h2>Order Receipt</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>Size:</strong> ${size}</p>
    <p><strong>Date:</strong> ${currentDate}</p>
  `;

  receiptDiv.innerHTML = receiptContent; // Add the receipt content to the div
}
