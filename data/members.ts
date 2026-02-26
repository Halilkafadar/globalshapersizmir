export interface Member {
  slug: string
  name: string
  role: string
  shortBio: string
  longBio: string
  // legacy 'photo' kept for backwards compatibility; prefer 'image' where available
  photo: string 
  image?: string
  // optional top-level social fields (convenience) - existing code may still use `social`
  linkedin?: string
  email?: string
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
  image: "/images/members/devrim-savli.jpg",
    email: "devrim.savli@undp.org",
    linkedin: "https://linkedin.com/in/devrimsavli",
    social: {}
  },
  {
    slug: "serdar-carli",
    name: "Serdar Çarlı",
    role: "Curator",
    shortBio: "Curator",
    longBio: "As the Curator of the Global Shapers Izmir Hub (WEF), he leads the community's commitment to social impact, focusing on sustainable education projects like AI ethics (Mindcraft) and financial literacy, in collaboration with partners such as the UNDP. Leveraging his background as an AI Engineer and Researcher, he is passionate about driving scientific discovery and social good by building responsible and explainable AI systems. He is dedicated to unlocking the potential of young leaders to create innovative solutions that foster a more sustainable and inclusive future in Izmir and beyond.",
    photo: "https://via.placeholder.com/400x400/0052CC/FFFFFF?text=SC",
    image: "/images/members/serdar-carli.jpg",
    email: "a.serdarcarl@gmail.com",
    linkedin: "https://www.linkedin.com/in/aliserdarcarli",
    social: {}
  },
  {
    slug: "halil-kafadar",
    name: "Halil Kafadar",
    role: "Vice Curator",
    shortBio: "Vice Curator",
    longBio: "Vice Curator supporting hub operations.",
    photo: "https://via.placeholder.com/400x400/0052CC/FFFFFF?text=HK",
    image: "/images/members/halil-kafadar.jpg",
    email: "halil.kfdr6@gmail.com",
    linkedin: "https://www.linkedin.com/in/halil-kafadar-426a63221?utm_source...",
    social: {}
  },
  {
    slug: "ceylin-ersoz",
    name: "Ceylin Ersöz",
    role: "Impact Officer",
    shortBio: "Impact Officer",
    longBio: "Impact Officer focusing on projects and measurement.",
    photo: "https://via.placeholder.com/400x400/0052CC/FFFFFF?text=CE",
  image: "/images/members/ceylin-ersoz.jpg",
    email: "ceylinersoz5@gmail.com",
    linkedin: "https://www.linkedin.com/in/ceylin-ers%C3%B6z-269543247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    social: {
      email: "ceylinersoz5@gmail.com",
      linkedin: "https://www.linkedin.com/in/ceylin-ers%C3%B6z-269543247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    }
  },

  // 2. Yönetim Geçmişi (Ex) Pozisyonları
  {
    slug: "sude-kiziltas",
    name: "Sude Kızıltaş",
    role: "Ex Curator",
    shortBio: "Former Curator",
    longBio: "Former Curator of the Hub.",
    photo: "https://via.placeholder.com/400x400/FFAA00/FFFFFF?text=SK",
    image: "/images/members/sude-kiziltas.jpg",
    email: "sudekizilts03@gmail.com",
    linkedin: "http://linkedin.com/in/sudekiziltas",
    social: {}
  },
  {
    slug: "rumeysa-sirin",
    name: "Rümeysa Şirin",
    role: "Ex Impact Officer",
    shortBio: "Former Impact Officer",
    longBio: "Former Impact Officer.",
    photo: "https://via.placeholder.com/400x400/FFAA00/FFFFFF?text=RS",
    image: "/images/members/rumeysa-sirin.jpg",
    email: "rumeysasirinn@gmail.com",
    linkedin: "https://www.linkedin.com/in/rumeysa-sirin?utm_source...",
    social: {}
  },
  {
    slug: "oguzhan-akbas",
    name: "Oğuzhan Akbaş",
    role: "Ex Curator",
    shortBio: "Former Curator",
    longBio: "Entrepreneurship Associate at Arya Women Investment Platform. Holds a Bachelor's in Economics from Dokuz Eylul University and is pursuing an M.S. in Finance Management at Istanbul University. Founder of two startups with internships at TUSIAD and QNB Finansbank. Former curator of Global Shapers Izmir and member of the United Nations Turkey Youth Advisory Board. Expertise in startup analysis, investment management, market research, business development and strategic planning. Passionate about supporting women entrepreneurs and fostering innovation in the entrepreneurial ecosystem.",
    photo: "https://via.placeholder.com/400x400/FFAA00/FFFFFF?text=OA",
    linkedin: "https://www.linkedin.com/in/oguzhanakbas/",
    social: {
      linkedin: "https://www.linkedin.com/in/oguzhanakbas/"
    }
    ,
    image: "/images/members/oguzhan-akbas.jpg"
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
    slug: "anil-daloglu",
    name: "Anıl Daloğlu",
    role: "Ex Impact Officer",
    shortBio: "Former Impact Officer",
    longBio: "Former Impact Officer.",
    photo: "https://via.placeholder.com/400x400/FFAA00/FFFFFF?text=AD",
    image: "/images/members/anil-daloglu.jpg",
    // email missing for Anıl as provided
    linkedin: "https://www.linkedin.com/in/anildaloglu",
    social: {}
  },

  // 3. Shaperlar (Alfabetik olarak)
  {
    slug: "bilal-al-khateeb",
    name: "Bilal Al-Khateeb",
    role: "Shaper",
    shortBio: "Shaper",
    longBio: "Member of the Hub.",
    photo: "/images/members/bilal-al-khateeb.jpg",
    image: "/images/members/bilal-al-khateeb.jpg",
    email: "scorkels@gmail.com",
    linkedin: "https://www.linkedin.com/in/bilal-al-khateeb/",
    social: {
      email: "scorkels@gmail.com",
      linkedin: "https://www.linkedin.com/in/bilal-al-khateeb/"
    }
  },
  {
    slug: "ayse-ada-altinbilek",
    name: "Ayşe Ada Altınbilek",
    role: "Shaper",
    shortBio: "Shaper",
    longBio: "Hello, I'm A. Ada Altınbilek, a fourth-year Business Administration student at Dokuz Eylül University. Alongside my academic studies, I actively engage in social responsibility projects and continuously seek opportunities to develop myself across diverse fields. I'm proud to be a Global Shaper!",
    photo: "https://via.placeholder.com/400x400/36B37E/FFFFFF?text=AA",
    image: "/images/members/ada-altinbilek.jpg",
    email: "adaaltinbilek@gmail.com",
    linkedin: "http://linkedin.com/in/ayseadaaltinbilek",
    social: {
      email: "adaaltinbilek@gmail.com",
      linkedin: "http://linkedin.com/in/ayseadaaltinbilek"
    }
  },
  {
    slug: "sena-ates",
    name: "Sena Ateş",
    role: "Shaper",
    shortBio: "Shaper",
    longBio: "Member of the Hub.",
    photo: "/images/members/sena-ates.jpg",
    image: "/images/members/sena-ates.jpg",
    email: "senaates669@gmail.com",
    linkedin: "https://www.linkedin.com/in/sena-ates1/",
    social: {
      email: "senaates669@gmail.com",
      linkedin: "https://www.linkedin.com/in/sena-ates1/"
    }
  },
  {
    slug: "begum-ece-elcekin",
    name: "Begüm Ece Elçekin",
    role: "Shaper",
    shortBio: "Shaper",
    longBio: "Member of the Hub.",
    photo: "https://via.placeholder.com/400x400/36B37E/FFFFFF?text=BE",
  image: "/images/members/begum-ece-elcekin.jpg",
    email: "Elcekinbegumece@gmail.com",
    linkedin: "https://www.linkedin.com/in/begümeceelçekin?utm_source...",
    social: {}
  },
  {
    slug: "birsu-toprak",
    name: "Birsu Toprak",
    role: "Shaper",
    shortBio: "Shaper",
    longBio: "Member of the Hub.",
    photo: "https://via.placeholder.com/400x400/36B37E/FFFFFF?text=BT",
  image: "/images/members/birsu-toprak.jpg",
    email: "birsutoprak1@gmail.com",
    linkedin: "https://www.linkedin.com/in/birsu-toprak-8a9382288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    social: {
      email: "birsutoprak1@gmail.com",
      linkedin: "https://www.linkedin.com/in/birsu-toprak-8a9382288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    }
  },
  {
    slug: "efe-caliskan",
    name: "Efe Çalışkan",
    role: "Shaper",
    shortBio: "Shaper",
    longBio: "Member of the Hub.",
    photo: "https://via.placeholder.com/400x400/36B37E/FFFFFF?text=EC",
  image: "/images/members/efe-caliskan.jpg",
    email: "efecaliskan090@gmail.com",
    linkedin: "https://www.linkedin.com/in/efe-%C3%A7al%C4%B1%C5%9Fkan-2756a6306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    social: {
      email: "efecaliskan090@gmail.com",
      linkedin: "https://www.linkedin.com/in/efe-%C3%A7al%C4%B1%C5%9Fkan-2756a6306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
  },
  {
    slug: "yadigar-deniz-doksan",
    name: "Yadigar Deniz Doksan",
    role: "Shaper",
    shortBio: "Shaper",
    longBio: "Member of the Hub.",
    photo: "https://via.placeholder.com/400x400/36B37E/FFFFFF?text=YD",
    image: "/images/members/yadigar-deniz-doksan.jpg",
    email: "adadoksan90@gmail.com",
    linkedin: "https://www.linkedin.com/in/deniz-doksan-086322229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    social: {
      email: "adadoksan90@gmail.com",
      linkedin: "https://www.linkedin.com/in/deniz-doksan-086322229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    }
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
    slug: "taskin-akalin",
    name: "Taşkın Akalın",
    role: "Shaper",
    shortBio: "Shaper",
    longBio: "Member of the Hub.",
    photo: "https://via.placeholder.com/400x400/36B37E/FFFFFF?text=TA",
    social: {}
  },
  {
    slug: "ipek-dogusoy",
    name: "İpek Doğusoy",
    role: "Shaper",
    shortBio: "Shaper",
    longBio: "I am studying International Relations, with a minor in Law. I am currently focusing on developing myself in the fields of International Economic Relations, sustainability,energy diplomacy, and diplomacy. I am an effective actor in generating solutions from locol to global in a participatory and inclusive manner.",
    photo: "https://via.placeholder.com/400x400/36B37E/FFFFFF?text=ID",
    image: "/images/members/ipek-dogusoy.jpg",
    email: "dogusoyipek@gmail.com",
    linkedin: "https://www.linkedin.com/in/ipek-do%C4%9Fusoy-699b18271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    social: {
      email: "dogusoyipek@gmail.com",
      linkedin: "https://www.linkedin.com/in/ipek-do%C4%9Fusoy-699b18271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
  },
  {
    slug: "kerem-ergun",
    name: "Kerem Ergün",
    role: "Shaper",
    shortBio: "Shaper",
    longBio: "Member of the Hub.",
    photo: "https://via.placeholder.com/400x400/36B37E/FFFFFF?text=KE",
  image: "/images/members/kerem-ergun.png",
    email: "krmrgn2002@gmail.com",
    linkedin: "https://www.linkedin.com/in/kerem-erg%C3%BCn-588386211/",
    social: {
      email: "krmrgn2002@gmail.com",
      linkedin: "https://www.linkedin.com/in/kerem-erg%C3%BCn-588386211/"
    }
  },
  {
    slug: "talip-furkan-dogan",
    name: "Talip Furkan Doğan",
    role: "Shaper",
    shortBio: "Shaper",
    longBio: "Member of the Hub.",
    photo: "https://via.placeholder.com/400x400/36B37E/FFFFFF?text=TD",
    image: "/images/members/talip-furkan-dogan.jpg",
    email: "talipfurkandogan@gmail.com",
    linkedin: "https://www.linkedin.com/in/tfdogan",
    social: {
      email: "talipfurkandogan@gmail.com",
      linkedin: "https://www.linkedin.com/in/tfdogan"
    }
  },
  {
    slug: "tutku-yildiz",
    name: "Tutku Yıldız",
    role: "Shaper",
    shortBio: "Shaper",
    longBio: "Member of the Hub.",
    photo: "https://via.placeholder.com/400x400/36B37E/FFFFFF?text=TY",
    image: "/images/members/tutku-yildiz.jpg",
    email: "tutku.yildiz8@gmail.com",
    linkedin: "https://www.linkedin.com/in/tutkuyildiz",
    social: {}
  },
  {
    slug: "alperen-kisi",
    name: "Alperen Kişi",
    role: "Shaper",
    shortBio: "Shaper",
    longBio: "As a member of the Global Shapers Izmir Hub while studying at Izmir Democracy University's Faculty of Medicine, I am not limiting myself to clinical knowledge. Instead, I am developing myself within the triangle of technology, social benefit and multidisciplinary leadership.",
    photo: "https://via.placeholder.com/400x400/36B37E/FFFFFF?text=AK",
    image: "/images/members/alperen-kisi.jpg",
    email: "alperenkisi@gmail.com",
    linkedin: "https://www.linkedin.com/in/alperen-ki%C5%9Fi-3504903a8/",
    social: {
      email: "alperenkisi@gmail.com",
      linkedin: "https://www.linkedin.com/in/alperen-ki%C5%9Fi-3504903a8/"
    }
  }
]
