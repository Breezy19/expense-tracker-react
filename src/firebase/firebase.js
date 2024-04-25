import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvC9tP9ZNXUhJ_bJtDHQHxd1vF0D0hTpI",
  authDomain: "expense-tracking-ba5eb.firebaseapp.com",
  databaseURL: "https://expense-tracking-ba5eb-default-rtdb.firebaseio.com",
  projectId: "expense-tracking-ba5eb",
  storageBucket: "expense-tracking-ba5eb.appspot.com",
  messagingSenderId: "472450964740",
  appId: "1:472450964740:web:dd6b1bb65cba0fc9d88451",
  measurementId: "G-8PBE7SC12R"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth };
