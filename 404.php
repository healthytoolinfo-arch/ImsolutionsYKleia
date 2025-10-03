<?php
// Página 404 personalizada para im solutions
http_response_code(404);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>404 | im solutions</title>
  <meta name="description" content="Oops! You’ve hit a dead end… but hey, even legends get lost sometimes!" />
  <link rel="icon" type="image/png" href="/img/favicon.png" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
  <style>
    body {
      background: #fffffc;
      color: #1d1d1b;
      font-family: 'Gill Sans', 'Inter', -apple-system, Roboto, Helvetica, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
    }
    .container {
      max-width: 420px;
      margin: 0 auto;
      padding: 32px 16px;
      text-align: center;
    }
    .error-image {
      width: 300px;
      height: auto;
      margin-bottom: 32px;
      border-radius: 16px;
    }
    .error-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 24px;
      letter-spacing: -1px;
    }
    .back-btn {
      display: inline-block;
      padding: 16px 32px;
      background: #1d1d1b;
      color: #fff;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-family: 'Inter', sans-serif;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s, transform 0.3s;
      margin-top: 24px;
      text-decoration: none;
    }
    .back-btn:hover {
      background: #333;
      transform: scale(1.05);
    }
  </style>
</head>
<body>
  <div class="container">
    <img src="/img/404.png" alt="Lost legend - im solutions" class="error-image" />
    <div class="error-title">Oops! You’ve hit a dead end… but hey, even legends get lost sometimes!</div>
    <a href="/index.php" class="back-btn">Back to home</a>
  </div>
</body>
</html>
