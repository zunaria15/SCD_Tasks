"use client";

import Link from "next/link";

const MyCard = ({ id, image, name }) => {
  return (
    <Link href={`/detail/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div style={{
        backgroundColor: "white",
        padding: "20px",
        width: "350px",
        textAlign: "center",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "0.3s",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer"
      }}> 
        
        <img 
          src={image}
          style={{ 
            width: "140px", 
            height: "140px", 
            borderRadius: "50%",
            objectFit: "cover",
            display: "block",  
            margin: "0 auto"   
          }}
          alt={name}
        />

        <h3 style={{ marginTop: "15px", fontWeight: "bold" }}>
          {name}
        </h3>

      </div>
    </Link>
  )
}

export default MyCard