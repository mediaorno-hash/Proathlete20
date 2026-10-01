import React from 'react';

interface PrivacyPageProps {
  lang?: 'en' | 'fr';
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ lang = 'en' }) => {
  const isFr = lang === 'fr';

  return (
    <div className="min-h-screen bg-[#002337] text-white pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <p className="text-[#5CE1E6] text-xs font-bold tracking-widest uppercase mb-4">
            {isFr ? 'Protection des Donnees & Conformite' : 'Data Privacy & Compliance'}
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-black italic uppercase mb-4">
            {isFr ? 'Politique de Confidentialite' : 'Privacy Policy'}
          </h1>
          <p className="text-white/70 text-sm md:text-base">
            {isFr
              ? 'PRO ATHLETE INC. - Engagement envers votre vie privee et la protection de vos donnees'
              : 'PRO ATHLETE INC. - Commitment to Your Privacy & Data Protection'}
          </p>
          <p className="text-white/50 text-xs mt-2">
            {isFr ? 'Derniere mise a jour : Octobre 2026' : 'Last updated: October 2026'}
          </p>
          <p className="text-white/50 text-xs">
            {isFr
              ? 'PRO ATHLETE INC. - Quebec, Canada. Conforme a la Loi 25 du Quebec, PIPEDA et aux reglementations internationales applicables.'
              : 'PRO ATHLETE INC. - Quebec, Canada. Compliant with Quebec Law 25 (Loi 25), PIPEDA, and applicable international privacy regulations.'}
          </p>
        </div>

        <div className="space-y-10 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              {isFr ? '1. Portee et identite du responsable' : '1. Scope and Identity of the Controller'}
            </h2>
            <p>
              {isFr
                ? "Cette Politique de Confidentialite decrit comment PRO ATHLETE INC. ('PRO ATHLETE', 'nous') collecte, utilise, protege et divulgue les informations personnelles lorsque vous utilisez notre site web (proathlete.ca), nos applications mobiles (iOS et Android), nos formulaires d'inscription a la liste d'attente et nos services connexes."
                : "This Privacy Policy outlines how PRO ATHLETE INC. ('PRO ATHLETE', 'we', 'us', or 'our') collects, uses, protects, and discloses personal information when you use our website (proathlete.ca), mobile applications (iOS and Android), waitlist registration forms, and related services."}
            </p>
            <p className="mt-3">
              {isFr
                ? "PRO ATHLETE INC. opere principalement depuis le Quebec, Canada. Nous sommes profondement engages a proteger la vie privee conformement a la Loi 25 du Quebec, a la Loi sur la protection des renseignements personnels et les documents electroniques (LPRPDE) et aux principes applicables de protection des donnees."
                : "PRO ATHLETE INC. operates primarily from Quebec, Canada. We are deeply committed to protecting personal privacy in accordance with Quebec's Law 25 (Act respecting the protection of personal information in the private sector), the Personal Information Protection and Electronic Documents Act (PIPEDA), and applicable data protection principles."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              {isFr ? '2. Informations personnelles que nous collectons' : '2. Personal Information We Collect'}
            </h2>
            <p className="mb-3">
              {isFr
                ? 'Nous collectons uniquement les informations personnelles strictement necessaires pour fournir et ameliorer nos services:'
                : 'We collect only the personal information strictly necessary to provide and improve our evidence-based sports training and injury prevention services:'}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>{isFr ? 'Identification et contact' : 'Identification and Contact Information'}:</strong>{' '}
                {isFr
                  ? "Nom complet, adresse courriel, numero de telephone et nom de l'organisation."
                  : 'Full name, email address, phone number, and organization name (for teams, schools, or athletic clubs).'}
              </li>
              <li>
                <strong>{isFr ? 'Role et profil' : 'Role and Profile Details'}:</strong>{' '}
                {isFr
                  ? 'Si vous vous inscrivez en tant qu\'Athlete, Entraineur, Parent ou Directeur Athletique.'
                  : 'Whether you register as an Athlete, Coach / Trainer, Parent, or Athletic Director.'}
              </li>
              <li>
                <strong>{isFr ? 'Donnees sportives' : 'Sport and Athletic Data'}:</strong>{' '}
                {isFr
                  ? 'Disciplines sportives, niveau, objectifs et considerations de prevention des blessures que vous partagez volontairement.'
                  : 'Sports disciplines (e.g., basketball, soccer), skill level, training goals, and any relevant injury prevention or recovery considerations you voluntarily choose to share.'}
              </li>
              <li>
                <strong>{isFr ? 'Donnees techniques' : 'Technical and Interaction Data'}:</strong>{' '}
                {isFr
                  ? "Adresse IP, modele d'appareil, systeme d'exploitation, type de navigateur, horodatage et telemetrie d'interaction."
                  : 'IP address, device model, operating system (iOS or Android), browser type, time stamp, and interaction telemetry within our platform.'}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              {isFr ? '3. Comment nous utilisons vos informations' : '3. How We Use Your Information'}
            </h2>
            <p className="mb-3">
              {isFr
                ? 'Vos informations sont collectees et traitees aux fins suivantes:'
                : 'Your information is collected and processed for the following clear and legitimate purposes:'}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                {isFr
                  ? 'Fournir des protocoles personnalises d\'entrainement et de prevention des blessures.'
                  : 'Providing personalized, science-backed athletic training and injury prevention protocols.'}
              </li>
              <li>
                {isFr
                  ? "Gerer les inscriptions a la liste d'attente et notifier quand les vagues d'acces s'ouvrent."
                  : 'Managing waitlist registrations, validating early access perks, and notifying you when access waves open.'}
              </li>
              <li>
                {isFr
                  ? "Communiquer les mises a jour de la plateforme, le support client et les annonces de service."
                  : 'Communicating platform updates, onboarding materials, customer support responses, and service announcements.'}
              </li>
              <li>
                {isFr
                  ? "Exploiter, surveiller, depanner et ameliorer la performance technique de notre plateforme."
                  : "Operating, monitoring, troubleshooting, and enhancing our platform's technical performance and user experience."}
              </li>
              <li>
                {isFr
                  ? 'Prevenir la fraude et respecter les exigences legales canadiennes et provinciales.'
                  : 'Preventing fraud, safeguarding platform integrity, and complying with Canadian and provincial legal requirements.'}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              {isFr ? '4. Consentement et conformite a la Loi 25' : '4. Consent and Quebec Law 25 Compliance'}
            </h2>
            <p>
              {isFr
                ? "En stricte conformite avec la Loi 25 du Quebec, nous obtenons un consentement libre, eclaire, specifique et manifeste avant de collecter, utiliser ou communiquer vos informations personnelles. Vous pouvez retirer ou modifier votre consentement a tout moment, sous reserve de limitations legales ou contractuelles."
                : 'In strict compliance with Quebec Law 25, we obtain free, informed, specific, and clear consent before collecting, using, or communicating your personal information. You may withdraw or modify your consent at any time, subject to legal or contractual limitations.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              {isFr ? '5. Partage et tiers' : '5. Information Sharing and Third Parties'}
            </h2>
            <p>
              {isFr
                ? "Nous ne vendons, louons ni echangeons jamais vos informations personnelles a des courtiers en donnees ou a des marketeurs tiers. Nous pouvons divulguer des informations a des fournisseurs de services tiers de confiance uniquement dans la mesure necessaire pour soutenir nos operations."
                : 'We never sell, rent, or trade your personal information to data brokers or third-party marketers. We may disclose personal information to trusted third-party service providers solely to the extent necessary to support our operations (such as secure cloud infrastructure, transactional email delivery, and customer communications).'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              {isFr ? '6. Securite et conservation des donnees' : '6. Data Security and Retention'}
            </h2>
            <p>
              {isFr
                ? "Nous appliquons des controles de securite administratifs, physiques et technologiques standard pour proteger les donnees personnelles contre tout acces non autorise. Les donnees personnelles sont conservees uniquement aussi longtemps que necessaire pour remplir les fins pour lesquelles elles ont ete recueillies."
                : 'We apply industry-standard administrative, physical, and technological security controls to safeguard personal data against unauthorized access, loss, alteration, or disclosure. Personal data is retained only for as long as necessary to fulfill the purposes for which it was gathered.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              {isFr ? '7. Vos droits concernant vos donnees' : '7. Your Rights Regarding Your Data'}
            </h2>
            <p className="mb-3">
              {isFr
                ? 'En vertu de la Loi 25 du Quebec et de la legislation canadienne, vous disposez de droits importants:'
                : 'Under Quebec Law 25 and Canadian privacy legislation, you have significant rights regarding your personal information:'}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>{isFr ? "Droit d'acces" : 'Right to Access'}:</strong>{' '}
                {isFr
                  ? 'Vous pouvez demander la confirmation que nous detenons des informations sur vous et en obtenir une copie.'
                  : 'You can request confirmation of whether we hold personal information about you and obtain a copy.'}
              </li>
              <li>
                <strong>{isFr ? 'Droit de rectification' : 'Right to Rectification'}:</strong>{' '}
                {isFr
                  ? 'Vous pouvez demander la correction de donnees inexactes ou incompletes.'
                  : 'You can request correction of inaccurate, outdated, or incomplete data.'}
              </li>
              <li>
                <strong>{isFr ? 'Droit a la suppression' : 'Right to Deletion'}:</strong>{' '}
                {isFr
                  ? 'Vous pouvez demander la suppression de vos donnees personnelles sous certaines conditions.'
                  : 'You can ask us to delete your personal data under certain conditions.'}
              </li>
              <li>
                <strong>{isFr ? 'Droit a la portabilite' : 'Right to Portability'}:</strong>{' '}
                {isFr
                  ? 'Vous pouvez demander que vos donnees personnelles informatisees soient fournies dans un format structure et couramment utilise.'
                  : 'You can request that your computerized personal data be provided in a structured, commonly used technological format.'}
              </li>
              <li>
                <strong>{isFr ? 'Droit de retirer le consentement' : 'Right to Withdraw Consent'}:</strong>{' '}
                {isFr
                  ? 'Vous pouvez vous desabonner des communications promotionnelles a tout moment.'
                  : 'You may opt out of promotional communications at any time via the unsubscribe link or by contacting us.'}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              {isFr ? '8. Coordonnees du responsable de la protection des donnees' : '8. Privacy Officer Contact Details'}
            </h2>
            <p className="mb-4">
              {isFr
                ? "PRO ATHLETE INC. a designe un Responsable de la protection des donnees personnelles charge de superviser la conformite et de traiter toutes les demandes."
                : 'PRO ATHLETE INC. has designated a Privacy Officer responsible for overseeing compliance with privacy legislation and handling all inquiries, access requests, and complaints.'}
            </p>
            <div className="bg-[#005776]/20 border border-white/10 rounded-2xl p-6">
              <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-3">
                {isFr ? 'Personne responsable de la protection des renseignements personnels' : 'Person in charge of personal information protection'}
              </p>
              <p className="text-white font-bold text-lg">Elyse Jobin, Founder & CEO</p>
              <p className="text-white/80">PRO ATHLETE INC.</p>
              <p className="text-white/80 mt-2">
                Email:{' '}
                <a href="mailto:elyse@proathlete.ca" className="text-[#5CE1E6] hover:underline">
                  elyse@proathlete.ca
                </a>
              </p>
              <p className="text-white/80">
                Website:{' '}
                <a href="https://www.proathlete.ca" className="text-[#5CE1E6] hover:underline">
                  https://www.proathlete.ca
                </a>
              </p>
              <p className="text-white/80">Quebec, Canada</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
