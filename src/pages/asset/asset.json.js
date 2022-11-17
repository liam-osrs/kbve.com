const postImportResult = import.meta.glob("./**/**/**/*.mdx", { eager: true });
const posts = Object.values(postImportResult);
var counterId = 0;

export const get = async () => {
  const json = JSON.stringify(
    posts.map((p) => {
        if(!p.frontmatter.draft)
          {
            counterId++;
            return {
              id: counterId,
              title: p.frontmatter.title,
              description: p.frontmatter.description,
              slug: `https://kbve.com${p.url}`,
              tag: p.frontmatter.tags,
              img: p.frontmatter.img,
              category: p.frontmatter.category,
              isin: p.frontmatter.isin,
            };
          }
    })
  );
  return {
    body: json
  }
}
