import { Container } from "@/components/layout/container";
import { Header } from "@/components/layout/header";
import { TinyVideo } from "tiny-video";

export default function Home() {
  return (
    <Container>
      <Header />

      <section className="flex flex-col gap-1 items-center justify-between text-center p-4">
        <p className="text-sm text-neutral-600 bg-neutral-100 px-4 py-1.5 rounded-full font-semibold">
          TinyVideo is
        </p>
        <h1 className="text-6xl font-display">
          The video component you wanted.
        </h1>
      </section>

      <TinyVideo src="/demo.mp4" className="w-full aspect-video" />
    </Container>
  );
}
