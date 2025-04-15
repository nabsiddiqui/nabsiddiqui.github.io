---
title: Exploratory Analysis of Unaccompanied Migrant Children Data
layout: post
author: "Nabeel Siddiqui"
---

In 2023, the _New York Times_ released data about the number of unaccompanied migrant children who have crossed into the United States. The U.S. Department of Human Health and Services keeps this data, and the *NYT* gained access to it through the [Freedom of Information Act](https://en.wikipedia.org/wiki/Freedom_of_Information_Act_(United_States)). Conditions for these children are often dire, with many [facing violence, abuse, and poverty](https://www.nytimes.com/2023/02/25/us/unaccompanied-migrant-child-workers-exploitation.html). As the newspaper notes, Americans have used these children to build [roofs](https://www.nytimes.com/interactive/2023/12/14/us/roofing-children-immigrants.html) and [work the night shift of dangerous jobs](https://www.nytimes.com/2023/09/18/magazine/child-labor-dangerous-jobs.html). Frequently, federal agencies [ignored numerous warnings about the exploitation of these children.](https://www.nytimes.com/2023/04/17/us/politics/migrant-child-labor-biden.html)

The [release of the dataset](https://github.com/nytimes/hhs-child-migrant-data) shows just how dire the conditions are for many of these children. From a quick glance online, it does not seem that many individuals are looking at the dataset in any detail. Consequently, I decided to dive deeper into the dataset to uncover insights and trends about these children. What countries do they come from? What areas of the country are most statistically likely to receive them? How has the number of children changed over time? What are some predictors that increase the number of days unaccompanied children spend in U.S. custody?

## Breakdown of Gender

! [Bar chart showing a higher number of male unaccompanied migrant children compared to female](/assets/unaccompanied_migrant_children/bar_chart_gender.png)


Breaking down the data by gender, we can see that the majority of unaccompanied migrant children are male. This gender disparity raises questions about the factors driving more boys to make the dangerous journey alone. Economic pressures and societal expectations could be playing a role in pushing more boys to seek opportunities abroad.

## Country of Origin

! [Choropleth map showing Guatemala, Honduras, and El Salvador as primary countries of origin for unaccompanied migrant children](/assets/unaccompanied_migrant_children/country_of_origin_map.png)

The choropleth map depicts the country of origin for each unaccompanied migrant child. The map uses a color gradient, with darker shades representing more children originating from those countries. The visual representation allows us to identify these vulnerable children's primary sources quickly. Guatemala, Honduras, and El Salvador stand out as the darkest shades on the map, indicating that they are the countries from which the majority of unaccompanied migrant children originate. This finding highlights the dire conditions and instability plaguing these Central American nations. 

The bar chart below shows that most of the top ten countries are in Central or South America. One noticeable exception is India. While seventh on the list, the journey of unaccompanied children from India raises the need for a more comprehensive global examination of the factors driving children to undertake such dangerous journeys.

! [Bar chart showing the top 10 countries of origin for unaccompanied migrant children, with Guatemala, Honduras, and El Salvador being the highest](/assets/unaccompanied_migrant_children/bar_bar_country_of_origin.png)

## Date of Entry and Release

! [Line chart showing a surge in unaccompanied migrant children entries starting mid-2020](/assets/unaccompanied_migrant_children/line_chart_date_of_entry.png)

We see a very high surge starting in mid-2020. Before this, the number of children had almost fallen to zero. This coincides with the onset of the COVID-19 pandemic, suggesting a potential correlation between the global health crisis and the increased number of unaccompanied migrant children. This surge seems to have lasted for about a year before tapering off in mid-2021. However, the numbers remain higher than pre-pandemic levels, indicating a persistent issue.

! [Line chart showing the number of releases over time, decreasing towards the present](/assets/unaccompanied_migrant_children/line_chart_date_of_release.png)

As expected, the number of releases decreases closer to the present. This pattern is expected, as children who arrived more recently are likely still in custody.

! [Density chart showing the distribution of days spent in custody, heavily right-skewed towards shorter durations](/assets/unaccompanied_migrant_children/density_chart_date_unaccompanied.png)

It is concerning to see that some children have been in custody for extended periods, with a few cases spanning over three years. This prolonged detention can have severe psychological and developmental impacts. Luckily, the histogram shows that the data is heavily right-skewed, indicating that most children are released within a shorter timeframe.

## Date of Entry by Sponsor Category

! [Line chart showing date of entry broken down by sponsor category](/assets/unaccompanied_migrant_children/line_chart_date_of_entry.png)

There are four main sponsor categories: immediate relatives, parent or legal guardians, unrelated adult individuals, and unknown. Analyzing the date of entry by sponsor category reveals interesting patterns. Immediate relatives and parents or legal guardians consistently account for most sponsors across the years. However, there has been a large spike in the number of unrelated adult individuals sponsoring unaccompanied children in recent years.

## Regression Analysis of Days Unaccompanied

To observe what factors influenced the number of days unaccompanied children spend in U.S. custody, I conducted a regression analysis using the available variables in the dataset. The regression model included factors such as gender, country of origin, and sponsor category. Examining these variables' coefficients and significance levels reveals which factors strongly impact the duration of a child's stay in custody. The analysis below shows that the highest predictor is sponsorship by a first cousin or unrelated adult, followed by uncles and aunts.

! [Bar chart showing regression coefficients for factors influencing days in custody; first cousin and unrelated adult sponsors show the largest positive coefficients](/assets/unaccompanied_migrant_children/coefficients_days_unaccompanied.png)

It would probably be better to do a mixed model given that there are likely hierarchical effects, such as country of origin. However, the residuals show a fairly normal distribution.

! [Histogram of regression residuals, showing a roughly normal distribution centered around zero](/assets/unaccompanied_migrant_children/residual_histogram.png)

Overall, the model gives us an adjusted R-squared of about 12%.

! [Table showing regression model results summary, including an adjusted R-squared of approximately 0.12](/assets/unaccompanied_migrant_children/regression_results.png)

This indicates that while the included variables explain variations in the number of days unaccompanied children spend in custody, other important factors are likely not captured in the dataset. Further research and data collection efforts could help identify additional variables that contribute to the length of stay, such as the child's age, mental health, and the efficiency of the legal processes involved in their case. 

This dataset still has a lot of interesting information that I have not yet explored. I would also like to create a searchable database for individuals who may be interested in finding specific cases or understanding the experiences of unaccompanied children from their country of origin. Since the dataset provides data about zip codes and countries of origin, this would allow others to see if there are unaccompanied children in their local communities. 