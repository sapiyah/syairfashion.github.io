const product = [
    { id: 1, title: 'Kerudung Bergo', deskripsi: 'Kerudung praktis yang elegan, menutupi kepala dan leher dengan kenyamanan dan keanggunan.', harga: '46', image: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/12/8/a7cc3197-a46f-4f6f-a2e9-ff876c8587ea.jpg', kategori: 'Kerudung'},
    { id: 2, title: 'Kemeja Pria Hitam', deskripsi: 'Kemeja pria dengan bahan berkualitas dan nyaman.', harga: '135', image: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/6/13/5bd26490-c01b-441b-b2ed-47920f5838a5.jpg', kategori: 'Kemeja Pria'},
    { id: 3, title: 'V-Neck Dress', deskripsi: 'Dress dengan model V-Neck sangat nyaman dipakai untuk acara pesta.', harga: '86', image: 'https://down-id.img.susercontent.com/file/a5b5dc878c8ce6788ebb516230e831cd', kategori: 'Dress'},
    { id: 4, title: 'Kemeja Batik Motif Mega', deskripsi: 'Batik Mega Mendung berkualitas dan nyaman dipakai.', harga: '85', image: 'https://down-id.img.susercontent.com/file/83ccb3b4fa94a584ebb165e3e8db1737', kategori: 'Kemeja Pria'},
    { id: 5, title: 'Gamis Muslim Katun Medina', deskripsi: 'Gamis Muslim dengan bahan premium dan nyaman.', harga: '175', image: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2020/12/1/8cb0129b-6155-4b0a-bf26-8cf2a1266ad9.jpg', kategori: 'Gamis'},
    { id: 6, title: 'Kemeja Flannel Premium Pria', deskripsi: 'Kemeja Flannel bahan premium dan lembut.', harga: '95', image: 'https://id-test-11.slatic.net/p/06ba8bc377c144059c368e3ed86812d9.jpg', kategori: 'Kemeja Pria'},
    { id: 7, title: 'Satin Dress Korea', deskripsi: 'Korean Satin Dress bahan premium dengan berbagai macam model.', harga: '73', image: 'https://ae01.alicdn.com/kf/HTB1hFuLX4D1gK0jSZFyq6AiOVXaq/RUGOD-Gaun-Satin-Bersabuk-Tunik-Fashion-Korea-Gaun-Wanita-Kantor-Temperamental-Solid-Elegan-Gaun-Panjang-Gaun.jpg', kategori: 'Dress'},
    { id: 8, title: 'Kerudung Segi Empat Premium', deskripsi: 'Kerudung Segi Empat dengan bahan super lembut dan nyaman digunakan.', harga: '35', image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//101/MTA-44440678/tidak_ada_merk_jilbab_segiempat_paris_premium_full01_3ad58d2f.jpg', kategori: 'Kerudung'},
    { id: 9, title: 'Gamis Polos Simpel', deskripsi: 'Busana muslim sederhana dan anggun untuk kenyamanan beribadah.', harga: '69', image: 'https://lzd-img-global.slatic.net/g/p/bc20931d01a8e27257396e99f3da3d70.jpg_720x720q80.jpg_.webp', kategori: 'Gamis'},
    { id: 10, title: 'Phasmina Ceruti', deskripsi: 'Aksesori ringan dan elegan dengan bahan ceruti berkualitas tinggi untuk sentuhan gaya yang sempurna.', harga: '35', image: 'https://market.uad.ac.id/wp-content/uploads/2021/06/BBC399DA-B437-4BBB-B2AA-96CE01EB8F72.jpeg', kategori: 'Kerudung'},
    //data lainnya
];

const categoryList = document.getElementById('category');

renderCategory();

function renderCategory(){
    const uniqueCategories = [...new Set(product.map(item => item.kategori))];

    uniqueCategories.forEach(category => {
        const itemCategory = document.createElement('div');
        itemCategory.classList.add('kategori');
        itemCategory.innerHTML = `
            <li>${category}</li>
        `;
        categoryList.appendChild(itemCategory);
    })
};


const productList = document.getElementById('product');

renderProduct();

function renderProduct(){
    productList.innerHTML = '';

    product.forEach(prodak => {
        const itemProduct = document.createElement('div');
        itemProduct.classList.add('produk');
        itemProduct.innerHTML = `
        <img src="${prodak.image}" alt="${prodak.title}">
        <div class="text">
            <h5 class="title">${prodak.title}</h5>
            <P class="deskripsi">${prodak.deskripsi}</p>
            <P class="harga">Rp. ${prodak.harga}.000</p>
            <a href="#">Detail</a>
        </div>
        `;

        productList.appendChild(itemProduct);
    });
}