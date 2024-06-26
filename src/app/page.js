import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gray-100 mx-8">
      <h1 class="text-3xl font-bold mb-4 ">My Portfolio</h1>
      <h2 className="text-xl mb-8">Taking a walk into my Codex journey</h2>

      <div className="">
        <p className="mt-4">
          First and foremost, I would like to thank you for visiting my page. I
          hope that you enjoy what I put together through out my time in Codex
          Academy boot camp. Let me tell you a little bit about myself. I love
          spending time with my family, having moving night eating popcorn. I am
          Respiratory therapist that is looking into a career change. Watching
          my kids play minecraft and other games, I saw the aspect of coding.
          Then you start seeing that everyone wanted the next big app or improve
          the user interaction. This was my que to finally venture into this
          spectrum.
        </p>
      </div>
    </main>
  );
}
