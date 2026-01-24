
import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  Smartphone, 
  Zap, 
  Search, 
  MessageCircle, 
  Clock,
  Rocket,
  Lock,
  Copy,
  Check,
  ChevronDown,
  ChevronRight,
  Layout,
  Globe,
  Truck,
  Activity,
  Sparkles,
  Gift,
  MousePointer2,
  TrendingDown,
  MapPin,
  CreditCard,
  ShoppingBag,
  Users,
  ArrowUpRight,
  Monitor,
  Code,
  Target,
  PenTool
} from 'lucide-react';

const PROVIDER = {
  name: "Future Agency Technology",
  whatsapp: "31 99449-9024",
  email: "futuretecnology@yahoo.com",
  cnpj: "59.627.142/0001-26"
};

interface BrazilIconProps {
  size?: number;
  className?: string;
}

const BrazilIcon: React.FC<BrazilIconProps> = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="100" height="70" fill="#009739"/>
    <path d="M50 5L95 35L50 65L5 35L50 5Z" fill="#FED100"/>
    <circle cx="50" cy="35" r="18" fill="#002776"/>
    <path d="M32 38C40 33 60 33 68 38" stroke="white" strokeWidth="2" fill="none"/>
  </svg>
);

const Section = ({ children, className = "", id = "" }: any) => (
  <section id={id} className={`py-16 md:py-32 px-5 md:px-6 relative overflow-hidden ${className}`}>
    <div className="max-w-6xl mx-auto relative z-10">
      {children}
    </div>
  </section>
);

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ h: 23, m: 59, s: 59 });
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
        if (prev.h > 0) return { h: prev.h - 1, m: 59, s: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsApp = (action?: string) => {
    const baseMsg = "Olá! Vi a proposta de E-commerce Nacional.";
    const promo = "Quero marcar a reunião agora e garantir meus 10% de desconto.";
    const msg = action ? `${baseMsg} Ação: ${action}. ${promo}` : `${baseMsg} ${promo}`;
    window.open(`https://wa.me/5531994499024?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const PROCESS_STEPS = [
    { title: "Arquitetura", icon: <Target />, desc: "Análise de mercado e estruturação de jornada de compra para MK Bases." },
    { title: "Design Elite", icon: <PenTool />, desc: "Interface exclusiva focada em luxo, confiança e facilidade de checkout." },
    { title: "Engenharia", icon: <Code />, desc: "Código limpo e ultra veloz para carregamento instantâneo em todo o país." },
    { title: "Escalabilidade", icon: <Rocket />, desc: "Integração logística nacional e automação completa de vendas 24/7." }
  ];

  return (
    <div className="min-h-screen text-slate-200 bg-[#010409]">
      {/* Navbar Otimizada Mobile */}
      <nav className="fixed top-4 md:top-8 w-full z-[100] px-4 md:px-12 no-print">
        <div className="max-w-6xl mx-auto glass-card rounded-full px-5 md:px-8 py-3 md:py-4 flex items-center justify-between border border-white/10 shadow-2xl">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-base md:text-xl shadow-lg ring-2 ring-blue-500/20">F</div>
            <span className="font-bold text-sm md:text-xl tracking-tighter text-white uppercase italic">Future <span className="text-blue-500">Agency</span></span>
          </div>
          <button 
            onClick={() => handleWhatsApp('MARCAR REUNIÃO AGORA')} 
            className="bg-white text-black px-4 md:px-10 py-2 md:py-2.5 rounded-full text-[10px] md:text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white active:scale-95 transition-all shadow-xl"
          >
            REUNIÃO <span className="hidden xs:inline">AGORA</span>
          </button>
        </div>
      </nav>

      {/* Hero: Ajuste de Impacto Mobile */}
      <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[1000px] h-[350px] md:h-[1000px] bg-blue-600/15 rounded-full blur-[90px] md:blur-[200px] animate-pulse"></div>
        
        <div className="relative z-10 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-5 md:px-6 py-2 md:py-2 mb-8 md:mb-12 glass-card rounded-full text-blue-400 text-[9px] md:text-xs font-black uppercase tracking-[0.25em] md:tracking-[0.5em] float-animation ring-1 ring-blue-500/20">
            <Globe size={14} className="md:size-[16px]" /> LOGÍSTICA PARA TODO O BRASIL
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-[8rem] font-black mb-6 md:mb-10 leading-[1.05] md:leading-[0.85] tracking-tighter text-white uppercase italic">
            LOJA ABERTA <br />
            <span className="gradient-text">PARA TODO O PAÍS.</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-3xl text-slate-300 max-w-4xl mx-auto mb-10 md:mb-20 leading-relaxed md:leading-tight font-light italic opacity-90">
            Hoje, sem um site online, seu negócio está limitado às paredes da loja física. Enquanto você dorme, clientes de todo o <span className="text-white font-bold underline decoration-blue-500/50">Brasil</span> pesquisam seu produto e compram do concorrente.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
            <button 
              onClick={() => handleWhatsApp('REUNIÃO AGORA')}
              className="w-full sm:w-auto bg-blue-600 text-white px-10 md:px-14 py-5 md:py-8 rounded-2xl md:rounded-[3rem] font-black text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] shadow-[0_20px_50px_rgba(59,130,246,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 md:gap-4"
            >
              MARCAR REUNIÃO AGORA <Zap size={16} className="md:size-[20px]" />
            </button>
          </div>
        </div>
      </header>

      {/* Seção Institucional: Melhoria de Escala Mobile */}
      <Section className="bg-white/[0.01] border-y border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block italic">Future Agency Technology</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-tight mb-8 md:mb-10">Especialistas em <br/><span className="text-blue-500">Engenharia Digital.</span></h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed font-light mb-8 md:mb-8 italic">
              Não somos apenas desenvolvedores; somos estrategistas de conversão. Na <span className="text-white font-bold">Future Agency</span>, entendemos que um site para o setor de colchões e bases exige um equilíbrio perfeito entre estética aspiracional e robustez logística.
            </p>
            
            <div className="grid grid-cols-2 gap-5">
              <div className="p-5 md:p-6 glass-card rounded-2xl md:rounded-3xl border border-white/10">
                <span className="block text-2xl md:text-3xl font-black text-white italic mb-1">+10 ANOS</span>
                <span className="text-[8px] md:text-[10px] uppercase font-bold text-slate-500 tracking-widest">Expertise Digital</span>
              </div>
              <div className="p-5 md:p-6 glass-card rounded-2xl md:rounded-3xl border border-white/10">
                <span className="block text-2xl md:text-3xl font-black text-white italic">ELITE</span>
                <span className="text-[8px] md:text-[10px] uppercase font-bold text-slate-500 tracking-widest">Time Especialista</span>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="relative glass-card p-7 md:p-12 rounded-[2rem] md:rounded-[4rem] border border-white/10 overflow-hidden bg-gradient-to-b from-white/[0.03] to-transparent">
              <h3 className="text-white font-black text-xl md:text-2xl mb-8 md:mb-8 uppercase italic tracking-tighter">O Diferencial Técnico</h3>
              <div className="space-y-6 md:space-y-8">
                {[
                  { t: "SEO de Alta Intencionalidade", d: "Capturamos o cliente no momento exato da intenção de compra." },
                  { t: "Performance de Vanguarda", d: "Arquitetura ultra-veloz otimizada para conexões móveis 4G/5G." },
                  { t: "Conversão Estratégica", d: "Design focado em reduzir atritos e aumentar o ticket médio." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 items-start group">
                    <div className="bg-blue-600/10 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                      <CheckCircle2 className="text-blue-500 group-hover:text-white shrink-0" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base md:text-lg mb-1 italic">{item.t}</h4>
                      <p className="text-xs md:text-xs text-slate-500 leading-relaxed font-medium">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Nosso Processo Interativo: Melhoria Mobile */}
      <Section id="processo">
        <div className="text-center mb-12 md:mb-24">
          <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block italic">Como Trabalhamos</span>
          <h2 className="text-3xl sm:text-4xl md:text-8xl font-black text-white italic tracking-tighter uppercase leading-tight">Nosso Fluxo de <br/><span className="gradient-text">Construção.</span></h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <div 
              key={i} 
              onClick={() => setActiveStep(i)}
              className={`interactive-step p-6 md:p-10 rounded-2xl md:rounded-[3rem] glass-card transition-all cursor-pointer border-2 shadow-lg ${activeStep === i ? 'border-blue-600 bg-blue-600/10 scale-[1.02]' : 'border-transparent hover:border-white/10'}`}
            >
              <div className={`${activeStep === i ? 'text-white' : 'text-blue-500'} mb-4 md:mb-6 transition-transform duration-500 ${activeStep === i ? 'scale-110' : ''}`}>
                {React.cloneElement(step.icon as React.ReactElement, { size: 36 })}
              </div>
              <h4 className="text-white font-black text-base md:text-xl mb-2 md:mb-3 uppercase italic tracking-tighter">{step.title}</h4>
              <p className={`text-xs md:text-sm leading-relaxed font-medium ${activeStep === i ? 'text-slate-200' : 'text-slate-500'}`}>{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* O Prejuízo: Ajuste Mobile */}
      <Section className="bg-white/[0.02]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-5 text-red-500 font-black uppercase tracking-widest text-[10px] md:text-xs">
              <AlertCircle size={14} /> ALERTA DE MERCADO
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-black mb-8 text-white leading-tight tracking-tighter italic uppercase">O Prejuízo de <br/><span className="text-red-500">estar invisível.</span></h2>
            <p className="text-base sm:text-lg md:text-2xl text-slate-400 leading-relaxed font-light mb-10 italic">
              Estar fora do Google e não ter um e-commerce é ver seu estoque parado enquanto o Brasil inteiro compra online. O custo de oportunidade é imensurável.
            </p>
            
            <div className="space-y-5">
              <div className="glass-card p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] flex gap-5 border-l-4 border-l-red-600 shadow-xl">
                <TrendingDown className="text-red-600 shrink-0" size={28} />
                <div>
                  <h4 className="text-white font-black text-base md:text-xl italic uppercase">Inexistência Digital</h4>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">Se o cliente não te encontra no celular, ele compra do concorrente em segundos.</p>
                </div>
              </div>
              <div className="glass-card p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] flex gap-5 border-l-4 border-l-blue-600 shadow-xl">
                <Clock className="text-blue-600 shrink-0" size={28} />
                <div>
                  <h4 className="text-white font-black text-base md:text-xl italic uppercase">Venda Limitada</h4>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">Sua loja física fecha. O seu e-commerce vende 24 horas por dia, 365 dias por ano.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative text-center glass-card p-10 md:p-20 rounded-3xl md:rounded-[4rem] border border-white/10 shadow-inner">
            <Monitor size={50} md:size={64} className="mx-auto text-blue-500 mb-8" />
            <h3 className="text-white font-black text-2xl md:text-5xl italic tracking-tighter uppercase mb-6 leading-none">Presença <br/>Nacional</h3>
            <p className="text-slate-400 text-sm md:text-lg font-medium leading-relaxed mb-8 italic">
              Venda para qualquer estado do Brasil com a segurança de uma plataforma profissional projetada para escala.
            </p>
            <div className="flex justify-center gap-3">
              {[1, 2, 3].map(i => <BrazilIcon key={i} size={24} className="opacity-60" />)}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Final: Impacto Mobile Reforçado */}
      <Section>
        <div className="relative glass-card bg-gradient-to-br from-blue-900/50 via-black to-black p-10 md:p-24 rounded-[2.5rem] md:rounded-[5rem] border-2 border-blue-500/20 text-center overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.6)]">
          <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-600/10 rounded-full blur-[110px] md:blur-[150px] animate-pulse"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-white text-black rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-widest mb-10 md:mb-12 ring-4 ring-white/10">
              <Gift size={16} /> EXCLUSIVO MK BASES BOX
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-[9rem] font-black text-white mb-8 md:mb-10 italic tracking-tighter leading-none uppercase">
              GANHE <span className="text-blue-500">10% OFF</span> <br className="hidden md:block"/> FECHANDO HOJE
            </h2>
            
            <p className="text-base sm:text-xl md:text-3xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light mb-12 md:mb-16 italic opacity-90">
              Sua expansão nacional começa com uma decisão estratégica. Marque sua reunião agora e garanta sua oferta especial limitada.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
              <button 
                onClick={() => handleWhatsApp('REUNIÃO AGORA')} 
                className="w-full md:w-auto bg-blue-600 text-white px-10 md:px-16 py-5 md:py-10 rounded-2xl md:rounded-[3rem] font-black text-lg md:text-4xl shadow-2xl transition-all hover:scale-105 active:scale-95 uppercase tracking-tighter italic flex items-center justify-center gap-4 md:gap-6"
              >
                MARCAR REUNIÃO <MessageCircle size={24} md:size={40} />
              </button>
              
              <div className="glass-card px-10 py-5 rounded-2xl md:rounded-3xl border-white/10 w-full md:w-auto">
                <p className="text-[9px] md:text-[11px] text-slate-500 font-black uppercase mb-1 tracking-widest">Oferta expira em:</p>
                <div className="text-white font-black text-2xl md:text-4xl italic tracking-tighter">
                  {String(timeLeft.h).padStart(2, '0')}:{String(timeLeft.m).padStart(2, '0')}:{String(timeLeft.s).padStart(2, '0')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer Refinado */}
      <footer className="py-20 md:py-32 px-6 bg-black/80 text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <div>
              <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-3">WhatsApp</p>
              <p className="text-white font-black text-lg md:text-xl italic">{PROVIDER.whatsapp}</p>
            </div>
            <div>
              <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-3">E-mail</p>
              <p className="text-white font-black text-sm md:text-lg italic truncate px-2">{PROVIDER.email}</p>
            </div>
            <div>
              <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-3">Registro</p>
              <p className="text-white font-bold text-[10px] md:text-sm tracking-widest opacity-60">{PROVIDER.cnpj}</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 text-slate-800 text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] md:tracking-[0.8em] italic">
            <BrazilIcon size={16} /> FUTURE AGENCY TECHNOLOGY • © 2024
          </div>
        </div>
      </footer>

      {/* Floating Action Bar: Mobile Ergonômico */}
      <div className="fixed bottom-6 md:bottom-10 w-full z-[120] px-6 md:px-12 no-print pointer-events-none">
        <div className="max-w-md mx-auto flex gap-4 pointer-events-auto">
          <button 
            onClick={() => handleWhatsApp('RESGATAR 10% OFF')} 
            className="flex-1 bg-white text-black py-4 md:py-8 px-6 md:px-10 rounded-[1.75rem] md:rounded-[3.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex items-center justify-center gap-4 transition-all hover:scale-105 active:scale-95 border-b-4 border-slate-300 ring-4 ring-white/5"
          >
            <Rocket size={22} className="md:size-[36px] text-blue-600 shrink-0" />
            <div className="text-left leading-tight">
              <span className="block font-black text-xs md:text-lg uppercase italic tracking-tight">RESGATAR 10% OFF</span>
              <span className="block text-[8px] md:text-[11px] font-bold opacity-70 uppercase tracking-widest">GARANTIR CONDIÇÃO HOJE</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

