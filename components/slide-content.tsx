import type React from "react";
import {
  Briefcase,
  Target,
  Zap,
  Lock,
  CreditCard,
  Shield,
  Scale,
  Server,
  User,
  Users,
  BarChart3,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Map,
  Calendar,
} from "lucide-react";

interface Slide {
  title: string;
  content: string | string[];
  icon?: React.ReactNode;
}

const iconMap: { [key: number]: React.ReactNode } = {
  0: <Briefcase className="w-12 h-12 md:w-14 md:h-14 text-primary" />,
  1: <Target className="w-12 h-12 md:w-14 md:h-14 text-primary" />,
  2: <Zap className="w-12 h-12 md:w-14 md:h-14 text-primary" />,
  3: <Lock className="w-12 h-12 md:w-14 md:h-14 text-primary" />,
  4: <CreditCard className="w-12 h-12 md:w-14 md:h-14 text-primary" />,
  5: <Shield className="w-12 h-12 md:w-14 md:h-14 text-primary" />,
  6: <Scale className="w-12 h-12 md:w-14 md:h-14 text-primary" />,
  7: <Server className="w-12 h-12 md:w-14 md:h-14 text-primary" />,
  8: <User className="w-12 h-12 md:w-14 md:h-14 text-primary" />,
  9: <Users className="w-12 h-12 md:w-14 md:h-14 text-primary" />,
  10: <BarChart3 className="w-12 h-12 md:w-14 md:h-14 text-primary" />,
  11: <CheckCircle className="w-12 h-12 md:w-14 md:h-14 text-primary" />,
  12: <AlertTriangle className="w-12 h-12 md:w-14 md:h-14 text-primary" />,
  13: <CreditCard className="w-12 h-12 md:w-14 md:h-14 text-primary" />,
  14: <ArrowRight className="w-12 h-12 md:w-14 md:h-14 text-primary" />,
  15: <AlertTriangle className="w-12 h-12 md:w-14 md:h-14 text-primary" />,
  16: <Calendar className="w-12 h-12 md:w-14 md:h-14 text-primary" />,
  17: <Map className="w-12 h-12 md:w-14 md:h-14 text-primary" />,
};

const emojiMap: { [key: number]: string } = {
  0: "🚗",
  1: "🎯",
  2: "⚡",
  3: "🔐",
  4: "💳",
  5: "🛡️",
  6: "⚖️",
  7: "🖥️",
  8: "👤",
  9: "👥",
  10: "📊",
  11: "✅",
  12: "⚠️",
  13: "💰",
  14: "→",
  15: "🚫",
  16: "📅",
  17: "🗺️",
};

export function SlideContent({
  slide,
  slideIndex = 0,
}: {
  slide: Slide;
  slideIndex?: number;
}) {
  const icon = iconMap[slideIndex];
  const emoji = emojiMap[slideIndex];

  return (
    <div className="flex flex-col px-16 py-32 w-full h-full rounded-4xl backdrop-blur-md bg-[rgba(206,206,206,0.25)] shadow-lg">
      <div className="mb-12 flex items-center gap-4">
        {/* <div className="p-4 rounded-2xl glass-effect">{icon}</div> */}
        <div
          className="text-5xl md:text-6xl animate-bounce"
          style={{ animationDelay: "0.1s" }}
        >
          {emoji}
        </div>
      </div>

      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-10 leading-tight tracking-tighter max-w-5xl text-balance">
        {slide.title}
      </h1>

      <div className="space-y-5 max-w-4xl">
        {Array.isArray(slide.content) ? (
          slide.content.map((paragraph, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-2">
                <span className="text-lg">✨</span>
              </div>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
                {renderFormattedText(paragraph)}
              </p>
            </div>
          ))
        ) : (
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-2">
              <span className="text-lg">✨</span>
            </div>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
              {renderFormattedText(slide.content)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function renderFormattedText(text: string) {
  // Parse text for **bold** and *italic* patterns
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  // Regex to find **bold** and *italic* patterns
  const regex = /\*\*(.+?)\*\*|\*(.+?)\*/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    // Add the formatted text
    if (match[1]) {
      // Bold
      parts.push(
        <strong
          key={`bold-${match.index}`}
          className="font-bold text-foreground"
        >
          {match[1]}
        </strong>
      );
    } else if (match[2]) {
      // Italic
      parts.push(
        <em key={`italic-${match.index}`} className="italic text-foreground/90">
          {match[2]}
        </em>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}
