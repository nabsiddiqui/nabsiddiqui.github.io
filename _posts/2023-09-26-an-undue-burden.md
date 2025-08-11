---
title: "An Undue Burden: A Look at Digital Humanities Conference Travel"
layout: post
author: "Nabeel Siddiqui"
permalink: /an-undue-burden/
---

In 2022, I updated my GIS time-lapse map looking at the disproportionate travel that digital humanities scholars in the Global South undertook to attend the annual Digital Humanities conference. The map uses data from the [Index of DH Conferences](https://dh-abstracts.library.virginia.edu/) by Matthew D. Lincoln, Scott B. Weingart, and Nickoal Eichmann-Kalwara. Over time, there have been updates to the Index, so the map needed an upgrade.

A little about the visualization for those that are unfamiliar. To create it, I reverse-geocoded the institutional affiliations of authors in the dataset and the conference hosting institutions using [ArcGIS’ API](https://developers.arcgis.com/rest/) through [tidygeocoder](https://jessecambon.github.io/tidygeocoder/). When university affiliation was missing, I used the city or country of the presenter. The new map now includes data up until July of 2024 and covers 60 years of conference data, featuring over 500 events, 8,800 presentations, 10,400 authors, 2,600 institutions, and multiple countries.

Why is this important? Limited access to conferences can significantly hinder an individual's academic career advancement, and in an increasingly neoliberal academic landscape, conferences play a vital role in increasing visibility. Likewise, they require significant affective labor. [Emma Bell and Daniel King](https://doi.org/10.1177/1350507609348851) liken presenting at a conference to an endurance test where attendees battle headaches, lack of sleep, and dehydration to finally add that coveted next line to their CV. Conference participation costs, like airfare, lodging, and registration fees, can be prohibitively high, especially for scholars without institutional backing or dedicated funding for professional development. This barrier is particularly acute for early-career researchers, independent scholars, and those from under-resourced institutions, who may lack access to the same level of support as their more privileged colleagues.

A related research article should be out soon for an edited collection. Until then, it was useful to provide access to the interactive timelapse for others to explore. [If you are on mobile, it may be easier to use this link than the embedded map below.](https://studio.foursquare.com/map/public/a0053c17-363c-488b-9038-5b9292b1e36c)

<iframe width="100%" height="500px" src="https://studio.foursquare.com/map/public/a0053c17-363c-488b-9038-5b9292b1e36c/embed" frameborder="0" allowfullscreen></iframe>

Unfortunately, there has been little change in where most DH conferences are held. DH 2018 in Mexico City continues to be an exception that showcases the benefit of hosting conferences in more diverse locations. We can see a more diverse representation of scholars from Latin America and the Global South attending and presenting at the conference that year (See image below). However, the trend quickly reverts to a concentration of conferences in Europe and North America in subsequent years. In addition, outside of the annual conference, very few Digital Humanities conferences are held in the Global South.

![Map showing increased participation from Latin America during DH 2018 in Mexico City](/assets/undue_burden/mexico_timelapse.png)

Calculating the [Haversine distance](https://en.wikipedia.org/wiki/Haversine_formula) between the presenter's institution and the conference location reveals that only a few scholars are willing and/or able to travel long distances. The histogram below shows an extreme right skew in the data.

![Histogram showing distribution of travel distances for DH conference presenters, heavily skewed towards shorter distances](/assets/undue_burden/histogram_distance_traveled.png)

To address these failures and bridge the geographic divide, the DH community must take concrete steps to decentralize conference locations and explore alternative modes of participation. It should also embrace more virtual/hybrid conferences and regional events complementary to traditional in-person gatherings. The COVID-19 pandemic has highlighted the potential of online platforms to facilitate global participation and reduce the barriers associated with physical travel. However, more research is needed to fully understand the impact and effectiveness of virtual conferences in fostering inclusivity and diversity within the field.