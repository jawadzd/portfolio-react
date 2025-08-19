export default function Home() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Hi, I’m Jawad Zeyneddin 👋</h1>
      <p className="text-lg opacity-80">
        Software Engineer • Frontend (Angular/React) • Backend (PHP/.NET)
      </p>

      <div className="flex gap-3">
        <a
          href="mailto:Jawad.zein.deen@hotmail.com"
          className="px-4 py-2 rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
        >
          Contact me
        </a>
        <a
          href="https://www.linkedin.com/in/jawad-zeyneddin-7b687925b"
          className="px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
