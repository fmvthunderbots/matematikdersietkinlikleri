// Bu dosya Matematik Etkinlik Portalı'nın veritabanıdır.
// Yeni bir oyun eklemek istediğinizde aşağıdaki listeye yeni bir blok eklemeniz yeterlidir.

const SISTEM_OYUNLARI = [
    {
        id: "oyun-1",
        title: "Çarpanlar ve Katlar",
        grade: "6", // 5, 6 veya 7 yazın
        image: "./oyunlar/carpanlar_katlar_oyunu/kapak_6sinif.jpg", // Kapak resmi yoksa boş bırakın: ""
        url: "./oyunlar/carpanlar_katlar_oyunu/carpanlar_katlar_oyunu.html" // Oyunun dosya adı
    },
    {
        id: "oyun-2",
        title: "Zihinden Çarpma Yarışması",
        grade: "5",
        image: "./oyunlar/5_okula_merhaba/5_okula_merhaba_arkaplan.jpg",
        url: "./oyunlar/5_okula_merhaba/5_okula_merhaba.html"
    },
    {
        id: "oyun-3",
        title: "Geombala",
        grade: "5",
        image: "./oyunlar/geombala/geotombala.jpg",
        url: "./oyunlar/geombala/geombala.html"
    },
    {
        id: "oyun-4",
        title: "Çarpan Avcıları",
        grade: "6",
        image: "./oyunlar/carpanavcilari/carpanavcilari.jpg",
        url: "./oyunlar/carpanavcilari/carpanavcilari.html"
    },
    {
        id: "oyun-5",
        title: "Bölünebilme Yağmuru",
        grade: "6",
        image: "./oyunlar/bolunebilme/bolunebilme.jpg",
        url: "./oyunlar/bolunebilme/bolunebilme.html"
    },
    {
        id: "oyun-6",
        title: "Z & Q Bilgi Yarışması",
        grade: "7",
        image: "./oyunlar/zq/zq.jpg",
        url: "./oyunlar/zq/zq.html"
    },
    {
        id: "oyun-7",
        title: "Asal Sayı Fırtınası",
        grade: "6",
        image: "./oyunlar/asal_sayi_firtinasi/asal_sayi_firtinasi.jpg",
        url: "./oyunlar/asal_sayi_firtinasi/asal_sayi_firtinasi.html"
    },
    {
        id: "oyun-8",
        title: "Rasyonel Yağmuru",
        grade: "7",
        image: "./oyunlar/rasyonel_yagmuru/rasyonel_yagmuru.jpg",
        url: "./oyunlar/rasyonel_yagmuru/rasyonel_yagmuru.html"
    },
    {
        id: "oyun-9",
        title: "Kutuplarda Asallık",
        grade: "6",
        image: "./oyunlar/aralarinda_asal_kutup/polar_cover.jpg",
        url: "./oyunlar/aralarinda_asal_kutup/aralarinda_asal_kutup.html"
    },
    {
        id: "oyun-10",
        title: "Kutuplarda Geometri",
        grade: "5",
        image: "./oyunlar/geometri_kutuplar/geometri_kutuplar_cover.jpg",
        url: "./oyunlar/geometri_kutuplar/geometri_kutuplar.html"
    },
     {
        id: "oyun-11",
        title: "Tam Sayı Fırtınası",
        grade: "7",
        image: "./oyunlar/tam_sayi_firtinasi/tam_sayi_firtinasi.jpg",
        url: "./oyunlar/tam_sayi_firtinasi/tam_sayi_firtinasi.html"
    },
     {
        id: "oyun-12",
        title: "Olasılık Fabrikası",
        grade: "6",
        image: "./oyunlar/olasilik_fabrikasi/olasilik_fabrikasi_kapak.jpg",
        url: "./oyunlar/olasilik_fabrikasi/olasilik_fabrikasi.html"
    },
     {
        id: "oyun-13",
        title: "Cumhuriyet Ekspresi",
        grade: "5",
        image: "./oyunlar/cumhuriyet_ekspresi/cumhuriyet_ekspresi_kapak.jpg",
        url: "./oyunlar/cumhuriyet_ekspresi/cumhuriyet_ekspresi.html"
    },
    {
        id: "oyun-14",
        title: "Cumhuriyet Meşalesi",
        grade: "6",
        image: "./oyunlar/cumhuriyet_mesalesi/cumhuriyet_mesalesi.jpg",
        url: "./oyunlar/cumhuriyet_mesalesi/cumhuriyet_mesalesi.html"
    },
      {
        id: "oyun-15",
        title: "Yazılı Arenası",
        grade: "5",
        image: "./oyunlar/yazili_arenasi/yazili_arenasi_kapak.jpg",
        url: "./oyunlar/yazili_arenasi/yazili_arenasi.html"
    },
    {
        id: "oyun-16",
        title: "Yazılı Arenası",
        grade: "6",
        image: "./oyunlar/yazili_arenasi/yazili_arenasi_kapak.jpg",
        url: "./oyunlar/yazili_arenasi/yazili_arenasi_6.html"
    },
     {
        id: "oyun-17",
        title: "Yazılı Arenası",
        grade: "7",
        image: "./oyunlar/yazili_arenasi/yazili_arenasi_kapak.jpg",
        url: "./oyunlar/yazili_arenasi/yazili_arenasi_7.html"
    },
    {
        id: "oyun-18",
        title: "Perili Köşk Ondalık Kaçış",
        grade: "6",
        image: "./oyunlar/perili_kosk/perili_kosk_kapak.jpg",
        url: "./oyunlar/perili_kosk/perili_kosk.html"
    },
     {
        id: "oyun-19",
        title: "Anıtkabir Yolu",
        grade: "5",
        image: "./oyunlar/anitkabir_yolu/anitkabir_yolu_kapak.jpg",
        url: "./oyunlar/anitkabir_yolu/anitkabir_yolu.html"
    },
    {
        id: "oyun-20",
        title: "Anıtkabir Yolu",
        grade: "6",
        image: "./oyunlar/anitkabir_yolu/anitkabir_yolu_kapak.jpg",
        url: "./oyunlar/anitkabir_yolu/anitkabir_yolu_6.html"
    },
    {
        id: "oyun-21",
        title: "Zeka Oyunları",
        grade: "6",
        image: "./oyunlar/zeka_arenasi/zeka_oyunlari.jpg",
        url: "./oyunlar/zeka_arenasi/zeka_arenasi.html"
    },
    {
        id: "oyun-22",
        title: "Zeka Oyunları",
        grade: "5",
        image: "./oyunlar/zeka_arenasi/zeka_oyunlari.jpg",
        url: "./oyunlar/zeka_arenasi/zeka_arenasi.html?sinif=5"
    },
    {
        id: "oyun-23",
        title: "Zeka Oyunları",
        grade: "7",
        image: "./oyunlar/zeka_arenasi/zeka_oyunlari.jpg",
        url: "./oyunlar/zeka_arenasi/zeka_arenasi.html?sinif=7"
    },
    {
        id: "oyun-24",
        title: "Kutuplarda Tam Sayılar",
        grade: "7",
        image: "./oyunlar/kutuplarda_tam_sayilar/kutuplarda_tam_sayilar.jpg",
        url: "./oyunlar/kutuplarda_tam_sayilar/kutuplarda_tam_sayilar.html"
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
