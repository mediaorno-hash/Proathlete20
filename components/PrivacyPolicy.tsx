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
            'To protect our or others\' rights, property or safety;',
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
          body: `PRO ATHLETE shares your personal data with PRO ATHLETE subsidiaries and other affiliated entities for the purposes and under the conditions outlined above, with third party service providers processing personal data on PRO ATHLETE's behalf and other third parties to the extent necessary to: (i) comply with a government request, a court order or applicable law; (ii) prevent illegal uses of our Sites and Apps or violations of our policies; (iii) defend ourselves against third party claims; and (iv) assist in fraud prevention or investigation.`,
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
Address: 1202 Belanger, Montréal, Québec, Canada, H2S 1H8`,
        },
      ],
    },
    fr: {
      title: 'Politique de Confidentialité',
      effective: "Cette Politique de Confidentialité est en vigueur depuis le 4 juillet 2024.",
      sections: [
        {
          heading: 'Veuillez lire attentivement cette Politique de Confidentialité',
          body: `Nous nous engageons à protéger votre vie privée en tant qu'utilisateur (désigné comme "Utilisateur" ou "vous") et nous prenons très au sérieux notre responsabilité concernant la sécurité de vos Données Personnelles. Nous serons clairs et transparents sur les Données Personnelles que nous collectons et ce que nous en ferons.

EN UTILISANT LES SERVICES, VOUS OU VOTRE PARENT/TUTEUR LÉGAL SI VOUS AVEZ MOINS DE 16 ANS, CONSENTEZ À LA COLLECTE, L'UTILISATION ET LE TRANSFERT DE VOS DONNÉES PERSONNELLES COMME DÉCRIT DANS CETTE POLITIQUE DE CONFIDENTIALITÉ. SI VOUS N'ACCEPTEZ PAS UNE PARTIE DE CETTE POLITIQUE DE CONFIDENTIALITÉ, VEUILLEZ NE PAS UTILISER LES SERVICES.

