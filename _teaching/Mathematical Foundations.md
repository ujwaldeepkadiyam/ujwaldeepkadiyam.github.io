---
layout: page
title: Mathematical Foundations
permalink: /teaching/   Mathematical Foundations/
parent: Teaching
nav: False
---

# Mathematical Foundations

Here you will find all courses on **Mathematical Foundations**.

<ul>
  {% assign sorted_courses = site.teaching | sort: "course_number" %}
  {% for course in sorted_courses %}
    {% if course.category == "Data Science" %}
      <li>
        <a href="{{ course.url }}">{{ course.title }}</a>
        ({{ course.course_number }}) - {{ course.term }}
      </li>
    {% endif %}
  {% endfor %}
</ul>