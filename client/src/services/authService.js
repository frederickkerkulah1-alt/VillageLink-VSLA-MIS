
import { supabase } from "../lib/supabase";

// Sign in using Supabase Authentication
export const login = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  // Retrieve the user's VillageLink profile
  const { data: profile, error: profileError } = await supabase
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
    .eq("auth_user_id", data.user.id)
    .single();

  if (profileError) {
    await supabase.auth.signOut();
    throw new Error("Your VillageLink user profile could not be loaded.");
  }

  if (profile.status !== "active") {
    await supabase.auth.signOut();
    throw new Error("Your VillageLink account is not active.");
  }

  return {
    session: data.session,
    user: profile,
  };
};

// Sign out
export const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
};

// Get current authenticated session
export const getCurrentUser = async () => {
  const { data, error } = await supabase.auth.getSession();

  if (error || !data.session) {
    return null;
  }

  return data.session.user;
};
