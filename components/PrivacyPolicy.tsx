import React from 'react';
import { X } from 'lucide-react';

interface PrivacyPolicyProps {
  onClose: () => void;
  lang: 'en' | 'fr';
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onClose, lang }) => {
  const content = {
    en: {
      title: 'Privacy Policy',
      effective: 'This Privacy Policy is effective as of July 4th, 2024.',
      sections: [
        {
          heading: 'Please read this Privacy Policy carefully',
          body: `We are committed to protecting your privacy as a user (referred to as "User", "you" or "your"), and we take our responsibility regarding the security of your Personal Data very seriously. We will be clear and transparent about the Personal Data we are collecting and what we will do with that Personal Data.

BY USING THE SERVICES, YOU OR YOUR LEGAL GUARDIAN IF UNDER 16 YEARS OLD CONSENT TO THE COLLECTION, USE AND TRANSFER OF YOUR PERSONAL DATA AS DESCRIBED IN THIS PRIVACY POLICY. IF YOU DO NOT AGREE WITH ANY PART OF THIS PRIVACY POLICY, THEN PLEASE DO NOT USE THE SERVICES.

PLEASE BE AWARE THAT PRO ATHLETE AND ALL ASSOCIATED SERVICES AND SYSTEMS ARE HOUSED ON SERVERS IN QUEBEC, CANADA. IF YOU ARE LOCATED OUTSIDE OF QUEBEC, CANADA, INFORMATION WE COLLECT (INCLUDING COOKIES) ARE PROCESSED AND STORED IN QUEBEC, CANADA, WHICH MAY NOT OFFER THE SAME LEVEL OF PRIVACY PROTECTION AS THE COUNTRY WHERE YOU RESIDE OR ARE A CITIZEN. BY USING THE SERVICES AND PROVIDING INFORMATION TO US, YOU CONSENT TO THE TRANSFER TO AND PROCESSING OF THE INFORMATION IN QUEBEC, CANADA.`,
        },
        {
          heading: 'Introduction',
          body: `PRO ATHLETE inc., a Quebec corporation ("we", "us", "our"), is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information collected on www.proathlete.ca and the PRO ATHLETE mobile and web applications in compliance with Quebec's Loi 25, as well as international data protection laws, including the European General Data Protection Regulation ("GDPR") and the General Data Protection Regulation of the United Kingdom ("UK GDPR").

This Privacy Policy describes the information that PRO ATHLETE collects (directly or indirectly) and why we collect it, what we do with the information we collect and how you can manage your Personal Data.`,
        },
        {
          heading: 'Information We Collect',
          subsections: [
            {
              subheading: '1. Personal Information:',
              bullets: [
                'Contact details including name, email, telephone number and shipping, billing address;',
                'Personal details including gender, hometown, date of birth and purchase history;',
                'Login and account information, including screen name, password and unique user ID;',
                'Health and injury information (only for research and personalization purposes).',
              ],
            },
            {
              subheading: '2. Usage Data:',
              bullets: [
                'App activity logs: dates and time of log-ins, activity and program completion, exercise completion;',
                'Program progression and completion;',
                'Feedback and user-generated content.',
              ],
            },
          ],
          body: `When interacting with our website and apps, data may automatically be collected and shared with PRO ATHLETE by the technology platforms providing the experience. This data may include: Device IDs, call state, network access, storage information and battery information, Cookies, IP addresses, referrer headers, data identifying your web browser and version, and web beacons and tags.

In many cases, your web browser or mobile device platform will provide additional tools to allow you to control when your device collects or shares particular categories of information. We encourage you to familiarize yourself with and use the tools available on your devices.`,
        },
        {
          heading: 'How We Use Your Information',
          body: `We use the collected data for the following purposes:`,
          bullets: [
            'To personalize training, mobility, prehab, and warm-up programs proposed in the PRO ATHLETE app;',
            'To enhance user experience and app functionalities;',
            'To conduct general research and research on the effectiveness of our programs in preventing injuries and improving performance;',
            'To communicate with you about updates, promotions, and relevant information about PRO ATHLETE;',
            'To operate, improve and maintain our business, products and services;',
            "To protect our or others' rights, property or safety;",
            'Other purposes: We may also use your personal data in other ways and will provide specific notice at the time of collection and obtain your consent where necessary.',
          ],
        },
        {
          heading: 'Sharing Your Information',
          bullets: [
            'With Your Coach: If you are an athlete part of a team, your general activity and progression data will be shared with your coach for the duration of your subscription. Injury information will not be shared with other users.',
            'With a Health Professional: If you are an athlete and working directly with a health professional with the PRO ATHLETE app, your data may be shared with the Health Professional to enhance app experience and personalize exercise prescription.',
            'Service Providers: We may share your information with third-party service providers to facilitate our services, such as data storage and analysis and payment solutions. These providers are bound by strict confidentiality agreements.',
            'Legal Obligations: We may disclose your information if required by law, or to protect our rights, privacy, safety, or property, and/or that of you or others.',
          ],
          body: "PRO ATHLETE shares your personal data with PRO ATHLETE subsidiaries and other affiliated entities for the purposes and under the conditions outlined above, with third party service providers processing personal data on PRO ATHLETE's behalf and other third parties to the extent necessary to: (i) comply with a government request, a court order or applicable law; (ii) prevent illegal uses of our Sites and Apps or violations of our policies; (iii) defend ourselves against third party claims; and (iv) assist in fraud prevention or investigation.",
        },
        {
          heading: "Children's Privacy",
          body: `We collect personal information from users of all ages. IF YOU ARE 16 AND YOUNGER, YOU CONFIRM THAT YOU HAVE RECEIVED PARENTAL OR LEGAL GUARDIAN CONSENT FOR DATA COLLECTION AND PROCESSING BY USING THE PRO ATHLETE APP AND WEBSITES.`,
        },
        {
          heading: 'Data Storage and Security',
          body: `We use a variety of technical and organizational security measures to maintain the safety of your personal data. Your personal data is contained behind secured networks. The personal data we collect or generate in the context of our Sites and Apps are stored in the Google Data Centre in Lachine, Quebec, Canada.

We retain your personal data for as long as necessary to fulfil the purposes for which we collect it. PRO ATHLETE may retain your data even after you have deleted your account if such retention is reasonably necessary to (i) conform to applicable law, (ii) resolve a conflict, (iii) prevent fraud, abuse or any infraction to the law, (iv) to enforce this Privacy Policy.`,
        },
        {
          heading: 'Your Rights',
          body: `You have the right to request: (i) access to your personal data; (ii) correction of your personal data if it is incomplete or inaccurate; or (iii) deletion of your personal data. Where we have obtained your consent for the processing of your personal data, you have the right to withdraw your consent at any time. You also have the right to object to the processing of your personal data, including opting-out from the use for direct marketing purposes.`,
        },
        {
          heading: 'Cookies and Pixel Tags',
          body: `PRO ATHLETE receives and records information, which may include personal data, from your browser when you use our Sites. We use a variety of methods, such as cookies and pixel tags to collect this information, which may include your (i) IP-address; (ii) unique cookie identifier, cookie information; (iii) unique device identifier and device type; (iv) domain, browser type and language; (v) operating system and system settings; (vi) country and time zone; (vii) previously visited websites; (viii) information about your interaction with our Sites; and (ix) access times and referring URLs.

If you turn cookies off, you may not have access to many features that make our Sites and Apps more efficient and some of our services will not function properly.`,
        },
        {
          heading: 'Using PRO ATHLETE Sites and Apps with Third-Party Products and Services',
          body: `Our Sites and Apps allow you to interact with a wide variety of other digital products and services. If you choose to connect your PRO ATHLETE account with a third-party device or account, your privacy rights on third-party platforms will be governed by their respective policies.

Our Sites and Apps may provide links to other (third-party) websites and apps for your convenience. Linked sites and apps have their own privacy notices or policies, which we strongly encourage you to review.`,
        },
        {
          heading: 'Changes to This Privacy Policy',
          body: `We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.`,
        },
        {
          heading: 'Contact Us',
          body: `If you have any questions about this Privacy Policy, please contact us:

Email: support@proathlete.com
Address: 1202 Belanger, Montreal, Quebec, Canada, H2S 1H8`,
        },
      ],
    },
    fr: {
      title: 'Politique de Confidentialite',
      effective: "Cette Politique de Confidentialite est en vigueur depuis le 4 juillet 2024.",
      sections: [
        {
          heading: 'Veuillez lire attentivement cette Politique de Confidentialite',
          body: `Nous nous engageons a proteger votre vie privee en tant qu'utilisateur (designe comme "Utilisateur" ou "vous") et nous prenons tres au serieux notre responsabilite concernant la securite de vos Donnees Personnelles.

EN UTILISANT LES SERVICES, VOUS OU VOTRE PARENT/TUTEUR LEGAL SI VOUS AVEZ MOINS DE 16 ANS, CONSENTEZ A LA COLLECTE, L'UTILISATION ET LE TRANSFERT DE VOS DONNEES PERSONNELLES COMME DECRIT DANS CETTE POLITIQUE DE CONFIDENTIALITE. SI VOUS N'ACCEPTEZ PAS UNE PARTIE DE CETTE POLITIQUE DE CONFIDENTIALITE, VEUILLEZ NE PAS UTILISER LES SERVICES.

VEUILLEZ NOTER QUE PRO ATHLETE ET TOUS LES SERVICES ET SYSTEMES ASSOCIES SONT HEBERGES SUR DES SERVEURS AU QUEBEC, CANADA. EN UTILISANT LES SERVICES ET EN NOUS FOURNISSANT DES INFORMATIONS, VOUS CONSENTEZ AU TRANSFERT ET AU TRAITEMENT DES INFORMATIONS AU QUEBEC, CANADA.`,
        },
        {
          heading: 'Introduction',
          body: `PRO ATHLETE inc., une societe quebecoise ("nous", "notre"), s'engage a proteger votre vie privee. Cette Politique de Confidentialite decrit comment nous collectons, utilisons, divulguons et protegeons vos informations personnelles collectees sur www.proathlete.ca et les applications mobiles et web de PRO ATHLETE en conformite avec la Loi 25 du Quebec, ainsi que les lois internationales sur la protection des donnees.`,
        },
        {
          heading: 'Informations Que Nous Collectons',
          subsections: [
            {
              subheading: '1. Informations Personnelles :',
              bullets: [
                'Coordonnees comprenant nom, adresse courriel, numero de telephone et adresse de livraison, adresse de facturation ;',
                "Details personnels comprenant le sexe, ville d'origine, date de naissance et historique des achats ;",
                'Informations de sante et blessures (uniquement a des fins de recherche et de personnalisation).',
              ],
            },
            {
              subheading: "2. Donnees d'Utilisation :",
              bullets: [
                "Activite de l'application ; incluant les programmes completes, nombre d'exercices completes, la duree de l'activite, la date des activites ;",
                'Progression et completion des programmes ;',
                'Retroactions et contenu genere par les utilisateurs.',
              ],
            },
          ],
          body: `Lors de l'interaction avec notre site web et nos applications, des donnees peuvent etre automatiquement collectees et partagees avec PRO ATHLETE par les plateformes technologiques fournissant l'experience. Ces donnees peuvent inclure : Identifiants d'appareil, etat des appels, acces reseau, informations de stockage et informations sur la batterie, cookies, adresses IP, en-tetes de reference, donnees identifiant votre navigateur web et version, balises web et tags.`,
        },
        {
          heading: 'Comment Nous Utilisons Vos Informations',
          body: `Nous utilisons les donnees collectees aux fins suivantes :`,
          bullets: [
            "Pour personnaliser les programmes d'entrainement, de mobilite, de prevention et d'echauffement proposes dans l'application PRO ATHLETE ;",
            "Pour ameliorer l'experience utilisateur et les fonctionnalites de l'application ;",
            "Pour mener des recherches generales et des recherches sur l'efficacite de nos programmes en matiere de prevention des blessures et d'amelioration des performances ;",
            'Pour communiquer avec vous a propos des mises a jour, des promotions et des informations pertinentes sur PRO ATHLETE ;',
            'Pour exploiter, ameliorer et maintenir nos activites, produits et services ;',
            'Pour proteger nos droits ou ceux des autres, la propriete intellectuelle ou la securite ;',
            'Autres objectifs : Nous pouvons egalement utiliser vos donnees personnelles de maniere differente et fournir un avis specifique au moment de la collecte et obtenir votre consentement lorsque necessaire.',
          ],
        },
        {
          heading: 'Partage de Vos Informations',
          bullets: [
            "Avec Votre Entraineur : Si vous etes un athlete faisant partie d'une equipe, vos donnees generales d'activite et de progression seront partagees avec votre entraineur pendant la duree de votre abonnement. Les informations sur les blessures ne seront pas partagees avec d'autres utilisateurs.",
            "Avec un(e) professionnel(le) de la sante : Si vous etes un(e) athlete et que vous travaillez directement avec un(e) professionnel(le) de la sante avec l'app PRO ATHLETE, vos donnees et informations peuvent etre partagees avec cette personne afin d'ameliorer l'experience avec l'application et pour personnaliser la prescription d'exercices.",
            'Fournisseurs de Services : Nous pouvons partager vos informations avec des fournisseurs de services tiers pour faciliter nos services, tels que le stockage et l\'analyse de donnees et les solutions de paiement. Ces fournisseurs sont lies par des accords de confidentialite stricts.',
            "Obligations Legales : Nous pouvons divulguer vos informations si la loi l'exige, ou pour proteger nos droits, notre vie privee, notre securite ou notre propriete, ainsi que ceux de vous ou d'autres.",
          ],
        },
        {
          heading: 'Confidentialite des Enfants',
          body: `Nous collectons des informations personnelles aupres des utilisateurs de tous ages. SI VOUS AVEZ 16 ANS ET MOINS, VOUS CONFIRMEZ QUE VOUS AVEZ RECU LE CONSENTEMENT D'UN PARENT OU TUTEUR LEGAL POUR LA COLLECTE ET LE TRAITEMENT DES DONNEES EN UTILISANT L'APPLICATION ET LES SITES WEB DE PRO ATHLETE.`,
        },
        {
          heading: 'Stockage et Securite des Donnees',
          body: `Nous utilisons une variete de mesures de securite techniques et organisationnelles pour maintenir la securite de vos donnees personnelles. Vos donnees personnelles sont contenues derriere des reseaux securises. Les donnees personnelles que nous collectons ou generons dans le cadre de nos Sites et Applications sont stockees dans le Centre de Donnees Google a Lachine, Quebec, Canada.

Nous conservons vos donnees personnelles aussi longtemps que necessaire pour atteindre les objectifs pour lesquels nous les collectons.`,
        },
        {
          heading: 'Vos Droits',
          body: `Vous avez le droit de demander : (i) l'acces a vos donnees personnelles ; (ii) la correction de vos donnees personnelles si elles sont incompletes ou inexactes ; ou (iii) la suppression de vos donnees personnelles. Lorsque nous avons obtenu votre consentement pour le traitement de vos donnees personnelles, vous avez le droit de retirer votre consentement a tout moment.`,
        },
        {
          heading: 'Cookies et Balises Pixel',
          body: `PRO ATHLETE recoit et enregistre des informations, qui peuvent inclure des donnees personnelles, de votre navigateur lorsque vous utilisez nos Sites. Nous utilisons une variete de methodes, telles que des cookies et des balises pixel pour collecter ces informations, qui peuvent inclure votre (i) adresse IP ; (ii) identifiant unique de cookie ; (iii) identifiant unique de l'appareil et type d'appareil ; (iv) domaine, type de navigateur et langue ; (v) systeme d'exploitation et parametres systeme ; (vi) pays et fuseau horaire ; (vii) sites web precedemment visites ; (viii) informations sur votre interaction avec nos Sites ; et (ix) heures d'acces et URL de reference.

Si vous desactivez les cookies, vous pouvez ne pas avoir acces a de nombreuses fonctionnalites qui rendent nos Sites et Applications plus efficaces et certains de nos services ne fonctionneront pas correctement.`,
        },
        {
          heading: 'Utilisation des Sites et Applications PRO ATHLETE avec des Produits et Services Tiers',
          body: `Nos Sites et Applications vous permettent d'interagir avec une grande variete d'autres produits et services numeriques. Si vous choisissez de connecter votre compte PRO ATHLETE a un appareil ou compte tiers, vos droits de confidentialite sur les plateformes tierces seront regis par leurs politiques respectives.`,
        },
        {
          heading: 'Modifications de Cette Politique de Confidentialite',
          body: `Nous pouvons mettre a jour notre Politique de Confidentialite de temps en temps. Nous vous informerons de toute modification en publiant la nouvelle Politique de Confidentialite sur cette page.`,
        },
        {
          heading: 'Contactez-Nous',
          body: `Si vous avez des questions concernant cette Politique de Confidentialite, veuillez nous contacter :

Email : support@proathlete.com
Adresse : 1202 Belanger, Montreal, Quebec, Canada, H2S 1H8`,
        },
      ],
    },
  };

  const c = content[lang];

  return (
    <div className="fixed inset-0 z-[300] bg-[#002337] overflow-y-auto">
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-10 text-white/70 hover:text-white transition-colors bg-[#002337]/80 backdrop-blur-sm rounded-full p-2"
        aria-label="Close"
      >
        <X size={28} />
      </button>

      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 text-white/85">
        <h1 className="text-4xl md:text-5xl font-heading font-black italic uppercase mb-4 text-white">
          {c.title}
        </h1>
        <p className="text-sm text-white/50 mb-12">{c.effective}</p>

        <div className="space-y-10">
          {c.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                {section.heading}
              </h2>

              {'subsections' in section && section.subsections && (
                <div className="space-y-6 mb-4">
                  {section.subsections.map((sub, j) => (
                    <div key={j}>
                      <h3 className="font-bold text-white mb-3">{sub.subheading}</h3>
                      <ul className="list-disc list-inside space-y-2 text-white/75 ml-2">
                        {sub.bullets.map((b, k) => (
                          <li key={k}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {'bullets' in section && section.bullets && (
                <ul className="list-disc list-inside space-y-2 text-white/75 mb-4 ml-2">
                  {section.bullets.map((b, k) => (
                    <li key={k}>{b}</li>
                  ))}
                </ul>
              )}

              {'body' in section && section.body && (
                <div className="text-white/75 leading-relaxed whitespace-pre-line">
                  {section.body}
                </div>
              )}
            </section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <button
            onClick={onClose}
            className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3 rounded-full transition-colors"
          >
            {lang === 'fr' ? 'Fermer' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
