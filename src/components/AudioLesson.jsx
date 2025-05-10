export default function AudioLesson({ url, title }) {
  return (
    <article
      title={title}
      class="flex flex-col justify-between rounded-xl bg-red-400 p-3"
    >
      <p class="text-center">{title}</p>
      <div class="flex justify-center">
        <audio controls>
          <source src={url} type="audio/mpeg" />
        </audio>
      </div>
    </article>
  );
}
