export default function Band({
  params: { band },
}: {
  params: {
    band: string;
  };
}) {
  return (
    <>
      <section className="flex-auto h-screen py-4 overflow-y-auto bg-gray-800 shrink-0">
        <h2 className="px-5 text-lg font-medium text-white">My music</h2>

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
      </section>
      <main className="p-4 w-full">Coming soon</main>
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
      className={`flex items-center w-full px-5 py-2 transition-colors duration-200 gap-x-2 focus:outline-none ${
        active
          ? "bg-gray-900 focus:bg-gray-900 "
          : "hover:bg-gray-900 focus:bg-gray-900"
      }`}
      href={to}
      tabIndex={0}
    >
      <img
        className="object-cover w-8 h-8 rounded-full"
        src={image}
        alt={name}
      />

      <div className="text-left rtl:text-right">
        <div className="text-sm font-medium capitalize text-white whitespace-nowrap">
          {name}
        </div>
        <div className="text-xs text-gray-400 whitespace-nowrap">{genre}</div>
      </div>
    </a>
  );
}
