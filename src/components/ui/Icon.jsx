import {
  ArrowRight, BatteryLow, BookOpen, Brain, CalendarCheck, Check, CheckCircle2,
  ChevronDown, Clock, Dumbbell, FileText, Heart, HelpCircle, Infinity as InfinityIcon,
  Lock, Menu, Monitor, Mountain, PenLine, Quote, RefreshCw, Repeat, ShieldCheck,
  Sparkles, Table, Target, UserRound, X, Zap,
} from 'lucide-react'

const ICONS = {
  ArrowRight, BatteryLow, BookOpen, Brain, CalendarCheck, Check, CheckCircle2,
  ChevronDown, Clock, Dumbbell, FileText, Heart, HelpCircle, Infinity: InfinityIcon,
  Lock, Menu, Monitor, Mountain, PenLine, Quote, RefreshCw, Repeat, ShieldCheck,
  Sparkles, Table, Target, UserRound, X, Zap,
}

/** Renderiza un icono por nombre (ver src/data/content.js). */
export default function Icon({ name, ...props }) {
  const Cmp = ICONS[name] ?? Sparkles
  return <Cmp {...props} />
}
