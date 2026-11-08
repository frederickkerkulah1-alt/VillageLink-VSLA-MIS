
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { supabase } from "../lib/supabase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadUserProfile = async (authUser) => {
      if (!authUser) {
        if (mounted) {
          setUser(null);
          setLoading(false);
        }
        return;
      }

      const { data: profile, error } = await supabase
        .from("users")
        .select(`
          id,
          auth_user_id,
          full_name,
          email,
          role_id,
          organization_id,
          status
        `)
        .eq("auth_user_id", authUser.id)
        .single();

      if (!mounted) return;

      if (error || !profile || profile.status !== "active") {
        setUser(null);
        await supabase.auth.signOut();
      } else {
        setUser(profile);
      }

      setLoading(false);
    };

    supabase.auth.getSession().then(({ data, error }) => {
      if (error) {
        setUser(null);
        setLoading(false);
        return;
      }

      loadUserProfile(data.session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      loadUserProfile(session?.user ?? null);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw error;
    }

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
