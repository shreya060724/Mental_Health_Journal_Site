# ** 🌸SoulSync - Mental Health Journal**  

SoulSync is a web-based mental health journal designed to help users track their emotions, record daily thoughts, and visualize mood trends over time. Built with **React.js**, **Bootstrap**, and **Firebase**, this app offers a simple yet effective way to reflect and maintain emotional well-being.  

## **🛠 Tech Stack**  
- **Frontend:** React.js, Bootstrap  
- **Backend & Storage:** Firebase (Authentication & Firestore)  

## **✨ Features**  
✔️ **Mood Entries:** Write daily journal entries and express emotions.  
✔️ **Mood Rating:** Rate your mood on a scale of 1-5.  
✔️ **Mood Visualization:** View past mood trends using an interactive **line graph**.  
✔️ **Calendar View:** Select any date to revisit past entries.  
✔️ **Secure Storage:** Firebase ensures privacy and secure data storage.  

## **🚀 Getting Started**  
### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/shreya060724/Mental_Health_Journal_Site.git
cd soulsync
```
### **2️⃣ Install Dependencies**  
```sh
npm install
```
### **3️⃣ Configure Firebase**  
- Inside `src/firebase/`, create `config.js`.  
- Add your Firebase credentials (**make sure not to commit this file**).  

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
export default firebaseConfig;
```

### **4️⃣ Run the Project**  
```sh
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.  

## **📸 Screenshots**  
![image](https://github.com/user-attachments/assets/d3f1780e-652c-4b2e-96ff-e69fcf3efed1)
![image](https://github.com/user-attachments/assets/31ee5fbe-d3e9-4a4d-811e-58547b26781b)
![image](https://github.com/user-attachments/assets/821c69ad-fb38-46e0-a70d-105e1788c373)
![image](https://github.com/user-attachments/assets/cc9bf09f-ac36-4c1d-b4db-2d17c17cad3a)
![image](https://github.com/user-attachments/assets/c4846f75-b932-4132-9cf9-1cb9f513836f)
![image](https://github.com/user-attachments/assets/dae4d24a-cf4f-4132-acac-7232705d047a)
![image](https://github.com/user-attachments/assets/360528c8-becd-4878-9cae-a746de7c2edb)








## **🤝 Contributing**  
Feel free to fork this repo, suggest improvements, or report issues!  

---

This README provides **installation instructions, features, and setup steps** while ensuring Firebase credentials are kept private. 🚀
