
import { supabase } from "../lib/supabase";

export const getCountries = async () => {
  const { data, error } = await supabase
    .from("countries")
    .select("*")
    .order("country_name", { ascending: true });

  if (error) throw error;

  return {
    data: data.map((country) => ({
      id: country.id,
      name: country.country_name,
      code: country.country_code,
    })),
  };
};

export const createCountry = async (data) => {
  const { data: result, error } = await supabase
    .from("countries")
    .insert([
      {
        country_name: data.name,
        country_code: data.code,
      },
    ])
    .select()
    .single();

  if (error) throw error;

  return {
    data: {
      id: result.id,
      name: result.country_name,
      code: result.country_code,
    },
  };
};

export const updateCountry = async (id, data) => {
  const { data: result, error } = await supabase
    .from("countries")
    .update({
      country_name: data.name,
      country_code: data.code,
    })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return {
    data: {
      id: result.id,
      name: result.country_name,
      code: result.country_code,
    },
  };
};

export const deleteCountry = async (id) => {
  const { error } = await supabase
    .from("countries")
    .delete()
    .eq("id", id);

  if (error) throw error;

  return { data: true };
};
