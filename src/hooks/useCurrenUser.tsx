"use client";

import { useState, useEffect } from "react";

interface User {
  email: string;
  name: string;
  picture?: string;
}

export function useCurrentUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:8000/me", {
          credentials: "include", // very important for session cookies
        });

        if (!res.ok) {
          setUser(null);
          setError("Not authenticated");
        } else {
          const data = await res.json();
          setUser(data);
          setError(null);
        }
      } catch (err) {
        setUser(null);
        setError("Failed to fetch user");
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  return { user, loading, error };
}
