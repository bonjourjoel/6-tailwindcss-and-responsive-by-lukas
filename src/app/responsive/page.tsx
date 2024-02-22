import Image from "next/image";

export default function ResponsivePage() {
  return (
    <div className="m-4 text-center">
      <section className="grid gap-8 md:grid-cols-2 md:items-center md:text-left">
        <div className="relative h-80 w-full">
          <Image
            className="rounded-lg object-cover"
            src="/disneyland-food-festival.jpg"
            alt="mickey"
            fill={true}
          />
        </div>
        <div className="tablet:bg-red-300">
          <h1 className="mb-2 text-4xl font-medium">Headline</h1>
          <p className="md:max-lg:bg-blue-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cum
            esse aperiam veniam nostrum vero molestias, eveniet perspiciatis
            quidem reprehenderit distinctio nihil architecto temporibus adipisci
            voluptas eos doloribus deleniti laborum!
          </p>
        </div>
      </section>
    </div>
  );
}
