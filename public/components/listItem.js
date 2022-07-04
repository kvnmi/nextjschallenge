function index({ number, title, body }) {
  return (
    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
      <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
        <div className="flex items-center space-x-2">
          <div className="flex rounded-full text-white bg-brightRed px-4 py-1">
            {number}
          </div>
          <h3 className="font-bold md:hidden">{title}</h3>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <h3 className="hidden font-bold md:block">{title}</h3>
        <p className=" text-darkGrayishBlue ">{body}</p>
      </div>
    </div>
  );
}

export default index;
