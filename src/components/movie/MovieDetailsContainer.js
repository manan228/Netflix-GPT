const MovieDetailsContainer = ({ movieDetails, setShowMovieDetails }) => {

  return (
    <div
      className="h-screen w-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage: ` ${
          movieDetails?.backdrop_path !== null
            ? `url(https://image.tmdb.org/t/p/w500/${movieDetails?.backdrop_path})`
            : `url(https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg)`
        }`,
      }}
    >
      <div className="w-full h-full bg-gradient-to-b from-black via-black to-black opacity-80 flex items-end ">
        <div className="w-11/12 max-w-7xl mx-auto h-[calc(100%-150px)] px-5 flex items-center gap-28">
          <img
            loading="lazy"
            src={`https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`}
            alt="Movie_Image"
            className="w-[300px] h-[410px] bg-cover rounded-2xl "
          />
          <div className="flex flex-col gap-10">
            <div className="flex items-end gap-4">
              <h1 className="text-white font-extrabold text-6xl ">
                {movieDetails.title}
              </h1>
            </div>
            <div className="flex gap-10 items-center ">
              <p className="text-white font-medium">
                Date:<span> {movieDetails?.release_date}</span>
              </p>
            </div>
            <div className="flex gap-10">
              <p className="text-white font-medium">
                <span className="block">
                  Average Vote: <span>{movieDetails?.vote_average}</span>
                </span>
                <span className="block">
                  Average Count: <span>{movieDetails?.vote_count}</span>
                </span>
              </p>
            </div>
            <div>
              <h3 className="text-white text-xl font-medium">Overview:</h3>
              <p className="text-white text-lg font-normal ">
                {movieDetails?.overview}
              </p>
              <button
                onClick={() => setShowMovieDetails((prev) => !prev)}
                className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl rounded-lg hover:bg-opacity-80 mt-4"
              >
                ▶️ Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsContainer;
