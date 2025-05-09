export default function AudioLesson({ url, title }) {
  return (
    <article title={title} class="rounded-xl bg-red-400 p-3">
      <p class="truncate text-center">{title}</p>
      <div class="flex justify-center">
        <audio controls>
          <source src={url} type="audio/mpeg" />
        </audio>
      </div>
    </article>
  );
}
