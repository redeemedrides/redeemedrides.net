<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Redeemed Rides | Professional Headlight Restoration | Fair Oaks, CA</title>
  <meta name="description" content="Redeemed Rides offers expert headlight restoration in Fair Oaks, California. Restore foggy headlights for safer driving and a refreshed look. Mobile service available."/>
  <style>
    :root {
      --primary: #0f172a;     /* deep navy blue */
      --secondary: #1e40af;   /* bright blue accent */
      --grey-dark: #334155;
      --grey-medium: #64748b;
      --grey-light: #e2e8f0;
      --white: #ffffff;
      --offwhite: #f8fafc;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background-color: var(--offwhite);
      color: var(--grey-dark);
      line-height: 1.6;
    }

    header {
      background: linear-gradient(135deg, var(--primary) 0%, var(--grey-dark) 100%);
      color: var(--white);
      padding: 5rem 2rem 4rem;
      text-align: center;
    }

    header h1 {
      font-size: 3.5rem;
      margin-bottom: 0.5rem;
      letter-spacing: -0.05em;
    }

    header p {
      font-size: 1.4rem;
      opacity: 0.9;
      max-width: 700px;
      margin: 0 auto;
    }

    nav {
      background: var(--primary);
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
    }

    nav ul {
      list-style: none;
      display: flex;
      justify-content: center;
      padding: 1rem 0;
      gap: 2.5rem;
      flex-wrap: wrap;
    }

    nav a {
      color: var(--white);
      text-decoration: none;
      font-weight: 600;
      font-size: 1.1rem;
      transition: color 0.3s;
    }

    nav a:hover {
      color: var(--secondary);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    section {
      padding: 5rem 0;
    }

    h2 {
      color: var(--primary);
      text-align: center;
      font-size: 2.8rem;
      margin-bottom: 1rem;
    }

    .subtitle {
      text-align: center;
      color: var(--grey-medium);
      font-size: 1.3rem;
      margin-bottom: 3rem;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
    }

    .card {
      background: var(--white);
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0 10px 25px rgba(0,0,0,0.08);
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 35px rgba(0,0,0,0.12);
    }

    .card-header {
      background: var(--secondary);
      color: white;
      padding: 1.5rem;
      text-align: center;
      font-size: 1.5rem;
      font-weight: 700;
    }

    .card-body {
      padding: 2rem;
    }

    .price {
      font-size: 2.2rem;
      font-weight: 800;
      color: var(--primary);
      margin: 1rem 0;
      text-align: center;
    }

    .card ul {
      list-style: none;
      margin: 1.5rem 0;
    }

    .card li {
      margin: 0.8rem 0;
      padding-left: 1.8rem;
      position: relative;
    }

    .card li::before {
      content: "✔";
      position: absolute;
      left: 0;
      color: var(--secondary);
      font-weight: bold;
    }

    .warranty {
      font-size: 0.95rem;
      color: var(--grey-medium);
      text-align: center;
      margin-top: 1.5rem;
      font-style: italic;
    }

    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      margin: 3rem 0;
    }

    .gallery img {
      width: 100%;
      border-radius: 0.8rem;
      box-shadow: 0 8px 20px rgba(0,0,0,0.1);
      transition: transform 0.3s;
    }

    .gallery img:hover {
      transform: scale(1.03);
    }

    .add-ons {
      background: var(--grey-light);
      padding: 2.5rem;
      border-radius: 1rem;
      margin: 3rem 0;
    }

    .add-ons h3 {
      text-align: center;
      color: var(--primary);
      margin-bottom: 1.5rem;
    }

    .cta {
      display: inline-block;
      background: var(--secondary);
      color: white;
      padding: 1rem 2.5rem;
      border-radius: 50px;
      text-decoration: none;
      font-size: 1.3rem;
      font-weight: 700;
      margin: 1rem;
      transition: background 0.3s;
    }

    .cta:hover {
      background: #1e3a8a;
    }

    footer {
      background: var(--primary);
      color: var(--white);
      text-align: center;
      padding: 3rem 1rem;
    }

    @media (max-width: 768px) {
      header h1 { font-size: 2.8rem; }
      header p { font-size: 1.2rem; }
      h2 { font-size: 2.3rem; }
    }
  </style>
