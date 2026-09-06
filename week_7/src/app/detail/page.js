import Link from "next/link";

function DetailParentPage() {
  return (
    <div style={{ 
      textAlign: "center", 
      padding: "50px",
      backgroundColor: "#f4f4f4",
      minHeight: "100vh",
      fontFamily: "Times New Roman"
    }}>
      <h1 style={{ fontSize: "32px", color: "#333" }}>
        Please select a recipe from the home page
      </h1>
      <Link 
        href="/" 
        style={{ 
          color: "green", 
          textDecoration: "underline",
          fontSize: "18px"
        }}
      >
        Go back to Home
      </Link>
    </div>
  );
}

export default DetailParentPage;