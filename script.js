// Language Data
const translations = {
  en: {
      "header-title": "Welcome to Our Car Wash",
      "home-subtitle": "Your Trusted Car Wash Service",
      "home-description": "We provide high-quality car wash services to keep your vehicle looking its best.",
      "services-title": "Our Services",
      "service-1": "Exterior Washing",
      "service-2": "Interior Cleaning",
      "service-3": "Waxing and Polishing",
      "pricing-title": "Pricing Packages",
      "pricing-basic": "Small: SAR 20",
      "pricing-premium": "Meduim: SAR 25",
      "pricing-deluxe": "Big: SAR 30",
      "booking-title": "Book an Appointment",
      "label-service-type": "Select Service:",
      "label-booking-date": "Date:",
      "label-booking-time": "Time:",
      "book-button": "Book Now",
      "gallery-title": "Our Work",
      "testimonials-title": "What Our Customers Say",
      "contact-title": "Contact Us",
      "label-name": "Name:",
      "label-email": "Email:",
      "submit-button": "Submit",
      "footer-text": "© 2023 Excellence Car Wash. All rights reserved."
  },
  ar: {
      "header-title": "مرحباً بكم في خدمة غسيل السيارات",
      "home-subtitle": "خدمة غسيل السيارات الموثوقة",
      "home-description": "نقدم خدمات غسيل سيارات عالية الجودة للحفاظ على مظهر سيارتك بأفضل حال.",
      "services-title": "خدماتنا",
      "service-1": "غسيل الخارجي",
      "service-2": "تنظيف الداخلي",
      "service-3": "التلميع والشمع",
      "pricing-title": "باقات الأسعار",
      "pricing-basic": "20:صغير",
      "pricing-premium": "إبهامي:25",
      "pricing-deluxe": "كبير:30",
      "booking-title": "احجز موعداً",
      "label-service-type": "اختر الخدمة:",
      "label-booking-date": "التاريخ:",
      "label-booking-time": "الوقت:",
      "book-button": "احجز الآن",
      "gallery-title": "أعمالنا",
      "testimonials-title": "ماذا يقول عملاؤنا؟",
      "contact-title": "اتصل بنا",
      "label-name": "الاسم:",
      "label-email": "البريد الإلكتروني:",
      "submit-button": "إرسال",
      "footer-text": "© 2023 خدمة غسيل السيارات المتميزة. جميع الحقوق محفوظة."
  }
};

// Function to Switch Language
function switchLanguage(lang) {
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  for (let key in translations[lang]) {
      const element = document.getElementById(key);
      if (element) {
          element.textContent = translations[lang][key];
      }
  }
}

// Default Language
switchLanguage('en');

// Handle Booking Form Submission
document.getElementById('booking-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const serviceType = document.getElementById('service-type').value;
  const bookingDate = document.getElementById('booking-date').value;
  const bookingTime = document.getElementById('booking-time').value;

  alert(`Appointment Booked!\nService: ${serviceType}\nDate: ${bookingDate}\nTime: ${bookingTime}`);
  this.reset();
});


document.getElementById('availability-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const location = document.getElementById('location').value;
  const date = document.getElementById('check-date').value;
  const time = document.getElementById('check-time').value;

  // Simulate availability check
  const isAvailable = Math.random() > 0.5; // Randomly determine availability

  const resultElement = document.getElementById('availability-result');
  if (isAvailable) {
      resultElement.textContent = `Good news! ${location} is available on ${date} at ${time}.`;
  } else {
      resultElement.textContent = `Sorry, ${location} is not available on ${date} at ${time}. Please try another time.`;
  }
});