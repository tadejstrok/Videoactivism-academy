import { defaultLang, type Lang } from '../i18n/ui';

export type StepType = 'intro' | 'input' | 'case' | 'activity' | 'reflection';
export type ModuleColor = 'blue' | 'coral' | 'yellow' | 'peach';

export interface Step {
  type: StepType;
  title: string;
  minutes: number;
  body?: string[];
  bullets?: string[];
  prompts?: string[];
  keyMessage?: string;
  callout?: { title: string; items: string[] };
  formats?: { name: string; text: string }[];
  specs?: { name: string; text: string }[];
  warnings?: string[];
  activity?: {
    intro?: string;
    steps: { title: string; text: string }[];
    formats?: string[];
    note?: string;
  };
}

export interface Module {
  slug: string;
  number: number;
  color: ModuleColor;
  title: string;
  summary: string;
  topics: string[];
  description: string[];
  duration: number;
  variants?: { minutes: number; text: string }[];
  objectives: string[];
  targetGroup: string[];
  outcomes: { outcome: string; content: string; methods: string; evaluation: string }[];
  steps: Step[];
  materials: { name: string; form: string; kind: 'presentation' | 'case' | 'worksheet' | 'equipment' }[];
  evaluation: string[];
}

const files = import.meta.glob<Module>('../content/modules/*/*.json', { eager: true, import: 'default' });

const byLang: Partial<Record<Lang, Record<string, Module>>> = {};
for (const [path, mod] of Object.entries(files)) {
  const lang = path.split('/').at(-2) as Lang;
  (byLang[lang] ??= {})[mod.slug] = mod;
}

const canonical = Object.values(byLang[defaultLang] ?? {}).sort((a, b) => a.number - b.number);

/** Modules in a language, falling back to English per module. */
export function getModules(lang: Lang) {
  return canonical.map((base) => {
    const local = byLang[lang]?.[base.slug];
    return { module: local ?? base, translated: lang === defaultLang || !!local };
  });
}

export function getSlugs() {
  return canonical.map((m) => m.slug);
}

/** Render **bold** markers in content strings; everything else is escaped. */
export function md(text: string) {
  const esc = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return esc.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

export const pad = (n: number) => String(n).padStart(2, '0');
