// 6. Sınıf Öğrenci Listesi (114 Öğrenci - Perili Köşk Ondalık Kaçış)
const studentList = [
    "Ada USTA",
    "Ahmet Mutay ERDEM",
    "Alara Derin ÖZYER",
    "Ali ATİLA",
    "Ali OĞUZ",
    "Alp Efe IŞIK",
    "Alp KORALAY",
    "Alp Mete KURU",
    "Alp ÖZ",
    "Alya EKMEN",
    "Alya ÖZPİ",
    "Arya SAĞLIK",
    "Ata İRGİ",
    "Ata Yılmaz ŞAHİN",
    "Ayaz Ali YILDIZ",
    "Ayşe Ada YEŞİLYURT",
    "Ayşe Beren ULU",
    "Bartu UÇAR",
    "Beren BULCA",
    "Beren NEZİROĞULLARI",
    "Beyza Betül HORUZ",
    "Beyza KARTAL",
    "Bilge Naz ÖZCAN",
    "Bürçe Tuba KURT",
    "Can AKTAŞ",
    "Can AYTAK",
    "Cem Çınar DUMAN",
    "Defne AYTAK",
    "Defne ERÇEL",
    "Defne TINAZ",
    "Defne TOPAL",
    "Defne ÇİM",
    "Demir Ali KAYA",
    "Demir TÜLÜ",
    "Deniz PINDIKOĞLU",
    "Deniz ÇİM",
    "Derin Asel ASLAN",
    "Derin HOBAT",
    "Devrim ÖZGER",
    "Dora Ilgın GÜRSOY",
    "Doruk DUYMAÇ",
    "Doruk ÇETİN",
    "Doğa ATEŞ",
    "Duru İŞERİ",
    "Ece ÜSTÜNDAĞ",
    "Ege SARI",
    "Ela ALDEMİR",
    "Ela EMİROĞLU",
    "Elif DULUNDU",
    "Elif KILINÇ",
    "Elif YILMAZ",
    "Elis DEMİR",
    "Emir TURANBARANOĞLU",
    "Emir ÜNAL",
    "Emre ÖNEY",
    "Eren TURANBARANOĞLU",
    "Eren ÖZEL",
    "Gökçe TABAK",
    "Güney DÜZGÜN",
    "Hüseyin Rüzgar SAĞLAM",
    "İnan ALDEMİR",
    "İpek Nazlı DOLU",
    "Kaan ÇALIŞKAN",
    "Kerem IŞIK",
    "Kerem TUNÇYÜREK",
    "Kerem ÖZTÜRK",
    "Kerem ÜNAL",
    "Kutay ÇOLAK",
    "Kuzey KURTULDU",
    "Kürşat Gökdeniz BEKTAŞ",
    "Lina ÖZTAN",
    "Mahmut Ali AYDIN",
    "Mehmet Ali ÇEMBERCİ",
    "Melih Burak YAŞAR",
    "Melis COŞKUNER",
    "Melis Nora ERSAN",
    "Melisa ESMER",
    "Mercan GÖZÜKÜÇÜK",
    "Mert ÖZEL",
    "Meryem ŞEN",
    "Mihrimah Ela YILDIRIM",
    "Mira DAL",
    "Mira ŞAHİN",
    "Mustafa Altuğ YAĞIZ",
    "Mustafa Kadir ARSLANOĞLU",
    "Mustafa Yağız AVCI",
    "Nikan KAYA",
    "Nil TABAK",
    "Nisa ÖZVARDAR",
    "Nisan ÖZLÜK",
    "Perisu MURATHAN",
    "Poyraz Ahmed AYDINALP",
    "Rüzgar KIRALİ",
    "Sedef GÜNEŞLİ",
    "Selis TAHA",
    "Serhat Yaman AĞIRMAN",
    "Serra SIRDAŞ",
    "Tanem Lal KAVAKLI",
    "Tuna DEMİRER",
    "Yağmur SEZER",
    "Yiğit Ali KOÇ",
    "Yiğit Arda MART",
    "Yusuf EREN",
    "Yusuf Yankı EKİZ",
    "Zeynep Alya EROL",
    "Zeynep BİLİR",
    "Zeynep KIZILKAYA",
    "Zeynep VURUCU",
    "Zeynep Züleyha GEYİK",
    "Çağan AKÇA",
    "Çınar Berkay KILINÇ",
    "Ömer BARAN AYTEMÜR",
    "Ömer Sadettin KELEŞ",
    "Şevval ÖZTÜRK"
];

function normalizeForSearch(str) {
    if (!str) return '';
    return str.toLocaleLowerCase('tr-TR')
        .replace(/[^a-zçğıöşü]/g, '')
        .replace(/[aeıioöuü]/g, '');
}

function validateStudentName(inputStr) {
    if (!inputStr) return { error: "Lütfen isminizi girin." };
    let inputParts = inputStr.toLocaleLowerCase('tr-TR').trim().split(/\s+/).filter(x => x.length > 0);
    
    if (inputParts.length < 2) {
        return { error: "Lütfen adınızı ve soyadınızı aralarında boşluk bırakarak tam girin.\n(Örn: Zeynep Demir)" };
    }
    
    let matches = [];
    for (let student of studentList) {
        let stdParts = student.toLocaleLowerCase('tr-TR').split(/\s+/);
        
        let matchScore = 0;
        let matchedParts = 0;
        
        for (let ip of inputParts) {
            let ipNorm = normalizeForSearch(ip);
            let partMatched = false;
            for (let sp of stdParts) {
                let spNorm = normalizeForSearch(sp);
                if (sp === ip) {
                    matchScore += 2; partMatched = true;
                } else if (sp.startsWith(ip) || ip.startsWith(sp)) {
                    matchScore += 1; partMatched = true;
                } else if (spNorm.length > 0 && ipNorm.length > 0 && spNorm === ipNorm) {
                    matchScore += 1; partMatched = true;
                }
            }
            if (partMatched) matchedParts++;
        }
        
        if (matchedParts === inputParts.length && matchedParts >= 2) {
            matches.push({ name: student, score: matchScore });
        }
    }
    
    if (matches.length === 1) {
        return { success: true, name: matches[0].name };
    } else if (matches.length > 1) {
        matches.sort((a, b) => b.score - a.score);
        return { success: true, name: matches[0].name, alternatives: matches.map(m => m.name) };
    }
    
    return { error: "Girdiğiniz isim listede bulunamadı. Lütfen listeden adınızı seçin." };
}
