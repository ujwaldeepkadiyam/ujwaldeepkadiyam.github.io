---
layout: page
title: Data Science
permalink: /teaching/Data Science/
parent: Teaching
hide_title: true
description: ""
nav: false

---

<h2 class="page-header" style="text-align: center; color: blue;"><strong style="color: #cc33cc;">Data Science</strong></h2>

Here you will find all courses related to **Data Science**.

<ul>
  {% for course in site.teaching %}
    {% if course.category == "Data Science" %}
    <li>
      <a href="{{ course.url }}">{{ course.title }}</a>
      ({{ course.course_number }}) - {{ course.term }}
    </li>
    {% endif %}
  {% endfor %}
</ul>
