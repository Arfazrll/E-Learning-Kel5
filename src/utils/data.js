export const teamMembers = [
    {
      id: 1,
      name: "Nama Anggota 1",
      role: "Frontend Developer",
      nim: "123456789",
      email: "anggota1@example.com",
      phone: "+62 812-3456-7890",
      address: "Jakarta, Indonesia",
      about: "Mahasiswa Teknik Informatika dengan keahlian di bidang pengembangan frontend dan UI/UX design.",
      social: {
        instagram: "https://instagram.com/anggota1",
        linkedin: "https://linkedin.com/in/anggota1",
        github: "https://github.com/anggota1",
      },
      image: "/images/team/member1.jpg"
    },
    {
      id: 2,
      name: "Nama Anggota 2",
      role: "UI/UX Designer",
      nim: "234567890",
      email: "anggota2@example.com",
      phone: "+62 812-3456-7891",
      address: "Bandung, Indonesia",
      about: "Mahasiswa Desain Komunikasi Visual dengan fokus pada user experience dan interface design.",
      social: {
        instagram: "https://instagram.com/anggota2",
        linkedin: "https://linkedin.com/in/anggota2",
        github: "https://github.com/anggota2",
      },
      image: "/images/team/member2.jpg"
    },
    {
      id: 3,
      name: "Nama Anggota 3",
      role: "Backend Developer",
      nim: "345678901",
      email: "anggota3@example.com",
      phone: "+62 812-3456-7892",
      address: "Surabaya, Indonesia",
      about: "Mahasiswa Ilmu Komputer dengan spesialisasi di backend development dan database management.",
      social: {
        instagram: "https://instagram.com/anggota3",
        linkedin: "https://linkedin.com/in/anggota3",
        github: "https://github.com/anggota3",
      },
      image: "/images/team/member3.jpg"
    },
    {
      id: 4,
      name: "Nama Anggota 4",
      role: "Content Creator",
      nim: "456789012",
      email: "anggota4@example.com",
      phone: "+62 812-3456-7893",
      address: "Yogyakarta, Indonesia",
      about: "Mahasiswa Pendidikan dengan fokus pada pengembangan konten pembelajaran digital dan media edukasi.",
      social: {
        instagram: "https://instagram.com/anggota4",
        linkedin: "https://linkedin.com/in/anggota4",
        github: "https://github.com/anggota4",
      },
      image: "/images/team/member4.jpg"
    }
  ];
  
  export const utbkSubjects = [
    {
      id: 1,
      name: "Matematika",
      icon: "FiActivity",
      description: "Materi matematika untuk UTBK mencakup aljabar, geometri, statistika, dan kalkulus dasar.",
      topics: ["Aljabar", "Geometri", "Statistika", "Kalkulus Dasar"],
      color: "blue"
    },
    {
      id: 2,
      name: "Bahasa Indonesia",
      icon: "FiBook",
      description: "Materi bahasa Indonesia untuk UTBK mencakup pemahaman bacaan, tata bahasa, dan penulisan.",
      topics: ["Pemahaman Bacaan", "Tata Bahasa", "Penulisan", "Sastra"],
      color: "red"
    },
    {
      id: 3,
      name: "Bahasa Inggris",
      icon: "FiGlobe",
      description: "Materi bahasa Inggris untuk UTBK mencakup reading comprehension, grammar, dan vocabulary.",
      topics: ["Reading Comprehension", "Grammar", "Vocabulary", "Structure"],
      color: "green"
    },
    {
      id: 4,
      name: "TPS (Tes Potensi Skolastik)",
      icon: "FiBrain",
      description: "Materi TPS untuk UTBK mencakup penalaran umum, kuantitatif, analitis, dan kemampuan baca.",
      topics: ["Penalaran Umum", "Penalaran Kuantitatif", "Penalaran Analitis", "Kemampuan Memahami Bacaan"],
      color: "purple"
    }
  ];
  
  export const testimonials = [
    {
      id: 1,
      name: "Ahmad Farhan",
      avatar: "",
      university: "Universitas Indonesia",
      text: "Berkat UTBK Prep, saya berhasil masuk jurusan Teknik Informatika UI. Materinya lengkap dan mudah dipahami."
    },
    {
      id: 2,
      name: "Dina Amelia",
      avatar: "",
      university: "Institut Teknologi Bandung",
      text: "Saya sangat terbantu dengan video pembelajaran dan forum diskusi yang interaktif. Kini saya kuliah di ITB!"
    },
    {
      id: 3,
      name: "Budi Santoso",
      avatar: "",
      university: "Universitas Gadjah Mada",
      text: "Fitur latihan soal dengan pembahasan detail membuat persiapan UTBK saya lebih efektif. Terima kasih UTBK Prep!"
    }
  ];
  
  export const faqItems = [
    {
      id: 1,
      question: "Apa itu UTBK Prep?",
      answer: "UTBK Prep adalah platform e-learning yang dirancang khusus untuk membantu siswa SMA mempersiapkan diri menghadapi UTBK (Ujian Tulis Berbasis Komputer) dengan materi pembelajaran yang komprehensif dan interaktif."
    },
    {
      id: 2,
      question: "Bagaimana cara mendaftar?",
      answer: "Untuk mendaftar, klik tombol 'Daftar Sekarang' di halaman beranda, isi formulir pendaftaran dengan data diri Anda, dan ikuti petunjuk selanjutnya untuk mengaktifkan akun Anda."
    },
    {
      id: 3,
      question: "Apakah semua materi dapat diakses secara gratis?",
      answer: "UTBK Prep menyediakan beberapa materi dasar yang dapat diakses secara gratis. Untuk akses ke semua materi, latihan soal, dan fitur premium lainnya, Anda perlu berlangganan paket premium kami."
    },
    {
      id: 4,
      question: "Bagaimana cara mengakses kelas online?",
      answer: "Setelah login, kunjungi menu 'Kelas Online' untuk melihat semua kelas yang tersedia. Anda dapat mengklik pada kelas yang ingin diikuti untuk mulai belajar."
    },
    {
      id: 5,
      question: "Apakah ada forum diskusi untuk tanya jawab?",
      answer: "Ya, UTBK Prep menyediakan forum diskusi di mana Anda dapat bertanya, berdiskusi, dan mendapatkan jawaban dari pengajar dan sesama siswa."
    }
  ];
  
  export const courses = [
    {
      id: 1,
      title: "Matematika Dasar UTBK",
      instructor: "Dr. Budi Matematika",
      level: "Dasar",
      duration: "10 minggu",
      lessons: 24,
      students: 1250,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      category: "Matematika"
    },
    {
      id: 2,
      title: "Bahasa Indonesia untuk UTBK",
      instructor: "Prof. Sinta Bahasa",
      level: "Menengah",
      duration: "8 minggu",
      lessons: 20,
      students: 980,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      category: "Bahasa Indonesia"
    },
    {
      id: 3,
      title: "Fisika UTBK Komprehensif",
      instructor: "Dr. Andi Fisika",
      level: "Lanjutan",
      duration: "12 minggu",
      lessons: 30,
      students: 850,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      category: "Fisika"
    },
    {
      id: 4,
      title: "Penalaran TPS UTBK",
      instructor: "Dra. Maya Logika",
      level: "Dasar",
      duration: "6 minggu",
      lessons: 18,
      students: 1500,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      category: "TPS"
    }
  ];