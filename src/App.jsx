"use client";

import { useEffect, useRef } from "react";
import { ArrowDownRight, ArrowRight, ArrowUpRight, BookOpen, Heart, MessageCircle, Plus, Sparkles } from "lucide-react";

const whatsappUrl = "https://wa.me/5587988264918?text=Ol%C3%A1%2C%20Josiane!%20Gostaria%20de%20saber%20mais%20sobre%20as%20sess%C3%B5es.";
const ebookUrl = "https://drive.google.com/file/d/1KXa5v0GRWO5NpCS3Dxlie0m1DBNQTgv5/view";

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.296-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.148-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.075-.792.372-.273.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.895 9.83 9.83 0 0 1 2.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.055 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.9 11.9 0 0 0 5.689 1.448h.005c6.559 0 11.894-5.335 11.897-11.893a11.82 11.82 0 0 0-3.489-8.413Z" />
    </svg>
  );
}

const professionalSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Josiane Santos Psicologia",
  description: "Psicoterapia online para mulheres com foco em autoestima, insegurança, confiança e relacionamentos.",
  telephone: "+55 87 98826-4918",
  priceRange: "Consulte valores",
  areaServed: [
    { "@type": "City", name: "Petrolina", containedInPlace: { "@type": "State", name: "Pernambuco" } },
    { "@type": "City", name: "Juazeiro", containedInPlace: { "@type": "State", name: "Bahia" } },
    { "@type": "Country", name: "Brasil" },
  ],
  sameAs: ["https://www.instagram.com/josianepsi/"],
  founder: { "@type": "Person", name: "Josiane Santos", jobTitle: "Psicóloga", identifier: "CRP 02/25621" },
};

