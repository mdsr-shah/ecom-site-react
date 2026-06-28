const Footer = () => {
  return (
    <footer className="site-footer">
      <section aria-labelledby="help-title">
        <h2 id="help-title">Help</h2>
        <ul>
          <li><a href="#">My Account</a></li>
          <li><a href="#">Store Locator</a></li>
          <li><a href="#">Exchanges & Returns</a></li>
          <li><a href="#">Gift Card</a></li>
          <li><a href="#">Contact Us & FAQ</a></li>
        </ul>
      </section>

      <section aria-labelledby="about-title">
        <h2 id="about-title">About Super Store</h2>
        <ul>
          <li><a href="#">Company</a></li>
          <li><a href="#">Responsibility</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Super Store App</a></li>
        </ul>
      </section>

      <section aria-labelledby="membership-title">
        <h2 id="membership-title">Membership</h2>
        <p>Join Super Store Circle and save up to Rs. 1,000.</p>
        <a href="#">Join now</a>
      </section>

      <section aria-labelledby="payment-title">
        <h2 id="payment-title">Payment Options</h2>
        <p>Pay by card, wallet, bank transfer, or cash on delivery.</p>
        <a href="#">Learn more</a>
      </section>

      <nav aria-label="Legal links">
        <ul>
          <li><a href="#">Accessibility</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Do Not Sell My Information</a></li>
          <li><a href="#">Ad Choices</a></li>
        </ul>
      </nav>

      <nav aria-label="Social links">
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">X</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">YouTube</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;