VEUILLEZ NOTER QUE PRO ATHLETE ET TOUS LES SERVICES ET SYSTÈMES ASSOCIÉS SONT HÉBERGÉS SUR DES SERVEURS AU QUÉBEC, CANADA. SI VOUS ÊTES SITUÉ EN DEHORS DU QUÉBEC, CANADA, LES INFORMATIONS QUE NOUS COLLECTONS (Y COMPRIS LES COOKIES) SONT TRAITÉES ET STOCKÉES AU QUÉBEC, CANADA. EN UTILISANT LES SERVICES ET EN NOUS FOURNISSANT DES INFORMATIONS, VOUS CONSENTEZ AU TRANSFERT ET AU TRAITEMENT DES INFORMATIONS AU QUÉBEC, CANADA.`,
        },
        {
          heading: 'Introduction',
          body: `PRO ATHLETE inc., une société québécoise ("nous", "notre"), s'engage à protéger votre vie privée. Cette Politique de Confidentialité décrit comment nous collectons, utilisons, divulguons et protégeons vos informations personnelles collectées sur www.proathlete.ca et les applications mobiles et web de PRO ATHLETE en conformité avec la Loi 25 du Québec, ainsi que les lois internationales sur la protection des données, y compris le Règlement Général sur la Protection des Données ("RGPD") européen et le Règlement Général sur la Protection des Données du Royaume-Uni ("UK GDPR").`,
        },
        {
          heading: 'Informations Que Nous Collectons',
          subsections: [
            {
              subheading: '1. Informations Personnelles :',
              bullets: [
                'Coordonnées comprenant nom, adresse courriel, numéro de téléphone et adresse de livraison, adresse de facturation ;',
                "Détails personnels comprenant le sexe, ville d'origine, date de naissance et historique des achats, informations de connexion et de compte, y compris nom d'utilisateur, mot de passe et identifiant utilisateur unique ;",
                'Informations de santé et blessures (uniquement à des fins de recherche et de personnalisation).',
              ],
            },
            {
              subheading: "2. Données d'Utilisation :",
              bullets: [
                "Activité de l'application ; incluant les programmes complétés, nombre d'exercices complétés, la durée de l'activité, la date des activités ;",
                'Progression et complétion des programmes ;',
                'Rétroactions et contenu généré par les utilisateurs.',
              ],
            },
          ],
          body: `Lors de l'interaction avec notre site web et nos applications, des données peuvent être automatiquement collectées et partagées avec PRO ATHLETE par les plateformes technologiques fournissant l'expérience. Ces données peuvent inclure : Identifiants d'appareil, état des appels, accès réseau, informations de stockage et informations sur la batterie, cookies, adresses IP, en-têtes de référence, données identifiant votre navigateur web et version, balises web et tags.`,
        },
        {
          heading: 'Comment Nous Utilisons Vos Informations',
          body: `Nous utilisons les données collectées aux fins suivantes :`,
          bullets: [
            "Pour personnaliser les programmes d'entraînement, de mobilité, de prévention et d'échauffement proposés dans l'application PRO ATHLETE ;",
            "Pour améliorer l'expérience utilisateur et les fonctionnalités de l'application ;",
            "Pour mener des recherches générales et des recherches sur l'efficacité de nos programmes en matière de prévention des blessures et d'amélioration des performances ;",
            'Pour communiquer avec vous à propos des mises à jour, des promotions et des informations pertinentes sur PRO ATHLETE ;',
            'Pour exploiter, améliorer et maintenir nos activités, produits et services ;',
            'Pour protéger nos droits ou ceux des autres, la propriété intellectuelle ou la sécurité ;',
            'Autres objectifs : Nous pouvons également utiliser vos données personnelles de manière différente et fournir un avis spécifique au moment de la collecte et obtenir votre consentement lorsque nécessaire.',
          ],
        },
        {
          heading: 'Partage de Vos Informations',
          bullets: [
            "Avec Votre Entraîneur : Si vous êtes un athlète faisant partie d'une équipe, vos données générales d'activité et de progression seront partagées avec votre entraîneur pendant la durée de votre abonnement. Les informations sur les blessures ne seront pas partagées avec d'autres utilisateurs.",
            "Avec un(e) professionnel(le) de la santé : Si vous êtes un(e) athlète et que vous travaillez directement avec un(e) professionnel(le) de la santé avec l'app PRO ATHLETE, vos données et informations peuvent être partagées avec cette personne afin d'améliorer l'expérience avec l'application et pour personnaliser la prescription d'exercices.",
            'Fournisseurs de Services : Nous pouvons partager vos informations avec des fournisseurs de services tiers pour faciliter nos services, tels que le stockage et l'analyse de données et les solutions de paiement. Ces fournisseurs sont liés par des accords de confidentialité stricts.',
            "Obligations Légales : Nous pouvons divulguer vos informations si la loi l'exige, ou pour protéger nos droits, notre vie privée, notre sécurité ou notre propriété, ainsi que ceux de vous ou d'autres.",
          ],
        },
        {
          heading: 'Confidentialité des Enfants',
          body: `Nous collectons des informations personnelles auprès des utilisateurs de tous âges. SI VOUS AVEZ 16 ANS ET MOINS, VOUS CONFIRMEZ QUE VOUS AVEZ REÇU LE CONSENTEMENT D'UN PARENT OU TUTEUR LÉGAL POUR LA COLLECTE ET LE TRAITEMENT DES DONNÉES EN UTILISANT L'APPLICATION ET LES SITES WEB DE PRO ATHLETE.`,
        },
        {
          heading: 'Stockage et Sécurité des Données',
          body: `Nous utilisons une variété de mesures de sécurité techniques et organisationnelles pour maintenir la sécurité de vos données personnelles. Vos données personnelles sont contenues derrière des réseaux sécurisés. Les données personnelles que nous collectons ou générons dans le cadre de nos Sites et Applications sont stockées dans le Centre de Données Google à Lachine, Québec, Canada.

Nous conservons vos données personnelles aussi longtemps que nécessaire pour atteindre les objectifs pour lesquels nous les collectons.`,
        },
        {
          heading: 'Vos Droits',
          body: `Vous avez le droit de demander : (i) l'accès à vos données personnelles ; (ii) la correction de vos données personnelles si elles sont incomplètes ou inexactes ; ou (iii) la suppression de vos données personnelles. Lorsque nous avons obtenu votre consentement pour le traitement de vos données personnelles, vous avez le droit de retirer votre consentement à tout moment. Vous avez également le droit de vous opposer au traitement de vos données personnelles, y compris de vous désinscrire de l'utilisation à des fins de marketing direct.`,
        },
        {
          heading: 'Cookies et Balises Pixel',
          body: `PRO ATHLETE reçoit et enregistre des informations, qui peuvent inclure des données personnelles, de votre navigateur lorsque vous utilisez nos Sites. Nous utilisons une variété de méthodes, telles que des cookies et des balises pixel pour collecter ces informations, qui peuvent inclure votre (i) adresse IP ; (ii) identifiant unique de cookie ; (iii) identifiant unique de l'appareil et type d'appareil ; (iv) domaine, type de navigateur et langue ; (v) système d'exploitation et paramètres système ; (vi) pays et fuseau horaire ; (vii) sites web précédemment visités ; (viii) informations sur votre interaction avec nos Sites ; et (ix) heures d'accès et URL de référence.

Si vous désactivez les cookies, vous pouvez ne pas avoir accès à de nombreuses fonctionnalités qui rendent nos Sites et Applications plus efficaces et certains de nos services ne fonctionneront pas correctement.`,
        },
        {
          heading: 'Utilisation des Sites et Applications PRO ATHLETE avec des Produits et Services Tiers',
          body: `Nos Sites et Applications vous permettent d'interagir avec une grande variété d'autres produits et services numériques. Si vous choisissez de connecter votre compte PRO ATHLETE à un appareil ou compte tiers, vos droits de confidentialité sur les plateformes tierces seront régis par leurs politiques respectives.`,
        },
        {
          heading: 'Modifications de Cette Politique de Confidentialité',
          body: `Nous pouvons mettre à jour notre Politique de Confidentialité de temps en temps. Nous vous informerons de toute modification en publiant la nouvelle Politique de Confidentialité sur cette page.`,
        },
        {
          heading: 'Contactez-Nous',
          body: `Si vous avez des questions concernant cette Politique de Confidentialité, veuillez nous contacter :

Email : support@proathlete.com
Adresse : 1202 Bélanger, Montréal, Québec, Canada, H2S 1H8`,
        },
      ],
    },
  };

  const c = content[lang];

  return (
    <div className="fixed inset-0 z-[300] bg-[#002337] overflow-y-auto">
      {/* Close button */}
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
