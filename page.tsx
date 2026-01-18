import React from "react";

export default function Page() {
  return (
    <div style={{ backgroundColor: "red", minHeight: "100vh", margin: 0, padding: 0 }}>
      
      {/* Image - Centered */}
      <div 
        style={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          padding: "20px 0" // vertical padding instead of big height
        }}
      >
        <img
          src="/task2.png"
          alt="Banner"
          style={{ width: "70%", height: "auto" }}
        />
      </div>

      {/* Navbar */}
      <nav
        style={{
          backgroundColor: "black",
          width: "70%",
          margin: "0 auto",
        }}
      >
        <ul
          style={{
            color: "white",
            display: "flex",
            listStyle: "none",
            padding: "10px 0",
            gap: "30px",
            justifyContent: "center",
            margin: 0
          }}
        >
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Content */}
      <div
        style={{
          display: "flex",
          width: "70%",
          margin: "20px auto", // thodi space content ke upar
          gap: "10px", // left-right blocks ke darmiyan gap
        }}
      >
        <div
          style={{
            backgroundColor: "green",
            flex: 1, // automatic width
            padding: "10px",
            color: "white",
            minHeight: "400px", // content ke liye reasonable height
          }}
        >
          Left
        </div>

        <div
          style={{
            backgroundColor: "orange",
            flex: 2, // left ka double width
            padding: "10px",
            color: "white",
            minHeight: "400px",
          }}
        >
          Right
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          backgroundColor: "blue",
          width: "70%",
          margin: "20px auto 10px",
          color: "white",
          textAlign: "center",
          padding: "10px 0",
        }}
      >
        Footer
      </div>
    </div>
  );
}
