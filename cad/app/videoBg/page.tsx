const Videos = () => {
  return (
    <>
      <div className="w-full h-[100vh]">
        {" "}
        <video autoPlay muted loop>
          <source src="/grey.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Videos;
