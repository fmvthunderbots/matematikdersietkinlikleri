# Matematik Etkinlik Portalı

5., 6. ve 7. sınıflar için tarayıcıda çalışan matematik oyunları portalı. Derleme adımı yok, düz HTML/JS.
Yayın adresi: https://fmvthunderbots.github.io/matematikdersietkinlikleri/ (GitHub Pages, `main` dalı).
İkinci adres: https://matematikoyunlari.web.app (Firebase Hosting, proje `zihindencarpma`, site `matematikoyunlari`).

## Yayınlama ve yönetim

1. `git push origin main` (GitHub Pages).
2. `firebase.cmd deploy --only hosting --project zihindencarpma` (web.app; `firebase.json` neyin yüklenmeyeceğini söyler).
- Veritabanı kuralları `database.rules.json`: herkes okur; skor düğümlerine yalnız yeni kayıt eklenir (silme/değiştirme yok),
  Zeka Arenası rekoru yalnız artar, öğrenci listeleri salt okunur, metinde `< > " & `` yasak, `score`/`puan` ≤ 1.000.000.
  Kural değişince: `firebase.cmd deploy --only database --project zihindencarpma`. Yeni düğüm adı `scores...` ya da
  `students_...` ile başlamazsa kural ona izin vermez; ekleyin.
- Silme, öğrenci listesi yazma gibi yönetici işleri Firebase CLI ile (kuralları atlar): `firebase.cmd database:update /<düğüm> dosya.json`.
  Git Bash'te önce `export MSYS_NO_PATHCONV=1` (yoksa `/düğüm` Windows yoluna çevrilir). Türkçe anahtarları JSON dosyasına
  `ensure_ascii` ile yazın; komut satırında Türkçe harf bozulur. İşten önce tam yedek: `curl .../.json` (kural root okumayı kapattığı
  için CLI ile: `firebase.cmd database:get / > yedek.json`).
- Oyun içindeki öğretmen düğmeleri (öğrenci ekle/sil, skorları sıfırla) kurallar yüzünden artık çalışmaz; bilerek.

## Yapı

- `index.html`: portal. Oyun kartlarını gösterir. Yönetim paneli (2026-11-17) kaldırıldı; öğrenci listesi, skor
  temizliği gibi işleri kullanıcı Claude'a söyler, Claude Firebase CLI ile yapar (önce yedek alır).
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

Panel kaldırıldı. Öğrenci listesi değişince `students_grade_<sınıf>` ve o sınıfın oyunlarının okuduğu
eski düğümler (ör. 6. sınıf: `students_olasilikfabrikasi`, `students_asalfirtina`, `students_yaziliarenasi_6` ...)
elle güncellenmeli. Portal oyunları URL ile açtığı için
oyunlar listeyi portaldan almaz; her oyun Firebase'de kendi düğümünü okur.

Yeni oyunlarda doğrudan `students_grade_<sınıf>` okuyun.

## Bilinen sorunlar (2026-11-14 itibarıyla düzeltilmedi)

1. Şu oyunlar eski panelin eşitlediği düğümleri okumuyordu; öğrenci listesi güncellenirken bunlar da yazılmalı:
   - 5. sınıf: `5_okula_merhaba` (`students_zihinden`), `geometri_kutuplar` (`students_geometrikutuplar`)
   - 6. sınıf: `asal_sayi_firtinasi` ve `aralarinda_asal_kutup` (`students_asalfirtina`; eski panel yanlışlıkla
     `students_asalsayifirtina` yazıyordu), `yazili_arenasi_6` (`students_yaziliarenasi_6`)
   - 7. sınıf: `yazili_arenasi_7` (`students_yaziliarenasi_7`)
2. `arsiv/app.js` bu projeye ait değil (PDF çözüm sitesinin kodu, yanlışlıkla yüklenmiş).
3. `Portal_Kurulumu.bat` adresi `matematikdersetkinlikleri` yazıyor; doğrusu `matematikdersietkinlikleri` ("i" eksik).
4. `arkaplan7.jpg` hiçbir yerde kullanılmıyor. `oyunlar/tombala/` portalda (`oyunlar.js`) listelenmiyor.
   Perili Köşk ilk 10: düğüm `meb_perilikosk_top10`; isim başına tek kayıt (en yüksek puan) tutulur.
   Oyun kodunda `SCORE_MGR_BAD_NAMES` = dedektif, nil tabak: bu adlar kaydedilmez ve listede gösterilmez (kayıtları 2026-11-17'de silindi).
   Perili Köşk'te kullanılmayan görseller var (`exterior_bg.jpg`, `detective.png`, `perili_kosk_bg.jpg`, `perili_kosk_zafer.jpg`).
5. Var olmayan dosyaya giden yollar: `5_okula_merhaba` `background.jpg` arıyor (yoksa internetten yedek görsel
   açılıyor); Perili Köşk yedek yolları `kapak.jpg` ve `perili_kosk_assets/...`.
6. Klasör düzenine geçişte (2026-11) eski kök adresler (ör. `/perili_kosk.html`) kaldırıldı; doğrudan bağlantılar çalışmaz.

Firebase kuralları ve oyunların iç mantığı ayrıntılı incelenmedi.

## Çalışma notları

- Kullanıcı Türkçe konuşur; yanıtlar ve commit mesajları Türkçe.
- Commit mesajı biçimi: `<Oyun adı>: <değişiklik>`.
- `main` dalına gönderilen her şey doğrudan canlı siteye çıkar; büyük değişiklikten önce kullanıcıya sor.
