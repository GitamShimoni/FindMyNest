import "./AboutUs.css"

const AboutUs = () => {
  return (
    <>

    <div id="about-us-page-div">
    <div id="about-us" className="about-us">
        <div id="about-us-header-div">
            <h1 id="about-us-title">About Us</h1>
            <p id="description" className="description">
                Welcome to Find My Nest, your trusted partner in finding your dream home. With years of experience in the real estate industry, we are dedicated to helping you discover the perfect place to call your own.
            </p>
        </div>
        <div id="about-us-history-div">
            <h2 id="history-title">Our History</h2>
            <p id="history-content">
                Find My Nest was founded in 2012 by a group of passionate individuals with a shared vision of simplifying the home-buying process. Frustrated with the lack of user-friendly platforms, we set out to create an intuitive and comprehensive solution for home seekers.
            </p>
            <p id="history-paragraph">
                Over the years, our platform has grown and evolved, incorporating cutting-edge technology and innovative features to provide the best possible experience for our users. We have helped thousands of individuals and families find their ideal homes, and we take pride in our commitment to customer satisfaction.
            </p>
        </div>
        <div id="about-us-mission-div">
            <h2 id="mission-title">Our Mission</h2>
            <p id="mission-content">
                {`At Find My Nest, our mission is to connect people with their perfect homes by leveraging technology, industry expertise, and personalized support. We understand that buying or renting a property is a significant decision, and we aim to make the process as smooth and enjoyable as possible.`}
            </p>
            <p id="mission-paragraph">
                {`Whether you're a first-time buyer, a growing family, or someone looking for an investment opportunity, we have a wide range of listings to suit your needs. Our team of real estate experts is always available to provide guidance, answer your questions, and assist you throughout your journey.`}
            </p>
        </div>
    </div>
    </div>
    </>
  )
}

export default AboutUs