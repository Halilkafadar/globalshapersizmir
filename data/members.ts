export interface Member {
  slug: string
  name: string
  role: string
  shortBio: string
  longBio: string
  photo: string
  social: {
    email?: string
    linkedin?: string
    twitter?: string
    website?: string
  }
}

export const members: Member[] = [
  // 1. Yönetim ve Kritik Pozisyonlar
  {
    slug: "devrim-savli",
    name: "Devrim Savlı",
    role: "Founder Curator",
    shortBio: "Founder Curator",
    longBio: "Founder Curator of Global Shapers Izmir Hub.",
    photo: "https://via.placeholder.com/400x400/0052CC/FFFFFF?text=DS",
    social: {}
  },
  {
    slug: "serdar-carli",
    name: "Serdar Çarlı",
    role: "Curator",
    shortBio: "Curator",
    longBio: "Curator of the Hub.",
    photo: "https://via.placeholder.com/400x400/0052CC/FFFFFF?text=SC",
    social: {}
  },
  {
    slug: "taskin-akalin",
    name: "Taşkın Akalın",
    role: "Vice Curator",
    shortBio: "Vice Curator",
    longBio: "Vice Curator supporting hub operations.",
    photo: "https://via.placeholder.com/400x400/0052CC/FFFFFF?text=TA",
    social: {}
  },
  {
    slug: "ceylin-ersoz",
    name: "Ceylin Ersöz",
    role: "Impact Officer",
    shortBio: "Impact Officer",
    longBio: "Impact Officer focusing on projects and measurement.",
    photo: "https://via.placeholder.com/400x400/0052CC/FFFFFF?text=CE",
    social: {}
  },

  // 2. Yönetim Geçmişi (Ex) Pozisyonları
  {
    slug: "sude-kiziltas",
    name: "Sude Kızıltaş",
    role: "Ex Curator",
    shortBio: "Former Curator",
    longBio: "Former Curator of the Hub.",
    photo: "https://via.placeholder.com/400x400/FFAA00/FFFFFF?text=SK",
    social: {}
  },
  {
    slug: "rumeysa-sirin",
    name: "Rümeysa Şirin",
    role: "Ex Impact Officer",
    shortBio: "Former Impact Officer",
    longBio: "Former Impact Officer.",
    photo: "https://via.placeholder.com/400x400/FFAA00/FFFFFF?text=RS",
    social: {}
  },
  {
    slug: "oguzhan-akbas",
    name: "Oğuzhan Akbaş",
    role: "Ex Curator",
    shortBio: "Former Curator",
    longBio: "Former Curator of the Hub.",
    photo: "https://via.placeholder.com/400x400/FFAA00/FFFFFF?text=OA",
    social: {}
  },
  {
    slug: "erce-bilgen",
    name: "Erce Bilgen",
    role: "Ex Vice Curator",
    shortBio: "Former Vice Curator",
    longBio: "Former Vice Curator.",
    photo: "https://via.placeholder.com/400x400/FFAA00/FFFFFF?text=EB",
    social: {}
  },
  {
    slug: "anil-dogusoy",
    name: "Anıl Doğusoy",
    role: "Ex Impact Officer",
    shortBio: "Former Impact Officer",
    longBio: "Former Impact Officer.",
    photo: "https://via.placeholder.com/400x400/FFAA00/FFFFFF?text=AD",
    social: {}
  },

  // 3. Shaperlar (Alfabetik olarak)
  {
    slug: "begum-ece-elcekin",
    name: "Begüm Ece Elçekin",
    role: "Shaper",
    shortBio: "Shaper",
    longBio: "Member of the Hub.",
    photo: "https://via.placeholder.com/400x400/36B37E/FFFFFF?text=BE",
    social: {}
  },
  {
    slug: "beril-guvenc",
    name: "Beril Güvenç",
    role: "Shaper",
    shortBio: "Shaper",
    longBio: "Member of the Hub.",
    photo: "https://via.placeholder.com/400x400/36B37E/FFFFFF?text=BG",
    social: {}
  },
  {
    slug: "birsu-toprak",
    name: "Birsu Toprak",
    role: "Shaper",
    shortBio: "Shaper",
    longBio: "Member of the Hub.",
    photo: "https://via.placeholder.com/400x400/36B37E/FFFFFF?text=BT",
    social: {}
  },
  {
    slug: "efe-caliskan",
    name: "Efe Çalışkan",
    role: "Shaper",
    shortBio: "Shaper",
    longBio: "Member of the Hub.",
    photo: "https://via.placeholder.com/400x400/36B37E/FFFFFF?text=EC",
    social: {}
  },
  {
    slug: "elbruz-gumus",
    name: "Elbruz Gümüş",
    role: "Shaper",
    shortBio: "Shaper",
    longBio: "Member of the Hub.",
    photo: "https://via.placeholder.com/400x400/36B37E/FFFFFF?text=EG",
    social: {}
  },
  {
    slug: "gamze-inanli",
    name: "Gamze İnanlı",
    role: "Shaper",
    shortBio: "Shaper",
    longBio: "Member of the Hub.",
    photo: "https://via.placeholder.com/400x400/36B37E/FFFFFF?text=GI",
    social: {}
  },
  {
    slug: "gizem-donmez",
    name: "Gizem Dönmez",
    role: "Shaper",
    shortBio: "Shaper",
    longBio: "Member of the Hub.",
    photo: "https://via.placeholder.com/400x400/36B37E/FFFFFF?text=GD",
    social: {}
  },
  {
    slug: "halil-kafadar",
    name: "Halil Kafadar",
    role: "Shaper",
    shortBio: "Shaper",
    longBio: "Member of the Hub.",
    photo: "https://via.placeholder.com/400x400/36B37E/FFFFFF?text=HK",
    social: {}
  },
  {
    slug: "ipek-dogusoy",
    name: "İpek Doğusoy",
    role: "Shaper",
    shortBio: "Shaper",
    longBio: "Member of the Hub.",
    photo: "https://via.placeholder.com/400x400/36B37E/FFFFFF?text=ID",
    social: {}
  },
  {
    slug: "kayra-leventoglu",
    name: "Kayra Leventoğlu",
    role: "Shaper",
    shortBio: "Shaper",
    longBio: "Member of the Hub.",
    photo: "https://via.placeholder.com/400x400/36B37E/FFFFFF?text=KL",
    social: {}
  },
  {
    slug: "kerem-ergun",
    name: "Kerem Ergün",
    role: "Shaper",
    shortBio: "Shaper",
    longBio: "Member of the Hub.",
    photo: "https://via.placeholder.com/400x400/36B37E/FFFFFF?text=KE",
    social: {}
  },
  {
    slug: "merve-basut",
    name: "Merve Basut",
    role: "Shaper",
    shortBio: "Shaper",
    longBio: "Member of the Hub.",
    photo: "https://via.placeholder.com/400x400/36B37E/FFFFFF?text=MB",
    social: {}
  },
  {
    slug: "ozgun-muhim",
    name: "Özgün Mühim",
    role: "Shaper",
    shortBio: "Shaper",
    longBio: "Member of the Hub.",
    photo: "https://via.placeholder.com/400x400/36B37E/FFFFFF?text=OM",
    social: {}
  },
  {
    slug: "talip-furkan-dogan",
    name: "Talip Furkan Doğan",
    role: "Shaper",
    shortBio: "Shaper",
    longBio: "Member of the Hub.",
    photo: "https://via.placeholder.com/400x400/36B37E/FFFFFF?text=TD",
    social: {}
  },
  {
    slug: "tutku-yildiz",
    name: "Tutku Yıldız",
    role: "Shaper",
    shortBio: "Shaper",
    longBio: "Member of the Hub.",
    photo: "https://via.placeholder.com/400x400/36B37E/FFFFFF?text=TY",
    social: {}
  },
  {
    slug: "zehra-kaya",
    name: "Zehra Kaya",
    role: "Shaper",
    shortBio: "Shaper",
    longBio: "Member of the Hub.",
    photo: "https://via.placeholder.com/400x400/36B37E/FFFFFF?text=ZK",
    social: {}
  }
]
