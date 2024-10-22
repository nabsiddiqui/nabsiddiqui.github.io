---
title: Exploratory Analysis of Unaccompanied Migrant Children Data
layout: post
author: "Nabeel Siddiqui"
---

Recently, the _New York Times_ released data looking at the number of unaccompanied migrant children who have crossed into the United States. The U.S. Department of Human Health and Services keeps this data, and the organization was able to gain access to it through the [Freedom of Information Act](https://en.wikipedia.org/wiki/Freedom_of_Information_Act_(United_States)). Conditions for often these children are dire, with many [facing violence, abuse, and poverty](https://www.nytimes.com/2023/02/25/us/unaccompanied-migrant-child-workers-exploitation.html). As the _New York Times_ has noted, Americans have used these children to build [roofs](https://www.nytimes.com/interactive/2023/12/14/us/roofing-children-immigrants.html) and [work the night shift of dangerous jobs](https://www.nytimes.com/2023/09/18/magazine/child-labor-dangerous-jobs.html). Frequently, the federal agencies [ignored numerous warnings about the exploitation of these children.](https://www.nytimes.com/2023/04/17/us/politics/migrant-child-labor-biden.html)

The [release of the dataset](https://github.com/nytimes/hhs-child-migrant-data) shows just how dire the conditions are for many of these children. From a quick glance online, it does not seem that many individuals are looking at the dataset in any detail outside of the news agency itself. In this blog post, I am hoping to dive deeper into the dataset to uncover insights and trends about these children. What countries do they come from? What areas of the country are most statistically likely to receive them? How has the number of children changed over time? What are some predictors that increase the number of days unaccompanied children spend in U.S. custody?

I have also provided a searchable dataset 

## Breakdown of Gender

![](/assets/unaccompanied_migrant_children/bar_chart_gender.png)


Breaking down the data by gender, we can see that the majority of unaccompanied migrant children are male. This gender disparity raises questions about the factors driving more boys to make the dangerous journey alone. Economic pressures and societal expectations could be playing a role in pushing more boys to seek opportunities abroad.

## Country of Origin

![](/assets/unaccompanied_migrant_children/country_of_origin_map.png)

The choropleth map depicts the country of origin for each unaccompanied migrant child. The map uses a color gradient, with darker shades representing higher numbers of children originating from those countries. The visual representation allows us to quickly identify the primary sources of these vulnerable children.

Guatemala, Honduras, and El Salvador stand out as the darkest shades on the map, indicating that they are the countries from which the majority of unaccompanied migrant children originate. This finding sheds light on the dire conditions and instability plaguing these Central American nations. Factors such as poverty, violence, lack of economic opportunities, and political turmoil in Guatemala and Honduras are likely the driving forces behind children's decisions to undertake the perilous journey alone.

We see in the bar chart below that most of the top ten countries are in Central or South America. One noticeable exception is India. While seventh on the list, the journey of unaccompanied children from India raises questions about the unique circumstances they face and the vast distances they are willing to traverse to reach the United States. The presence of India on this list highlights the global nature of the issue and the need for a comprehensive understanding of the factors driving children from diverse regions to undertake such dangerous journeys.

![](/assets/unaccompanied_migrant_children/bar_bar_country_of_origin.png)

## Date of Entry and Release

![](/assets/unaccompanied_migrant_children/line_chart_date_of_entry.png)

It seems that a very high surge starting in mid-2020 after almost falling to zero. This surge coincides with the onset of the COVID-19 pandemic, suggesting a potential correlation between the global health crisis and the increased number of unaccompanied migrant children. The pandemic may have exacerbated existing challenges in their home countries, which led to a greater influx of children seeking refuge in the United States. This surge seems to last for about a year before tapering off in mid-2021. However, the numbers remain higher than pre-pandemic levels, indicating a persistent issue.

![](/assets/unaccompanied_migrant_children/line_chart_date_of_release.png)

As expected, the date of release has gone down considerably in months. This is expected since those children who recently arrived are still in custody and have not been released yet.

![](/assets/unaccompanied_migrant_children/density_chart_date_unaccompanied.png)

It is concerning to see that some children have been in custody for extended periods, with a few cases spanning over three years. This prolonged detention can have severe psychological and developmental impacts. Luckily, the histogram shows that the data is heavily right-skewed, indicating that the majority of children are released within a shorter timeframe. Nevertheless, it is crucial to investigate the reasons behind the prolonged detention of some children and work towards minimizing their time in custody.

## Date of Entry by Sponsor Category

![](/assets/unaccompanied_migrant_children/line_chart_date_of_entry.png)

There are four main sponsor categories: immediate relatives, parent or legal guardians, unrelated adult individuals, and unknown. Analyzing the date of entry by sponsor category reveals interesting patterns. Immediate relatives and parents or legal guardians consistently account for the majority of sponsors across the years. However, we see that there has been a large spike in the number of unrelated adult individuals sponsoring unaccompanied children in recent years. This trend raises concerns about the potential for exploitation and abuse, as these children may be more vulnerable without the protection of immediate family members.

## Regression Analysis of Days Unaccompanied

I wanted to observe what factors might influence the number of days unaccompanied children spend in U.S. custody. To explore this, I conducted a regression analysis using the available variables in the dataset. The regression model included factors such as gender, country of origin, and sponsor category. By examining the coefficients and significance levels of these variables, we can gain insights into which factors have the strongest impact on the duration of a child's stay in custody. Below, we see that the highest predictor is if someone is a first cousin or unrelated adult followed by uncles and aunts.

![](/assets/unaccompanied_migrant_children/coefficients_days_unaccompanied.png)

It would probably be better to do a mixed model given that there are likely hierarchical effects, such as country of origin. However, we see in the residuals that we still have a fairly normal distribution.

![](/assets/unaccompanied_migrant_children/residual_histogram.png)

Overall, the model gives us an adjusted R-squared of about 12%.

![](/assets/unaccompanied_migrant_children/regression_results.png)

This indicates that while the included variables explain some of the variation in the number of days unaccompanied children spend in custody, there are likely other important factors not captured in the dataset. Further research and data collection efforts could help identify additional variables that contribute to the length of stay, such as the child's age, mental health, and the efficiency of the legal processes involved in their case. Understanding these factors is crucial for developing targeted interventions and policies to reduce the time children spend in detention and ensure their well-being.

This dataset still has a lot of interesting information that I did not get a chance to explore yet. I would like to create a searchable database for individuals who may be interested in finding specific cases or understanding the experiences of unaccompanied children from their country of origin. The dataset provides data about zip codes and country of origin. Hopefully, making this available in an easy way should allow others to see if there are unaccompanied children in their local communities. Additionally, it would be interesting to explore the relationship between the child's age and the duration of their stay in custody. Younger children may require more specialized care and resources, potentially leading to longer stays. In addition, there are likely areas related to cluster outlier analysis that could be conducted to identify geographic regions or countries with unusually high or low numbers of unaccompanied children. This analysis could help pinpoint areas where targeted interventions and support are most needed. Finally, it would be useful to create a time-lapse of the movement so that we can visualize the flow of unaccompanied children over the years. This could help identify patterns and trends in migration, such as seasonal variations or responses to specific events.