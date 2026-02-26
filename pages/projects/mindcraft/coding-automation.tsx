import Head from 'next/head'
import { useEffect, useMemo, useState } from 'react'
import Navbar from '@/components/mindcraft/layout/Navbar'
import Footer from '@/components/mindcraft/layout/Footer'
import { modulesData } from '@/utils/mindcraft/modulesData'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  Code,
  Cpu,
  Zap,
  Brain,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  BookOpen,
  Palette,
  Download,
  AlertTriangle,
  Droplets,
  Factory,
  Leaf,
  Layers,
  Sliders,
  Inbox,
  Mail,
  Database
} from 'lucide-react'

interface WorkflowBlock {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

interface AutomationWorkflow {
  name: string
  blocks: WorkflowBlock[]
  notes: string
  lastUpdated: string
}

interface AuditChoice {
  label: string
  fix: string
}

interface AuditChallenge {
  id: string
  title: string
  prompt: string
  code: string
  options: AuditChoice[]
  correctIndex: number
  explanation: string
}

interface EfficiencyState {
  speed: number
  waterLiters: number
  energyKwh: number
  carbonKg: number
}

interface AutomationDraft {
  workflow: AutomationWorkflow
  manifesto: string[]
  reflection: string
  efficiency: EfficiencyState
}

const STORAGE_KEY = 'mindcraft-automation-draft'

export default function CodingAutomationPage() {
  const module = modulesData.find(m => m.id === 'coding-automation')
  const [workflow, setWorkflow] = useState<AutomationWorkflow>({
    name: 'My Intent-Based Automation Architecture',
    blocks: [],
    notes: '',
    lastUpdated: new Date().toISOString()
  })
  const [manifestoInput, setManifestoInput] = useState('')
  const [manifesto, setManifesto] = useState<string[]>([])
  const [reflection, setReflection] = useState('')
  const [selectedAuditIndex, setSelectedAuditIndex] = useState<number | null>(null)
  const [efficiency, setEfficiency] = useState<EfficiencyState>({
    speed: 45,
    waterLiters: 14,
    energyKwh: 5.2,
    carbonKg: 2.1
  })

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) return
    try {
      const parsed = JSON.parse(saved) as AutomationDraft
      if (parsed?.workflow) setWorkflow(parsed.workflow)
      if (parsed?.manifesto) setManifesto(parsed.manifesto)
      if (parsed?.reflection) setReflection(parsed.reflection)
      if (parsed?.efficiency) setEfficiency(parsed.efficiency)
    } catch {
      // Ignore invalid drafts
    }
  }, [])

  useEffect(() => {
    const draft: AutomationDraft = {
      workflow: {
        ...workflow,
        lastUpdated: new Date().toISOString()
      },
      manifesto,
      reflection,
      efficiency
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(draft))
  }, [workflow, manifesto, reflection, efficiency])

  const workflowBlocks: WorkflowBlock[] = [
    {
      id: 'input-data',
      title: 'Input Data',
      description: 'Capture raw signals, files, or user intent.',
      icon: Inbox
    },
    {
      id: 'clean-validate',
      title: 'Clean & Validate',
      description: 'Normalize, deduplicate, and check data quality.',
      icon: Layers
    },
    {
      id: 'ai-summary',
      title: 'AI Summary',
      description: 'Use LLMs to summarize or extract insights.',
      icon: Brain
    },
    {
      id: 'policy-check',
      title: 'Policy Guardrail',
      description: 'Human signature checks for safety, bias, and compliance.',
      icon: ShieldCheck
    },
    {
      id: 'generate-email',
      title: 'Automated Email Draft',
      description: 'Prepare a draft response for review.',
      icon: Mail
    },
    {
      id: 'store-output',
      title: 'Store Output',
      description: 'Persist the result for audit and monitoring.',
      icon: Database
    }
  ]

  const learningBlocks = [
    {
      title: 'The Programming Revolution',
      subtitle: 'From Manual Instructions to Intent-Based Architecture',
      icon: Code,
      description:
        'Programming has evolved from explicit step-by-step instructions to intent-based AI architecture. Modern systems interpret goals, orchestrate tools, and verify outcomes while humans define constraints and accountability.',
      highlights: [
        'Declarative intent replaces brittle procedural logic',
        'AI orchestration coordinates tools and APIs autonomously',
        'Human-in-the-loop validation remains mandatory'
      ]
    },
    {
      title: 'Logic of Automation',
      subtitle: 'Scale Human Impact Through Repeatable Workflows',
      icon: Zap,
      description:
        'Automation begins with identifying repetitive tasks and converting them into reliable pipelines. The goal is not to remove humans, but to amplify judgment, creativity, and speed without sacrificing control.',
      highlights: [
        'Map tasks to triggers, actions, and verification points',
        'Measure failure modes before scaling',
        'Design workflows for observability and rollback'
      ]
    },
    {
      title: 'The Human Auditor',
      subtitle: 'Why Every AI Output Needs a Signature',
      icon: ShieldCheck,
      description:
        'AI-generated code and content can contain logical flaws, security vulnerabilities, and embedded bias. Human review is the signature that ensures correctness, safety, and ethical accountability.',
      highlights: [
        'Validate logic paths and edge cases',
        'Audit for security risks and data leakage',
        'Detect bias in data sources and outputs'
      ]
    }
  ]

  const sustainabilityInsights = [
    {
      title: 'Water Consumption in AI Automation',
      description:
        'High-volume automation workloads require cooling and data-center infrastructure. At scale, this translates to measurable water usage for thermal management and power generation.',
      metrics: ['Automated batch runs increase cooling demand', 'Water usage scales with request volume and model size', 'Optimization reduces thermal load by minimizing wasted compute'],
      icon: Droplets
    },
    {
      title: 'Energy & Carbon Load',
      description:
        'Server-side computations for AI automation add energy draw and carbon emissions. Efficiency strategies reduce energy-per-task while preserving accuracy.',
      metrics: ['Model selection matters: smaller models can be greener', 'Batching and caching reduce energy spikes', 'Monitor energy per workflow execution'],
      icon: Factory
    },
    {
      title: 'Sustainable Automation Principles',
      description:
        'Sustainable automation means balancing performance with resource stewardship. Build with the lowest feasible compute intensity and track environmental impact.',
      metrics: ['Use policy gates to avoid unnecessary runs', 'Prefer async processing over always-on polling', 'Measure and report resource footprints'],
      icon: Leaf
    }
  ]

  const auditChallenge: AuditChallenge = {
    id: 'logic-bug',
    title: 'Algorithmic Audit: Logic Bug Hunt',
    prompt:
      'This AI-generated filter rejects applicants from underrepresented regions because of an inverted comparison. Choose the fix that removes the bias without breaking the logic.',
    code: `function eligibleApplicant(score, regionDiversityIndex) {
  // BUG: lower diversity index should increase human review, not auto-reject
  if (regionDiversityIndex < 40) {
    return score < 70
  }
  return score >= 70
}`,
    options: [
      {
        label: 'Invert the comparison to allow more human review for low diversity regions.',
        fix: `if (regionDiversityIndex < 40) {
  return score >= 70
}`
      },
      {
        label: 'Remove the diversity condition and accept all scores above 70.',
        fix: `return score >= 70`
      },
      {
        label: 'Lower the score threshold to 50 for low diversity regions.',
        fix: `if (regionDiversityIndex < 40) {
  return score >= 50
}`
      },
      {
        label: 'Auto-reject all applicants when diversity is low to reduce risk.',
        fix: `if (regionDiversityIndex < 40) {
  return false
}`
      }
    ],
    correctIndex: 0,
    explanation:
      'The intent is to keep a minimum score requirement while ensuring low-diversity regions are reviewed fairly. Inverting the comparison fixes the bias without disabling standards.'
  }

  const handleAddBlock = (block: WorkflowBlock) => {
    setWorkflow(prev => ({
      ...prev,
      blocks: [...prev.blocks, block]
    }))
  }

  const handleRemoveBlock = (index: number) => {
    setWorkflow(prev => ({
      ...prev,
      blocks: prev.blocks.filter((_, i) => i !== index)
    }))
  }

  const moveBlock = (index: number, direction: 'up' | 'down') => {
    setWorkflow(prev => {
      const nextBlocks = [...prev.blocks]
      const targetIndex = direction === 'up' ? index - 1 : index + 1
      if (targetIndex < 0 || targetIndex >= nextBlocks.length) return prev
      const temp = nextBlocks[index]
      nextBlocks[index] = nextBlocks[targetIndex]
      nextBlocks[targetIndex] = temp
      return { ...prev, blocks: nextBlocks }
    })
  }

  const addManifestoItem = () => {
    if (!manifestoInput.trim()) return
    setManifesto(prev => [...prev, manifestoInput.trim()])
    setManifestoInput('')
  }

  const removeManifestoItem = (index: number) => {
    setManifesto(prev => prev.filter((_, i) => i !== index))
  }

  const updateEfficiency = (speed: number) => {
    const waterLiters = Math.round(6 + speed * 0.4)
    const energyKwh = Number((2.5 + speed * 0.08).toFixed(1))
    const carbonKg = Number((1.1 + speed * 0.04).toFixed(1))
    setEfficiency({ speed, waterLiters, energyKwh, carbonKg })
  }

  const exportRoadmap = () => {
    const roadmap = `Automation Roadmap — ${new Date().toLocaleDateString('en-US')}

Workflow Name: ${workflow.name}

Workflow Blocks:
${workflow.blocks.map((block, index) => `${index + 1}. ${block.title}`).join('\n') || 'No blocks added yet.'}

Workflow Notes:
${workflow.notes || 'No notes added.'}

Automation Manifesto:
${manifesto.length ? manifesto.map((item, index) => `${index + 1}. ${item}`).join('\n') : 'No manifesto principles yet.'}

Efficiency vs Resource Snapshot:
- Speed Setting: ${efficiency.speed}%
- Water Usage Estimate: ${efficiency.waterLiters} L per workflow batch
- Energy Estimate: ${efficiency.energyKwh} kWh per workflow batch
- Carbon Estimate: ${efficiency.carbonKg} kg CO₂e per workflow batch

Reflection:
${reflection || 'No reflection written yet.'}
`

    const blob = new Blob([roadmap], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'automation-roadmap.txt'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const progress = useMemo(() => {
    const workflowScore = Math.min(40, workflow.blocks.length * 10)
    const manifestoScore = Math.min(30, manifesto.length * 6)
    const reflectionScore = reflection.trim() ? 30 : 0
    return workflowScore + manifestoScore + reflectionScore
  }, [workflow.blocks.length, manifesto.length, reflection])

  if (!module) return null

  return (
    <>
      <Head>
        <title>Coding & Automation: Interactive Automation Laboratory | Mindcraft</title>
        <meta
          name="description"
          content="Build intent-based automation workflows, audit AI logic, and measure sustainability trade-offs in the Mindcraft Automation Laboratory."
        />
        <meta
          name="keywords"
          content="automation, AI architecture, workflow design, algorithmic audit, sustainability, programming"
        />
        <meta property="og:title" content="Coding & Automation: Interactive Automation Laboratory" />
        <meta property="og:description" content="Design AI workflows, audit logic, and balance efficiency with resources." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-orange-950 via-amber-950 to-yellow-950 text-white">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative mx-auto mb-8 w-32 h-32">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full blur-2xl opacity-40"></div>
                <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <Cpu className="w-16 h-16 text-orange-600" />
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Coding & Automation
                <span className="block text-3xl md:text-4xl bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent mt-4">
                  The Architect Lab
                </span>
              </h1>

              <p className="text-xl text-amber-100 max-w-4xl mx-auto leading-relaxed">
                {module.description}
              </p>

              <div className="mt-10 bg-orange-900/40 border border-orange-600/40 rounded-2xl p-6 backdrop-blur-lg">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Brain className="w-6 h-6 text-amber-300" />
                  <h2 className="text-xl font-semibold text-amber-100">Architect Mindset</h2>
                </div>
                <p className="text-amber-100/90">
                  Shift from writing manual instructions to designing intent-based AI architectures that execute, audit, and explain decisions at scale.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: 'Interactive Labs', value: '3' },
                  { label: 'Automation Blocks', value: '6' },
                  { label: 'Progress', value: `${progress}%` }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-orange-900/30 border border-amber-600/30 rounded-xl p-6"
                  >
                    <div className="text-3xl font-bold text-amber-300">{stat.value}</div>
                    <div className="text-amber-100/80 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Learning Blocks */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent">
                  Automation Foundations
                </span>
              </h2>
              <p className="text-amber-100/80 mt-4">
                Learn the language of modern automation and AI systems architecture.
              </p>
            </div>

            <div className="space-y-8">
              {learningBlocks.map((block, index) => (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-orange-900/30 border border-amber-600/30 rounded-2xl p-8 backdrop-blur-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                      <block.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-amber-100 mb-2">{block.title}</h3>
                      <p className="text-amber-200/80 mb-4">{block.subtitle}</p>
                      <p className="text-amber-100/90 leading-relaxed mb-6">{block.description}</p>
                      <div className="grid md:grid-cols-3 gap-4">
                        {block.highlights.map((item, idx) => (
                          <div
                            key={idx}
                            className="bg-orange-950/60 border border-amber-600/20 rounded-xl p-4"
                          >
                            <div className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-amber-300 mt-1" />
                              <p className="text-amber-100/80 text-sm">{item}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Builder */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-orange-950/40">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent">
                  Workflow Builder Lab
                </span>
              </h2>
              <p className="text-amber-100/80 mt-4">
                Drag conceptually by selecting blocks to design your AI-powered automation pipeline.
              </p>
            </div>

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
              <div className="bg-orange-900/30 border border-amber-600/30 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-amber-100">Automation Blocks</h3>
                  <Sliders className="w-5 h-5 text-amber-300" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {workflowBlocks.map(block => (
                    <button
                      key={block.id}
                      onClick={() => handleAddBlock(block)}
                      className="text-left bg-orange-950/60 border border-amber-600/20 rounded-xl p-4 hover:border-amber-400 transition"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <block.icon className="w-5 h-5 text-amber-300" />
                        <span className="text-amber-100 font-semibold">{block.title}</span>
                      </div>
                      <p className="text-amber-100/70 text-sm">{block.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-orange-900/30 border border-amber-600/30 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-amber-100 mb-4">Your Workflow</h3>
                <input
                  value={workflow.name}
                  onChange={event => setWorkflow(prev => ({ ...prev, name: event.target.value }))}
                  className="w-full bg-orange-950/60 border border-amber-600/30 rounded-xl p-3 text-amber-100 placeholder-amber-200/60"
                  placeholder="Workflow name"
                />
                <div className="mt-6 space-y-4">
                  {workflow.blocks.length === 0 ? (
                    <div className="border border-dashed border-amber-500/40 rounded-xl p-6 text-center text-amber-100/70">
                      Select blocks to assemble an automation pipeline.
                    </div>
                  ) : (
                    workflow.blocks.map((block, index) => (
                      <div
                        key={`${block.id}-${index}`}
                        className="bg-orange-950/60 border border-amber-600/20 rounded-xl p-4"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <block.icon className="w-5 h-5 text-amber-300" />
                            <div>
                              <p className="text-amber-100 font-semibold">{block.title}</p>
                              <p className="text-amber-100/70 text-xs">{block.description}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => moveBlock(index, 'up')}
                              className="text-xs px-2 py-1 rounded-md bg-orange-900/60 border border-amber-600/30"
                            >
                              ↑
                            </button>
                            <button
                              onClick={() => moveBlock(index, 'down')}
                              className="text-xs px-2 py-1 rounded-md bg-orange-900/60 border border-amber-600/30"
                            >
                              ↓
                            </button>
                            <button
                              onClick={() => handleRemoveBlock(index)}
                              className="text-xs px-2 py-1 rounded-md bg-orange-900/60 border border-amber-600/30"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <div className="mt-6">
                  <label className="text-sm text-amber-100/80">Architecture Notes</label>
                  <textarea
                    value={workflow.notes}
                    onChange={event => setWorkflow(prev => ({ ...prev, notes: event.target.value }))}
                    className="w-full mt-2 bg-orange-950/60 border border-amber-600/30 rounded-xl p-3 text-amber-100 min-h-[120px]"
                    placeholder="Document logic assumptions, failure modes, and audit checkpoints."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Algorithmic Audit */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent">
                  Algorithmic Audit Lab
                </span>
              </h2>
              <p className="text-amber-100/80 mt-4">
                Detect logic bugs and validate fairness before deployment.
              </p>
            </div>

            <div className="bg-orange-900/30 border border-amber-600/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-amber-300" />
                <h3 className="text-2xl font-semibold text-amber-100">{auditChallenge.title}</h3>
              </div>
              <p className="text-amber-100/80 mb-6">{auditChallenge.prompt}</p>

              <pre className="bg-orange-950/70 border border-amber-600/20 rounded-xl p-4 text-amber-100/90 text-sm overflow-x-auto">
                <code>{auditChallenge.code}</code>
              </pre>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                {auditChallenge.options.map((option, index) => (
                  <button
                    key={option.label}
                    onClick={() => setSelectedAuditIndex(index)}
                    className={`text-left p-4 rounded-xl border transition-all ${
                      selectedAuditIndex === index
                        ? 'bg-orange-800/60 border-amber-400'
                        : 'bg-orange-950/60 border-amber-600/20 hover:border-amber-400/60'
                    }`}
                  >
                    <p className="text-amber-100 font-semibold mb-2">{option.label}</p>
                    <div className="text-xs text-amber-100/70 whitespace-pre-line">{option.fix}</div>
                  </button>
                ))}
              </div>

              {selectedAuditIndex !== null && (
                <div className="mt-6 bg-orange-950/60 border border-amber-600/30 rounded-xl p-4">
                  <p className="text-amber-100 font-semibold mb-2">
                    {selectedAuditIndex === auditChallenge.correctIndex ? 'Correct Fix' : 'Needs Review'}
                  </p>
                  <p className="text-amber-100/80 text-sm">{auditChallenge.explanation}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Efficiency vs Resource Meter */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-orange-950/40">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent">
                  Efficiency vs Resource Meter
                </span>
              </h2>
              <p className="text-amber-100/80 mt-4">
                Model the trade-off between automation speed and environmental impact.
              </p>
            </div>

            <div className="bg-orange-900/30 border border-amber-600/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Sliders className="w-6 h-6 text-amber-300" />
                <h3 className="text-2xl font-semibold text-amber-100">Automation Speed</h3>
              </div>

              <input
                type="range"
                min={10}
                max={100}
                value={efficiency.speed}
                onChange={event => updateEfficiency(Number(event.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-amber-100/70 mt-2">
                <span>Deliberate (10%)</span>
                <span>Hyper-Automated (100%)</span>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-orange-950/60 border border-amber-600/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Droplets className="w-4 h-4 text-amber-300" />
                    <span className="text-amber-100 font-semibold">Water</span>
                  </div>
                  <p className="text-2xl text-amber-200">{efficiency.waterLiters} L</p>
                  <p className="text-xs text-amber-100/70">per workflow batch</p>
                </div>
                <div className="bg-orange-950/60 border border-amber-600/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Factory className="w-4 h-4 text-amber-300" />
                    <span className="text-amber-100 font-semibold">Energy</span>
                  </div>
                  <p className="text-2xl text-amber-200">{efficiency.energyKwh} kWh</p>
                  <p className="text-xs text-amber-100/70">per workflow batch</p>
                </div>
                <div className="bg-orange-950/60 border border-amber-600/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Leaf className="w-4 h-4 text-amber-300" />
                    <span className="text-amber-100 font-semibold">Carbon</span>
                  </div>
                  <p className="text-2xl text-amber-200">{efficiency.carbonKg} kg</p>
                  <p className="text-xs text-amber-100/70">CO₂e per workflow batch</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent">
                  Sustainability Audit
                </span>
              </h2>
              <p className="text-amber-100/80 mt-4">
                Every automation run consumes water and energy. Sustainable architecture makes that impact visible.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {sustainabilityInsights.map((insight, index) => (
                <motion.div
                  key={insight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-orange-900/30 border border-amber-600/30 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <insight.icon className="w-6 h-6 text-amber-300" />
                    <h3 className="text-xl font-semibold text-amber-100">{insight.title}</h3>
                  </div>
                  <p className="text-amber-100/80 mb-4">{insight.description}</p>
                  <ul className="space-y-2">
                    {insight.metrics.map(metric => (
                      <li key={metric} className="text-sm text-amber-100/70 flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-300 mt-1" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Manifesto + Reflection */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-orange-950/40">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent">
                  Automation Manifesto
                </span>
              </h2>
              <p className="text-amber-100/80 mt-4">
                Document your principles, safeguards, and accountability checkpoints.
              </p>
            </div>

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
              <div className="bg-orange-900/30 border border-amber-600/30 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-amber-100 mb-4">Manifesto Statements</h3>
                <div className="flex gap-2 mb-4">
                  <input
                    value={manifestoInput}
                    onChange={event => setManifestoInput(event.target.value)}
                    className="flex-1 bg-orange-950/60 border border-amber-600/30 rounded-xl p-3 text-amber-100"
                    placeholder="Example: Every automation output must have a human review checkpoint."
                  />
                  <button
                    onClick={addManifestoItem}
                    className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 rounded-xl"
                  >
                    Add
                  </button>
                </div>
                <div className="space-y-3">
                  {manifesto.length === 0 ? (
                    <div className="text-amber-100/60 border border-dashed border-amber-600/30 rounded-xl p-4 text-center">
                      Your manifesto will appear here.
                    </div>
                  ) : (
                    manifesto.map((item, index) => (
                      <div
                        key={item}
                        className="bg-orange-950/60 border border-amber-600/20 rounded-xl p-4 flex items-start justify-between gap-4"
                      >
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-amber-300 mt-1" />
                          <p className="text-amber-100/90 text-sm">{item}</p>
                        </div>
                        <button
                          onClick={() => removeManifestoItem(index)}
                          className="text-xs text-amber-200/70"
                        >
                          Remove
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div className="bg-orange-900/30 border border-amber-600/30 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-amber-100 mb-4">Reflection</h3>
                <textarea
                  value={reflection}
                  onChange={event => setReflection(event.target.value)}
                  className="w-full bg-orange-950/60 border border-amber-600/30 rounded-xl p-3 text-amber-100 min-h-[200px]"
                  placeholder="Describe how intent-based automation changes your responsibilities and impact."
                />
                <button
                  onClick={exportRoadmap}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 rounded-xl font-semibold"
                >
                  <Download className="w-5 h-5" />
                  Export My Automation Roadmap
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Module Navigation */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-3">
                <ArrowRight className="w-8 h-8 text-blue-400" />
                Continue Your Learning Journey
              </h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                {/* Previous Module */}
                <a
                  href="/projects/mindcraft/prompt-engineering"
                  className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 border border-purple-500/30 hover:border-purple-400/50 rounded-xl p-4 transition-all group"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-white font-semibold">← Previous: Prompt Engineering</p>
                    <p className="text-purple-300 text-sm">AI Communication</p>
                  </div>
                </a>

                {/* Back to Modules */}
                <a
                  href="/projects/mindcraft#modules"
                  className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 hover:from-blue-600/30 hover:to-cyan-600/30 border border-blue-500/30 hover:border-blue-400/50 rounded-xl p-4 transition-all group"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-white font-semibold">All Modules</p>
                    <p className="text-blue-300 text-sm">Back to Overview</p>
                  </div>
                </a>

                {/* Next Module */}
                <a
                  href="/projects/mindcraft/ai-art-creation"
                  className="bg-gradient-to-br from-orange-600/20 to-red-600/20 hover:from-orange-600/30 hover:to-red-600/30 border border-orange-500/30 hover:border-orange-400/50 rounded-xl p-4 transition-all group"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Palette className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-white font-semibold">Next: AI Art Creation</p>
                    <p className="text-orange-300 text-sm">Creative Amplifier →</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}