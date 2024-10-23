---
title: Convolutional Neural Networks and HDBSCAN for Tagging Handwritten Archival Material
layout: post
author: "Nabeel Siddiqui"
---

Handwritten archival materials present a unique challenge for automated tagging and categorization. Traditional optical character recognition (OCR) techniques still struggle with the variability and complexity of these materials. As a result, documents must be manually tagged and categorized by human archivists, which is a time-consuming and labor-intensive process. Exacerbating this issue is that historical documents often use a script or writing style unfamiliar to most students. Since [cursive is rarely taught now](https://www.theatlantic.com/magazine/archive/2022/10/gen-z-handwriting-teaching-cursive-history/671246/), younger generations need to be trained before reading certain historical documents. While transformer models have shown promise in transcribing handwritten text, they require large amounts of labeled training data, often not available for historical documents. Convolutional neural networks (CNNs) offer a promising alternative approach. By learning visual features directly from handwritten images, CNNs can potentially categorize and tag documents without requiring a full transcription.

To examine this, I looked at the handwritten materials currently being collected by the [Mississippi Civil War and Reconstruction Governor’s Project](https://cwrgm.org/), led by [Susannah J. Ural](https://www.history.msstate.edu/directory/abc123) at Mississippi State University and [Lindsey R. Paterson](https://lindseyraepeterson.com/) at the University of South Dakota. The Mississippi Department of Archives and History has been amassing a vast collection of handwritten letters sent to the state's governors by citizens since 1902. This extensive archive, spanning over a century, contains almost 20,000 letters dating back to 1859. Students have been diligently working on transcribing the letters manually, and while this process is time-consuming, it provides a unique opportunity to test for accuracy.

At the time of scraping, approximately 7850 documents were available, and the archive has since been updated to almost 11800 documents. The documents span various topics, from personal correspondence to official government communications. Each document has been carefully transcribed and tagged with the date, sender, recipient, and subject matter metadata. Using [PixPlot](https://github.com/YaleDHLab/pix-plot), I created a visual overview of the entire collection. PixPlot uses a convolutional neural network to extract visual features from each image and then projects those features into a 2D space using UMAP to reduce dimensionality. Next, it utilizes [Hierarchical density-based spatial clustering of applications with noise](https://hdbscan.readthedocs.io/en/latest/how_hdbscan_works.html) (HDBSCAN) to identify clusters within the projected space. These clusters can potentially reveal patterns and groupings within the collection that may not be immediately apparent from the metadata alone.

[To view the PixPlot itself, click here.](https://nabeelsiddiqui.net/civil_war_and_reconstruction_governors/)

By exploring the PixPlot visualization, I noticed several distinct clusters of visually similar documents.


## Telegrams in Cluster 6

One cluster, labeled Cluster 6, contained a significant number of telegrams. The telegrams in this cluster were characterized by their brief, condensed language, and standardized formatting, typically including the date, sender, and recipient information at the top of the document, followed by the message itself.

![](../assets/governors_reconstruction/cluster_6_telegrams.png)

## Printed Letters in Cluster 7

Another visually distinct cluster, labeled Cluster 7, contained a high concentration of printed letters. These letters were likely produced using a typewriter or printing press, as evidenced by their uniform typography and layout. The presence of printed letters within the collection suggests that not all communications were handwritten and that some individuals or organizations may have had access to more advanced writing technologies. It also demonstrates that CNN was able to effectively distinguish between handwritten and printed documents based on visual features alone.

![](../assets/governors_reconstruction/cluster_7_printed.png)


## Blue Color Letters in Cluster 8

Cluster 8 contained a notable subset of letters written on blue-colored paper. The CNN was able to group these letters based on their distinctive color, demonstrating its ability to identify and cluster documents based on visual characteristics beyond just typography. The use of blue paper may indicate a specific type of correspondence or a particular period when this color was more commonly used. Further analysis is still needed.

![](../assets/governors_reconstruction/cluster_8_color.png)

In fact, all of the blue-colored letters were grouped by UMAP at the top of the visualization. This spatial grouping suggests that the use of blue paper was not evenly distributed throughout the collection, but rather concentrated within a specific subset of documents.

![](../assets/governors_reconstruction/color_grouping.png)
