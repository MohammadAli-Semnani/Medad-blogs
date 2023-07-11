function summarizeArticle(article) {
//   const cleanedText = article.trim().replace(/\s+/g, " ");

  const sentences = article.split(".");

  const summary = sentences.slice(0, 3);

  return summary;
}

export default summarizeArticle;
