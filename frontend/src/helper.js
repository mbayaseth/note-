export const backendUrl =
  process.env.NODE_ENV === "production"
    ? "https://noteapp-v63d.onrender.com"
    : "http://localhost:5000";
