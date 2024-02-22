import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <section className="m-12 flex h-1 items-center justify-center bg-twitter-blue p-2 text-center text-3xl md:p-14 lg:p-16 xl:p-20">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
          repellat, officia numquam sequi dolores quae sint fugiat quos velit
          ducimus aperiam dolore. Fugiat rem dolore quod eveniet perspiciatis
          facere incidunt.
        </p>
      </section>
      <div className="card m-12 rounded-none">This is a card.</div>
      <br />
      <br />
      <Link
        href="/responsive"
        className="text-blue-600 ml-28 text-3xl underline"
      >
        Go to responsive tutorial
      </Link>
    </div>
  );
}
