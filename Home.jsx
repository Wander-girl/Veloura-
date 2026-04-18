import ProductCart from "../components/ProductCard";
function Home() {
  return (
    <div>

      {/* 🔥 HERO SECTION */}
      <div style={styles.hero}>
        <h1 style={styles.heroText}>Luxury Jewelry Brand</h1>
      </div>
      {/* 🔥 OFFER SCROLL */}
      <div className="offer-bar">
  <p>50% SALE on purchases above ₹1500 ✨ 50% SALE ✨ 50% SALE on purchases above ₹1500 ✨ 50% SALE ✨ 50% SALE on purchases above ₹1500 ✨ 50% SALE ✨50% SALE on purchases above ₹1500 ✨ 50% SALE ✨50% SALE on purchases above ₹1500 ✨ 50% SALE ✨50% SALE on purchases above ₹1500 ✨ 50% SALE ✨</p>
</div>

      {/* 🔥 COLLECTION */}
      <div style={styles.section}>
        <h2>Our Collection 🔥</h2>

        <div style={styles.grid}>
          <div>
            <img src="./images/earrings/e1.jpeg" style={styles.categoryImg} />
            <p>Earrings</p>
          </div>

          <div>
            <img src="./images/rings/r1.jpeg" style={styles.categoryImg} />
            <p>Rings</p>
          </div>

          <div>
            <img src="./images/necklaces/n1.jpeg" style={styles.categoryImg} />
            <p>Necklaces</p>
          </div>

          <div>
            <img src="./images/hairs/c1.jpeg" style={styles.categoryImg} />
            <p>Hairs Accessories</p>
          </div>
        </div>
      </div>

      {/* 🔥 BEST SELLERS */}
     <div style={styles.section}>
        <h2>Our Best Sellers 🔥</h2>

        {/* Row 1 */}
        <div style={styles.row}>
          <img src="/images/rings/r6.jpeg" style={styles.bigImg} />
          <div>
           <h3 style={{ fontSize: "24px", letterSpacing: "1px" }}>
            Diamond Rose Ring
            </h3>

        <p style={{ color: "#555", marginTop: "10px" }}>
          Discription : Elegant premium ring for special occasions
        </p>

        <p style={{ color: "#773a28", fontSize: "18px" }}>
          Reviews : ⭐⭐⭐⭐⭐
        </p>
          </div>
        </div>

        {/* Row 2 (reverse) */}
        <div style={{ ...styles.row, flexDirection: "row-reverse" }}>
          <img src="/images/necklaces/n5.jpeg" style={styles.bigImg} />
          <div>
            <h3  style={{ fontSize: "24px", letterSpacing: "1px" }}>
              Luxury Necklace</h3>
            <p>Discription : Perfect for weddings and parties</p>
            <p> reviews : ⭐⭐⭐⭐⭐</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;

const styles = {
hero: {
  height: "500px",
  backgroundImage: "url('/images/image1.jpeg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative"
},

heroText: {
  color: "#fff",
  fontSize: "20px",
  fontWeight: "bold",
  letterSpacing: "3px",
  padding: "15px 30px",
  background: "rgba(0,0,0,0.5)",
  border: "1px solid #bfa14a",
  boxShadow: "0 0 20px rgba(191,161,74,0.5)"
},
 offer: {
  backgroundColor: "#773a28",
  color: "white",
  textAlign: "center",
  padding: "15px",
  fontSize: "18px",
  letterSpacing: "1px"
},
  section: {
    padding: "40px",
    textAlign: "center"
  },
  grid: {
  display: "flex",
  justifyContent: "center",
  gap: "100px",
  marginTop: "40px"
},
categoryImg: {
  width: "180px",
  height: "180px",
  borderRadius: "50%",
  objectFit: "cover",
  transition: "0.4s",
  cursor: "pointer"
},
row: {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "100px",
  marginTop: "60px",
  padding: "20px",
  background: "#fff",
  borderRadius: "10px",
  boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
},

bigImg: {
  width: "320px",
  height: "320px",
  objectFit: "cover",
  borderRadius: "10px"
}
};