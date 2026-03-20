<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>GCSE Revision Hub</title>

  <style>
    body {
      font-family: Arial, sans-serif;
      color: #000;
      background: #ffffff;
      margin: 0;
    }

    a {
      color: #000;
      text-decoration: none;
    }

    .section {
      max-width: 900px;
      margin: 60px auto;
      padding: 0 20px;
    }

    h1 {
      font-size: 32px;
    }

    .card-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
    }

    .card {
      background: #f9fafb;
      padding: 18px;
      border-radius: 14px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.05);
      transition: 0.2s;
    }

    .card:hover {
      transform: translateY(-5px);
      border: 1px solid #A4D65E;
    }

    .tag {
      font-size: 12px;
      background: #eef8e6;
      padding: 3px 8px;
      border-radius: 6px;
      display: inline-block;
      margin-bottom: 8px;
    }

    .button {
      display: inline-block;
      margin-top: 10px;
      padding: 6px 12px;
      border-radius: 8px;
      background: #A4D65E;
      font-size: 14px;
    }
  </style>
</head>

<body>

<div class="section">
  <h1>Hi! Welcome to my website!</h1>
  <p>This is a GCSE revision website.</p>
</div>

<div class="section">
  <h2>📘 Science & Maths</h2>
  <div class="card-container">

    <div class="card">
      <div class="tag">Subject</div>
      <h3>Chemistry</h3>
      <a href="chemistry.html" class="button">Open</a>
    </div>

    <div class="card">
      <div class="tag">Subject</div>
      <h3>Physics</h3>
      <a href="physics.html" class="button">Open</a>
    </div>

    <div class="card">
      <div class="tag">Subject</div>
      <h3>Mathematics</h3>
      <a href="maths.html" class="button">Open</a>
    </div>

  </div>
</div>

<div class="section">
  <h2>📝 English</h2>
  <div class="card-container">

    <div class="card">
      <div class="tag">English</div>
      <h3>Poetry Anthology</h3>
      <a href="PA/PoetryAnthology-menu.html" class="button">Open</a>
    </div>

  </div>
</div>

</body>
</html>
