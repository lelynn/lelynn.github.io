
const summaryContainer = document.getElementById("summary");

const today = new Date();
const todayStr = today.toISOString().slice(0, 10);

// let walkedDays = JSON.parse(localStorage.getItem("walkedDays") || "[]");
// let walkedDays = [];


// let payments = JSON.parse(localStorage.getItem("payments") || "[]");
let dataReady = { payments: false, removedDays: false, dirtyDays: true };

let dirtyDays = []

firebase.database().ref("payments").on("value", (snapshot) => {
  payments = snapshot.val() || [];
  dataReady.payments = true;
  if (dataReady.payments && dataReady.removedDays) renderSummary();
});

firebase.database().ref("removedDays").on("value", (snapshot) => {
  removedDays = snapshot.val() || [];
  dataReady.removedDays = true;
  if (dataReady.payments && dataReady.removedDays) renderSummary();
});

firebase.database().ref("dirtyDays").on("value", (snapshot) => {
  dirtyDays = snapshot.val() || [];
  if (dataReady.payments && dataReady.removedDays) renderSummary(); //reuse flags?
});


function formatDate(str) {
  const date = new Date(str);
  return date.toDateString();
}

// function togglePaid(date) {
//   const paidDates = getPaidDates();
//   const alreadyPaid = paidDates.includes(date);
//   if (alreadyPaid) {
//     payments = payments.filter(p => {
//       const start = new Date(p.date).toISOString().slice(0, 10);
//       return !(start === date);
//     });
//   } else {
//     payments.push({ date: date, covered: 1 });
//   }
//   // localStorage.setItem("payments", JSON.stringify(payments));
//   firebase.database().ref("payments").set(payments);
//   renderSummary();
// }

function togglePaid(date) {
  if (!window.canEdit) {
    alert("🔒 You don’t have permission to make changes.");
    return;
  }

  const paidDates = getPaidDates();
  const alreadyPaid = paidDates.includes(date);
  if (alreadyPaid) {
    payments = payments.filter(p => {
      const start = new Date(p.date).toISOString().slice(0, 10);
      return !(start === date);
    });
  } else {
    payments.push({ date: date, covered: 1 });
  }

  firebase.database().ref("payments").set(payments);
  renderSummary();
}

function toggleWalked(date) {
  if (!window.canEdit) {
    alert("🔒 You don’t have permission to make changes.");
    return;
  }

  if (removedDays.includes(date)) {
    removedDays = removedDays.filter(d => d !== date);
  } else {
    removedDays.push(date);
  }

  firebase.database().ref("removedDays").set(removedDays);
  renderSummary();
}
function toggleDirty(date) {
  if (!window.canEdit) {
    alert("🔒 You don’t have permission to make changes.");
    return;
  }

  if (dirtyDays.includes(date)) {
    dirtyDays = dirtyDays.filter(d => d !== date); // now allowed
  } else {
    dirtyDays.push(date); // not allowed
  }

  firebase.database().ref("dirtyDays").set(dirtyDays);
  renderSummary();
}

function getPaidDates() {
  let coveredDates = [];
  for (let payment of payments) {
    let date = new Date(payment.date);
    for (let i = 0; i < payment.covered; i++) {
      coveredDates.push(date.toISOString().slice(0, 10));
      date.setDate(date.getDate() + 1);
    }
  }
  return coveredDates;
}
function renderSummary() {
  summaryContainer.innerHTML = "";
  const paidDates = getPaidDates();

  for (let i = -25; i <= 25; i++) {  // Show 15 days: 7 before, 7 after
    const date = new Date();
    date.setDate(today.getDate() + i);
    const dateStr = date.toISOString().slice(0, 10);
    const isToday = (dateStr === todayStr);
    const paid = paidDates.includes(dateStr);
    const removed = removedDays.includes(dateStr);
    const effectiveWalked = !removed;
    const dirty = dirtyDays.includes(dateStr);

    const div = document.createElement("div");
    div.className = "entry";

    let label = isToday ? `<strong>${formatDate(dateStr)}</strong>` : formatDate(dateStr);
    if (!effectiveWalked) {
      label = `<s>${label}</s>`;
    }

  div.innerHTML = `
    ${label} — ${!effectiveWalked ? "🚫 Not walked" : (paid ? "✅ Paid" : "❌ Unpaid")}
    ${effectiveWalked ? (dirty ?
      '<span class="dirt-status"> </br> ✨ Not allowed to get dirty 🐶💦🚫 </span>'  : 
      '<span class="dirt-status"> </br> 🐾 Allowed to get dirty 🐶💦</span>') : ""}
    <div class="button-group">
      ${!removed ? `
        <button onclick="togglePaid('${dateStr}')">${paid ? "Unmark paid" : "Mark paid"}</button>
        <button onclick="toggleWalked('${dateStr}')">Remove</button>
        <button onclick="toggleDirty('${dateStr}')">${dirty ? "Allow dirt" : "Forbid dirt"}</button>
      ` : `
        <button onclick="toggleWalked('${dateStr}')">Add Back</button>
      `}
    </div>
  `;

    summaryContainer.appendChild(div);
  }
}


// renderSummary();
