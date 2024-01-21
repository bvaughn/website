export default function Band({
  params: { band },
}: {
  params: {
    band: string;
  };
}) {
  return (
    <>
      <section className="h-screen py-8 overflow-y-auto border-l border-r w-48 bg-gray-900 border-gray-700">
        <h2 className="px-5 text-lg font-medium text-white">My music</h2>

        <div className="mt-8 space-y-4">
          <Link
            active={band === "brian-vaughn"}
            genre="Rock"
            image="/images/band-brian-vaughn.jpeg"
            name="Brian Vaughn"
            to="/music/brian-vaughn"
          />
          <Link
            active={band === "pilotless-drone"}
            genre="Progressive Rock"
            image="/images/band-pilotless-drone.jpeg"
            name="Pilotless Drone"
            to="/music/pilotless-drone"
          />
          <Link
            active={band === "pinwurm"}
            genre="Industrial Rock"
            image="/images/band-pinwurm.jpeg"
            name="Pinwurm"
            to="/music/pinwurm"
          />
        </div>
      </section>
      <main className="py-8 px-5">Coming soon</main>
    </>
  );
}

function Link({
  active,
  genre,
  image,
  name,
  to,
}: {
  active: boolean;
  genre: string;
  image: string;
  name: string;
  to: string;
}) {
  return (
    <a
      className={
        active
          ? "flex items-center w-full px-5 py-2 transition-colors duration-200 bg-gray-800 gap-x-2 focus:outline-none"
          : "flex items-center w-full px-5 py-2 transition-colors duration-200 hover:bg-gray-800 gap-x-2 focus:outline-none"
      }
      href={to}
    >
      <img
        className="object-cover w-8 h-8 rounded-full"
        src={image}
        alt={name}
      />

      <div className="text-left rtl:text-right">
        <h1 className="text-sm font-medium capitalize text-white">{name}</h1>

        <p className="text-xs text-gray-400">{genre}</p>
      </div>
    </a>
  );
}
