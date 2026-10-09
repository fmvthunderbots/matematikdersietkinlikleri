// Bu dosya Matematik Etkinlik Portalı'nın veritabanıdır.
// Yeni bir oyun eklemek istediğinizde aşağıdaki listeye yeni bir blok eklemeniz yeterlidir.

const SISTEM_OYUNLARI = [
    {
        id: "oyun-1",
        title: "Çarpanlar ve Katlar",
        grade: "6", // 5, 6 veya 7 yazın
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
        title: "Çarpan Avcıları",
        grade: "6",
        image: "./carpanavcilari.jpg",
        url: "./carpanavcilari.html"
    },
    {
        id: "oyun-5",
        title: "Bölünebilme Yağmuru",
        grade: "6",
        image: "./bolunebilme.jpg",
        url: "./bolunebilme.html"
    },
    {
        id: "oyun-6",
        title: "Z & Q Bilgi Yarışması",
        grade: "7",
        image: "./zq.jpg",
        url: "./zq.html"
    },
    {
        id: "oyun-7",
        title: "Asal Sayı Fırtınası",
        grade: "6",
        image: "./asal_sayi_firtinasi.jpg",
        url: "./asal_sayi_firtinasi.html"
    },
    {
        id: "oyun-8",
        title: "Rasyonel Yağmuru",
        grade: "7",
        image: "./rasyonel_yagmuru.jpg",
        url: "./rasyonel_yagmuru.html"
    },
    {
        id: "oyun-9",
        title: "Kutuplarda Asallık",
        grade: "6",
        image: "./polar_cover.jpg",
        url: "./aralarinda_asal_kutup.html"
    },
    {
        id: "oyun-10",
        title: "Kutuplarda Geometri",
        grade: "5",
        image: "./geometri_kutuplar_cover.jpg",
        url: "./geometri_kutuplar.html"
    },
    
    // YENİ OYUN EKLEMEK İÇİN ALT TARAFA ŞU ŞABLONU KOPYALAYABİLİRSİNİZ:
    /*
    ,
    {
        id: "oyun-6",
        title: "Rasyonel Sayılar Macerası",
        grade: "7",
        image: "kapak_resmi.jpg",
        url: "yeni_oyun_dosyasi.html"
    }
    */
];
