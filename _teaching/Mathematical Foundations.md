---
layout: page
title: Mathematical Foundations
permalink: /teaching/Mathematical Foundations/
parent: Teaching
nav: False
hide_title: true
description: ""
nav: false
---

<h2 class="page-header" style="text-align: center; color: blue;"><strong style="color: #cc33cc;">Mathematical Foundations</strong></h2>

Here you will find all courses on **Mathematical Foundations**.

<ul>
  {% assign sorted_courses = site.teaching | sort: "course_number" %}
  {% for course in sorted_courses %}
    {% if course.category == "Mathematical Foundations" %}
      <li>
        <a href="{{ course.url }}">{{ course.title }}</a>
        ({{ course.course_number }}) - {{ course.term }}
      </li>
    {% endif %}
  {% endfor %}
</ul>