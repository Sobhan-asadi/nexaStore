import Gestures from "../libs/Gestures";

const category = [
  {
    id: 1,
    title: "Man",
    imgPath: "/professional-man-portrait.jpg",
    description: "Man Category",
  },
  {
    id: 2,
    title: "Woman",
    imgPath: "/WomanCetegory.webp",
    description: "Woman Category",
  },
  {
    id: 3,
    title: "Kid",
    imgPath: "/KidCategory.webp",
    description: "Kid Category",
  },
];

export default function Category() {
  return (
    <>
      <div className="mt-16 w-1/2 bg-sky-400 px-2 py-2.5 text-sm font-bold text-white shadow-md shadow-sky-600 md:text-2xl">
        CATEGORY....
      </div>
      <div className="mt-10 bg-white pt-12 pb-8">
        <div className="container mx-auto grid cursor-pointer grid-cols-1 gap-8 sm:grid-cols-3">
          {category.map((item) => (
            <Gestures key={item.id} classes="m-3 h-64 relative">
              <img
                src={item.imgPath}
                alt={item.title}
                className="h-full w-full rounded-lg object-cover shadow-md grayscale filter transition duration-300 ease-in-out hover:filter-none"
              />
              <div className="absolute top-20 left-6">
                <h3 className="text-xl font-bold text-orange-400">
                  {item.title}
                </h3>
                <p className="text-2xl font-bold text-gray-100">View All</p>
              </div>
            </Gestures>
          ))}
        </div>
      </div>
    </>
  );
}
