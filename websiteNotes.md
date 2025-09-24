# Website Notes for Jekyll Blog

## About the Site Owner
**Dr. Nabeel Siddiqui** is an Assistant Professor of Digital Media at Susquehanna University's Communications Department and Director of their Center for Teaching and Learning. His expertise spans:
- Data science and cultural analytics
- Digital humanities and computational methods
- History of information science
- Communication and new media rhetoric
- Statistics and machine learning applications in humanities

## Current Projects & Research Focus
- Computer vision and image clustering for cultural analysis
- Machine learning methodologies in humanities research
- GIS and large language models for social justice research
- History and culture of digital media
- Published works in *Programming Historian*, *Digital Humanities Quarterly*, *International Journal of Digital Humanities*, and *Journal of Open Humanities Data*

## Recent Publications
- **Book**: "Cultural Analytics in R: A Tidy Approach" (Springer, 2025) - First book bringing tidy data principles to cultural analytics workflows
- **Book**: "The Computer Goes Home: A Failed Revolution" (in progress) - Examines computer domestication in 1970s-1980s America
- **Articles**: Recent publications on Topps wrestling cards and urban demographic visualization with R

## Website Structure
- Built with Jekyll using the Tale theme
- Posts are in `_posts/` directory with YYYY-MM-DD-title.md format
- Pages are in `_pages/` directory
- Assets stored in `assets/` with subdirectories for different projects
- Images and resources organized by project/post topic

## Current Tasks & TODOs
- [x] Create websiteNotes.md file (hidden from public view)
- [x] Create book launch blog post
- [x] Add book cover image to assets/book_launch/
- [x] Fix image path issues in blog post
- [x] Fix Gemfile for GitHub Pages compatibility
- [x] Proofread and grammar check new posts
- [ ] Update CV with new publication
- [ ] Consider adding book information to about page

## Recent Updates (September 24, 2025)
- Fixed blog post image path from `/assets/` to `../assets/` format (consistent with other posts)
- Updated Gemfile to use `github-pages` gem for better compatibility
- Blog post tone adjusted to be more conversational and approachable
- Book announcement post ready for publication

## Blog Post Ideas
- Cultural analytics methodologies
- R programming tutorials for humanists
- Digital humanities project showcases
- Academic conference experiences
- Teaching and learning in digital media

## Technical Notes
- Site uses Jekyll with kramdown markdown processor
- Google Analytics enabled
- Disqus comments system integrated
- SEO tag plugin active
- Pagination set to 5 posts per page
- Files in exclude list won't be published to GitHub Pages

### Image Paths
- Use `../assets/folder/image.jpg` format in blog posts (relative paths)
- Avoid `/assets/` (absolute paths) as they don't work correctly in Jekyll

### Gemfile Configuration
- Using `github-pages` gem for maximum compatibility with GitHub Pages
- Alternative: Use GitHub Actions for custom Jekyll builds (see commented section in Gemfile)
- The theme gemspec dependencies are included via github-pages gem

## Publishing Workflow
1. Write posts in `_posts/` directory
2. Add any images to appropriate `assets/` subdirectory
3. Test locally if needed
4. Commit and push changes: `git add . && git commit -m "update website" && git push`
5. GitHub Pages will automatically build and deploy

## Content Guidelines
- Maintain professional academic tone
- Include relevant images and data visualizations
- Cross-reference related posts and projects
- Use proper markdown formatting
- Include appropriate tags and categories for discoverability

---
*This file is excluded from the public website and serves as internal documentation for website management.*