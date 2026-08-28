import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft,
  ShieldCheck, 
  Award, 
  Share2, 
  Copy, 
  ChevronDown, 
  Zap, 
  Percent,
  CheckCircle2,
  Mail,
  User,
  Building,
  Dumbbell,
  Users,
  Smartphone
} from 'lucide-react';

interface WaitlistPageProps {
  lang: 'en' | 'fr';
  onContactClick: () => void;
  onBackToHome: () => void;
}

type ProfileType = 'INDIVIDUAL ATHLETE' | 'COACH / TRAINER' | 'PARENT' | 'ATHLETIC DIRECTOR';

export const WaitlistPage: React.FC<WaitlistPageProps> = ({
  lang,
  onContactClick,
  onBackToHome
}) => {
  // Stepper state: 1 = Profile, 2 = Sport, 3 = Confirm
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    profile: 'INDIVIDUAL ATHLETE' as ProfileType,
    sport: 'BASKETBALL',
    fullName: '',
    email: ''
  });

  const t = {
    en: {
      breadcrumbs: {
        home: "HOME",
        waitlist: "WAITLIST"
      },
      backToHome: "Back to Home",
      hero: {
        badge: "EARLY ACCESS REGISTRATION",
        titleLine1: "JOIN THE WAITLIST",
        titleLine2: "TO PRO ATHLETE.",
        intro: "Join the waitlist to be among the first to hear when the PRO ATHLETE app launches and get early access opportunities."
      },
      sideBenefits: {
        badge: "WAITLIST BENEFITS",
        title: "WHAT YOU GET",
        items: [
          {
            title: "BE FIRST IN LINE",
            desc: "Get priority updates and early access to the PRO ATHLETE Web Platform when it becomes available."
          },
          {
            title: "TRAIN SMARTER, ANYWHERE",
            desc: "Access PRO ATHLETE programs and tools directly from the app making it easier to train and stay connected on any device."
          },
          {
            title: "SAVE 10% AT LAUNCH",
            desc: "Waitlist members will receive an exclusive 10% launch discount on eligible premium subscriptions."
          }
        ]
      },
      stepper: {
        step1: "PROFILE",
        step2: "SPORT",
        step3: "CONFIRM"
      },
      step1: {
        title: "SELECT YOUR PROFILE",
        subtitle: "We customize programs specifically for your role in the sport.",
        cardEyebrow: "PRO ATHLETE",
        profiles: [
          {
            id: 'INDIVIDUAL ATHLETE' as ProfileType,
            label: "INDIVIDUAL ATHLETE",
            sublabel: "Personal development, mobility, drills & training plans"
          },
          {
            id: 'COACH / TRAINER' as ProfileType,
            label: "COACH / TRAINER",
            sublabel: "Roster oversight, team workouts & injury screening"
          },
          {
            id: 'PARENT' as ProfileType,
            label: "PARENT",
            sublabel: "Youth athletic progress tracking & safety protocols"
          },
          {
            id: 'ATHLETIC DIRECTOR' as ProfileType,
            label: "ATHLETIC DIRECTOR",
            sublabel: "Club & academy-wide program administration"
          }
        ],
        continueBtn: "CONTINUE"
      },
      step2: {
        title: "SELECT YOUR PRIMARY SPORT",
        subtitle: "Choose your main discipline to tailor your early access routines.",
        sports: [
          { id: "BASKETBALL", name: "Basketball", icon: "🏀" },
          { id: "SOCCER", name: "Soccer / Football", icon: "⚽" },
          { id: "VOLLEYBALL", name: "Volleyball", icon: "🏐" },
          { id: "TRACK", name: "Track & Field", icon: "🏃" },
          { id: "FOOTBALL", name: "American Football", icon: "🏈" },
          { id: "HOCKEY", name: "Ice Hockey", icon: "🏒" },
          { id: "TENNIS", name: "Tennis", icon: "🎾" },
          { id: "MULTI_SPORT", name: "Multi-Sport / All Programs", icon: "⚡" }
        ],
        backBtn: "BACK",
        continueBtn: "CONTINUE"
      },
      step3: {
        title: "CONFIRM YOUR RESERVATION",
        subtitle: "Enter your contact details to secure your spot and lock in your 10% launch discount.",
        selectedRole: "Selected Profile:",
        selectedSport: "Primary Sport:",
        fullNameLabel: "Full Name",
        fullNamePlaceholder: "e.g. Alex Henderson",
        emailLabel: "Email Address",
        emailPlaceholder: "e.g. alex@example.com",
        orgLabel: "Team, School, or Organization (Optional)",
        orgPlaceholder: "e.g. Metro Elite Athletics",
        referralLabel: "Referral / VIP Code (Optional)",
        referralPlaceholder: "e.g. VIP2026",
        discountBadge: "10% Launch Discount will be linked to this email address",
        privacyNotice: "No spam. We'll only send official launch notifications and early access invitations.",
        backBtn: "BACK",
        submitBtn: "CONFIRM & JOIN WAITLIST"
      },
      success: {
        badge: "WAITLIST RESERVATION CONFIRMED",
        title: "YOU'RE ON THE WAITLIST!",
        subtitle: "We've registered your early access reservation for PRO ATHLETE.",
        summaryHeader: "RESERVATION SUMMARY",
        profile: "Profile Role",
        sport: "Sport Focus",
        email: "Contact Email",
        perksHeader: "PERKS LOCKED IN FOR YOUR LAUNCH",
        perk1: "Exclusive 10% launch discount on eligible subscriptions",
        perk2: "Priority early access notification before public release",
        perk3: "Direct access across web, iOS, and Android platforms",
        shareTitle: "SHARE WITH TEAMMATES & COLLEAGUES",
        shareDesc: "Know an athlete, coach, or director who should get early access? Share the waitlist with them.",
        copyBtn: "Copy Link",
        copied: "Copied to clipboard!",
        backBtn: "Return to Homepage",
        resetBtn: "Submit another registration"
      },
      institutional: {
        title: "LOOKING FOR A TEAM OR CLUB PILOT?",
        desc: "If your athletic department or sports club is looking for immediate roster integration, connect directly with our directors.",
        btn: "TALK TO OUR TEAM"
      },
      faq: {
        title: "FREQUENTLY ASKED QUESTIONS",
        questions: [
          {
            q: "WHEN DOES THE PRO ATHLETE APP OFFICIALLY LAUNCH?",
            a: "We are currently conducting closed testing waves. Waitlist members will receive priority invites and platform access as new waves open prior to public launch."
          },
          {
            q: "HOW WILL I RECEIVE MY 10% LAUNCH DISCOUNT?",
            a: "Your 10% discount is tied to the email address you register with. When early access opens, your private invite link will automatically have the discount applied."
          },
          {
            q: "IS JOINING THE WAITLIST COMPLETELY FREE?",
            a: "Yes, joining the waitlist is 100% free with no payment method or commitment required. It simply guarantees your early access opportunity."
          },
          {
            q: "CAN I REGISTER AN ENTIRE TEAM OR ATHLETIC DEPARTMENT?",
            a: "Yes! Choose 'Coach / Trainer' or 'Athletic Director', or use the 'Talk to Our Team' button below for a dedicated pilot."
          }
        ]
      }
    },
    fr: {
      breadcrumbs: {
        home: "ACCUEIL",
        waitlist: "LISTE D'ATTENTE"
      },
      backToHome: "Retour à l'accueil",
      hero: {
        badge: "INSCRIPTION À L'ACCÈS ANTICIPÉ",
        titleLine1: "REJOIGNEZ LA LISTE D'ATTENTE",
        titleLine2: "DE PRO ATHLETE.",
        intro: "Inscrivez-vous sur la liste d'attente pour être parmi les premiers informés du lancement de l'application PRO ATHLETE et bénéficier d'opportunités d'accès anticipé."
      },
      sideBenefits: {
        badge: "AVANTAGES LISTE D'ATTENTE",
        title: "VOS PRIVILÈGES",
        items: [
          {
            title: "SOYEZ LES PREMIERS",
            desc: "Bénéficiez de mises à jour prioritaires et d'un accès anticipé à la plateforme web PRO ATHLETE dès sa sortie."
          },
          {
            title: "ENTRAÎNEZ-VOUS MIEUX, PARTOUT",
            desc: "Accédez aux programmes et outils PRO ATHLETE directement depuis l'application pour vous entraîner et rester connecté sur tous vos appareils."
          },
          {
            title: "ÉCONOMISEZ 10% AU LANCEMENT",
            desc: "Les membres de la liste d'attente recevront une réduction exclusive de 10% au lancement sur les abonnements premium éligibles."
          }
        ]
      },
      stepper: {
        step1: "PROFIL",
        step2: "SPORT",
        step3: "CONFIRMATION"
      },
      step1: {
        title: "CHOISISSEZ VOTRE PROFIL",
        subtitle: "Nous adaptons les programmes précisément selon votre rôle dans le sport.",
        cardEyebrow: "PRO ATHLETE",
        profiles: [
          {
            id: 'INDIVIDUAL ATHLETE' as ProfileType,
            label: "INDIVIDUAL ATHLETE",
            sublabel: "Développement individuel, mobilité et protocoles"
          },
          {
            id: 'COACH / TRAINER' as ProfileType,
            label: "COACH / TRAINER",
            sublabel: "Supervision d'effectif, plans d'équipe et prévention"
          },
          {
            id: 'PARENT' as ProfileType,
            label: "PARENT",
            sublabel: "Suivi athlétique des jeunes et sécurité sportive"
          },
          {
            id: 'ATHLETIC DIRECTOR' as ProfileType,
            label: "ATHLETIC DIRECTOR",
            sublabel: "Administration globale pour clubs et académies"
          }
        ],
        continueBtn: "CONTINUER"
      },
      step2: {
        title: "CHOISISSEZ VOTRE SPORT PRINCIPAL",
        subtitle: "Sélectionnez votre discipline pour personnaliser vos routines d'accès anticipé.",
        sports: [
          { id: "BASKETBALL", name: "Basketball", icon: "🏀" },
          { id: "SOCCER", name: "Soccer / Football", icon: "⚽" },
          { id: "VOLLEYBALL", name: "Volleyball", icon: "🏐" },
          { id: "TRACK", name: "Athlétisme", icon: "🏃" },
          { id: "FOOTBALL", name: "Football américain", icon: "🏈" },
          { id: "HOCKEY", name: "Hockey sur glace", icon: "🏒" },
          { id: "TENNIS", name: "Tennis", icon: "🎾" },
          { id: "MULTI_SPORT", name: "Multi-sport / Tout le club", icon: "⚡" }
        ],
        backBtn: "RETOUR",
        continueBtn: "CONTINUER"
      },
      step3: {
        title: "CONFIRMEZ VOTRE INSCRIPTION",
        subtitle: "Saisissez vos coordonnées pour garantir votre place et verrouiller vos 10% de réduction.",
        selectedRole: "Profil sélectionné :",
        selectedSport: "Sport principal :",
        fullNameLabel: "Nom complet",
        fullNamePlaceholder: "ex. Jean-François Mercier",
        emailLabel: "Adresse e-mail",
        emailPlaceholder: "ex. jf.mercier@club.ca",
        orgLabel: "Club, école ou académie (Optionnel)",
        orgPlaceholder: "ex. Académie Sportive de Montréal",
        referralLabel: "Code d'invitation (Optionnel)",
        referralPlaceholder: "ex. VIP2026",
        discountBadge: "Rabais de 10% au lancement associé automatiquement à cet e-mail",
        privacyNotice: "Aucun spam. Nous n'envoyons que les annonces officielles et invitations d'accès.",
        backBtn: "RETOUR",
        submitBtn: "CONFIRMER ET REJOINDRE"
      },
      success: {
        badge: "RÉSERVATION CONFIRMÉE",
        title: "VOUS ÊTES SUR LA LISTE D'ATTENTE !",
        subtitle: "Votre demande d'accès anticipé à PRO ATHLETE a été enregistrée avec succès.",
        summaryHeader: "RÉCAPITULATIF DE VOTRE RÉSERVATION",
        profile: "Rôle",
        sport: "Discipline",
        email: "Adresse e-mail",
        perksHeader: "AVANTAGES VERROUILLÉS POUR LE LANCEMENT",
        perk1: "Remise exclusive de 10% au lancement sur les abonnements éligibles",
        perk2: "Notification d'accès prioritaire avant la sortie publique",
        perk3: "Accès multi-plateforme sur web, iOS et Android",
        shareTitle: "PARTAGEZ AVEC VOS COÉQUIPIERS ET COLLÈGUES",
        shareDesc: "Vous connaissez un joueur, entraîneur ou directeur intéressé ? Partagez ce lien avec lui.",
        copyBtn: "Copier le lien",
        copied: "Lien copié !",
        backBtn: "Retour à l'accueil",
        resetBtn: "Inscrire une autre personne"
      },
      institutional: {
        title: "VOUS SOUHAITEZ UN PILOTE POUR VOTRE CLUB ?",
        desc: "Si votre organisation ou section sportive a besoin d'une intégration d'équipe directe, prenez rendez-vous avec notre direction.",
        btn: "PARLER À NOTRE ÉQUIPE"
      },
      faq: {
        title: "FOIRE AUX QUESTIONS",
        questions: [
          {
            q: "QUAND SERA LANCÉE L'APPLICATION PRO ATHLETE ?",
            a: "Nous effectuons des phases de tests progressives. Les membres de la liste recevront leurs invitations prioritaires dès l'ouverture des nouvelles vagues."
          },
          {
            q: "COMMENT OBTENIR MON RABAIS DE 10% AU LANCEMENT ?",
            a: "Votre rabais de 10% est directement associé à votre adresse e-mail. Dès l'ouverture, votre lien d'invitation personnel appliquera automatiquement cette réduction."
          },
          {
            q: "L'INSCRIPTION EST-ELLE TOTALEMENT GRATUITE ?",
            a: "Oui, 100% gratuite et sans aucun moyen de paiement requis. Elle assure uniquement votre priorité et vos privilèges."
          },
          {
            q: "PUIS-JE INSCRIRE UN CLUB OU TOUTE UNE SECTION SPORTIVE ?",
            a: "Oui ! Choisissez 'Coach / Trainer' ou 'Athletic Director', ou cliquez sur 'Parler à notre équipe'."
          }
        ]
      }
    }
  }[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim()) return;
    setIsSubmitted(true);
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  const copyShareLink = () => {
    const link = 'https://proathlete.ca/waitlist';
    navigator.clipboard.writeText(link);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  return (
    <div className="bg-[#002337] text-white min-h-screen pt-24 pb-20 px-4 md:px-8 selection:bg-[#005776] selection:text-white">
      {/* Ambient background lighting */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-[#005776]/15 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between gap-4 mb-8 text-xs font-bold tracking-widest uppercase text-white/60">
          <div className="flex items-center gap-2">
            <button 
              onClick={onBackToHome}
              className="hover:text-[#5CE1E6] transition-colors"
            >
              {t.breadcrumbs.home}
            </button>
            <span>/</span>
            <span className="text-[#5CE1E6]">{t.breadcrumbs.waitlist}</span>
          </div>

          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-white/10 hover:border-[#5CE1E6] bg-[#001f30]/70 backdrop-blur-sm"
          >
            ← {t.backToHome}
          </button>
        </div>

        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#005776]/40 border border-[#5CE1E6]/30 text-[#5CE1E6] px-4 py-1.5 rounded-full text-[11px] font-black tracking-widest uppercase mb-6 shadow-lg shadow-[#005776]/20">
            <Sparkles size={14} />
            <span>{t.hero.badge}</span>
          </div>

          {/* Main Heading requested by user */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-black italic uppercase leading-[0.95] mb-6 tracking-tight">
            <span className="block text-white">{t.hero.titleLine1}</span>
            <span className="block text-[#5CE1E6]">{t.hero.titleLine2}</span>
          </h1>

          {/* Intro text requested by user */}
          <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
            {t.hero.intro}
          </p>
        </div>

        {/* INTERACTIVE MULTI-STEP WAITLIST CONTAINER WITH SIDE BENEFITS */}
        <div className="w-full mb-16 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
            
            {/* Form Column */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="bg-[#001726] border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden h-full flex flex-col justify-between">
                
                {/* Ambient inner glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#005776]/20 blur-[120px] rounded-full pointer-events-none -z-10" />

                <div>
                  {/* Stepper Header with full-width alignment & connecting tracks */}
                  {!isSubmitted ? (
                    <div className="flex items-center justify-between w-full mb-8 pb-5 border-b border-white/10 min-h-[56px]">
                      {/* Step 1: PROFILE */}
                      <div className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all shrink-0 ${
                          currentStep === 1
                            ? 'bg-[#5CE1E6] text-[#002337] shadow-[0_0_18px_rgba(92,225,230,0.55)] ring-2 ring-[#5CE1E6]'
                            : currentStep > 1
                            ? 'bg-[#005776] text-[#5CE1E6]'
                            : 'bg-white/10 text-white/40'
                        }`}>
                          {currentStep > 1 ? <Check size={14} strokeWidth={3} /> : '1'}
                        </div>
                        <span className={`text-[11px] sm:text-xs font-black tracking-[0.15em] uppercase ${
                          currentStep === 1 ? 'text-[#5CE1E6]' : currentStep > 1 ? 'text-white' : 'text-white/40'
                        }`}>
                          {t.stepper.step1}
                        </span>
                      </div>

                      {/* Connecting Line 1 */}
                      <div className={`hidden sm:block flex-1 h-[2px] mx-3 transition-colors ${currentStep > 1 ? 'bg-[#5CE1E6]' : 'bg-white/10'}`} />

                      {/* Step 2: SPORT */}
                      <div className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all shrink-0 ${
                          currentStep === 2
                            ? 'bg-[#5CE1E6] text-[#002337] shadow-[0_0_18px_rgba(92,225,230,0.55)] ring-2 ring-[#5CE1E6]'
                            : currentStep > 2
                            ? 'bg-[#005776] text-[#5CE1E6]'
                            : 'bg-white/10 text-white/40'
                        }`}>
                          {currentStep > 2 ? <Check size={14} strokeWidth={3} /> : '2'}
                        </div>
                        <span className={`text-[11px] sm:text-xs font-black tracking-[0.15em] uppercase ${
                          currentStep === 2 ? 'text-[#5CE1E6]' : currentStep > 2 ? 'text-white' : 'text-white/40'
                        }`}>
                          {t.stepper.step2}
                        </span>
                      </div>

                      {/* Connecting Line 2 */}
                      <div className={`hidden sm:block flex-1 h-[2px] mx-3 transition-colors ${currentStep > 2 ? 'bg-[#5CE1E6]' : 'bg-white/10'}`} />

                      {/* Step 3: CONFIRM */}
                      <div className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all shrink-0 ${
                          currentStep === 3
                            ? 'bg-[#5CE1E6] text-[#002337] shadow-[0_0_18px_rgba(92,225,230,0.55)] ring-2 ring-[#5CE1E6]'
                            : 'bg-white/10 text-white/40'
                        }`}>
                          3
                        </div>
                        <span className={`text-[11px] sm:text-xs font-black tracking-[0.15em] uppercase ${
                          currentStep === 3 ? 'text-[#5CE1E6]' : 'text-white/40'
                        }`}>
                          {t.stepper.step3}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between w-full mb-8 pb-5 border-b border-white/10 min-h-[56px]">
                      <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#5CE1E6]">
                        <CheckCircle2 size={16} />
                        <span>{t.success.badge}</span>
                      </div>
                      <span className="text-[10px] font-bold text-white/40 tracking-widest uppercase">
                        {lang === 'en' ? 'RESERVATION CONFIRMED' : 'RÉSERVATION CONFIRMÉE'}
                      </span>
                    </div>
                  )}

            {/* Stepper Content */}
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <>
                  {/* STEP 1: SELECT YOUR PROFILE (Matches Screenshot 1:1) */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step-1"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                    >
                      <div className="mb-8">
                        <h2 className="font-heading text-3xl sm:text-4xl font-black italic uppercase tracking-tight text-[#5CE1E6] mb-2">
                          {t.step1.title}
                        </h2>
                        <p className="text-white/70 text-sm sm:text-base font-normal">
                          {t.step1.subtitle}
                        </p>
                      </div>

                      {/* 2x2 Grid of Profile Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
                        {t.step1.profiles.map((p) => {
                          const isSelected = formData.profile === p.id;
                          return (
                            <button
                              type="button"
                              key={p.id}
                              onClick={() => setFormData({ ...formData, profile: p.id })}
                              className={`text-left p-6 sm:p-7 rounded-2xl border transition-all duration-200 relative group flex flex-col justify-between min-h-[140px] sm:min-h-[160px] ${
                                isSelected
                                  ? 'bg-[#002133] border-[#5CE1E6] shadow-lg shadow-[#5CE1E6]/10 ring-1 ring-[#5CE1E6]'
                                  : 'bg-[#001320]/90 border-white/10 hover:border-white/25 hover:bg-[#001828]'
                              }`}
                            >
                              <div className="flex items-start justify-between">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                                  isSelected 
                                    ? 'bg-[#5CE1E6]/20 text-[#5CE1E6] border border-[#5CE1E6]/40' 
                                    : 'bg-white/5 text-white/50 border border-white/5 group-hover:text-white'
                                }`}>
                                  <User size={20} />
                                </div>

                                {isSelected && (
                                  <div className="w-6 h-6 rounded-full bg-[#5CE1E6] text-[#002337] flex items-center justify-center">
                                    <Check size={14} strokeWidth={3} />
                                  </div>
                                )}
                              </div>

                              <div className="mt-6">
                                <span className="block text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-1">
                                  {t.step1.cardEyebrow}
                                </span>
                                <h3 className="font-heading text-xl sm:text-2xl font-black italic uppercase tracking-wider text-white">
                                  {p.label}
                                </h3>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {/* Bottom divider with Continue Button */}
                      <div className="border-t border-white/10 pt-6 flex justify-end">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(2)}
                          className="bg-[#5CE1E6] hover:bg-white text-[#002337] font-heading font-black italic uppercase tracking-wider text-sm px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-[#5CE1E6]/20 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                        >
                          <span>{t.step1.continueBtn}</span>
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: SELECT YOUR SPORT */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                    >
                      <div className="mb-8">
                        <h2 className="font-heading text-3xl sm:text-4xl font-black italic uppercase tracking-tight text-[#5CE1E6] mb-2">
                          {t.step2.title}
                        </h2>
                        <p className="text-white/70 text-sm sm:text-base font-normal">
                          {t.step2.subtitle}
                        </p>
                      </div>

                      {/* Grid of Sports */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10">
                        {t.step2.sports.map((sp) => {
                          const isSelected = formData.sport === sp.id;
                          return (
                            <button
                              type="button"
                              key={sp.id}
                              onClick={() => setFormData({ ...formData, sport: sp.id })}
                              className={`p-4 sm:p-5 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-2 min-h-[110px] ${
                                isSelected
                                  ? 'bg-[#002133] border-[#5CE1E6] text-white shadow-md shadow-[#5CE1E6]/10 ring-1 ring-[#5CE1E6]'
                                  : 'bg-[#001320]/90 border-white/10 text-white/80 hover:border-white/25 hover:bg-[#001828]'
                              }`}
                            >
                              <span className="text-2xl">{sp.icon}</span>
                              <span className="font-heading font-black italic text-xs sm:text-sm uppercase tracking-wider text-white">
                                {sp.name}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Bottom divider with Back and Continue Buttons */}
                      <div className="border-t border-white/10 pt-6 flex justify-between items-center">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="text-white/60 hover:text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-colors px-3 py-2"
                        >
                          <ArrowLeft size={16} />
                          <span>{t.step2.backBtn}</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setCurrentStep(3)}
                          className="bg-[#5CE1E6] hover:bg-white text-[#002337] font-heading font-black italic uppercase tracking-wider text-sm px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-[#5CE1E6]/20 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                        >
                          <span>{t.step2.continueBtn}</span>
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: CONFIRM YOUR RESERVATION */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                    >
                      <div className="mb-6">
                        <h2 className="font-heading text-3xl sm:text-4xl font-black italic uppercase tracking-tight text-[#5CE1E6] mb-2">
                          {t.step3.title}
                        </h2>
                        <p className="text-white/70 text-sm sm:text-base font-normal">
                          {t.step3.subtitle}
                        </p>
                      </div>

                      {/* Profile & Sport summary chips */}
                      <div className="flex flex-wrap items-center gap-3 mb-6 p-4 rounded-2xl bg-[#001320] border border-white/10 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-white/50">{t.step3.selectedRole}</span>
                          <span className="font-black text-[#5CE1E6] bg-[#005776]/40 px-2.5 py-1 rounded-lg border border-[#5CE1E6]/30 uppercase">
                            {formData.profile}
                          </span>
                        </div>
                        <span className="text-white/20">•</span>
                        <div className="flex items-center gap-2">
                          <span className="text-white/50">{t.step3.selectedSport}</span>
                          <span className="font-black text-white bg-white/10 px-2.5 py-1 rounded-lg uppercase">
                            {formData.sport}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="ml-auto text-[11px] text-white/50 hover:text-[#5CE1E6] underline uppercase font-bold"
                        >
                          {lang === 'en' ? 'Change' : 'Modifier'}
                        </button>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name & Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[11px] font-black uppercase tracking-wider text-white/80 mb-2 flex items-center gap-1.5">
                              <User size={13} className="text-[#5CE1E6]" />
                              {t.step3.fullNameLabel} *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.fullName}
                              onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                              placeholder={t.step3.fullNamePlaceholder}
                              className="w-full bg-[#001320] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#5CE1E6] transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-black uppercase tracking-wider text-white/80 mb-2 flex items-center gap-1.5">
                              <Mail size={13} className="text-[#5CE1E6]" />
                              {t.step3.emailLabel} *
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={e => setFormData({ ...formData, email: e.target.value })}
                              placeholder={t.step3.emailPlaceholder}
                              className="w-full bg-[#001320] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#5CE1E6] transition-colors"
                            />
                          </div>
                        </div>

                        {/* Launch Discount Guarantee Notice */}
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-[#005776]/25 border border-[#5CE1E6]/30 text-xs text-[#5CE1E6]">
                          <Percent size={18} className="shrink-0" />
                          <span className="font-semibold">{t.step3.discountBadge}</span>
                        </div>

                        {/* Divider & Actions */}
                        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                          <button
                            type="button"
                            onClick={() => setCurrentStep(2)}
                            className="text-white/60 hover:text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-colors px-3 py-2"
                          >
                            <ArrowLeft size={16} />
                            <span>{t.step3.backBtn}</span>
                          </button>

                          <button
                            type="submit"
                            className="w-full sm:w-auto bg-[#5CE1E6] hover:bg-white text-[#002337] font-heading font-black italic uppercase tracking-wider text-base px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-[#5CE1E6]/20 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                          >
                            <span>{t.step3.submitBtn}</span>
                            <ArrowRight size={18} />
                          </button>
                        </div>

                        <p className="text-[11px] text-white/40 text-center pt-2">
                          {t.step3.privacyNotice}
                        </p>
                      </form>
                    </motion.div>
                  )}
                </>
              ) : (
                /* AUTHENTIC CONFIRMATION SCREEN (NO FAKE COUNTERS) */
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-left"
                >
                  <div className="inline-flex items-center gap-2 bg-[#5CE1E6]/10 text-[#5CE1E6] border border-[#5CE1E6]/30 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                    <CheckCircle2 size={16} />
                    <span>{t.success.badge}</span>
                  </div>

                  <h2 className="font-heading text-3xl sm:text-5xl font-black italic uppercase tracking-tight text-white mb-3">
                    {t.success.title}
                  </h2>
                  <p className="text-white/80 text-sm sm:text-base mb-8">
                    {t.success.subtitle} {lang === 'en' ? `Welcome, ${formData.fullName}!` : `Bienvenue, ${formData.fullName} !`}
                  </p>

                  {/* Summary Card */}
                  <div className="bg-[#001320] border border-white/10 rounded-2xl p-6 mb-8">
                    <div className="text-xs font-black tracking-widest uppercase text-white/50 mb-4">
                      {t.success.summaryHeader}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                      <div className="bg-[#001a29] p-3.5 rounded-xl border border-white/5">
                        <span className="block text-white/40 mb-1">{t.success.profile}</span>
                        <span className="font-heading font-black italic text-white text-sm uppercase">{formData.profile}</span>
                      </div>
                      <div className="bg-[#001a29] p-3.5 rounded-xl border border-white/5">
                        <span className="block text-white/40 mb-1">{t.success.sport}</span>
                        <span className="font-heading font-black italic text-[#5CE1E6] text-sm uppercase">{formData.sport}</span>
                      </div>
                      <div className="bg-[#001a29] p-3.5 rounded-xl border border-white/5">
                        <span className="block text-white/40 mb-1">{t.success.email}</span>
                        <span className="font-mono text-white text-xs truncate block">{formData.email}</span>
                      </div>
                    </div>
                  </div>

                  {/* Perks Locked In */}
                  <div className="mb-8">
                    <div className="text-xs font-black tracking-widest uppercase text-white/80 mb-3">
                      {t.success.perksHeader}
                    </div>
                    <div className="space-y-2.5 text-xs text-white/85">
                      <div className="flex items-center gap-3 bg-[#001320] p-3.5 rounded-xl border border-white/5">
                        <div className="w-5 h-5 rounded-full bg-[#5CE1E6]/20 text-[#5CE1E6] flex items-center justify-center shrink-0">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="font-semibold">{t.success.perk1}</span>
                      </div>
                      <div className="flex items-center gap-3 bg-[#001320] p-3.5 rounded-xl border border-white/5">
                        <div className="w-5 h-5 rounded-full bg-[#5CE1E6]/20 text-[#5CE1E6] flex items-center justify-center shrink-0">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="font-semibold">{t.success.perk2}</span>
                      </div>
                      <div className="flex items-center gap-3 bg-[#001320] p-3.5 rounded-xl border border-white/5">
                        <div className="w-5 h-5 rounded-full bg-[#5CE1E6]/20 text-[#5CE1E6] flex items-center justify-center shrink-0">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="font-semibold">{t.success.perk3}</span>
                      </div>
                    </div>
                  </div>

                  {/* Share waitlist with teammates */}
                  <div className="bg-[#002133] border border-[#5CE1E6]/30 rounded-2xl p-5 sm:p-6 mb-8">
                    <div className="flex items-center gap-2 text-sm font-black italic uppercase tracking-wider text-white mb-2">
                      <Share2 size={16} className="text-[#5CE1E6]" />
                      <span>{t.success.shareTitle}</span>
                    </div>
                    <p className="text-xs text-white/70 mb-4 leading-relaxed">
                      {t.success.shareDesc}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="flex-1 bg-[#001320] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white/80 font-mono flex items-center">
                        https://proathlete.ca/waitlist
                      </div>
                      <button
                        onClick={copyShareLink}
                        className="bg-[#5CE1E6] text-[#002337] font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2 shrink-0"
                      >
                        {copiedLink ? <Check size={14} /> : <Copy size={14} />}
                        <span>{copiedLink ? t.success.copied : t.success.copyBtn}</span>
                      </button>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/10">
                    <button
                      onClick={onBackToHome}
                      className="flex-1 py-3.5 px-6 rounded-xl bg-white text-[#002337] font-heading font-black text-xs uppercase tracking-wider hover:bg-[#5CE1E6] transition-colors text-center"
                    >
                      {t.success.backBtn}
                    </button>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setCurrentStep(1);
                        setFormData({
                          profile: 'INDIVIDUAL ATHLETE',
                          sport: 'BASKETBALL',
                          fullName: '',
                          email: ''
                        });
                      }}
                      className="py-3.5 px-6 rounded-xl bg-transparent border border-white/20 text-white/80 font-bold text-xs uppercase tracking-wider hover:border-white hover:text-white transition-colors"
                    >
                      {t.success.resetBtn}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Side Benefits Column (5 Cols, matches height and header divider with form) */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="bg-[#001726] border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden h-full flex flex-col justify-between">
                {/* Ambient glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#005776]/20 blur-[80px] rounded-full pointer-events-none -z-10" />

                <div>
                  {/* Matching header with synchronized height and divider line */}
                  <div className="flex items-center justify-between w-full mb-8 pb-5 border-b border-white/10 min-h-[56px]">
                    <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#5CE1E6]">
                      <Sparkles size={14} />
                      <span>{t.sideBenefits.badge}</span>
                    </div>
                    <span className="text-[10px] font-bold text-white/40 tracking-widest uppercase">
                      {lang === 'en' ? 'EARLY ACCESS' : 'ACCÈS ANTICIPÉ'}
                    </span>
                  </div>

                  {/* 3 Key Benefits */}
                  <div className="space-y-6 sm:space-y-7">
                    {t.sideBenefits.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 group">
                        <div className="w-11 h-11 rounded-2xl bg-[#005776]/30 border border-[#5CE1E6]/30 text-[#5CE1E6] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#5CE1E6] group-hover:text-[#002337] transition-all shadow-sm">
                          {idx === 0 && <Zap size={20} />}
                          {idx === 1 && <Smartphone size={20} />}
                          {idx === 2 && <Percent size={20} />}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-heading font-black italic text-base sm:text-lg uppercase tracking-wider text-white mb-1.5 leading-snug">
                            {item.title}
                          </h4>
                          <p className="text-xs sm:text-[13px] text-white/70 leading-relaxed font-light">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Exclusive Launch Offer Note - locked to bottom */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3.5 text-xs text-[#5CE1E6] bg-[#005776]/20 p-4 rounded-2xl border border-[#5CE1E6]/20">
                  <CheckCircle2 size={18} className="shrink-0 text-[#5CE1E6]" />
                  <span className="font-semibold text-xs leading-relaxed">
                    {lang === 'en' 
                      ? 'Guaranteed 10% launch rate locked for all waitlist entries' 
                      : 'Rabais de 10% garanti pour toute inscription sur liste d’attente'}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* TEAM / INSTITUTIONAL PILOT SECTION - FULL CONTAINER WIDTH */}
        <div className="w-full mb-16 sm:mb-20 bg-gradient-to-br from-[#003852] to-[#001726] border border-[#5CE1E6]/25 rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-xl">
            <div className="w-10 h-10 rounded-xl bg-[#5CE1E6]/10 text-[#5CE1E6] flex items-center justify-center mb-3">
              <Building size={20} />
            </div>
            <h4 className="font-heading text-xl sm:text-2xl font-black italic uppercase tracking-wider text-white mb-2">
              {t.institutional.title}
            </h4>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              {t.institutional.desc}
            </p>
          </div>

          <button
            onClick={onContactClick}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#5CE1E6] hover:bg-white text-[#002337] font-heading font-black italic uppercase tracking-wider text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-[#5CE1E6]/20"
          >
            <span>{t.institutional.btn}</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* FAQ SECTION */}
        <div className="w-full max-w-4xl mx-auto border-t border-white/10 pt-16">
          <div className="text-center mb-10">
            <h3 className="font-heading text-2xl sm:text-3xl font-black italic uppercase tracking-wider text-white">
              {t.faq.title}
            </h3>
          </div>

          <div className="space-y-4">
            {t.faq.questions.map((faq, index) => {
              const isOpen = expandedFaq === index;
              return (
                <div 
                  key={index}
                  className="bg-[#001726]/80 border border-white/10 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 hover:text-[#5CE1E6] transition-colors"
                  >
                    <span className="font-heading font-black italic text-sm sm:text-base uppercase tracking-wider text-white">
                      {faq.q}
                    </span>
                    <ChevronDown 
                      size={18} 
                      className={`text-[#5CE1E6] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
