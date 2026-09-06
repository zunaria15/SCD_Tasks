import MyCard from "@/components/MyCard";

async function HomePage() {
  let recipes = [];
  
  try {
    const res = await fetch("https://dummyjson.com/recipes", {
      next: { revalidate: 3600 },
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const response = await res.json();
    recipes = response.recipes || [];
  } catch (error) {
    console.error("Error fetching recipes:", error);
    recipes = [];
  }

  return (
    <div style={{
      backgroundColor: "#f4f4f4",
      minHeight: "100vh",
      padding: "40px",
      display: "flex",
      flexWrap: "wrap",
      gap: "15px", 
      justifyContent: "center",
      color: "black",
      fontFamily: 'Times New Roman',
      fontWeight: "bold"
    }}>
      {recipes.map((recipe) => (
        <MyCard 
          key={recipe.id}
          id={recipe.id}
          image={recipe.image}
          name={recipe.name}
        />
      ))}
    </div>
  )
}

export default HomePage