"use client";

export default function LoginButton() {
  const handleLogin = () => {
    // Redirect to FastAPI's /login route
    window.location.href = "http://localhost:8000/login"; // your backend base URL
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Login with Google
    </button>
  );
}
