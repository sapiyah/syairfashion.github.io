<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Keranjang | SyairFashion</title>
    <link rel="stylesheet" href="./css/keranjang.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <!-- Navbar -->
    <?php require "navbar.php"; ?>    

    <!-- Keranjang Belanja -->
    <div class="container">
        <div class="keranjang">
            <i class="fas fa-shopping-cart keranjang"> Keranjang Belanja</i>
            <div class="keranjang-list" id="keranjang-list">
                <!-- list -->
            </div>
        </div>
        <div class="payment">
            <i class="fas fa-money-bill money-bill"> Bayar Sekarang</i>
        </div>
    </div>

    
    <!-- Footer -->
    <?php require "footer.php"; ?>
    
    <script src="./js/keranjang.js"></script>
</body>
</html>