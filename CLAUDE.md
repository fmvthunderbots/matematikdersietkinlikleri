# Matematik Etkinlik Portalı

5., 6. ve 7. sınıflar için tarayıcıda çalışan matematik oyunları portalı. Derleme adımı yok, düz HTML/JS.
Yayın adresi: https://fmvthunderbots.github.io/matematikdersietkinlikleri/ (GitHub Pages, `main` dalı).

## Yapı

- `index.html`: portal. Oyun kartlarını gösterir, öğretmen panelinden sınıf listeleri yönetilir.
- `oyunlar.js`: oyun listesi (`SISTEM_OYUNLARI`). Yeni oyun = bu listeye yeni blok (`id`, `title`, `grade`, `image`, `url`).
- `oyunlar/<oyun>/`: her oyunun `.html` dosyası, kapağı ve yalnız ona ait görsel/sesleri. Sürümleri aynı klasörde
  (`yazili_arenasi/` 5-6-7, `anitkabir_yolu/` 5-6). Oyun içi yollar klasöre göre göreli (`url('bg.jpg')`).
  Yeni oyun: `oyunlar/<yeni_oyun>/` klasörü açın, `oyunlar.js` içinde `./oyunlar/<yeni_oyun>/...` yazın.
- `ortak/`: birden fazla oyunun kullandığı görseller; oyunlardan `../../ortak/...` ile çağrılır.
- `arsiv/`: hiçbir sayfanın kullanmadığı dosyalar (`app.js`, `test*.vbs`, `bol.jpg`). Silinmedi.
- Kökte kalanlar: `index.html`, `oyunlar.js`, portal arka planları (`arkaplan5-7.jpg`), `simge.*` (kurulum
  dosyası bunları kökten indirir), `Portal_Kurulumu.bat`.
- Portal oyunları kendi içinde iframe ile açar.
- Uygulama olarak yükleme (PWA): `manifest.json`, `sw.js` (önbellek tutmaz) ve `uygulama/` simgeleri
  (`simge.jpg`'den üretildi). Portalda "Uygulamayı Yükle" düğmesi yalnız tarayıcı izin verince görünür.
- `oyunlar/perili_kosk/students.js`: yalnızca Perili Köşk kullanır (sabit 6. sınıf listesi).
- Firebase Realtime Database: `zihindencarpma-default-rtdb` (ayarlar `index.html` ve oyunların içinde).

## Öğrenci listesi akışı

Panel, merkezi listeyi `students_grade_<sınıf>` düğümüne yazar ve `index.html` içindeki
`GRADE_SYNC_NODES` haritasındaki eski düğümlere de kopyalar. Portal oyunları URL ile açtığı için
oyunlar listeyi portaldan almaz; her oyun Firebase'de kendi düğümünü okur.

Yeni oyunlarda doğrudan `students_grade_<sınıf>` okuyun. Oyun başka bir düğüm okuyorsa o düğümü
`GRADE_SYNC_NODES` içine ekleyin.

## Bilinen sorunlar (2026-11-14 itibarıyla düzeltilmedi)

1. Şu oyunların okuduğu düğümler `GRADE_SYNC_NODES` içinde yok, panelden eklenen öğrenciler gitmiyor:
   - 5. sınıf: `5_okula_merhaba` (`students_zihinden`), `geometri_kutuplar` (`students_geometrikutuplar`)
   - 6. sınıf: `asal_sayi_firtinasi` ve `aralarinda_asal_kutup` (`students_asalfirtina`; panel yanlışlıkla
     `students_asalsayifirtina` yazıyor), `yazili_arenasi_6` (`students_yaziliarenasi_6`)
   - 7. sınıf: `yazili_arenasi_7` (`students_yaziliarenasi_7`)
2. `arsiv/app.js` bu projeye ait değil (PDF çözüm sitesinin kodu, yanlışlıkla yüklenmiş).
3. `Portal_Kurulumu.bat` adresi `matematikdersetkinlikleri` yazıyor; doğrusu `matematikdersietkinlikleri` ("i" eksik).
4. `arkaplan7.jpg` hiçbir yerde kullanılmıyor. `oyunlar/tombala/` portalda (`oyunlar.js`) listelenmiyor.
   Perili Köşk'te kullanılmayan görseller var (`exterior_bg.jpg`, `detective.png`, `perili_kosk_bg.jpg`, `perili_kosk_zafer.jpg`).
5. Var olmayan dosyaya giden yollar: `5_okula_merhaba` `background.jpg` arıyor (yoksa internetten yedek görsel
   açılıyor); Perili Köşk yedek yolları `kapak.jpg` ve `perili_kosk_assets/...`.
6. Klasör düzenine geçişte (2026-11) eski kök adresler (ör. `/perili_kosk.html`) kaldırıldı; doğrudan bağlantılar çalışmaz.

Firebase kuralları ve oyunların iç mantığı ayrıntılı incelenmedi.

## Çalışma notları

- Kullanıcı Türkçe konuşur; yanıtlar ve commit mesajları Türkçe.
- Commit mesajı biçimi: `<Oyun adı>: <değişiklik>`.
- `main` dalına gönderilen her şey doğrudan canlı siteye çıkar; büyük değişiklikten önce kullanıcıya sor.
