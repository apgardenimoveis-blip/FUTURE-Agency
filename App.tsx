
import React, { useState } from 'react';
import { 
  ChevronRight, 
  ShieldCheck, 
  Globe, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  Smartphone, 
  Zap, 
  Search, 
  MessageCircle, 
  Mail,
  Instagram,
  MapPin,
  Cpu,
  BarChart3,
  Award,
  ArrowRight,
  FileText,
  Star,
  Clock,
  Tag,
  Layers,
  Rocket,
  MousePointer2,
  Lock,
  Eye,
  Copy,
  Check
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';

// Types
import { ClientInfo, PlanItem } from './types';

// Constants
const CLIENT: ClientInfo = {
  name: "MK BASES Box",
  segment: "Bases e colchões",
  city: "Santa Luzia – MG",
  address: "R. Pres. Artur Bernardes, 386 – Boa Esperança – Santa Luzia – MG",
  instagram: "https://www.instagram.com/mkbasesbox",
  email: "mkbasesbox@gmail.com"
};

const PROVIDER = {
  name: "Future Agency Technology",
  whatsapp: "31 99449-9024",
  email: "futuretecnology@yahoo.com",
  instagram: "https://www.instagram.com/p/DOyfsE1Dufa/",
  cnpj: "59.627.142/0001-26"
};

const LOSS_ESTIMATE_DATA = [
  { year: '2022', loss: 45000 },
  { year: '2023', loss: 82000 },
  { year: '2024 (Projetado)', loss: 125000 },
];

const PERFORMANCE_DATA = [
  { name: 'Velocidade', score: 98 },
  { name: 'Acessibilidade', score: 100 },
  { name: 'Best Practices', score: 100 },
  { name: 'SEO', score: 100 },
];

const PLANS: PlanItem[] = [
  {
    title: "Plano Profissional",
    price: "R$ 3.000,00",
    features: [
      "Site Institucional Tecnológico",
      "Arquitetura de Alta Performance",
      "Até 6 páginas estratégicas",
      "Otimização Core Web Vitals",
      "Integração Google Business Profile",
      "Certificado SSL Blindado"
    ]
  },
  {
    title: "Plano Estratégico Premium",
    price: "R$ 3.400,00",
    highlight: "Indicado pela Agência",
    recommended: true,
    features: [
      "Tudo do Plano Profissional",
      "Catálogo Digital Inteligente",
      "Painel Adm (Full Autonomy)",
      "SEO Local de Domínio",
      "Integração de Chat Inteligente",
      "Mapa Interativo de Região",
      "Treinamento de Gestão Digital"
    ]
  },
  {
    title: "Plano Futuro Scale",
    price: "R$ 4.900,00",
    features: [
      "Plataforma E-commerce Full",
      "Checkout Transparente",
      "IA de Recomendação de Produtos",
      "Funil de Vendas Automatizado",
      "Infraestrutura AWS/Cloudflare",
      "Setup de Tráfego Pago (Google Ads)",
      "Monitoramento Mensal VIP"
    ]
  }
];

const Section: React.FC<{ children: React.ReactNode; id?: string; className?: string; dark?: boolean }> = ({ 
  children, id, className = "", dark = false 
}) => (
  <section id={id} className={`py-16 md:py-24 px-6 md:px-12 ${dark ? 'bg-slate-950 text-white' : 'bg-white'} ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const App: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleWhatsApp = (planTitle?: string) => {
    const text = planTitle 
      ? `Olá! Sou da MK BASES Box e quero fechar o ${planTitle} com o desconto de 10%!`
      : `Olá! Sou da MK BASES Box e quero iniciar minha transformação digital.`;
    window.open(`https://wa.me/55${PROVIDER.whatsapp.replace(/\D/g,'')}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      {/* Dynamic Nav - Glassmorphism */}
      <nav className="no-print fixed top-0 w-full z-[100] px-6 py-4">
        <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between shadow-2xl border border-white/20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/30">F</div>
            <span className="font-extrabold text-lg tracking-tighter text-slate-900 md:block hidden">FUTURE <span className="text-blue-600">AGENCY</span></span>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-slate-500">
              <a href="#diagnostico" className="hover:text-blue-600 transition-colors">Diagnóstico</a>
              <a href="#futuro" className="hover:text-blue-600 transition-colors">Tecnologia</a>
              <a href="#planos" className="hover:text-blue-600 transition-colors">Planos</a>
            </div>
            <button 
              onClick={() => handleWhatsApp('FECHAMENTO AGORA')}
              className="bg-slate-950 text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-2 shadow-xl"
            >
              FECHAR HOJE
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Header - Ultra Tech */}
      <header className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-mesh text-white px-6">
        <div className="absolute inset-0 tech-grid opacity-30"></div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"></div>
        
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass rounded-full border border-blue-500/30 text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em]">
            <Rocket size={14} /> High-End Digital Experience
          </div>
          <h1 className="text-6xl md:text-[7rem] font-black mb-6 leading-[0.9] tracking-tighter">
            O FUTURO DA <br />
            <span className="gradient-text">MK BASES Box</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-400 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
            A análise de mercado confirma: <span className="text-white font-medium">Sua concorrência já domina o Google</span>. É hora de retomar seu espaço com tecnologia de vanguarda.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
             <div className="flex items-center gap-5 p-6 glass rounded-3xl border border-white/5 float">
                <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 border border-blue-500/30">
                  <Cpu size={30} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Tecnologia</p>
                  <p className="text-lg font-bold">Arquitetura Next-Gen</p>
                </div>
             </div>
             <div className="flex items-center gap-5 p-6 glass rounded-3xl border border-white/5 float" style={{animationDelay: '1s'}}>
                <div className="w-14 h-14 bg-purple-600/20 rounded-2xl flex items-center justify-center text-purple-500 border border-purple-500/30">
                  <TrendingUp size={30} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Impacto</p>
                  <p className="text-lg font-bold">+100k Faturamento Est.</p>
                </div>
             </div>
          </div>
        </div>

        <div className="absolute bottom-12 flex flex-col items-center gap-3 animate-pulse">
           <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-slate-500">Scroll down</span>
           <ChevronRight size={24} className="rotate-90 text-blue-500" />
        </div>
      </header>

      {/* Critical Market Diagnosis */}
      <Section id="diagnostico" className="bg-white">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs">Market Diagnosis</span>
            <h2 className="text-5xl font-extrabold mt-6 mb-8 text-slate-900 leading-tight">Você está perdendo terreno para a concorrência</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Realizamos uma auditoria profunda no mercado de <strong>Santa Luzia e BH</strong>. O resultado é alarmante: 85% dos seus concorrentes diretos investiram em sites modernos no último ano.
            </p>
            <div className="space-y-6">
               <div className="flex gap-4 p-6 bg-red-50 rounded-3xl border border-red-100">
                  <AlertCircle className="text-red-600 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-red-900 mb-1">Perda de R$ 100k+ Anuais</h4>
                    <p className="text-sm text-red-700">Estimativa baseada em buscas não convertidas por falta de uma página qualificada e tecnológica.</p>
                  </div>
               </div>
               <div className="flex gap-4 p-6 bg-slate-900 rounded-3xl border border-slate-800 text-white">
                  <Search className="text-blue-400 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Invisibilidade Digital</h4>
                    <p className="text-sm text-slate-400">Sem um site, a MK BASES Box é invisível para o cliente que decide a compra no Google antes de sair de casa.</p>
                  </div>
               </div>
            </div>
          </div>
          <div className="relative">
             <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-8 flex items-center gap-2">
                  <BarChart3 className="text-blue-600" /> Projeção de Perda Cumulativa
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={LOSS_ESTIMATE_DATA}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                      <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
                        cursor={{fill: '#f1f5f9'}}
                      />
                      <Bar dataKey="loss" fill="#ef4444" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-200 grid grid-cols-2 gap-4">
                   <div className="text-center">
                     <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Buscas/Mês</p>
                     <p className="text-2xl font-bold text-slate-900">4.5k+</p>
                   </div>
                   <div className="text-center">
                     <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Taxa Rejeição</p>
                     <p className="text-2xl font-bold text-red-600">89%</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* Tech Stack */}
      <Section id="futuro" className="bg-slate-950 text-white overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-full tech-grid opacity-10"></div>
         <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs">Vanguarda Tecnológica</span>
              <h2 className="text-5xl font-extrabold mt-6 mb-8 leading-tight">Construído com o que há de mais moderno no planeta</h2>
              <p className="text-slate-400 text-lg">
                Não entregamos um site comum. Entregamos uma aplicação web de alta performance que carrega instantaneamente.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
               {[
                 { title: "Ultra Velocidade", desc: "Site carrega em menos de 1s, essencial para mobile.", icon: <Zap /> },
                 { title: "SEO Semântico", desc: "Indexação agressiva para dominar as buscas locais.", icon: <Layers /> },
                 { title: "UX Imersiva", desc: "Design focado em levar o cliente direto ao WhatsApp.", icon: <MousePointer2 /> },
                 { title: "Segurança Cloud", desc: "Hospedagem em nuvem com proteção contra ataques.", icon: <Lock /> },
               ].map((item, i) => (
                 <div key={i} className="p-8 glass rounded-[2.5rem] border border-white/5 hover:border-blue-500/50 transition-all group">
                   <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                     {item.icon}
                   </div>
                   <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                   <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>

            <div className="mt-20 p-12 glass rounded-[3rem] border border-white/10 flex flex-col md:flex-row items-center gap-12">
               <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Award className="text-yellow-500" /> Meta: 100/100 Lighthouse
                  </h3>
                  <p className="text-slate-400 mb-8">
                    Garantimos que seu site terá pontuação máxima nas ferramentas do Google. Isso faz com que você pague menos em anúncios e apareça em primeiro no orgânico.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {PERFORMANCE_DATA.map((d, i) => (
                      <div key={i} className="px-4 py-2 bg-white/5 rounded-full border border-white/10 flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-green-400" />
                        <span className="text-xs font-bold uppercase tracking-widest">{d.name}: {d.score}</span>
                      </div>
                    ))}
                  </div>
               </div>
               <div className="w-full md:w-1/3 aspect-square relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-blue-600/20 blur-[60px] animate-pulse"></div>
                  <div className="relative w-48 h-48 rounded-full border-8 border-blue-500 flex flex-col items-center justify-center">
                     <span className="text-6xl font-black">100</span>
                     <span className="text-[10px] uppercase font-bold tracking-widest text-blue-300">Performance</span>
                  </div>
               </div>
            </div>
         </div>
      </Section>

      {/* Pricing */}
      <Section id="planos" className="bg-slate-50 relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-950 to-transparent"></div>
        <div className="relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6 shadow-xl shadow-red-500/20">
              <Clock size={14} /> Oferta Limitada: Apenas 2 vagas p/ Santa Luzia este mês
            </div>
            <h2 className="text-5xl font-extrabold text-slate-900 mb-6">Investimento & ROI</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Cada plano é desenhado para um estágio de crescimento. Recomendamos o <span className="text-blue-600 font-bold">Estratégico Premium</span> para dominar o mercado regional.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {PLANS.map((plan, i) => (
              <div 
                key={i} 
                className={`relative bg-white p-12 rounded-[3rem] border-2 ${plan.recommended ? 'border-blue-500 shadow-[0_40px_80px_-15px_rgba(37,99,235,0.2)] scale-105 z-10' : 'border-slate-100 shadow-xl shadow-slate-200/50'} transition-all flex flex-col group`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-2.5 rounded-full shadow-2xl flex items-center gap-2">
                    <Star size={14} className="fill-white" /> {plan.highlight}
                  </div>
                )}
                <h3 className="text-2xl font-black mb-1 text-slate-900 tracking-tighter uppercase">{plan.title}</h3>
                <p className="text-4xl font-black text-blue-600 mb-8 tracking-tighter">{plan.price}</p>
                
                <div className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3 text-sm">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                      <span className="text-slate-600 leading-tight font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => handleWhatsApp(plan.title)}
                  className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 ${plan.recommended ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-500/40' : 'bg-slate-900 text-white hover:bg-blue-600'}`}
                >
                  <MessageCircle size={18} />
                  Solicitar este plano
                </button>
              </div>
            ))}
          </div>

          {/* Discount Section */}
          <div className="mt-20 max-w-5xl mx-auto">
             <div className="relative overflow-hidden bg-slate-900 rounded-[3.5rem] p-1 shadow-3xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 blur-[80px]"></div>
                <div className="bg-slate-900/40 backdrop-blur-xl p-10 md:p-16 rounded-[3.4rem] flex flex-col md:flex-row items-center gap-12 border border-white/10">
                   <div className="flex-1">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                        <Tag size={14} /> Flash Deal - MK BASES Box Special
                      </div>
                      <h4 className="text-4xl font-extrabold text-white mb-6">Fechamento Prioritário: -10% de Desconto</h4>
                      <p className="text-slate-400 text-lg leading-relaxed">
                        Entendemos a urgência da <span className="text-white font-bold">MK BASES Box</span> em recuperar o tempo perdido. Por isso, oferecemos 10% de desconto para contratos assinados nas próximas 24 horas.
                      </p>
                   </div>
                   <div className="flex-shrink-0">
                      <button 
                        onClick={() => handleWhatsApp('DESCONTO 10% HOJE')}
                        className="bg-green-500 hover:bg-green-400 text-slate-950 px-10 py-8 rounded-[2rem] font-black text-xl shadow-2xl shadow-green-500/20 transition-all flex flex-col items-center group scale-100 hover:scale-105"
                      >
                        <span className="tracking-tighter uppercase">Ativar Cupom -10%</span>
                        <span className="text-xs opacity-70 font-bold uppercase tracking-[0.2em] mt-1">Clique para fechar agora</span>
                      </button>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* ROI */}
      <Section className="bg-white">
         <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100">
               <h3 className="text-3xl font-black mb-8 text-slate-900">Como o site se paga?</h3>
               <div className="space-y-6">
                  <div className="flex items-center justify-between p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                     <span className="text-slate-500 font-bold">Investimento Sugerido</span>
                     <span className="text-xl font-black text-blue-600">R$ 3.400</span>
                  </div>
                  <div className="flex items-center justify-between p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                     <span className="text-slate-500 font-bold">Preço Médio Conjunto Box</span>
                     <span className="text-xl font-black text-slate-900">R$ 1.800</span>
                  </div>
                  <div className="p-8 bg-blue-600 rounded-3xl text-white text-center shadow-2xl shadow-blue-500/30">
                     <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2 opacity-80">Ponto de Equilíbrio</p>
                     <p className="text-4xl font-black tracking-tighter">Apenas 2 vendas</p>
                     <p className="text-[11px] mt-4 font-medium opacity-90">Com apenas 2 vendas vindas do Google, sua estrutura digital já está totalmente paga. Todo o restante é lucro direto para a MK BASES Box.</p>
                  </div>
               </div>
            </div>
            <div>
               <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs">Visão de Futuro</span>
               <h2 className="text-5xl font-extrabold mt-6 mb-8 text-slate-900">Escalabilidade & Domínio Regional</h2>
               <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                 O objetivo final é transformar a <span className="font-bold text-slate-900">MK BASES Box</span> na maior referência de bases e colchões do Vetor Norte. Com nossa tecnologia, você terá os dados e a estrutura para expandir para todo o estado.
               </p>
               <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200">
                    <Eye className="text-blue-600 mb-4" />
                    <h5 className="font-bold mb-2">Visibilidade</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">Sua marca presente onde o cliente estiver buscando.</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200">
                    <ShieldCheck className="text-blue-600 mb-4" />
                    <h5 className="font-bold mb-2">Autoridade</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">Transmitir confiança para fechar compras de alto ticket.</p>
                  </div>
               </div>
            </div>
         </div>
      </Section>

      {/* Footer Closing */}
      <Section className="bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto py-20">
          <p className="text-blue-400 font-black uppercase tracking-[0.5em] text-xs mb-12">Final Statement</p>
          <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter leading-tight italic">
            "O SUCESSO NO DIGITAL NÃO É SORTE, <br /> É TECNOLOGIA E ESTRATÉGIA."
          </h2>
          
          <div className="inline-flex flex-col items-center gap-6 glass p-12 rounded-[4rem] border border-white/10 mb-20 shadow-3xl">
             <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="text-left cursor-pointer group" onClick={() => handleWhatsApp()}>
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-2 group-hover:text-blue-400 transition-colors">Immediate Contact</p>
                  <p className="text-3xl font-black tracking-tighter">{PROVIDER.whatsapp}</p>
               </div>
               <div className="w-px h-16 bg-white/10 hidden md:block"></div>
               <div className="text-left">
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-2">Professional Inquiry</p>
                  <p className="text-2xl font-black tracking-tighter lowercase">{PROVIDER.email}</p>
               </div>
             </div>
             <div className="mt-8 pt-8 border-t border-white/5 w-full flex flex-col items-center">
                <span className="text-[9px] uppercase tracking-[0.4em] font-black text-slate-600">CNPJ: {PROVIDER.cnpj} | Future Agency Tech © 2024</span>
             </div>
          </div>
        </div>
      </Section>

      {/* Floating Action Bar */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 no-print z-[100] flex gap-4">
        <button 
          onClick={() => handleWhatsApp('FECHAMENTO AGORA')}
          className="bg-green-500 text-slate-950 px-10 py-5 rounded-2xl shadow-[0_20px_50px_rgba(34,197,94,0.4)] hover:bg-green-400 transition-all flex items-center gap-3 scale-100 hover:scale-105"
        >
          <MessageCircle size={24} className="fill-slate-950" />
          <span className="font-black text-sm uppercase tracking-widest">Ativar Desconto -10% HOJE</span>
        </button>
        
        <button 
          onClick={copyToClipboard}
          className={`px-8 py-5 rounded-2xl shadow-2xl transition-all flex items-center gap-3 scale-100 hover:scale-105 ${copied ? 'bg-blue-600 text-white' : 'bg-slate-900 text-white'}`}
        >
          {copied ? <Check size={22} /> : <Copy size={22} />}
          <span className="font-black text-sm uppercase tracking-widest">
            {copied ? 'Link Copiado!' : 'Copiar Link da Proposta'}
          </span>
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          body::before {
            content: "MK BASES Box - Proposta de Estruturação Digital Profissional | Future Agency Technology";
            display: block;
            background: #0f172a;
            padding: 15px;
            font-size: 10px;
            text-align: center;
            color: #94a3b8;
            font-weight: bold;
          }
          .tech-grid { background: none !important; }
        }
      `}} />
    </div>
  );
};

export default App;
