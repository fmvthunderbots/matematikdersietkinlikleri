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
        url: "./geombala.html"
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
     {
        id: "oyun-11",
        title: "Tam Sayı Fırtınası",
        grade: "7",
        image: "./tam_sayi_firtinasi.jpg",
        url: "./tam_sayi_firtinasi.html"
    },
     {
        id: "oyun-12",
        title: "Olasılık Fabrikası",
        grade: "6",
        image: "./olasilik_fabrikasi_kapak.jpg",
        url: "./olasilik_fabrikasi.html"
    },
     {
        id: "oyun-13",
        title: "Cumhuriyet Ekspresi",
        grade: "5",
        image: "./cumhuriyet_ekspresi_kapak.jpg",
        url: "./cumhuriyet_ekspresi.html"
    },
    {
        id: "oyun-14",
        title: "Cumhuriyet Meşalesi",
        grade: "6",
        image: "./cumhuriyet_mesalesi.jpg",
        url: "./cumhuriyet_mesalesi.html"
    },
      {
        id: "oyun-15",
        title: "Yazılı Arenası",
        grade: "5",
        image: "./yazili_arenasi_kapak.jpg",
        url: ".//yazili_arenasi.html"
    },
    {
        id: "oyun-16",
        title: "Yazılı Arenası",
        grade: "6",
        image: "./yazili_arenasi_kapak.jpg",
        url: ".//yazili_arenasi_6.html"
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
