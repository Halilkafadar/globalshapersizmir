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
  {
    slug: "ayse-yilmaz",
    name: "Ayşe Yılmaz",
    role: "Hub Curator",
    shortBio: "Social entrepreneurship and youth programs expert",
    longBio: "She has been working in the field of social impact with over 10 years of experience. As one of the founding members of Global Shapers İzmir Hub, she supports young people in creating solutions to social problems.",
    photo: "https://via.placeholder.com/400x400/0052CC/FFFFFF?text=AY",
    social: {
      email: "ayse@globalshapers.org",
      linkedin: "https://linkedin.com/in/ayseyilmaz",
      twitter: "https://twitter.com/aysey"
    }
  },
  {
    slug: "mehmet-demir",
    name: "Mehmet Demir",
    role: "Impact Lead",
    shortBio: "Developing social impact projects in technology and education",
    longBio: "He has expertise in software engineering and educational technologies. He leads the technical leadership of Mindcraft and other educational projects.",
    photo: "https://via.placeholder.com/400x400/FF5630/FFFFFF?text=MD",
    social: {
      email: "mehmet@globalshapers.org",
      linkedin: "https://linkedin.com/in/mehmetdemir"
    }
  },
  {
    slug: "zeynep-kaya",
    name: "Zeynep Kaya",
    role: "Community Manager",
    shortBio: "Community management and event organization",
    longBio: "She is experienced in youth activities and community building. She is responsible for planning Hub events and strengthening member engagement.",
    photo: "https://via.placeholder.com/400x400/36B37E/FFFFFF?text=ZK",
    social: {
      email: "zeynep@globalshapers.org",
      linkedin: "https://linkedin.com/in/zeynepkaya",
      website: "https://zeynepkaya.com"
    }
  },
  {
    slug: "can-ozturk",
    name: "Can Öztürk",
    role: "Shaper",
    shortBio: "Financial literacy and entrepreneurship",
    longBio: "He launched the Financial Literacy project to transfer his experience in the finance sector to young people. He is actively involved in the entrepreneurship ecosystem.",
    photo: "https://via.placeholder.com/400x400/6554C0/FFFFFF?text=CO",
    social: {
      email: "can@globalshapers.org",
      linkedin: "https://linkedin.com/in/canozturk"
    }
  }
]
