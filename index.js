import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [step, setStep] = useState('home')
  const [profile, setProfile] = useState({ name: '', city: '', kids: 0 })

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800 p-6">
      <Head>
        <title>Dyvorce — Divorce Support</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="max-w-5xl mx-auto">
        <header className="flex items-center justify-between py-6">
          <h1 className="text-2xl font-bold">Dyvorce — Divorce Support Platform</h1>
          <nav className="space-x-4">
            <button onClick={()=>setStep('home')} className="text-sm">Home</button>
            <button onClick={()=>setStep('case')} className="text-sm">My Case</button>
            <button onClick={()=>setStep('experts')} className="text-sm">Experts</button>
            <button onClick={()=>setStep('ai')} className="text-sm">AI Assistant</button>
          </nav>
        </header>

        <main className="bg-white shadow rounded-lg p-6">
          {step === 'home' && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Welcome</h2>
              <p className="mb-4">Start your guided divorce roadmap. This MVP contains onboarding, expert marketplace, case manager, and AI assistant stub.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded">
                  <h3 className="font-medium">Get Started</h3>
                  <p className="text-sm text-gray-600">Fill a short intake so we can generate your roadmap.</p>
                  <button onClick={()=>setStep('onboard')} className="mt-3 px-3 py-2 bg-teal-600 text-white rounded">Start Intake</button>
                </div>
                <div className="p-4 border rounded">
                  <h3 className="font-medium">Find Experts</h3>
                  <p className="text-sm text-gray-600">Browse verified lawyers, mediators and therapists.</p>
                  <button onClick={()=>setStep('experts')} className="mt-3 px-3 py-2 bg-indigo-600 text-white rounded">Browse</button>
                </div>
                <div className="p-4 border rounded">
                  <h3 className="font-medium">AI Assistant</h3>
                  <p className="text-sm text-gray-600">Ask basic legal/next-step questions (stub for LLM integration).</p>
                  <button onClick={()=>setStep('ai')} className="mt-3 px-3 py-2 bg-gray-800 text-white rounded">Chat</button>
                </div>
              </div>
            </div>
          )}

          {step === 'onboard' && (
            <div>
              <h2 className="text-lg font-semibold mb-2">Onboarding / Intake</h2>
              <p className="text-sm text-gray-600 mb-4">Tell us a bit about your situation — we’ll create a roadmap.</p>
              <div className="space-y-3 max-w-lg">
                <input value={profile.name} onChange={e=>setProfile({...profile, name:e.target.value})} placeholder="Your name" className="w-full p-2 border rounded" />
                <input value={profile.city} onChange={e=>setProfile({...profile, city:e.target.value})} placeholder="City" className="w-full p-2 border rounded" />
                <input type="number" value={profile.kids} onChange={e=>setProfile({...profile, kids:parseInt(e.target.value||0)})} placeholder="Number of kids" className="w-full p-2 border rounded" />
                <div className="flex gap-2">
                  <button onClick={()=>setStep('home')} className="px-3 py-2 border rounded">Cancel</button>
                  <button onClick={()=>{ setStep('case')}} className="px-3 py-2 bg-teal-600 text-white rounded">Save & View Roadmap</button>
                </div>
              </div>
            </div>
          )}

          {step === 'case' && (
            <div>
              <h2 className="text-lg font-semibold">My Case</h2>
              <p className="text-sm text-gray-600">Roadmap for {profile.name || 'your case'}</p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded">
                  <h3 className="font-medium">Documents</h3>
                  <p className="text-sm text-gray-600 mb-2">Upload and store legal documents (placeholder)</p>
                  <div className="border-dashed border-2 border-gray-200 p-4 rounded text-center">File upload UI goes here</div>
                </div>
                <div className="p-4 border rounded">
                  <h3 className="font-medium">Task Checklist</h3>
                  <ol className="list-decimal ml-5 text-sm mt-2">
                    <li>Complete Intake</li>
                    <li>Select Lawyer / Mediator</li>
                    <li>Book Consultation</li>
                    <li>Generate Documents</li>
                    <li>File in Court / Mediate</li>
                  </ol>
                </div>
              </div>
            </div>
          )}

          {step === 'experts' && (
            <div>
              <h2 className="text-lg font-semibold mb-2">Experts Marketplace</h2>
              <p className="text-sm text-gray-600 mb-4">Verified lawyers, mediators & therapists — book consultations.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Aarti Sharma','Rakesh Patel','Sana Iqbal'].map((name, idx)=>(
                  <div key={idx} className="p-4 border rounded flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{name}</h3>
                      <p className="text-xs text-gray-600">Family Law • City</p>
                      <p className="text-sm mt-2">Sample bio for {name}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button className="px-3 py-2 bg-indigo-600 text-white rounded">Book</button>
                      <button className="px-3 py-2 border rounded" onClick={()=>alert('Contact: info@example.com')}>Contact</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 'ai' && (
            <div>
              <h2 className="text-lg font-semibold mb-2">AI Assistant (stub)</h2>
              <p className="text-sm text-gray-600 mb-4">Ask quick questions. (Integrate OpenAI or other LLM in backend)</p>
              <AIChat />
            </div>
          )}

        </main>

        <footer className="text-center text-xs text-gray-500 mt-6">Dyvorce MVP — prototype. Build by Team</footer>
      </div>
    </div>
  )
}

function AIChat(){
  const [q,setQ] = useState('')
  const [messages,setMessages] = useState([
    {from:'assistant',text:'Hello — I can help explain next steps or generate a document summary.'}
  ])

  function send(){
    if(!q) return
    setMessages(m=>[...m, {from:'user',text:q}])
    setTimeout(()=>{
      setMessages(m=>[...m, {from:'assistant',text':'(Sample reply) You may consider starting with mediation if there are children. I can generate a mutual consent draft for review.'}])
    },700)
    setQ('')
  }

  return (
    <div className="border rounded p-3">
      <div className="h-48 overflow-auto mb-3 bg-gray-50 p-2">
        {messages.map((m,i)=>(
          <div key={i} className={m.from==='assistant' ? 'text-sm text-gray-700 mb-2' : 'text-sm text-right text-gray-900 mb-2'}>{m.text}</div>
        ))}
      </div>
      <div className="flex gap-2">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Ask the assistant..." className="flex-1 p-2 border rounded" />
        <button onClick={send} className="px-3 py-2 bg-teal-600 text-white rounded">Send</button>
      </div>
    </div>
  )
}