export default function Home() {
  const heroArt = useRef(null);

  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14 }
    );
    document.querySelectorAll(".reveal").forEach((element) => reveal.observe(element));
    return () => reveal.disconnect();
  }, []);

  function handlePointer(event) {
    if (!heroArt.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -10;
    heroArt.current.style.setProperty("--rx", `${y}deg`);
    heroArt.current.style.setProperty("--ry", `${x}deg`);
  }

  return (
    <main onPointerMove={handlePointer}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalSchema) }} />
      <div className="noise" aria-hidden="true" />

      <nav className="topbar" aria-label="Navegação principal">
        <a className="brand" href="#inicio" aria-label="Josiane Santos — início">
          <span>JS</span><strong>Josiane Santos</strong>
        </a>
        <div className="nav-links">
          <a href="#sobre">Sobre</a><a href="#caminhos">Como posso ajudar</a><a href="#ebook">E-book</a><a href="#duvidas">Dúvidas</a>
        </div>
        <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Agendar conversa pelo WhatsApp"><span>Agendar conversa</span><ArrowDownRight /></a>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-copy reveal">
          <p className="kicker"><span /> Psicóloga • CRP 02/25621</p>
          <h1>Voltar a confiar em si também é um <em>recomeço.</em></h1>
          <p className="hero-text">Um espaço de escuta para mulheres que desejam compreender suas inseguranças, fortalecer a autoestima e construir relações mais gentis consigo mesmas.</p>
          <div className="hero-actions">
            <a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">Agende sua sessão <ArrowRight /></a>
            <a className="text-link" href="#sobre">Conheça meu trabalho <ArrowDownRight /></a>
          </div>
          <div className="trust-line"><span>Atendimento psicológico</span><span>Abordagem TCC</span><span>Para mulheres</span></div>
        </div>

        <div className="hero-visual reveal" ref={heroArt}>
          <div className="visual-orbit orbit-one" aria-hidden="true" />
          <div className="visual-orbit orbit-two" aria-hidden="true" />
          <div className="photo-frame"><img src="/josiane-santos.webp" alt="Psicóloga Josiane Santos sorrindo" width="720" height="960" fetchPriority="high" decoding="async" /></div>
          <div className="flower-cutout" aria-hidden="true"><img src="/capa-ebook-autoestima.webp" alt="" width="555" height="625" decoding="async" /></div>
          <div className="floating-note"><Sparkles /><span>Autoestima<br />e confiança</span></div>
          <div className="floating-number"><small>Há mais de</small><strong>2 anos</strong><small>acolhendo mulheres</small></div>
          <span className="dot dot-a" aria-hidden="true" /><span className="dot dot-b" aria-hidden="true" />
        </div>
      </section>

      <div className="marquee" aria-hidden="true"><div>Autoconhecimento <i /> Confiança <i /> Limites <i /> Relações <i /> Autoestima <i /> Autoconhecimento <i /> Confiança <i /> Limites <i /> Relações <i /> Autoestima <i /></div></div>

      <section className="journey section" id="caminhos">
        <div className="section-heading reveal">
          <p className="section-index">01 — Caminhos possíveis</p>
          <h2>Talvez você esteja cansada de se diminuir para caber.</h2>
          <p>Na terapia, podemos olhar com cuidado para padrões que se repetem e abrir espaço para escolhas mais conscientes.</p>
        </div>
        <div className="cards">
          <article className="care-card reveal"><span>01</span><Heart /><h3>Autoestima</h3><p>Reconhecer seu valor sem depender o tempo todo da validação de outras pessoas.</p></article>
          <article className="care-card featured-card reveal"><span>02</span><MessageCircle /><h3>Insegurança</h3><p>Compreender a autocrítica e construir uma voz interna mais segura e acolhedora.</p></article>
          <article className="care-card reveal"><span>03</span><Sparkles /><h3>Relações</h3><p>Aprender a comunicar limites e viver vínculos com mais presença e autenticidade.</p></article>
        </div>
      </section>

      <section className="about section" id="sobre">
        <div className="about-art reveal">
          <div className="about-photo"><img src="/josiane-santos.webp" alt="Josiane Santos em seu espaço de atendimento" width="720" height="960" loading="lazy" decoding="async" /></div>
          <p>“Você não precisa ter todas as respostas para começar a cuidar de si.”</p>
          <span className="signature">Josiane</span>
        </div>
        <div className="about-copy reveal">
          <p className="section-index">02 — Sobre mim</p>
          <h2>Escuta sensível, presença e um caminho construído com você.</h2>
          <p>Sou Josiane Santos, psicóloga e pós-graduanda em Terapia Cognitivo-Comportamental. Meu trabalho é voltado ao fortalecimento emocional de mulheres, respeitando a história, o ritmo e as necessidades de cada pessoa.</p>
          <p>Acredito em uma psicoterapia próxima e colaborativa: você participa ativamente do processo enquanto construímos novas formas de compreender pensamentos, emoções e escolhas.</p>
          <div className="credentials"><div><strong>CRP</strong><span>02/25621</span></div><div><strong>Abordagem</strong><span>TCC</span></div><div><strong>Atendimento</strong><span>Online</span></div></div>
          <a className="text-link dark-link" href={whatsappUrl} target="_blank" rel="noreferrer">Vamos conversar <ArrowRight /></a>
        </div>
      </section>

      <section className="ebook section" id="ebook">
        <div className="ebook-copy reveal">
          <p className="section-index">03 — Um presente para você</p>
          <h2>Como construir uma boa autoestima.</h2>
          <p>Um material gratuito para começar a observar sua relação consigo mesma e dar os primeiros passos com mais consciência.</p>
          <a className="button button-light" href={ebookUrl} target="_blank" rel="noreferrer"><BookOpen /> Baixar e-book gratuito <ArrowRight /></a>
        </div>
        <div className="book-scene reveal" aria-hidden="true">
          <div className="book"><img src="/capa-ebook-autoestima.webp" alt="" width="555" height="625" loading="lazy" decoding="async" /><span /></div>
          <div className="book-shadow" />
        </div>
      </section>

      <section className="faq section" id="duvidas">
        <div className="faq-heading reveal">
          <p className="section-index">04 — Dúvidas frequentes</p>
          <h2>Antes de começar, é natural ter perguntas.</h2>
          <p>Reuni aqui respostas rápidas para você entender melhor como funciona o processo.</p>
        </div>
        <div className="faq-list reveal">
          <details open>
            <summary><span>Como funciona a primeira sessão?</span><Plus /></summary>
            <p>É um primeiro encontro de acolhimento. Você pode contar o que a trouxe até a terapia, tirar dúvidas e conhecer a forma de trabalho da Josiane, sem precisar chegar com tudo organizado.</p>
          </details>
          <details>
            <summary><span>Para quem é o atendimento?</span><Plus /></summary>
            <p>O trabalho é direcionado a mulheres que desejam cuidar da autoestima, compreender inseguranças e construir relações mais saudáveis consigo mesmas e com outras pessoas.</p>
          </details>
          <details>
            <summary><span>Como funciona a terapia online?</span><Plus /></summary>
            <p>As sessões acontecem por videochamada, em horário combinado. Você precisa de internet estável e de um ambiente reservado onde se sinta confortável para conversar.</p>
          </details>
          <details>
            <summary><span>Qual é a frequência das sessões?</span><Plus /></summary>
            <p>A frequência é conversada a partir das suas necessidades e da avaliação inicial. A proposta do acompanhamento é explicada com transparência antes de qualquer decisão.</p>
          </details>
          <details>
            <summary><span>Como saber valores e horários disponíveis?</span><Plus /></summary>
            <p>Essas informações são compartilhadas diretamente pelo WhatsApp. Você pode enviar uma mensagem sem compromisso para consultar disponibilidade e esclarecer outras dúvidas.</p>
          </details>
          <details>
            <summary><span>Você atende mulheres de Petrolina e Juazeiro?</span><Plus /></summary>
            <p>Sim. O atendimento é realizado online, permitindo que mulheres de Petrolina, Juazeiro da Bahia e de outras cidades façam terapia com conforto, privacidade e sem deslocamento.</p>
          </details>
        </div>
      </section>

      <section className="final-cta section reveal">
        <div className="cta-panel">
          <div className="cta-copy">
            <p className="section-index">Seu próximo passo</p>
            <h2>Um primeiro contato pode ser mais simples do que parece.</h2>
            <p>Envie uma mensagem para tirar dúvidas, consultar horários e entender se este acompanhamento faz sentido para você.</p>
          </div>
          <div className="cta-action">
            <a className="button cta-button" href={whatsappUrl} target="_blank" rel="noreferrer">Conversar no WhatsApp <ArrowUpRight /></a>
            <span>Resposta em horário comercial</span>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand"><span className="footer-monogram">JS</span><div><strong>Josiane Santos</strong><span>Psicóloga • CRP 02/25621</span></div></div>
          <div className="footer-column"><strong>Navegue</strong><a href="#inicio">Início</a><a href="#sobre">Sobre mim</a><a href="#caminhos">Como posso ajudar</a><a href="#duvidas">Dúvidas</a></div>
          <div className="footer-column"><strong>Conteúdos</strong><a href="#ebook">E-book gratuito</a><a href="https://www.instagram.com/josianepsi/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight /></a></div>
          <div className="footer-column footer-contact"><strong>Vamos conversar?</strong><p>Consulte horários e tire suas dúvidas pelo WhatsApp.</p><a href={whatsappUrl} target="_blank" rel="noreferrer">Enviar mensagem <ArrowRight /></a></div>
        </div>
        <div className="footer-bottom">
          <p className="footer-legal">© {new Date().getFullYear()} Josiane Santos <span aria-hidden="true">•</span> Todos os direitos reservados.</p>
          <a href="https://www.instagram.com/gabrielasneto/" target="_blank" rel="noreferrer">Desenvolvido por @gabrielasneto <ArrowUpRight /></a>
        </div>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Conversar com Josiane pelo WhatsApp">
        <WhatsAppIcon />
        <span>WhatsApp</span>
      </a>
    </main>
  );
}