</head>
<body>

  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#gallery">Before & After</a></li>
      <li><a href="#addons">Add-Ons</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <header id="home">
    <div class="container">
      <h1>Redeemed Rides</h1>
      <p>Expert Headlight Restoration in Fair Oaks, California — Bring back crystal-clear headlights for safer night driving and a showroom shine. Mobile service available — we come to you!</p>
      <a href="#services" class="cta">View Packages</a>
      <a href="tel:5306132751" class="cta">Call Now: 530-613-2751</a>
    </div>
  </header>

  <section id="services">
    <div class="container">
      <h2>Our Service Packages</h2>
      <p class="subtitle">Professional restoration tailored to your headlights' condition. Prices per pair.</p>

      <div class="services-grid">
        <div class="card">
          <div class="card-header">Basic Restore</div>
          <div class="card-body">
            <div class="price">$30–$60</div>
            <p>Cleaning, light sanding, basic polish, and standard sealant. Ideal for mild oxidation.</p>
            <ul>
              <li>30–45 minutes</li>
              <li>50–70% clarity improvement</li>
              <li>Lasts 1–2 years with proper care</li>
              <li>Immediate visible results</li>
            </ul>
            <p class="warranty">No warranty on extreme damage</p>
          </div>
        </div>

        <div class="card">
          <div class="card-header">Premium Restore</div>
          <div class="card-body">
            <div class="price">$60–$100</div>
            <p>Full sanding (multiple grits), high-grade polish, UV ceramic sealant. For moderate to severe fogging. Includes minor trim cleaning.</p>
            <ul>
              <li>45–60 minutes</li>
              <li>80–90% clarity restoration</li>
              <li>Lasts 2–3 years</li>
              <li>1-year warranty against re-oxidation</li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card-header">Ultimate Restore + Protection</div>
          <div class="card-body">
            <div class="price">$130–$200</div>
            <p>Premium process + headlight alignment check, LED bulb upgrade option, lifetime sealant (reapplication discount). For luxury or heavily damaged vehicles.</p>
            <ul>
              <li>60–90 minutes</li>
              <li>Near-factory clarity</li>
              <li>Lasts 3–5 years</li>
              <li>2-year warranty</li>
              <li>Follow-up inspection included</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="gallery" style="background: var(--grey-light);">
    <div class="container">
      <h2>Real Before & After Results</h2>
      <p class="subtitle">See the dramatic difference our restoration makes — foggy, yellowed lenses transformed to like-new clarity. These are real examples from professional services.</p>
      
      <div class="gallery">
        <img src="https://i.ytimg.com/vi/Wzzd2r05dNw/sddefault.jpg" alt="Before and after headlight restoration on blue car">
        <img src="https://ricardosdetailgarage.com.au/wp-content/uploads/2020/12/headlight-right-side-before-after.jpg" alt="Before foggy headlight and clear after on silver car">
        <img src="https://www.theartofdoingstuff.com/wp-content/uploads/2018/07/before-and-after-headlight-restoration-710x526.jpg" alt="Black car headlight restoration before and after">
        <img src="https://www.cnet.com/a/img/resize/70a503e09956dc77227a744099dca2138e06ac02/hub/2020/09/11/71690618-329a-4cdc-88bd-c1f2e03fb148/subie-before-after.jpg?auto=webp&width=1200" alt="Subaru headlight before foggy and after clear">
        <img src="https://www.motorbiscuit.com/wp-content/uploads/2023/05/headlight-restoration-1.jpg" alt="BMW-style headlight restoration comparison">
        <img src="https://cdn.shopify.com/s/files/1/0742/8938/1681/files/jpeg.png?v=1759252600" alt="Professional headlight restore before and after with tape">
      </div>
    </div>
  </section>

  <section class="add-ons" id="addons">
    <div class="container">
      <h3>Add-Ons & Important Notes</h3>
      <ul style="max-width: 700px; margin: 0 auto; font-size: 1.15rem; list-style: none;">
        <li><strong>Single headlight:</strong> Half price of selected package</li>
        <li><strong>Mobile service fee:</strong> $20–$40 (within 20 miles of Fair Oaks)</li>
        <li><strong>Fleet discount:</strong> 10% off for 2+ vehicles</li>
        <li>Quick upsells — expect 10–20% of customers to add these</li>
        <li><strong>Important:</strong> Improves safety & aesthetics; does not fix cracked or internally damaged lenses (replacement available if needed)</li>
        <li><strong>Maintenance tip:</strong> Wash gently and park in shade to prolong results</li>
        <li><strong>Payment:</strong> Cash, card, Venmo, etc.</li>
      </ul>
    </div>
  </section>

  <section id="contact" style="background: var(--primary); color: var(--white);">
    <div class="container" style="text-align: center;">
      <h2>Contact Redeemed Rides Today</h2>
      <p class="subtitle" style="color: var(--grey-light);">Get your headlights restored — safer drives start here. Serving Fair Oaks and surrounding areas with mobile convenience.</p>
      
      <a href="tel:5306132751" class="cta">Call: 530-613-2751</a>
      <a href="mailto:redeemedridesrepair@gmail.com" class="cta" style="background: var(--grey-dark);">Email Us</a>
      
      <p style="margin-top: 3rem; font-size: 1.1rem;">© 2026 Redeemed Rides. All rights reserved.</p>
    </div>
  </section>

</body>
</html>
