import { BookOpen, Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Articles() {
  const articles = portfolioData.articles;

  return (
    <section
      id="articles"
      className="py-24 relative bg-dark-bg border-t border-b border-dark-border/50"
      aria-label="Technical Articles and Writing"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent-light uppercase tracking-widest px-3 py-1.5 rounded-full bg-dark-surface border border-dark-border">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Articles &amp; Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Writing &amp; Guides
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-base text-text-muted font-sans max-w-xl mx-auto leading-relaxed">
            Deep-dives, lessons learned, and engineering breakdowns covering full-stack architecture, AI models, and real-world web development.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-dark-surface border border-dark-border rounded-2xl p-7 flex flex-col justify-between space-y-6 hover:border-accent-light/40 transition-all duration-300 shadow-xl group"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-4 font-mono text-xs text-text-muted">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-accent-light" />
                    <span>{article.date}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h3 className="font-bold text-lg text-white group-hover:text-accent-light transition-colors duration-200 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-sm text-text-muted leading-relaxed font-sans line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="space-y-4 pt-5 border-t border-dark-border/60">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-dark-bg border border-dark-border rounded-lg font-mono text-[11px] text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-light hover:text-white transition-colors duration-200 group-hover:translate-x-1 transform"
                  aria-label={`Read article: ${article.title}`}
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
