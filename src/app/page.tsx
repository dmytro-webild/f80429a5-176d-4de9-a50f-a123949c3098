"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeLargeTitles"
        background="noise"
        cardStyle="outline"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Bénéfices",
          id: "benefits",
        },
        {
          name: "Portfolio",
          id: "portfolio",
        },
        {
          name: "Prix",
          id: "pricing",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Artisan du Web"
      button={{
        text: "Demander un devis",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "plain",
      }}
      title="Obtenez un site web vitrine à prix accessible qui attire des clients "
      description="Nous créons des sites modernes, rapides et optimisés pour les entreprises qui veulent se développer en ligne."
      tag="Agence Digitale Artisan du Web"
      buttons={[
        {
          text: "Demander un devis gratuit",
          href: "#contact",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/office-desk-with-computer-digital-tablet-mobile-phone_1252-898.jpg",
          imageAlt: "Dashboard de web design professionnel",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/web-design-template-copy-space-concept_53876-23467.jpg",
          imageAlt: "Designer travaillant sur une maquette de site web",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/employee-looking-business-analytics_482257-115272.jpg",
          imageAlt: "Visualisation de la croissance numérique",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-office-desk-mess_23-2150164872.jpg",
          imageAlt: "Still life of office desk mess",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/working-table-with-computer_93675-133813.jpg",
          imageAlt: "Working table with computer",
        },
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "vitrine",
          label: "Vitrine",
          title: "Site Vitrine",
          items: [
            "Présentation de votre activité",
            "Optimisation mobile",
            "Formulaire de contact",
            "Référencement local",
          ],
        },
        {
          id: "refonte",
          label: "Modernisation",
          title: "Refonte de site",
          items: [
            "Design actuel et moderne",
            "Amélioration de la vitesse",
            "Optimisation du parcours client",
            "Correction bugs",
          ],
        },
        {
          id: "seo",
          label: "Visibilité",
          title: "Optimisation SEO",
          items: [
            "Audit technique",
            "Mots-clés pertinents",
            "Vitesse de chargement",
            "Balisage sémantique",
          ],
        },
        {
          id: "maint",
          label: "Sérénité",
          title: "Maintenance",
          items: [
            "Mises à jour de sécurité",
            "Sauvegardes régulières",
            "Support réactif",
            "Monitoring 24/7",
          ],
        },
      ]}
      title="Nos Services"
      description="Des solutions sur-mesure pour booster votre activité."
    />
  </div>

  <div id="benefits" data-section="benefits">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Pourquoi passer au numérique ?"
      tag="Avantages clés"
      metrics={[
        {
          id: "m1",
          value: "Simple. ",
          description: "Attirez plus de clients qualifiés",
        },
        {
          id: "m2",
          value: "Pro.",
          description: "Améliorez votre image professionnelle",
        },
        {
          id: "m3",
          value: "24/7",
          description: "Soyez visible sur Google en tout temps",
        },
        {
          id: "m4",
          value: "x2",
          description: "Gagnez un temps précieux au quotidien",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="portfolio" data-section="portfolio">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          brand: "Boutique",
          name: "Boutique de vêtements",
          price: "Vitrine",
          rating: 5,
          reviewCount: "12",
          imageSrc: "http://img.b2bpic.net/free-vector/business-landing-page-with-image_23-2148315620.jpg",
        },
        {
          id: "p2",
          brand: "E-commerce",
          name: "Épicerie fine en ligne",
          price: "Boutique",
          rating: 5,
          reviewCount: "8",
          imageSrc: "http://img.b2bpic.net/free-photo/manager-rd-company-specialist-office-building-solar-powered-prototype_482257-130204.jpg",
        },
        {
          id: "p3",
          brand: "Atelier",
          name: "Artisan ébéniste",
          price: "Vitrine",
          rating: 5,
          reviewCount: "15",
          imageSrc: "http://img.b2bpic.net/free-photo/women-using-digital-devices_53876-23469.jpg",
        },
        {
          id: "p4",
          brand: "Services",
          name: "Consultant spécialisé",
          price: "Site pro",
          rating: 5,
          reviewCount: "10",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-manager-working-with-report-data_1262-3723.jpg",
        },
        {
          id: "p5",
          brand: "Restauration",
          name: "Brasserie locale",
          price: "Site vitrine",
          rating: 5,
          reviewCount: "22",
          imageSrc: "http://img.b2bpic.net/free-photo/receptionist-welcoming-tourists_482257-79681.jpg",
        },
        {
          id: "p6",
          brand: "Immobilier",
          name: "Agence immobilière",
          price: "Catalogue",
          rating: 5,
          reviewCount: "9",
          imageSrc: "http://img.b2bpic.net/free-vector/flat-geometric-real-estate-landing-page_23-2149067499.jpg",
        },
      ]}
      title="Nos Réalisations"
      description="Découvrez des exemples de projets livrés avec succès."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Artisan du Bois",
        "Boutique Mode",
        "Brasserie du Coin",
        "AutoClean",
        "TechPro",
        "ImmoLocal",
        "RestoGastronomique",
      ]}
      title="Ils nous font confiance"
      description="Plus de 20 entreprises locales accompagnées vers la réussite numérique."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        {
          id: "vitrine",
          tag: "Idéal pour débuter",
          price: "200€",
          period: "forfait",
          description: "Tout le nécessaire pour être visible en ligne.",
          button: {
            text: "Demander un devis",
            href: "#contact",
          },
          featuresTitle: "Inclus dans l'offre",
          features: [
            "Design personnalisé",
            "Responsive mobile",
            "Optimisation SEO locale",
            "hébergement à partir de 20€ par mois",
          ],
        },
        {
          id: "commerce",
          tag: "Pour vendre plus",
          price: "320€",
          period: "forfait",
          description: "Une boutique en ligne performante pour vos produits.",
          button: {
            text: "Demander un devis",
            href: "#contact",
          },
          featuresTitle: "Inclus dans l'offre",
          features: [
            "Gestion catalogue",
            "Paiement sécurisé",
            "Interface simple",
            "Formation incluse",
          ],
        },
        {
          id: "sur-mesure",
          tag: "Solution sur mesure",
          price: "Devis",
          period: "à définir",
          description: "Projets complexes et fonctionnalités avancées.",
          button: {
            text: "Parlons-en",
            href: "#contact",
          },
          featuresTitle: "Possibilités",
          features: [
            "Portail client",
            "Système de réservation",
            "Intégration API",
            "Accompagnement marketing",
          ],
        },
      ]}
      title="Des offres simples et transparentes"
      description="Un site web clé en main à partir de 200€ TTC."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",
          title: "Combien de temps faut-il pour créer un site ?",
          content: "En moyenne, un site vitrine est livré sous 4 à 5 jours après réception de vos éléments.",
        },
        {
          id: "faq2",
          title: "Ai-je besoin de compétences techniques ?",
          content: "Absolument pas ! Nous vous livrons une interface simple et vous formons si nécessaire.",
        },
        {
          id: "faq3",
          title: "Le site sera-t-il bien visible sur Google ?",
          content: "Oui, nous intégrons les bonnes pratiques SEO dès la conception pour maximiser votre visibilité.",
        },
        {
          id: "faq4",
          title: "Comment gérer le paiement ?",
          content: "Nos tarifs sont clairs, un acompte est demandé au lancement du projet, le solde à la livraison.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/happy-female-entrepreneur-with-headset-drinking-coffee-while-surfing-net-touchpad-office_637285-1983.jpg"
      mediaAnimation="blur-reveal"
      title="Questions Fréquentes"
      description="Toutes les réponses à vos interrogations."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Consultation"
      title="Parlons de votre projet"
      description="Vous avez un projet de site web ? Contactez-nous pour un devis gratuit sans engagement."
      imageSrc="http://img.b2bpic.net/free-photo/student-desk-with-computer-books-notepads-wooden-table_169016-49332.jpg"
      mediaAnimation="slide-up"
      inputPlaceholder="Votre email professionnel"
      buttonText="Envoyer ma demande"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Navigation",
          items: [
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Portfolio",
              href: "#portfolio",
            },
            {
              label: "Prix",
              href: "#pricing",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "contact@artisanduweb.fr",
              href: "mailto:contact@artisanduweb.fr",
            },
            {
              label: "Mentions Légales",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Artisan du Web"
      copyrightText="© 2025 | Artisan du Web"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
