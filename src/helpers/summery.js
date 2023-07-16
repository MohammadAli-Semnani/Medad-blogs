function summarizeArticle(article) {
  const sentences = article.split(".");

  const summary = sentences.slice(0, 3);

  return summary;
}

export default summarizeArticle;
