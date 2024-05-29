---
title: Unaccompanied Migrant Children Searchable Database
header: Unaccompanied Migrant Children Searchable Database
---
# 2024-05-04-Unaccompanied Migrant Children Searchable Database

<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css" />

<script src="https://code.jquery.com/jquery-3.5.1.js"></script>

<script src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"></script>

In my previous blog post, I examined data from the New York Times about Unaccompanied Migrant Children in the United States. In the previous post, I did not get a chance to look at the zip code data, but I am hoping to do so soon. 

<script>
$(document).ready(function () {
$("#my-table > table").DataTable();
});
</script>

<table class="display">
  {% for row in site.data.unaccompanied_migrant_children_data %}
    {% if forloop.first %}
    <thead>
    <tr>
      {% for pair in row %}
        <th>{{ pair[0] }}</th>
      {% endfor %}
    </tr>
    </thead>
    {% endif %}