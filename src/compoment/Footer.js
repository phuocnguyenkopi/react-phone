import classes from "./footer.module.css";

export default function Footer() {
  console.log("footer");
  return (
    <>
      <footer>
        <main className={classes.footer}>
          <div>
            <h3>CUSTOMER SERVICES</h3>
            <ul>
              <li>
                <a href="https://www.w3schools.com/">Help & Contact Us</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/">Returns & Refunds</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/">Online Stores</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>COMPANY</h3>
            <ul>
              <li>
                <a href="https://www.w3schools.com/">What We Do</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/">Available Services</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/">Latest Posts</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/">FAQs</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>SOCIAL MEDIA</h3>
            <ul>
              <li>
                <a href="https://www.w3schools.com/">Twitter</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/">Instagram</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/">Facebook</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/">Pinterest</a>
              </li>
            </ul>
          </div>
        </main>
      </footer>
    </>
  );
}
