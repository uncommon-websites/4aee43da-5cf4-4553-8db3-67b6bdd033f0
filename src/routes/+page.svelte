<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import SocialProof from '$lib/components/SocialProof.svelte';
  import FeatureSections from '$lib/components/FeatureSections.svelte';
  import OnboardingSection from '$lib/components/OnboardingSection.svelte';
  import Testimonials from '$lib/components/Testimonials.svelte';
  import FAQ from '$lib/components/FAQ.svelte';
  import FooterCTA from '$lib/components/FooterCTA.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<div class="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100">
  <Navbar />
  
  <main>
    <Hero />
    <SocialProof />
    <FeatureSections />
    <OnboardingSection />
    <Testimonials />
    <FAQ />
    <FooterCTA />
  </main>
  
  <Footer />
</div>

