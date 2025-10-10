import { useState } from 'react'
import { motion } from 'framer-motion'
import { Filter, Heart, Eye } from 'lucide-react'

interface GalleryItem {
  id: number
  title: string
  prompt: string
  module: string
  age: number
  country: string
  likes: number
  views: number
  imageUrl: string
}

export default function GalleryGrid() {
  const [filterModule, setFilterModule] = useState<string>('all')
  const [filterAge, setFilterAge] = useState<string>('all')

  // Mock gallery data
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Magical Forest',
      prompt: 'A mystical forest with glowing mushrooms and fireflies',
      module: 'AI Art',
      age: 12,
  country: 'Türkiye',
      likes: 45,
      views: 230,
      imageUrl: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400'
    },
    {
      id: 2,
      title: 'Future City',
      prompt: 'Futuristic city with flying cars and green buildings',
      module: 'AI Art',
      age: 15,
      country: 'USA',
      likes: 78,
      views: 456,
      imageUrl: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=400'
    },
    {
      id: 3,
      title: 'Ocean Depths',
      prompt: 'Underwater coral reef with colorful fish and sunlight',
      module: 'AI Art',
      age: 10,
      country: 'Japan',
      likes: 62,
      views: 312,
      imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400'
    },
    {
      id: 4,
      title: 'Space Adventure',
      prompt: 'Astronaut exploring an alien planet with two moons',
      module: 'AI Art',
      age: 14,
      country: 'Brazil',
      likes: 91,
      views: 542,
      imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400'
    },
    {
      id: 5,
      title: 'Mountain Sunset',
      prompt: 'Majestic mountains at sunset with dramatic clouds',
      module: 'AI Art',
      age: 13,
      country: 'Switzerland',
      likes: 55,
      views: 289,
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400'
    },
    {
      id: 6,
      title: 'Robot Friend',
      prompt: 'Friendly robot helping kids learn in a classroom',
      module: 'AI Art',
      age: 11,
      country: 'South Korea',
      likes: 67,
      views: 378,
      imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400'
    }
  ]

  const filteredItems = galleryItems.filter(item => {
    const moduleMatch = filterModule === 'all' || item.module === filterModule
    const ageMatch = filterAge === 'all' || 
      (filterAge === '9-12' && item.age >= 9 && item.age <= 12) ||
      (filterAge === '13-15' && item.age >= 13 && item.age <= 15) ||
      (filterAge === '16-17' && item.age >= 16 && item.age <= 17)
    return moduleMatch && ageMatch
  })

  return (
    <main className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">AI Memory Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore amazing creations from students around the world
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 items-center">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="font-semibold text-gray-700">Filters:</span>
          </div>
          
          <select
            value={filterModule}
            onChange={(e) => setFilterModule(e.target.value)}
            className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-mindcraft-purple focus:outline-none"
          >
            <option value="all">All Modules</option>
            <option value="AI Art">AI Art</option>
            <option value="Coding">Coding</option>
            <option value="Ethics">Ethics</option>
          </select>

          <select
            value={filterAge}
            onChange={(e) => setFilterAge(e.target.value)}
            className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-mindcraft-purple focus:outline-none"
          >
            <option value="all">All Ages</option>
            <option value="9-12">Ages 9-12</option>
            <option value="13-15">Ages 13-15</option>
            <option value="16-17">Ages 16-17</option>
          </select>

          <div className="ml-auto text-sm text-gray-600">
            Showing {filteredItems.length} creations
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm italic">"{item.prompt}"</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span>🎨 {item.module}</span>
                  <span>Age {item.age}</span>
                  <span>🌍 {item.country}</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <button className="flex items-center gap-1 text-gray-600 hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm">{item.likes}</span>
                  </button>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Eye className="w-5 h-5" />
                    <span>{item.views}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Upload CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-mindcraft-blue/10 to-mindcraft-purple/10 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Share Your Creation!</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Have you created something amazing? Share it with the Mindcraft community!
          </p>
          <button className="btn-primary">
            Upload Your Work
          </button>
        </motion.div>
      </div>
    </main>
  )
}
