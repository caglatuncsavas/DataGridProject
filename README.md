# Angular AG Grid ve ASP.NET Core ile Veri Yönetimi

Bu proje, Angular'da AG Grid kullanımını ve ASP.NET Core'da OData ve Entity Framework ile veri yönetimini birleştirir. AG Grid, Angular tabanlı bir kullanıcı arayüzünde veri gösterimi sağlarken, ASP.NET Core sunucu tarafında veri işlemleri için kullanılır.

## Özellikler

- **Angular AG Grid**: Kullanıcı arayüzünde etkili veri gösterimi ve etkileşim.
- **ASP.NET Core API**: Veri erişimi ve manipülasyonu için güvenilir ve esnek bir sunucu tarafı yapılandırması.
- **OData ve Entity Framework**: Veritabanı işlemleri ve sorgulama yetenekleri.
- **Bogus Kütüphanesi**: Sahte veri üretimi için kullanılır, bu sayede gerçekçi test senaryoları oluşturulabilir.

## Kurulum

Bu projeyi yerel olarak çalıştırmak için aşağıdaki adımları takip edin:

### Repository'i Klonlayın

```bash
git clone [repository-link]
````
### ASP.NET Core API'yi Başlatın
- 'DataGridServer' klasörüne gidin.
- Gerekli NuGet paketlerini yükleyin ve uygulamayı başlatın.
  
### Angular Uygulamasını Başlatın
- Gerekli npm paketlerini yükleyin (npm install).
- Uygulamayı başlatın (ng serve).

## Kullanım
## Angular Uygulaması
- AG Grid: Veriler, tablo formatında gösterilir. Kullanıcılar verileri sıralayabilir, filtreleyebilir ve düzenleyebilir.
- Http İstemcisi: Angular'da HTTP istemcisi, ASP.NET Core API ile veri alışverişinde bulunur.

## ASP.NET Core API
- SeedData Metodu: Başlangıç verileri oluşturur ve veritabanına kaydeder.
- GetAll Metodu: OData protokolünü kullanarak veri sorgulaması sağlar.
- Update Metodu: Değiştirilen verileri günceller.
