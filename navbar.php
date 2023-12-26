<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navbar</title>
    <link rel="stylesheet" href="css/navbar.css">
</head>
<body>
    <nav id="header" class="fixed-header">
        <img src="img/syair_logo.jpeg" alt="logo">
        <ul>
            <li><a href="index.php" <?php echo (basename($_SERVER['PHP_SELF']) == 'index.php') ? 'class="active"' : ''; ?>>Home</a></li>
            <li><a href="produk.php" <?php echo (basename($_SERVER['PHP_SELF']) == 'produk.php') ? 'class="active"' : ''; ?>>Produk</a></li>
            <li><a href="keranjang.php" <?php echo (basename($_SERVER['PHP_SELF']) == 'keranjang.php') ? 'class="active"' : ''; ?>>Keranjang</a></li>
            <li><a href="tentang.php" <?php echo (basename($_SERVER['PHP_SELF']) == 'tentang.php') ? 'class="active"' : ''; ?>>Tentang Kami</a></li>
        </ul>
    </nav>

    <script src="./js/navbar.js"></script>
</body>
</html>
