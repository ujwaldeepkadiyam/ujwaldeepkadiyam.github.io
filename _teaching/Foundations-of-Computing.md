---
layout: page
title: Foundations of Computing
permalink: /teaching/Foundations-of-Computing/
parent: Teaching
nav: False
hide_title: true
description: ""
nav: false
---

<h2 class="page-header" style="text-align: center; color: blue;"><strong style="color: #cc33cc;">Foundations of Computing</strong></h2>

Here you will find all courses on **Foundations of Computing**.

<ul>
  {% assign sorted_courses = site.teaching | sort: "course_number" %}
  {% for course in sorted_courses %}
    {% if course.category == "Foundations of Computing" %}
      <li>
        <a href="{{ course.url }}">{{ course.title }}</a>
        ({{ course.course_number }}) - {{ course.term }}
      </li>
    {% endif %}
  {% endfor %}
</ul>