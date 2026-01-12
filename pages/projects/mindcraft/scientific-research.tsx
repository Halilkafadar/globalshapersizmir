import Head from 'next/head'
import { useState } from 'react'
import Navbar from '@/components/mindcraft/layout/Navbar'
import Footer from '@/components/mindcraft/layout/Footer'
import { modulesData } from '@/utils/mindcraft/modulesData'
import { motion } from 'framer-motion'
import { 
  Microscope, 
  Search, 
  BookOpen, 
  PieChart, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  Code,
  Brain,
  Database,
  Target,
  Lightbulb,
  Users
} from 'lucide-react'

export default function ScientificResearchPage() {
  const [currentSection, setCurrentSection] = useState(0)
  const [reflectionText, setReflectionText] = useState('')

  const module = modulesData.find(m => m.id === 'scientific-research')
  
  if (!module) return null

  const learningContent = [
    {
      title: "Bilimsel Araştırma Temelleri",
      description: "Bilimsel yöntemin temellerini öğrenin ve araştırma sürecinin her adımını keşfedin.",
      icon: Microscope,
      color: "from-indigo-500 to-blue-600",
      content: {
        theory: {
          title: "Teorik Bilgi",
          points: [
            "Bilimsel araştırma nedir ve neden önemlidir?",
            "Bilimsel yöntemin 7 temel adımı",
            "Temel vs uygulamalı araştırma türleri",
            "Nitel vs nicel araştırma yaklaşımları",
            "Araştırma etiği ve dürüstlük ilkeleri"
          ]
        },
        practice: {
          title: "Uygulamalı Çalışma",
          points: [
            "Günlük yaşamdan bilimsel sorular türetme",
            "Hipotez kurma ve test etme egzersizi",
            "Araştırma türü seçimi simülasyonu",
            "Etik dilemmalar üzerinde çalışma"
          ]
        },
        tools: [
          "Araştırma süreci akış şeması",
          "Hipotez kurma şablonu",
          "Etik kontrol listesi",
          "Araştırma türü seçim rehberi"
        ]
      }
    },
    {
      title: "Literatür Taraması ve Araştırma Soruları",
      description: "Sistematik literatür tarama yapın ve güçlü araştırma soruları geliştirin.",
      icon: BookOpen,
      color: "from-purple-500 to-indigo-600",
      content: {
        theory: {
          title: "Teorik Bilgi",
          points: [
            "Sistematik literatür tarama stratejileri",
            "Akademik veritabanları ve arama teknikleri",
            "Araştırma boşluklarını belirleme yöntemleri",
            "PICO/SPIDER formatında soru formülasyonu",
            "Kaynak değerlendirme ve kalite kriterleri"
          ]
        },
        practice: {
          title: "Uygulamalı Çalışma",
          points: [
            "Google Scholar ve TR Dizin kullanım workshop'u",
            "Anahtar kelime optimizasyonu egzersizi",
            "Araştırma sorusu geliştirme atölyesi",
            "Kaynak güvenilirlik analizi",
            "Sistematik tarama planı oluşturma"
          ]
        },
        tools: [
          "Arama stratejisi şablonu",
          "Kaynak değerlendirme matrisi",
          "Literatür tarama kontrol listesi",
          "Referans yönetim sistemleri rehberi"
        ]
      }
    },
    {
      title: "Araştırma Tasarımı ve Metodoloji",
      description: "Araştırma amacınıza en uygun tasarım ve metodoloji seçimini öğrenin.",
      icon: Target,
      color: "from-blue-500 to-cyan-600",
      content: {
        theory: {
          title: "Teorik Bilgi",
          points: [
            "Deneysel tasarım prensipleri ve kontrol grupları",
            "Gözlemsel çalışmalar ve anket araştırmaları",
            "Karma yöntem araştırma yaklaşımları",
            "Vaka çalışması metodolojisi",
            "Metodoloji seçim kriterleri"
          ]
        },
        practice: {
          title: "Uygulamalı Çalışma",
          points: [
            "Araştırma tasarımı simülatörü",
            "Metodoloji seçim karar ağacı",
            "Deneysel tasarım atölyesi",
            "Geçerlilik ve güvenilirlik analizi",
            "Pilot çalışma planlaması"
          ]
        },
        tools: [
          "Araştırma tasarımı şablonları",
          "Metodoloji karşılaştırma tablosu",
          "Geçerlilik kontrol listesi",
          "Pilot çalışma planlama aracı"
        ]
      }
    },
    {
      title: "Veri Toplama ve Analiz",
      description: "Etkili veri toplama teknikleri ve istatistiksel analiz yöntemlerini keşfedin.",
      icon: Database,
      color: "from-green-500 to-blue-600",
      content: {
        theory: {
          title: "Teorik Bilgi",
          points: [
            "Birincil vs ikincil veri kaynakları",
            "Örnekleme yöntemleri ve örnek büyüklüğü hesaplama",
            "Anket, mülakat ve gözlem teknikleri",
            "Betimsel ve çıkarımsal istatistik",
            "Yaygın istatistiksel testler ve kullanım alanları"
          ]
        },
        practice: {
          title: "Uygulamalı Çalışma",
          points: [
            "SPSS/R ile temel istatistik analizi",
            "Anket tasarlama atölyesi",
            "Mülakat tekniklerini uygulama",
            "Örnek büyüklüğü hesaplama egzersizi",
            "Veri görselleştirme teknikleri"
          ]
        },
        tools: [
          "İstatistik analiz rehberleri",
          "Anket tasarlama şablonları",
          "Mülakat soru banksı",
          "Veri analizi checklist'i"
        ]
      }
    },
    {
      title: "Araştırma Yazımı ve İletişimi",
      description: "Araştırma sonuçlarınızı etkili şekilde yazın ve paylaşın.",
      icon: PieChart,
      color: "from-purple-500 to-pink-600",
      content: {
        theory: {
          title: "Teorik Bilgi",
          points: [
            "Bilimsel makale yapısı (IMRaD formatı)",
            "Etkili özet ve giriş yazma teknikleri",
            "Sonuçları objektif şekilde sunma",
            "Görsel öğelerin etkili kullanımı",
            "Hakemlik süreci ve yayın etiği"
          ]
        },
        practice: {
          title: "Uygulamalı Çalışma",
          points: [
            "Makale yazım atölyesi",
            "Özet yazma egzersizi",
            "Grafik ve tablo oluşturma",
            "Sunum hazırlama teknikleri",
            "Akran değerlendirmesi simülasyonu"
          ]
        },
        tools: [
          "Makale yazım şablonları",
          "Özet yazım rehberi",
          "Görsel tasarım araçları",
          "Sunum şablonları"
        ]
      }
    }
  ];

  const researchActivities = [
    {
      title: "Araştırma Laboratuvarı",
      description: "Sanal laboratuvarda araştırma simülasyonları yapın",
      icon: Microscope,
      difficulty: "Orta"
    },
    {
      title: "Literatür Dedektifi",
      description: "Kaynak güvenilirliğini test eden interaktif oyun",
      icon: Search,
      difficulty: "Kolay"
    },
    {
      title: "İstatistik Ustası",
      description: "Gerçek verilerle analiz pratiği yapın",
      icon: PieChart,
      difficulty: "Zor"
    },
    {
      title: "Etik Karar Vericisi",
      description: "Araştırma etiği senaryolarını çözün",
      icon: Shield,
      difficulty: "Orta"
    }
  ];

  return (
    <>
      <Head>
        <title>Scientific Research Methods - Mindcraft</title>
        <meta name="description" content="Bilimsel araştırma metodolojilerini öğrenin ve araştırma becerilerinizi geliştirin." />
      </Head>
      
      <Navbar />
      
      <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-3xl flex items-center justify-center">
                  <Microscope className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text bg-gradient-to-r from-indigo-600 to-blue-600">
                  Scientific Research Methods
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                {module.description}
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="bg-white px-4 py-2 rounded-full border border-indigo-200">
                  <span className="text-indigo-600 font-medium">{module.duration}</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full border border-indigo-200">
                  <span className="text-indigo-600 font-medium">{module.ageRange} yaş</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full border border-indigo-200">
                  <span className="text-indigo-600 font-medium">5 Ana Bölüm</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Learning Content Sections */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text bg-gradient-to-r from-indigo-600 to-blue-600">
                Öğrenme Modülleri
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Bilimsel araştırma sürecinin her aşamasını kapsamlı şekilde öğrenin
              </p>
            </div>

            <div className="grid gap-8">
              {learningContent.map((section, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`h-2 bg-gradient-to-r ${section.color}`}></div>
                  
                  <div className="p-8 lg:p-12">
                    <div className="flex items-start gap-6 mb-8">
                      <div className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <section.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
                          {section.title}
                        </h3>
                        <p className="text-lg text-gray-600">
                          {section.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                      {/* Theory */}
                      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Brain className="w-6 h-6 text-indigo-600" />
                          <h4 className="text-lg font-semibold text-gray-900">
                            {section.content.theory.title}
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {section.content.theory.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-indigo-500 mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Practice */}
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Target className="w-6 h-6 text-green-600" />
                          <h4 className="text-lg font-semibold text-gray-900">
                            {section.content.practice.title}
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {section.content.practice.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Play className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tools */}
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Code className="w-6 h-6 text-purple-600" />
                          <h4 className="text-lg font-semibold text-gray-900">
                            Araçlar & Kaynaklar
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {section.content.tools.map((tool, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Lightbulb className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{tool}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Activities */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text bg-gradient-to-r from-indigo-600 to-blue-600">
                Araştırma Laboratuvarı
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                İnteraktif aktivitelerle araştırma becerilerinizi pratikte uygulayın
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {researchActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <activity.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{activity.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{activity.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                      {activity.difficulty}
                    </span>
                    <ArrowRight className="w-4 h-4 text-indigo-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Challenge */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-8 lg:p-12 text-white text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Mindcraft Araştırma Challenge'ı
              </h2>
              
              <p className="text-xl mb-8 opacity-95 leading-relaxed">
                {module.mindcraftChallenge}
              </p>
              
              <motion.button
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Challenge'a Katıl
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Reflection Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 gradient-text bg-gradient-to-r from-indigo-600 to-blue-600">
                  Araştırma Yolculuğunuz
                </h2>
                <p className="text-lg text-gray-600">
                  Bu modülde öğrendiklerinizi yansıtın ve gelecek planlarınızı paylaşın
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">
                    Hangi araştırma konusuyla ilgili merak ediyorsunuz? Bu modülde öğrendiklerinizi nasıl kullanacaksınız?
                  </label>
                  <textarea
                    value={reflectionText}
                    onChange={(e) => setReflectionText(e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                    rows={6}
                    placeholder="Düşüncelerinizi paylaşın..."
                  />
                </div>
                
                <motion.button
                  className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Yansımamı Paylaş
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-6">
              <motion.div
                className="flex-1 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-white transform rotate-180" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Önceki Modül</h3>
                    <p className="text-gray-600 text-sm">AI Art Creation</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  AI ile sanat üretimi konularını tekrar gözden geçirin
                </p>
              </motion.div>

              <motion.div
                className="flex-1 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Sonraki Modül</h3>
                    <p className="text-gray-600 text-sm">Creative Innovation</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Yaratıcı inovasyon ve global etki konularını keşfedin
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}