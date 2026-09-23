// Bu dosya Matematik Etkinlik Portalı'nın veritabanıdır.
// Yeni bir oyun eklemek istediğinizde aşağıdaki listeye yeni bir blok eklemeniz yeterlidir.

const SISTEM_OYUNLARI = [
    {
        id: "oyun-1",
        title: "Çarpanlar ve Katlar",
        grade: "6", // 5 veya 6 yazın
        image: "./kapak_6sinif.jpg", // Kapak resmi yoksa boş bırakın: ""
        url: "./carpanlar_katlar_oyunu.html" // Oyunun dosya adı
    },
    {
        id: "oyun-2",
        title: "Zihinden Çarpma Yarışması",
        grade: "5",
        image: "./5_okula_merhaba_arkaplan.jpg",
        url: "./5_okula_merhaba.html"
    },
    {
        id: "oyun-3",
        title: "Geombala",
        grade: "5",
        image: "./geotombala.jpg",
        url: "./tombala.html"
    },
    {
        id: "oyun-4",
        title: "Bölünebilme",
        grade: "6",
        image: "./bolunebilme.jpg",
        url: "./bolunebilme.html"
    },
    {
        id: "oyun-5",
        title: "Çarpan Avcıları",
        grade: "6",
        image: "./carpanavcilari.jpg",
        url: "./carpanavcilari.html"
    }
    // YENİ OYUN EKLEMEK İÇİN ALT TARAFA ŞU ŞABLONU KOPYALAYABİLİRSİNİZ:
    /*
    ,
    {
        id: "oyun-2",
        title: "Yeni Oyunun Adı",
        grade: "5",
        image: "kapak_resmi.jpg",
        url: "yeni_oyun_dosyasi.html"
    }
    */
];
