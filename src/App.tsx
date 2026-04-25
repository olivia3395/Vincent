import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { paintings, letters, biography, films, quotes, timeline, friends, audioOptions } from './data/vangogh';

export default function App() {
  const [activeSection, setActiveSection] = useState('Home');
  const [filterYear, setFilterYear] = useState('All');
  const [letter, setLetter] = useState('');
  const [vangoghReply, setVangoghReply] = useState('');
  const [loadingReply, setLoadingReply] = useState(false);
  const [selectedSound, setSelectedSound] = useState<string | null>(null);
  const [audioPlayer, setAudioPlayer] = useState<HTMLAudioElement | null>(null);
  const [vincentAudio, setVincentAudio] = useState<HTMLAudioElement | null>(null);
  const [musicPlaying, setMusicPlaying] = useState(false);

  // Initialize Vincent audio
  useEffect(() => {
    const audio = new Audio('/vincent.mp3');
    audio.loop = true;
    setVincentAudio(audio);
    return () => {
      audio.pause();
    };
  }, []);

  const toggleMusic = () => {
    if (vincentAudio) {
      if (musicPlaying) {
        vincentAudio.pause();
      } else {
        vincentAudio.volume = 0;
        vincentAudio.play();
        // Fade in
        const fade = setInterval(() => {
          if (vincentAudio.volume < 1) {
            vincentAudio.volume = Math.min(1, vincentAudio.volume + 0.05);
          } else {
            clearInterval(fade);
          }
        }, 200);
      }
      setMusicPlaying(!musicPlaying);
    }
  };

  const playSound = (audioId: string) => {
    if (audioPlayer) {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
    }
    
    if (selectedSound === audioId) {
      setSelectedSound(null);
      setAudioPlayer(null);
      return;
    }

    const option = audioOptions.find(o => o.id === audioId);
    if (option) {
      const audio = new Audio(`/sounds/${option.file}`);
      audio.loop = true;
      audio.play().catch(e => console.error("Sound play failed", e));
      setAudioPlayer(audio);
      setSelectedSound(audioId);
    }
  };

  const sendLetter = async () => {
    setLoadingReply(true);
    try {
      const response = await fetch('/api/ask-vangogh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ letter }),
      });
      const data = await response.json();
      setVangoghReply(data.reply);
    } catch (e) {
      setVangoghReply("Alas, the connection to the past is strained. Please try again.");
    } finally {
      setLoadingReply(false);
    }
  };
  const years = Array.from(new Set(paintings.map(p => p.year))).sort();
  const starryNight = paintings.find(p => p.id === 'starry-night');

  const filteredPaintings = filterYear === 'All' 
    ? paintings 
    : paintings.filter(p => p.year === filterYear);

  const renderContent = () => {
    switch (activeSection) {
      case 'Biography':
        return (
          <div className="text-[#0a0c10] min-h-screen">
            {/* Biography Image at Top (Full Width) */}
            <div className="w-full h-[50vh] overflow-hidden">
              <img src="/vangogh_room.jpg" alt="Van Gogh's Room" className="w-full h-full object-cover" />
            </div>
            
            {/* Biography Content below the image */}
            <div className="p-12 bg-[#f5f5f0]">
              <h2 className="text-4xl font-bold mb-6">Biography</h2>
              <p className="text-lg leading-relaxed mb-6">{biography.summary}</p>
              <ul className="space-y-2 list-disc list-inside">
                {biography.keyDetails.map((detail, i) => <li key={i}>{detail}</li>)}
              </ul>
            </div>
          </div>
        );
      case 'Letters':
        return (
          <div className="p-12">
            <h2 className="text-4xl text-white mb-10 font-serif border-b border-[#f5f5f0]/10 pb-4">Letters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {letters.map(l => (
                <div key={l.id} className="bg-[#e9dcc5] text-[#4a3f35] p-10 shadow-xl rounded-sm relative transform hover:-rotate-1 transition-transform duration-300">
                  <div className="absolute inset-1 border border-[#4a3f35]/20 pointer-events-none"></div>
                  <h3 className="font-serif text-2xl text-[#2c3e50] mb-6 border-b border-[#2c3f35]/20 pb-2 flex items-center justify-between">
                    {l.title}
                    <span className="text-sm opacity-40">✒️</span>
                  </h3>
                  <p className="font-serif italic text-lg mb-8 leading-relaxed">"{l.excerpt}"</p>
                  <a href={`https://vangoghletters.org/vg/`} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest font-sans text-[#2c3e50] hover:text-[#d35400] transition-colors border border-[#2c3e50]/30 px-4 py-2 inline-block">
                    Read Full Letter ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Films':
        return (
          <div className="p-12">
            <h2 className="text-4xl text-white mb-10 font-serif border-b border-[#f5f5f0]/10 pb-4">Films</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {films.map(f => (
                <div key={f.id} className="group border border-white/10 p-8 hover:border-yellow-500/50 transition-all duration-300">
                  <h3 className="font-serif text-2xl text-white mb-2">{f.title}</h3>
                  <p className="text-yellow-500 text-sm mb-4">{f.year}</p>
                  <p className="text-[#f5f5f0]/70 mb-6 leading-relaxed">{f.description}</p>
                  <a href={f.imdbUrl} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest font-sans text-white/50 hover:text-yellow-500 transition-colors">
                    View on IMDb ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Quotes':
        return (
          <div className="p-12">
            <h2 className="text-4xl text-white mb-10 font-serif border-b border-[#f5f5f0]/10 pb-4">Quotes</h2>
            <div className="space-y-12">
              {quotes.map(q => (
                <div key={q.id} className="border-l-4 border-yellow-500 pl-8 py-2 group">
                  <p className="text-3xl font-serif italic text-white/90 mb-4 leading-tight">"{q.text}"</p>
                  <p className="text-[#f5f5f0]/60 font-sans text-xs uppercase tracking-widest">{q.year} • {q.context}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Timeline':
        return (
          <div className="p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl text-white mb-16 font-serif border-b border-[#f5f5f0]/10 pb-4 text-center">A Life of Turbulence & Light</h2>
            <div className="relative border-l border-yellow-500/30 ml-4 md:ml-12 space-y-12">
              {timeline.map((t, index) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={t.id} 
                  className="relative pl-8 md:pl-12"
                >
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                  <span className="text-yellow-500 font-mono text-sm tracking-widest">{t.year}</span>
                  <p className="text-xl md:text-2xl text-[#f5f5f0]/90 font-serif leading-relaxed mt-1">{t.event}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-16 text-center text-[#f5f5f0]/50 italic">
               "I feel a certain power within me that must be released."
            </div>
          </div>
        );
      case 'Write to Vincent':
        return (
          <div className="p-12 max-w-2xl mx-auto">
            <h2 className="text-4xl text-white mb-10 font-serif border-b border-[#f5f5f0]/10 pb-4">Write to Vincent</h2>
            <div className="mb-8">
              <label className="block text-[#f5f5f0]/50 text-xs uppercase tracking-widest mb-4">Choose an atmosphere (sound):</label>
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
                {audioOptions.map(audio => (
                  <button 
                    key={audio.id}
                    onClick={() => playSound(audio.id)}
                    className={`px-3 py-2 text-[10px] border transition flex items-center justify-center text-center ${selectedSound === audio.id ? 'bg-yellow-500 text-black border-yellow-500' : 'border-white/20 text-white hover:border-white/50'}`}
                  >
                    {audio.name}
                  </button>
                ))}
              </div>
            </div>
            <textarea 
              value={letter} 
              onChange={e => setLetter(e.target.value)}
              className="w-full h-64 bg-[#0a0c10] border border-white/20 p-6 text-[#f5f5f0] font-serif italic text-lg mb-6"
              placeholder="Dear Vincent..."
            />
            <button 
              onClick={sendLetter}
              disabled={loadingReply}
              className="px-8 py-3 bg-yellow-500 text-black font-sans uppercase text-sm tracking-widest hover:bg-yellow-600 transition"
            >
              {loadingReply ? 'Sending through time...' : 'Send to Arles'}
            </button>
            {vangoghReply && (
              <div className="mt-12 p-8 bg-white/5 border-l-4 border-yellow-500">
                <h3 className="text-xl text-yellow-500 font-serif mb-4">Vincent's Reply:</h3>
                <p className="text-[#f5f5f0]/90 leading-relaxed font-serif italic">{vangoghReply}</p>
              </div>
            )}
          </div>
        );
      case 'Friends':
        return (
          <div className="p-12">
            <h2 className="text-4xl text-white mb-10 font-serif border-b border-[#f5f5f0]/10 pb-4">Social Circle</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {friends.map(f => (
                <div key={f.id} className="border border-white/10 p-8 hover:border-yellow-500/50 transition-all duration-300">
                  <h3 className="font-serif text-2xl text-white mb-1">{f.name}</h3>
                  <p className="text-yellow-500 text-xs mb-4 font-sans uppercase tracking-widest">{f.relationship}</p>
                  <p className="text-[#f5f5f0]/70 mb-6 leading-relaxed">{f.context}</p>
                  <a href={f.link} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest font-sans text-white/50 hover:text-yellow-500 transition-colors">
                    Read More ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Masterpieces':
      default:
        return (
          <div className="p-12">
            <h2 className="text-4xl text-white mb-10">Masterpieces</h2>
            {/* Filter */}
            <div className="mb-8 flex gap-4">
              {['All', ...years].map(y => (
                <button 
                  key={y} 
                  onClick={() => setFilterYear(y)}
                  className={`px-4 py-2 text-xs uppercase tracking-widest border ${filterYear === y ? 'bg-yellow-500 text-black border-yellow-500' : 'border-white/20 hover:border-white/50'}`}
                >
                  {y}
                </button>
              ))}
            </div>
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPaintings.map(p => (
                <div key={p.id} className="group p-6 border border-white/10 hover:border-yellow-500/50 transition-colors">
                  <div className="overflow-hidden mb-4"><img src={p.image} alt={p.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                  <h3 className="text-2xl text-white">{p.title}</h3>
                  <p className="text-sm text-yellow-500 mb-2">{p.year}</p>
                  <p className="text-[#f5f5f0]/70 mb-4">{p.description}</p>
                  <a href={p.locationUrl} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest font-sans text-yellow-500 hover:text-white transition-colors">
                    Collection: {p.location} ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#0a0c10] text-[#f5f5f0] font-serif relative selection:bg-yellow-500/30 selection:text-white pb-24">
      {/* Background Noise/Gradients */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fde047 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-0 right-0 w-2/3 h-full opacity-40 mix-blend-screen overflow-hidden" style={{ background: 'radial-gradient(circle at 70% 30%, #3b82f6 0%, transparent 60%), radial-gradient(circle at 80% 80%, #eab308 0%, transparent 50%), radial-gradient(circle at 40% 50%, #1e3a8a 0%, transparent 70%)' }}></div>
      <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-yellow-500 via-blue-500 to-green-700 opacity-30"></div>

      {/* Nav */}
      <nav className="sticky top-0 w-full p-8 flex justify-between items-center z-50 bg-[#0a0c10]/80 backdrop-blur-md">
        <div className="text-xs tracking-[0.4em] uppercase font-sans font-bold border-l-2 border-yellow-500 pl-4 cursor-pointer" onClick={() => setActiveSection('Masterpieces')}>Van Gogh / Archive</div>
        <div className="flex space-x-12 text-[10px] tracking-widest uppercase font-sans font-semibold">
          {['Home', 'Biography', 'Masterpieces', 'Letters', 'Films', 'Quotes', 'Timeline', 'Friends', 'Write to Vincent'].map(item => (
            <span key={item} className={`cursor-pointer ${activeSection === item ? 'text-yellow-500' : 'hover:text-white/60'}`} onClick={() => setActiveSection(item)}>{item}</span>
          ))}
        </div>
        <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center">
          <div className="w-4 h-[1px] bg-white"></div>
        </div>
      </nav>

      {/* Music Toggle Button */}
      <button 
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-[60] w-12 h-12 rounded-full bg-yellow-500/20 backdrop-blur-md border border-yellow-500/50 flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all"
      >
        {musicPlaying ? 'Pause' : 'Play'}
      </button>

      {/* Hero (Only on Home) */}
      {activeSection === 'Home' && (
        <main className="relative h-screen w-full flex flex-col">
          {/* Background container to hold split images */}
          <div className="absolute inset-0 z-0 flex flex-col">
            <div 
              className="w-full h-1/2 bg-cover bg-center" 
              style={{ backgroundImage: "url('/bg.jpg')" }}
            ></div>
            <div 
              className="w-full h-1/2 bg-cover bg-center" 
              style={{ backgroundImage: "url('/bg2.jpg')" }}
            ></div>
          </div>

          {/* Overlay to ensure readability */}
          <div className="absolute inset-0 bg-[#0a0c10]/40 z-10"></div>
          
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-12 text-center">
            <motion.h2 initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} className="text-6xl mb-6 text-white">Welcome to Vincent's Archive</motion.h2>
            <p className="max-w-2xl text-xl text-[#f5f5f0]/70">Explore the life, works, and letters of a true visionary.</p>
          </div>
        </main>
      )}

      {/* Dynamic Content */}
      <section className="max-w-6xl mx-auto z-20 relative">
        {renderContent()}
      </section>
    </div>
  );
}
