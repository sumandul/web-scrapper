"use client";

import { useEffect, useState } from "react";

export default function UserStatus() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("http://localhost:8000/me", {
          credentials: "include", // send cookies/session
        });

        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          setUser(null);
        }
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!user) return <p>Please log in.</p>;

  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <img src={user.picture} alt={user.name} width={50} />
    </div>
  );
}
