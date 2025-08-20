export default function ProjectCard({ project }) {
  const { title, description, stack, url } = project;
  return (
    <article className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 hover:shadow-md transition-shadow">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="opacity-80 my-2">{description}</p>
      <ul className="flex flex-wrap gap-2 text-xs opacity-80">
        {stack.map((s) => (
          <li
            key={s}
            className=" px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800"
          >
            {s}
          </li>
        ))}
      </ul>
      {url && (
        <a
          className="inline-block mt-3 text-sm underline underline-offset-4"
          href={url}
          target="_blank"
        >
            View project
        </a>
      )}
    </article>
  );
}
