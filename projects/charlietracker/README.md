# 🐾 Charlie Tracker

A lightweight interactive system to track Charlie’s walks and payments, with real-time updates using Firebase.

## ✨ Features

- ✅ Visual overview of 15 days (7 before & after today)
- 🔄 Real-time sync with Firebase Realtime Database
- 🔘 Toggle walk status and payment per day
- 🐶 Responsive photo gallery of Charlie
- 🔐 Optional passkey protection for edits

## 🚀 Live Preview

👉 [lynnle.com/projects/charlietracker](https://lynnle.com/projects/charlietracker)

## 🛠️ Tech Stack

- HTML / CSS / JavaScript
- Firebase Realtime Database (`firebase-app-compat.js`)
- Static hosting (e.g. GitHub Pages or Jekyll)

## 📦 Setup Instructions

1. Clone this project or copy the folder to your site.
2. Create a Firebase project: [console.firebase.google.com](https://console.firebase.google.com)
3. Enable the Realtime Database and set rules (for personal use):
   ```json
   {
     "rules": {
       ".read": true,
       ".write": true
     }
   }
