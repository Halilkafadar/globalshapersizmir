import Head from 'next/head'
import { useState } from 'react'
import Navbar from '@/components/mindcraft/layout/Navbar'
import Footer from '@/components/mindcraft/layout/Footer'
import { modulesData } from '@/utils/mindcraft/modulesData'
import { motion } from 'framer-motion'
import { 
  Palette, 
  Sparkles, 
  Eye, 
  Heart, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  Code,
  Brain
} from 'lucide-react'

export default function AIArtCreationPage() {
  const [currentSection, setCurrentSection] = useState(0)
  const [reflectionText, setReflectionText] = useState('')

  const module = modulesData.find(m => m.id === 'ai-art')
  
  if (!module) return null

  const learningContent = [
    {
      title: "AI Sanat Araçları",
      subtitle: "Dijital Yaratıcılığın Araçları",
      description: "Midjourney, DALL-E ve Stable Diffusion gibi AI araçlarını keşfetme",
      keyPoints: ["Midjourney & Discord", "DALL-E & OpenAI", "Stable Diffusion"],
      interactive: "Araç Karşılaştırma Atölyesi",
      icon: Sparkles,
      content: "AI sanat araçları, hayal gücünüzü sınırsız tuvale dönüştürür. Midjourney ile epik kompozisyonlar, DALL-E ile detaylı karakterler, Stable Diffusion ile deneysel sanatlar yaratabilirsiniz. Her araç farklı güçlerde - hangisi sizin sanatsal vizyonunuza uygun?"
    },
    {
      title: "Prompt Sanatı",
      subtitle: "Kelimelerle Resim Yapma",
      description: "Etkili promptlar yazarak AI'dan istediğiniz sanat eserini çıkarma",
      keyPoints: ["Ana Konu Belirleme", "Stil Tanımlama", "Detay Kontrolü"],
      interactive: "Prompt Laboratuvarı",
      icon: Palette,
      content: "Prompt yazımı sanattır! 'Güzel manzara' yerine 'Gün batımında mor lavanta tarlaları, Van Gogh tarzında fırça darbeleri, sıcak altın ışığı' demek büyük fark yaratır. Her kelime, AI'ın fırçasını yönlendirir."
    },
    {
      title: "Stil Keşfi",
      subtitle: "Sanat Tarihi ile Buluşma",
      description: "Çeşitli sanat stillerini AI ile yeniden yorumlama ve yaratma",
      keyPoints: ["Klasik Stiller", "Modern Sanat", "Hibrit Yaklaşımlar"],
      interactive: "Stil Mikseri",
      icon: Eye,
      content: "Barok'un ihtişamını anime karakterlerinizle birleştirin! Empresyonist fırça darbelerini cyberpunk temalarla harmanlayın. AI size Van Gogh'un fırçasını, Picasso'nun perspektifini, Banksy'nin isyanını sunuyor. Hangi stilleri keşfedeceksiniz?"
    },
    {
      title: "AI Sanat Etiği",
      subtitle: "Yaratıcılık ve Sorumluluk",
      description: "Telif hakları, orijinallik ve AI sanatının etik boyutları",
      keyPoints: ["Telif Hakları", "Sanatçı Kredisi", "Orijinallik Tanımı"],
      interactive: "Etik Senaryo Analizi",
      icon: Heart,
      content: "AI sanat yaratırken sorumlu olmalıyız. Başka sanatçıların çalışmalarını taklit etmek mi yoksa ilham almak mı? AI'ın ürettiği eser kimin eseri? Bu sorular sadece yasal değil, aynı zamanda sanatsal bütünlüğümüzü de etkiliyor."
    },
    {
      title: "Dijital Portfolyo",
      subtitle: "Eserlerinizi Dünyaya Sunma",
      description: "AI sanat eserlerinizi organize etme ve paylaşma stratejileri",
      keyPoints: ["Portfolyo Düzenleme", "Sosyal Medya Stratejisi", "Sanat Topluluğu"],
      interactive: "Portfolyo Oluşturucu",
      icon: Users,
      content: "Sanatınızı dünyayla paylaşma zamanı! Instagram'da hashtag stratejileri, DeviantArt'ta topluluk etkileşimi, kendi web sitenizde profesyonel sunum. AI sanatçıları olarak büyüyen bir topluluğun parçası olun ve kendi benzersiz sesinizi bulun."
    }
  ]

  const artChallenges = [
    {
      title: "Stil Karışım Meydan Okuması",
      scenario: "İki farklı sanat stilini birleştirerek yeni bir eser yaratmak istiyorsunuz. En etkili yaklaşım hangisi?",
      options: [
        "Sadece bir stile odaklanmak",
        "'Van Gogh tarzında Monet'nin su zambakları' gibi net stil kombinasyonu belirtmek",
        "Hiç stil belirtmemek, AI'ın karar vermesini beklemek",
        "Çok fazla stil karıştırarak karmaşık promptlar yazmak"
      ],
      correct: 1,
      explanation: "Net stil kombinasyonları AI'a net yönlendirme verir. 'Van Gogh'un fırça darbelerini Monet'nin renk paletinde' gibi spesifik talimatlar en etkili sonuçları üretir."
    },
    {
      title: "Karakter Tasarımı Dilemması",
      scenario: "Orijinal bir karakter tasarlamak istiyorsunuz. Hangi prompt yaklaşımı daha yaratıcı sonuçlar verir?",
      options: [
        "Sadece 'güzel karakter' yazmak",
        "Var olan popüler karakterleri kopyalamak",
        "'Steampunk mühendis kedi, goggles, bronz dişliler, detaylı portre' gibi özgün detaylar",
        "Çok uzun ve karmaşık açıklamalar yapmak"
      ],
      correct: 2,
      explanation: "Özgün detaylar ve yaratıcı kombinasyonlar en orijinal karakterleri yaratır. Spesifik ama makul detaylar AI'ın yaratıcılığını doğru yöne kanalize eder."
    }
  ]

  return (
    <>
      <Head>
        <title>AI Art Creation: Digital Creativity Unleashed | Mindcraft</title>
        <meta name="description" content="Create amazing AI-powered artworks using advanced prompt engineering and digital art techniques. Explore creativity in the age of artificial intelligence." />
        <meta name="keywords" content="AI art, digital art, Midjourney, DALL-E, Stable Diffusion, prompt engineering, creative technology, digital creativity" />
        <meta property="og:title" content="AI Art Creation: Digital Creativity Unleashed" />
        <meta property="og:description" content="Master AI-powered art creation and unlock unlimited creative potential" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              {/* Palette Icon */}
              <div className="relative mx-auto mb-8 w-32 h-32">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full animate-pulse"></div>
                <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <Palette className="w-16 h-16 text-pink-600" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full blur-xl"></div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Art Creation
                <span className="block text-3xl md:text-4xl bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mt-4">
                  Digital Creativity Unleashed
                </span>
              </h1>

              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/30 mb-8">
                <h2 className="text-2xl md:text-3xl text-pink-300 mb-4 font-semibold">
                  Klaus Schwab's Vision
                </h2>
                <p className="text-xl text-gray-300 italic">
                  "AI doesn't replace human creativity; it amplifies it. The future belongs to those who can blend human imagination with artificial intelligence"
                </p>
              </div>

              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {module.description}
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            >
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-pink-500/30">
                <div className="text-3xl font-bold text-pink-400">5</div>
                <div className="text-gray-300">Creative Modules</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30">
                <div className="text-3xl font-bold text-purple-400">Unlimited</div>
                <div className="text-gray-300">Artistic Potential</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-indigo-500/30">
                <div className="text-3xl font-bold text-indigo-400">Hands-on</div>
                <div className="text-gray-300">Art Creation</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Learning Sections */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Your Journey to <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">AI Art Mastery</span>
            </h2>

            <div className="space-y-12">
              {learningContent.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                          <section.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                          <p className="text-pink-300">{section.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {section.content}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        {section.keyPoints.map((point, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{point}</span>
                          </div>
                        ))}
                      </div>

                      <button className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-pink-700 hover:to-purple-700 transition-all">
                        <Play className="w-5 h-5" />
                        {section.interactive}
                      </button>
                    </div>

                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-2xl p-8 border border-pink-500/30">
                        <div className="text-center">
                          <section.icon className="w-24 h-24 text-pink-400 mx-auto mb-4" />
                          <h4 className="text-xl font-semibold text-white mb-2">Creative Learning</h4>
                          <p className="text-gray-300">{section.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Art Studio */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  AI Art Studio
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Test your creative skills with real-world art challenges
              </p>
            </div>

            <div className="space-y-8">
              {artChallenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/30"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{challenge.title}</h3>
                  <p className="text-gray-300 text-lg mb-6">{challenge.scenario}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {challenge.options.map((option, i) => (
                      <button
                        key={i}
                        className="text-left p-4 bg-slate-700/50 hover:bg-pink-600/30 border border-slate-600 hover:border-pink-500 rounded-xl transition-all"
                      >
                        <span className="text-white">{option}</span>
                      </button>
                    ))}
                  </div>

                  <div className="bg-pink-900/30 rounded-xl p-4 border border-pink-500/50">
                    <h4 className="text-pink-300 font-semibold mb-2">Creative Insight</h4>
                    <p className="text-gray-300 text-sm">{challenge.explanation}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Personal Reflection */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-pink-800/30 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/30"
            >
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                My AI Art Journey
              </h2>
              <p className="text-gray-300 text-lg mb-8 text-center">
                How has AI art creation changed your perspective on creativity and artistic expression?
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Before: How I used to think about art creation
                  </label>
                  <textarea
                    placeholder="Art was something only traditionally trained artists could do..."
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    After: My new understanding of AI-powered creativity
                  </label>
                  <textarea
                    value={reflectionText}
                    onChange={(e) => setReflectionText(e.target.value)}
                    placeholder="Now I realize that AI art is about collaboration between human imagination and..."
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                    rows={3}
                  />
                </div>

                <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-pink-700 hover:to-purple-700 transition-all">
                  Save My Creative Journey
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Continue Your <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Mindcraft Journey</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                You've unlocked creative potential with AI! Ready to explore more frontiers?
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.a
                  href="/projects/mindcraft"
                  className="group bg-gradient-to-br from-pink-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/30 hover:border-pink-400/50 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-white">More Modules</h3>
                      <p className="text-pink-300">Scientific Research & Innovation</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-left group-hover:text-white transition-colors">
                    Continue exploring AI applications in science and innovation
                  </p>
                  <ArrowRight className="w-5 h-5 text-pink-400 ml-auto mt-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="/projects/mindcraft/coding-automation"
                  className="group bg-gradient-to-br from-slate-600/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-8 border border-slate-500/30 hover:border-slate-400/50 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-white">Previous Module</h3>
                      <p className="text-slate-300">Coding & Automation</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-left group-hover:text-white transition-colors">
                    Revisit programming and automation fundamentals
                  </p>
                  <ArrowRight className="w-5 h-5 text-slate-400 ml-auto mt-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>

              <div className="mt-8">
                <motion.a
                  href="/projects/mindcraft"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-pink-700 hover:to-purple-700 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Brain className="w-5 h-5" />
                  Back to Mindcraft Hub
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}