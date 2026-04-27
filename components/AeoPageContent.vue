<script setup>
defineProps({
  pageData: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section class="border-t border-gray-800/75 bg-gray-950/60 text-white">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="max-w-4xl">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
          AI-ready context
        </p>

        <h2 class="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          {{ pageData.pageName }}
        </h2>

        <p class="mt-4 max-w-3xl text-lg text-white/75">
          {{ pageData.pageDescription }}
        </p>
      </div>

      <div class="mt-10 grid gap-4 sm:grid-cols-3">
        <article
          v-for="statItem in pageData.stats"
          :key="statItem.label"
          class="rounded-3xl border border-gray-800/75 bg-gray-900/75 p-6"
        >
          <p class="text-3xl font-extrabold text-white">
            {{ statItem.value }}
          </p>

          <p class="mt-2 text-sm text-white/75">
            {{ statItem.label }}
          </p>
        </article>
      </div>

      <div class="mt-10 grid gap-8 lg:grid-cols-2">
        <section class="rounded-3xl border border-gray-800/75 bg-gray-900/75 p-6">
          <h3 class="text-xl font-bold">
            Key takeaways
          </h3>

          <ul class="mt-4 space-y-3 text-white/80">
            <li
              v-for="pointItem in pageData.keyPoints"
              :key="pointItem"
              class="flex gap-3"
            >
              <span class="mt-2 h-2 w-2 rounded-full bg-pink-400" />
              <span>{{ pointItem }}</span>
            </li>
          </ul>
        </section>

        <section
          v-if="pageData.howTo?.length"
          class="rounded-3xl border border-gray-800/75 bg-gray-900/75 p-6"
        >
          <h3 class="text-xl font-bold">
            How to use this page
          </h3>

          <ol class="mt-4 space-y-4 text-white/80">
            <li
              v-for="(stepItem, stepIndex) in pageData.howTo"
              :key="stepItem.name"
            >
              <h4 class="font-semibold text-white">
                Step {{ stepIndex + 1 }}: {{ stepItem.name }}
              </h4>

              <p class="mt-2">
                {{ stepItem.text }}
              </p>
            </li>
          </ol>
        </section>
      </div>

      <section class="mt-10 rounded-3xl border border-gray-800/75 bg-gray-900/75 p-6">
        <h3 class="text-xl font-bold">
          Frequently asked questions
        </h3>

        <div class="mt-4 space-y-4">
          <article
            v-for="faqItem in pageData.faqs"
            :key="faqItem.question"
            class="rounded-2xl border border-gray-800/75 bg-gray-950/60 p-5"
          >
            <h4 class="text-lg font-semibold text-white">
              {{ faqItem.question }}
            </h4>

            <p class="mt-2 text-white/75">
              {{ faqItem.answer }}
            </p>
          </article>
        </div>
      </section>
    </div>
  </section>
</template>
