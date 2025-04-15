---
title: Utilizing Time Series Analysis using Facebook’s Prophet to Analyze Firearm Permits
layout: post
author: "Nabeel Siddiqui"
---

The debate over gun ownership and regulation in the United States remains contentious. Arguments often center around interpretations of the Second Amendment, public safety concerns, and the effectiveness of existing policies. To inform these discussions, I thought it would be interesting to dive into the [FBI's National Instant Criminal Background Check System (NICS) data, as compiled by the Data Liberation Project](https://github.com/data-liberation-project/nics-firearm-background-checks). NICS was mandated by the [Brady Handgun Violence Prevention Act of 1993](https://en.wikipedia.org/wiki/Brady_Handgun_Violence_Prevention_Act) and launched by the FBI in 1998. It's used by Federal Firearms Licensees (FFLs) to determine whether a prospective buyer is eligible to purchase firearms or explosives.

The NICS data is often used as a proxy for gun sales. However, it's important to note that it represents the number of background checks initiated, not the number of firearms sold. Various factors, such as differences in state laws and the exclusion of private sales, mean that there isn't a perfect one-to-one correlation between background checks and gun sales. I downloaded the data in May 2024, which [you can explore here](../assets/firearm_background_reports/Firearm%20Background%20Reports%20May%202024.csv). However, because the data for 2024 is still incoming, I decided to filter it to December 2023.

## Permit Checks

To begin our analysis, let's look at the top 10 states with the highest number of permit checks in the most recent year of data. Some states use these permit checks as an alternative to the standard NICS background check process. As we can see, Illinois and Pennsylvania are the top two states on the list, with Illinois being significantly higher than any other state. This is likely due to Illinois's [Firearm Owners Identification (FOID) card system](https://en.wikipedia.org/wiki/Firearm_Owner%27s_Identification), which requires all firearm owners to obtain a permit before purchasing or possessing firearms.

![](../assets/firearm_background_reports/Top%2010%20State%20Permits.png)

What we find here is that a state's presence on this list doesn't necessarily indicate higher overall gun ownership rates; it may simply reflect differences in the background check process and reporting requirements.

In the line chart below, we see an increase in 2006 and a large spike around 2015. I have not been able to pinpoint the exact reason for this, as much of this is outside my specialty, but I'm sure others can provide better insights.

![](../assets/firearm_background_reports/total_permits_line_chart.png)

By dividing the permits by interquartile range, we can identify outliers and better understand the distribution of permit checks across states. The map below shows the relative intensity of permit checks, with darker shades indicating higher volumes. We can see that Illinois, California, and Pennsylvania stand out.

![](../assets/firearm_background_reports/state_permits_iqr.png)

## Permit Rechecks

Some states conduct periodic rechecks in addition to initial permit checks to ensure permit holders remain eligible. Kentucky dominates this list. Most likely, this is due to Kentucky's [concealed carry permit system](https://www.usconcealedcarry.com/resources/ccw_reciprocity_map/ky-gun-laws/), which requires permit holders to renew their permits every five years.

![](../assets/firearm_background_reports/Top%2010%20State%20Permit%20Recheck.png)

We only have information after 2015, but we see a growing increase in permit rechecks over time, with a notable spike in 2020. We can attribute this to a combination of factors, such as increased gun sales during the COVID-19 pandemic, heightened political tensions, and growing concerns about public safety. The decline in numbers near the end is likely a result of missing data for the most recent months, as reporting may be delayed.

![](../assets/firearm_background_reports/total_permits_recheck_line_chart.png)

## Examining Gun Type

A box plot showing the distribution of background checks across different gun types can provide insights into consumer preferences and market trends. In this plot, we see that handguns have the highest median number of background checks, followed by long guns and multiple guns. The presence of outliers in the handgun and long gun categories suggests that there may be certain states or periods with exceptionally high volumes of background checks for these gun types.

![](../assets/firearm_background_reports/Box%20Plot%20Gun%20Type%20Include%20Outliers.png)

The donut plot below shows that handguns account for 55.85% of the total background checks, followed by long guns at 37.15%. Multiple guns, which likely represent transactions involving the purchase of more than one firearm, make up a much smaller portion.

![](../assets/firearm_background_reports/Gun%20Type%20Pie%20Chart%202023.png)

## Prophet Forecast of Monthly Permits

Using [Facebook’s Prophet](https://facebook.github.io/prophet/), we see that the model predicts a leveling off in monthly permit checks over the next few years. This forecast aligns with the overall trend observed in the line chart, which showed a significant increase in permit checks around 2015, followed by a gradual stabilization in recent years. However, it's important to note that these predictions are based on historical patterns and do not account for potential future events or policy changes that could impact firearm sales and background checks. 

![](../assets/firearm_background_reports/Prophet%20Forecast%20Monthly%20Permits.png)