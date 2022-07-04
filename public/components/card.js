import Image from "next/image";

// new style
function index({ img, alt, title, body, hidden = false }) {
  const classStyle = !hidden
    ? "flex flex-col px-6 rounded-lg py-6 space-y-6 bg-veryLightGray items-center"
    : "hidden flex-col px-6 rounded-lg py-6 space-y-6 bg-veryLightGray items-center md:flex";
  return (
    <div className={classStyle}>
      <div className="-mt-14">
        <Image
          alt={alt}
          src={img}
          width={70}
          height={70}
          className=" object-contain"
        />
      </div>
      <h1 className="text-veryDarkBlue text-xl font-bold">{title}</h1>
      <p className="text-sm text-darkGrayishBlue text-center">{body}</p>
    </div>
  );
}

export default index;
