import Image from "next/image";

function index({ img, alt, title, body }) {
  return (
    <>
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
    </>
  );
}

export default index;
