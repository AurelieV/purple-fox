<template>
  <main class="text-sm md:text-md">
    <section class="relative">
      <img src="/src/assets/home_background.jpg" class="w-full" />
      <div
        class="absolute py-2 top-[5%] left-[5%] md:top-[30%] md:left-[10%] py-4 rounded w-[12ch] text-center text-xl sm:text-2xl md:text-3xl lg:text-6xl font-bold text-white backdrop-blur-sm"
      >
        <h1>Welcome to PurpleFox</h1>
      </div>
    </section>
    <section id="under-hero" class="px-2 pt-1 pb-2 text-center text-white sm:px-4">
      <p>PurpleFox is your all-in-one solution for seamless tournament management</p>
      <p class="mx-auto max-w-[60ch]">
        From end of round management, prize support and real-time coverage, PurpleFox has you covered. Join our
        community and elevate your tournament experience today.
      </p>
    </section>
    <section class="max-w-screen-lg px-2 pt-4 mx-auto md:pt-8">
      <ul class="grid grid-cols-1 gap-2 pb-4 mt-2 sm:grid-cols-2 md:grid-cols-3 sm:gap-4">
        <li
          v-for="(section, index) in sections"
          :key="index"
          class="flex flex-col px-2 pt-2 pb-3 rounded shadow-lg sm:px-4"
        >
          <h2 class="p-2 mb-2 -mx-2 text-center text-white rounded-t decorate bg-blue sm:-mx-3">{{ section.title }}</h2>
          <p>{{ section.description }}</p>
          <div class="flex pt-2 mx-auto mt-auto space-x-2">
            <component
              v-for="(cta, index) in section.ctas"
              :key="index"
              :is="cta.link.is"
              v-bind="cta.link"
              class="block px-2 py-1 text-center text-white transition-colors border rounded cursor-pointer select-none bg-pink hover:bg-pink-light active:border-pink active:text-pink active:bg-transparent"
            >
              {{ cta.label }}
            </component>
          </div>
        </li>
      </ul>
    </section>
  </main>
  <footer class="px-2 pt-4 pb-3 text-xs text-center text-white font-italic">
    <p>All features of PurpleFox are completely free to use, thanks to our supportive community.</p>
    <p>
      If you'd like to contribute and help us grow, consider supporting us on
      <a href="patreon.com/PurpleFoxSoftwares">Patreon</a> :)
    </p>
    <p>For more information, please join the <a href="https://discord.gg/rSRcxMySEF">Discord server</a>.</p>
  </footer>
</template>

<script setup lang="ts">
const sections = [
  {
    title: 'Navigate the End of Round',
    description:
      "Embark on a journey with our tools, guiding judges and stage managers through the art of wrapping up rounds. Choose the correct instance – USA or Europe – for the best realtime performance. Looking to host a tournament? Our Discord is the portal for that. We're all ears, accommodating various TCG licenses and software preferences.",
    ctas: [
      { label: 'US server', link: { href: 'https://eor-us.purple-fox.fr', is: 'a', target: '_blank' } },
      { label: 'EU server', link: { href: 'https://eor.purple-fox.fr', is: 'a', target: '_blank' } }
    ]
  },
  {
    title: 'Crafting Tournament Logistics',
    description:
      "Step into the realm of logistics, where tools like brackets for Top 8 and on-the-fly sealed construction tables generators await your command. It's like having magical tools at your fingertips. Don't just stand there – take a peek and let your tourneys be the talk of the town.",
    ctas: [{ label: 'Discover Logistics Magic', link: { is: 'router-link', to: { name: 'tools' } } }]
  },
  {
    title: 'Elevate Your Coverage Game',
    description:
      "Attention coverage enthusiasts! Unleash the magic of specialized tools, tailor-made for Flesh and Blood events (We're open to expanding to other TCGs, contact us for more information). Content creators, drop by for a chat on Discord if you need an access. Only requirement is to put our little purple fox logo somewhere if you use our tools :)",
    ctas: [
      { label: 'Discover coverage', link: { is: 'a', href: 'https://eor.purple-fox.fr/coverage', target: '_blank' } }
    ]
  },
  {
    title: 'Mastery in Stage Management',
    description:
      'Calling all stage commanders! Our arsenal of tools will aid you in taming the roaring beast that is big tournament stage management. From gathering prize tix to wrangling staff, our dashboard has you covered. Embrace the tools and conquer those stages!',
    ctas: [
      { label: 'Conquer Stages with Us', link: { is: 'a', href: 'https://eor.purple-fox.fr/stage', target: '_blank' } }
    ]
  },
  {
    title: "Flesh and Blood's calendar",
    description:
      "Stay attuned to the rhythm of Flesh and Blood events with our dedicated calendar. It's like having a magical time-turner to all the happenings in the realm.",
    ctas: [
      { label: 'Explore the Calendar', link: { is: 'a', href: 'https://calendar.loeildophidia.fr/', target: '_blank' } }
    ]
  },
  {
    title: 'Embark on a Documentation Quest',
    description:
      "Venture into our comprehensive documentation, a treasure trove for the curious and brave. If you're feeling adventurous, contribute to our repositories – find your path through our Discord guides.",
    ctas: [{ label: 'Go to documentation', link: { is: 'a', href: 'https://eor.purple-fox.fr' }, target: '_blank' }]
  },
  {
    title: 'Reporting Bugs and Beyond',
    description:
      'Encountered bugs? Fear not, our troubleshooters are at your service. Got an idea to enhance the enchantment? Join our fellowship of open-source sorcerers on Discord. The path to contribution is open, so let the journey begin.',
    ctas: [{ label: 'Join the Discord', link: { is: 'a', href: 'https://discord.gg/rSRcxMySEF' }, target: '_blank' }]
  }
]
</script>

<style scoped>
#under-hero,
footer {
  @apply bg-blue;
}
#under-hero {
  box-shadow:
    0px 4px 0px 0px #1b0c51,
    0px 12px 20px 0px rgba(27, 12, 81, 0.8);
}
footer a {
  @apply underline hover:text-purple;
}

.decorate {
  @apply relative;
}

.decorate::after {
  --height: 6px;
  --width: 40%;
  display: block;
  content: '';
  width: var(--width);
  height: var(--height);
  position: absolute;
  bottom: calc(var(--height) * -1 / 2);
  left: calc(50% - var(--width) / 2);
  @apply mx-auto bg-pink;
}
</style>
