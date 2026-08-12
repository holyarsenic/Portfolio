import { FaQuoteLeft } from "react-icons/fa";

const quote = {
  text: "If it doesn't Challenge you, it doesn't Change you!!",
  author: "Fred DeVito",
};

const Quote = () => {
  return (
    <section className="flex h-67 w-full items-center justify-center px-20">
      <div className="relative z-10 w-full text-center py-7">
        <FaQuoteLeft className="absolute top-0 mx-auto mb-10 text-9xl text-black/10 dark:text-white/10 -z-10" />

        <p className="text-2xl font-light italic leading-relaxed tracking-wide text-black dark:text-white md:text-3xl">
          “{quote.text}”
        </p>

        <div className="mt-2 flex items-center justify-end gap-3">
          <span className="h-px w-8 bg-blue-300 dark:bg-blue-300/50" />
          <span className="text-sm uppercase tracking-[0.25em] text-blue-400 dark:text-blue-300/50">
            {quote.author}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Quote;