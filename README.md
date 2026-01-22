1. deskripsi
Project ini dibuat sebagai bagian dari Test Case Front-End Developer di Nusantara Data Indonesia.
Aplikasi ini menampilkan halaman login responsif, melakukan integrasi API login, serta dashboard dengan visualisasi data berbentuk chart dari data JSON.
2. Teknologi yang Digunakan
- React.js (Vite)
- Tailwind CSS
- Recharts (visualisasi data)
- Fetch API (integrasi API login)
- React Router DOM

3. fitur utama
- Halaman Login responsif (mobile & desktop)
- Integrasi API login sesuai endpoint yang diberikan
- Validasi login & handling error response
- Dashboard dengan chart:
- Bar Chart (Users per Month)
-Pie Chart (Transaction Category)

4. cara menjalankan project:
- git clone https://github.com/bileam/ndi-frontend-test.git
- cd nama-repo
- npm install
- npm run dev ->jalankan project

4. struktur folder
   src/
├── assets/            # Gambar, logo, dan aset statis
├── components/
│   ├── charts/        # Komponen chart (Bar, Pie)
│   ├── Dashboard/     # Komponen dashboard
│   ├── form/          # Form login
│   │   └── LoginForm.jsx
│   └── header/
│       └── Navbar.jsx
├── data/
│   └── dashboardData.js   # Data JSON untuk chart
├── pages/
│   ├── Login.jsx
│   └── Dashboard.jsx
├── services/
│   └── authService.js     # Service login API
├── utils/
│   └── api/
│       └── axios.js       # Wrapper fetch / API helper
├── App.jsx
├── main.jsx
└── index.css

