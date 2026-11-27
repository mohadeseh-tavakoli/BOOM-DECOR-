# بوم دکور | Boom Decor Store

نسخه React فروشگاه بوم دکور، با تنظیم مسیر مخصوص GitHub Pages برای Repository با نام `BOOM-DECOR`.

## اجرای محلی
```bash
npm install
npm run dev
```

## انتشار روی GitHub Pages
این پروژه برای آدرس پروژه‌ای زیر تنظیم شده است:
`https://mohadeseh-tavakoli.github.io/BOOM-DECOR/`

1. فایل‌های این پروژه را در ریشه Repository به نام `BOOM-DECOR` قرار دهید.
2. در GitHub وارد **Settings → Pages** شوید.
3. در بخش **Build and deployment**، گزینه **GitHub Actions** را انتخاب کنید.
4. فایل workflow زیر را در مسیر `.github/workflows/deploy.yml` قرار دهید.
5. پس از Push، از تب **Actions** موفقیت فرایند Deploy را بررسی کنید.

## Workflow آماده GitHub Pages
فایل `deploy.yml` موجود در این پروژه را به مسیر `.github/workflows/deploy.yml` منتقل کنید.

## صفحات و امکانات
- صفحه اصلی و دسته‌بندی‌های قرنیز، پارکت، لمینت و ابزار پلی‌استایرن
- جستجو، فیلتر قیمت و مرتب‌سازی
- جزئیات محصول، سبد خرید و علاقه‌مندی‌ها
- فرم تسویه حساب نمایشی
- حساب کاربری، مجله، درباره ما و تماس با ما
- محاسبه‌گر متراژ
- تصاویر در `public/images`

## نکته
این پروژه Front-end است. پرداخت واقعی، حساب کاربری متصل به سرور، ثبت سفارش پایدار، دیتابیس و پنل مدیریت به بک‌اند و اتصال WooCommerce نیاز دارند.
