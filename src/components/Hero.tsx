
type HeroProps = {
  headline: string
  subhead: string
}

export const Hero = ({
  headline,
  subhead
}:HeroProps) => {
  return (<div className="p-10 min-h-96 h-[50vh] flex flex-col justify-center bg-background-100 text-accent-100">
    <div className="hero__inner base:w-1/1 md:w-1/2 lg:w-1/3">
    <h1 className="mb-4 text-h1 text-white">{headline}</h1>
    <p className="text-body">{subhead}</p>
    </div>
  </div>)
}