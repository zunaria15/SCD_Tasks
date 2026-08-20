import Link from "next/link";

async function DetailPage({ params }) {
  params = await params;
  
  let recipe = null;
  
  try {
    const res = await fetch(`https://dummyjson.com/recipes/${params.id}`, {
      next: { revalidate: 3600 },
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    recipe = await res.json();
  } catch (error) {
    console.error("Error fetching recipe:", error);
    recipe = null;
  }

  if (!recipe) {
    return (
      <div style={{ 
        textAlign: "center", 
        padding: "50px",
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        fontFamily: "Times New Roman"
      }}>
        <h2>Recipe not found or unable to load.</h2>
        <Link href="/" style={{ color: "green", textDecoration: "underline" }}>
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        color: "black",
        fontFamily: "Times New Roman",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "750px",
          margin: "0 auto 60px auto",
          padding: "20px",
        }}
      >
        {/* Image */}
        <img
          src={recipe.image}
          alt={recipe.name}
          style={{
            width: "100%",
            height: "auto",
            marginBottom: "20px",
            borderRadius: "10px",
          }}
        />

        {/* Title + Button SAME LINE */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              color: "#333",
              margin: 0,
            }}
          >
            {recipe.name}
          </h1>

          <Link
            href="/"
            style={{
              padding: "8px 20px",
              backgroundColor: "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "14px",
              fontFamily: "Times New Roman",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Go Back
          </Link>
        </div>

        {/* Ingredients */}
        <h2 style={{ fontSize: "22px", fontWeight: "bold" }}>
          Ingredients
        </h2>

        <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>- {ingredient}</li>
          ))}
        </ul>

        {/* Instructions */}
        <h2
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            marginTop: "20px",
          }}
        >
          Instructions
        </h2>

        <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
          {recipe.instructions?.map((instruction, index) => (
            <li key={index}>- {instruction}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DetailPage;