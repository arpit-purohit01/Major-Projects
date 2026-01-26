# 📹 Video Connect

**Video Connect** is a lightweight, high-performance real-time video conferencing application built with React and Vite. It leverages the ZegoCloud UI Kit to provide seamless, low-latency group video calls. Users can create instant meeting rooms and share unique links to invite others effortlessly.

## 🚀 Features

* **Instant Room Creation:** Generate unique room IDs for secure, private meetings.
* **Real-Time Audio & Video:** High-quality, low-latency communication powered by WebRTC (via ZegoCloud).
* **One-Click Joining:** Users can join via a shareable link—no account registration required for guests.
* **Responsive Design:** Fully optimized interface that works on desktop, tablet, and mobile browsers.
* **Secure Room IDs:** Uses URL parameter handling to ensure users land in the correct meeting room.

## 🛠️ Tech Stack

* **Frontend Framework:** React.js (v19)
* **Build Tool:** Vite
* **Styling:** CSS3 / Tailwind CSS
* **Video SDK:** ZegoCloud UIKit Prebuilt
* **Routing:** React Router DOM (v7)

## ⚙️ Installation & Setup

Follow these steps to run the project locally on your machine.

### Prerequisites
* Node.js (v16 or higher) installed.
* A ZegoCloud account (to get your App ID and Server Secret).

### Steps
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/arpit-purohit/Major-Projects.git](https://github.com/arpit-purohit/Major-Projects.git)
    cd Major-Projects/Video-React-Zegocloud
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    * Open `src/pages/Video.jsx`.
    * Replace the `appID` and `serverSecret` with your own credentials from the [ZegoCloud Console](https://console.zegocloud.com/).
    *(Note: For production, it is recommended to store these in a `.env` file)*.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **Open the App:**
    Visit `http://localhost:5173` (or the port shown in your terminal).

## 📖 Usage Guide

1.  **Home Screen:** Enter a unique "Room ID" (e.g., `meeting-123`) and click "Join".
2.  **Video Interface:**
    * You will be redirected to the video room.
    * Grant camera and microphone permissions when prompted.
3.  **Invite Others:**
    * Click the "Copy Link" button inside the video interface.
    * Send the link to friends. When they open it, they will join the same call instantly.

## 🔮 Future Improvements

* **Custom Usernames:** Allow users to enter a custom display name before joining.
* **Mute/Video Toggle on Entry:** Add a pre-join screen to configure audio/video settings.
* **Chat Feature:** Integrate a real-time text chat alongside the video feed.

---

### 👨‍💻 Author
**Arpit Purohit**
* 2nd Year CSE Student |
* [GitHub Profile](https://github.com/arpit-purohit01)
* [linkedin Profile](https://linkedin.com/in/arpit-purohit06)
* Connect: arpitpurohit127@gmail.com
