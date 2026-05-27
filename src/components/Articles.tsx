import { BookOpen, Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Articles() {
  const articles = portfolioData.articles;

  return (
    <section
      id="articles"
      className="py-20 relative bg-cyber-bg border-b border-cyber-accent/10"
      aria-label="Technical Articles and Writing"
    >
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-cyber-accent uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5 text-cyber-accent" />
            <span>[ SYSTEM_PUBLICATIONS ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Writing & Logs
          </h2>
          <div className="w-16 h-1 bg-cyber-accent mx-auto rounded-full shadow-[0_0_10px_#39FF14]"></div>
          <p className="text-base text-cyber-light/60 font-sans max-w-xl mx-auto">
            Deep-dives, benchmarks, and architectural journals documenting web technology experiments in cyberspace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="cyber-border cyber-corners bg-cyber-void/40 backdrop-blur-sm p-6 rounded-lg flex flex-col justify-between space-y-6 group hover:-translate-y-1.5 hover:border-cyber-accent/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,255,20,0.1)] text-left"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-4 font-mono text-[10px] text-cyber-light/50">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-cyber-accent/60" />
                    <span>{article.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-cyber-accent/60" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h3 className="font-mono text-base font-bold text-white group-hover:text-cyber-accent transition-colors duration-200 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-sm text-cyber-light/70 leading-relaxed font-sans line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-cyber-accent/10">
                <div className="flex flex-wrap gap-1">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 bg-cyber-accent/5 rounded font-mono text-[8px] text-cyber-accent/70"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 font-mono text-xs font-bold text-cyber-accent hover:text-white transition-colors duration-200 group-hover:translate-x-1"
                  aria-label={`Read article: ${article.title}`}
                >
                  <span>EXEC_READ_ARTICLE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
