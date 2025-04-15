import { db } from "./firebase.js";
import { collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const habitForm = document.getElementById("habit-form");
const habitList = document.getElementById("habit-list");

async function loadHabits() {
  habitList.innerHTML = "";
  const snapshot = await getDocs(collection(db, "habits"));
  snapshot.forEach(doc => {
    const habit = doc.data();
    const habitItem = document.createElement("div");
    habitItem.className = "habit";
    habitItem.innerHTML = `
      <span>${habit.name}</span>
      <button onclick="deleteHabit('${doc.id}')">Delete</button>
    `;
    habitList.appendChild(habitItem);
  });
}

window.deleteHabit = async (id) => {
  await deleteDoc(doc(db, "habits", id));
  loadHabits();
};

habitForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const habitName = document.getElementById("habit-name").value;
  await addDoc(collection(db, "habits"), { name: habitName });
  habitForm.reset();
  loadHabits();
});

loadHabits();
