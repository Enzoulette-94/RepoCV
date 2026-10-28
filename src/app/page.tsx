import { Deck } from "@/components/home/deck";
import {
  ContactScene,
  HeroScene,
  HobbyScenes,
  LikesScene,
  PathScene,
  ProjectScenes,
  ProjectsIndexScene,
} from "@/components/home/scenes";

export default function Home() {
  return (
    <Deck>
      <HeroScene />
      <ProjectsIndexScene />
      <ProjectScenes />
      <PathScene />
      <ContactScene />
      <LikesScene />
      <HobbyScenes />
    </Deck>
  );
}
