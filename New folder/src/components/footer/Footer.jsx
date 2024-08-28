import { Link } from "react-router-dom"

export const Footer = () => {
  const categories = [
    "cars", "trucks", "new arrivals", "buses", "jeeps"
  ]
  const pageLinks = [
    "home", "brands", "coming soon", "contact", "blogs"
  ]
  return (
    <section className="footer">

      <div className="box-container">

        <div className="box">
          <h3>about us</h3>
          <p>At A-Cars, we're dedicated to providing the highest quality cars and exceptional customer service. Explore our collection today.</p>
        </div>

        <div className="box">
          <h3>category</h3>
          {categories.map((catG, index) => (
            <Link key={index} to={catG.split(" ").join("-")}><i className="fas fa-arrow-right"></i> {catG}</Link>
          ))}

        </div>

        <div className="box">
          <h3>quick links</h3>
          {pageLinks.map((catG, index) => (
            <Link key={index} to={catG.split(" ").join("-")}><i className="fas fa-arrow-right"></i> {catG}</Link>
          ))}
        </div>

        <div className="box">
          <h3>extra links</h3>
          <a href="#"> <i className="fas fa-arrow-right"></i> my order </a>
          <a href="#"> <i className="fas fa-arrow-right"></i> my account </a>
          <a href="#"> <i className="fas fa-arrow-right"></i> my listing </a>
          <a href="#"> <i className="fas fa-arrow-right"></i> sell now </a>
          <a href="#"> <i className="fas fa-arrow-right"></i> new offers </a>
        </div>

      </div>

      <div className="share">
        <a href="#" className="fab fa-facebook-f"></a>
        <a href="#" className="fab fa-twitter"></a>
        <a href="#" className="fab fa-pinterest"></a>
        <a href="#" className="fab fa-linkedin"></a>
        <a href="#" className="fab fa-instagram"></a>
      </div>


    </section>


  )
}