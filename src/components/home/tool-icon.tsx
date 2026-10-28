import { tools, type ToolId } from "@/data/stacks";

/** Logo d'un outil, ou sa lettre quand il n'a pas de logo */
export function ToolIcon({ id }: { id: ToolId }) {
  const t: { icon?: string; mono?: string } = tools[id];
  return t.icon ? (
    <svg className="ic" viewBox="0 0 24 24" aria-hidden="true"><path d={t.icon} /></svg>
  ) : (
    <span className="mono" aria-hidden="true">{t.mono}</span>
  );
}
