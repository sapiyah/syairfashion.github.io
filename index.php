<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Beranda | Syair Fashion</title>
    <link rel="stylesheet" href="css/index.css">
</head>
<body>
    <!-- Navbar -->
    <?php require "navbar.php"; ?>

    <!-- Banner -->
    <div class="banner">
        <div class="banner-container">
            <img src="img/banner.jpg" alt="">
            <div class="banner-text">
                <h1>Selamat Datang di toko Kami</h1>
                <p>Gaya yang Menceritakan, Mode yang Membebaskan</p>
            </div>
        </div>
    </div>

    <!-- Highlight Category -->
    <div class="highlight1">
        <div class="highlight-text">
            <h4>Kategori Terlaris</h4>
        </div>
        <div class="highlight-list" id="highlight-list">
            <!-- list -->
        </div>
    </div>

    <!-- About Us -->
    <div class="about">
        <h4>Tentang Kami</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, eius reiciendis accusantium, labore iusto harum inventore quaerat praesentium molestias esse, officiis asperiores veritatis natus dolores necessitatibus! Ad numquam eos quis dolore aliquid voluptas expedita praesentium sit dolorem reprehenderit. Veritatis, quisquam accusamus. Repudiandae qui soluta, nesciunt sunt suscipit distinctio harum quidem.</p>
    </div>

    <!-- Produk -->
    <div class="produk">
        <div class="produk-text">
            <h4>Produk tersedia</h4>
        </div>
        <div class="produk-list" id="produk-list">
            <!-- list -->
        </div>
    </div>

    <!-- Footer -->
    <?php require "footer.php"; ?>
    
    <script src="./js/index.js"></script>
</body>
</html>
