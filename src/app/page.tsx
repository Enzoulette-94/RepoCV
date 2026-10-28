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
import { StacksScene } from "@/components/home/stacks";

export default function Home() {
  return (
    <Deck>
      <HeroScene />
      <StacksScene />
      <ProjectsIndexScene />
      <ProjectScenes />
      <PathScene />
      <ContactScene />
      <LikesScene />
      <HobbyScenes />
    </Deck>
  );
}
