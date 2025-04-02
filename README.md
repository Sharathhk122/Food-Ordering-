# Food-Ordering-
Food ordering web application using html, css , js In js using  dom  creating a cards.
It includes a project description, features, technologies used, setup instructions, screenshots, and more.  

---

### **📌 Steps to Upload to GitHub**  
1. Create a `README.md` file in your project folder.
2. Copy and paste the following content.
3. Add screenshots to the `screenshots` folder and update the file paths in the README.
4. Commit and push the changes.

---

### **📄 README.md for Your Zomato Project**  

```md
# 🍽️ Zomato Food Ordering Project  

A **food ordering web application** that allows users to browse restaurants, view menu items, and add food to their cart. This project is built using **JavaScript (DOM manipulation)** and features **dynamic UI elements using cards**.

## 🚀 Features  
✅ Interactive UI with restaurant listings  
✅ Add and remove food items dynamically  
✅ Responsive design  
✅ Uses **DOM manipulation** to update the cart  

## 🛠️ Technologies Used  
- HTML  
- CSS  
- JavaScript (DOM Manipulation)  

## 📸 Screenshots  



### Food Menu  
![Food Menu](screenshots/menu.png)  

## 📂 Project Structure  

```
/zomato-project
│── index.html        # Main HTML file  
│── styles.css        # Styling file  
│── script.js         # JavaScript file (DOM Manipulation)  
│── assets/           # Images, icons  
│── screenshots/      # Screenshots for README  
```

## 🛠️ Setup Instructions  

1️⃣ Clone the repository:  
```sh
git clone https://github.com/your-username/zomato-project.git
```  

2️⃣ Open `index.html` in a browser.  

## 📜 Code Explanation  

### **📌 Dynamic Food Listing**
In `script.js`, we use **JavaScript DOM manipulation** to create food items dynamically:  
```js
const menuContainer = document.getElementById("menu");
const foodItems = [
  { name: "Pizza", price: 10, img: "pizza.jpg" },
  { name: "Burger", price: 5, img: "burger.jpg" }
];

foodItems.forEach(item => {
  let foodCard = document.createElement("div");
  foodCard.classList.add("food-item");
  foodCard.innerHTML = `
    <img src="${item.img}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>Price: $${item.price}</p>
    <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
  `;
  menuContainer.appendChild(foodCard);
});
```
Here, **food items are dynamically created** using `document.createElement` and appended to the page.

---

## 💡 Future Enhancements  
🔹 Implement a search feature  
🔹 Add a checkout system  
🔹 Improve UI with animations  

## 👨‍💻 Author  
**Sharath H K** – [GitHub Profile](https://github.com/Sharathhk122)
### Home Page  
![Home Page](https://github.com/Sharathhk122/Food-Ordering-/blob/main/Screenshot%20(977).png)
![cards Page](https://github.com/Sharathhk122/Food-Ordering-/blob/main/Screenshot%20(978).png)
![Fotter Page](https://github.com/Sharathhk122/Food-Ordering-/blob/main/Screenshot%20(979).png)
![login Page](https://github.com/Sharathhk122/Food-Ordering-/blob/main/Screenshot%20(980).png)
![signup Page](https://github.com/Sharathhk122/Food-Ordering-/blob/main/Screenshot%20(981).png)    

---
