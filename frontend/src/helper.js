export const backendUrl =
  process.env.NODE_ENV === "production"
    ? "https://average-teal-penguin.cyclic.app"
    : "http://localhost:5000";
