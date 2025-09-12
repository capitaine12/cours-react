// src/services/api.js

// Récupère tous les produits
export const fetchRecipes = async () => {
  const res = await fetch("https://dummyjson.com/recipes?limit=20");
  if (!res.ok) throw new Error("Erreur API");
  return res.json();
};

// Récupère le détail d’un produit par son ID
export const fetchRecipeDetail = async ({ params }) => {
  const res = await fetch(`https://dummyjson.com/recipes/${params.id}`);
  if (!res.ok) throw new Error("Produit introuvable");
  return res.json();
};
